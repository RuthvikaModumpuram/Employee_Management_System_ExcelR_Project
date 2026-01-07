package com.example.demo.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

//    @Override
//    protected boolean shouldNotFilter(HttpServletRequest request) {
//        String path = request.getServletPath();
//        return path.equals("/login") || path.equals("/register");
//    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException,  java.io.IOException {

         String authHeader = request.getHeader("Authorization");
         

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
        	String jwt = authHeader.substring(7);
        	try {
            
        		String username = jwtUtil.extractUsername(jwt);
        		String role = jwtUtil.extractRole(jwt);
        		List<SimpleGrantedAuthority> authorities =
                        List.of(new SimpleGrantedAuthority("ROLE_" + role));
        		 UsernamePasswordAuthenticationToken authToken =
        	                new UsernamePasswordAuthenticationToken(username, null, authorities);

        	            authToken.setDetails(
        	                new WebAuthenticationDetailsSource().buildDetails(request)
        	            );
        	            SecurityContextHolder.getContext().setAuthentication(authToken);
        	            

            }catch(Exception e) {
            	response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            	return;
            }
        }


        filterChain.doFilter(request, response);
    }
}
