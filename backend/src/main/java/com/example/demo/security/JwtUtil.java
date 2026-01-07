package com.example.demo.security;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	private final String SECRET_KEY = "mysecretkeymysecretkeymysecretkey123";
	private Key getSigningkey() {
		return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
	}
	
	//token generation
	public String generateToken(String username, String role, int empId) {
	return Jwts.builder()
			.setSubject(username)
			.claim("role", role)
			.claim("empId", empId)
			.setIssuedAt(new Date())
			.setExpiration(new Date(System.currentTimeMillis()+ 1000 * 60 * 60))
			.signWith(getSigningkey(), SignatureAlgorithm.HS256)
			.compact();
}
	//username
	public String extractUsername(String token) {
		return extractClaims(token).getSubject();
	}
	public boolean validateToken(String token) {
		try {
			extractClaims(token);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
	private Claims extractClaims(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(getSigningkey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	public String extractRole(String token) {
		return extractClaims(token).get("role", String.class);
	}
	

}
