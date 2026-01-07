package com.example.demo.config;

import org.springframework.http.HttpMethod;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.demo.security.JwtAuthFilter;

@Configuration
public class SecurityConfig {

   @Autowired
  private JwtAuthFilter jwtAuthFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
        }

   @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .cors(Customizer.withDefaults())   // ENABLE CORS 
            .csrf(csrf -> csrf.disable())
   //         .authorizeHttpRequests(auth -> auth
  //          		.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
   //        		.requestMatchers("/login", "/register").permitAll()
            		 
           		// ADMIN 
//            	    .requestMatchers(
//            	        "/addemp",
//            	        "/updateemp",
//            	        "/admin/personal-details",
//            	        "/admin/professional-details",
//            	        "/admin/finance-details",
//            	        "/admin/project-details"
//            	    ).hasRole("ADMIN")
//            	    .requestMatchers(HttpMethod.POST,
//            	    	    "/add-personal-details",
//            	    	    "/add-professional-details",
//            	    	    "/add-finance-details",
//            	    	    "/add-project-details"
//            	    	).hasRole("ADMIN")
//            	    .requestMatchers(HttpMethod.PUT,
//            	    	    "/update-personal-details",
//            	    	    "/update-professional-details",
//            	    	    "/update-finance-details",
//            	    	    "/update-project-details"
//            	    	).hasRole("ADMIN")
//
//            	    	.requestMatchers(HttpMethod.DELETE,
//            	    	    "/delete-personal-details/**",
//            	    	    "/delete-professional-details/**",
//            	    	    "/delete-finance-details/**",
//            	    	    "/delete-project-details/**"
//            	    	).hasRole("ADMIN")
//            	    .requestMatchers(HttpMethod.POST, "/**").hasAuthority("ROLE_ADMIN")
//                    .requestMatchers(HttpMethod.PUT, "/**").hasAuthority("ROLE_ADMIN")
//                    .requestMatchers(HttpMethod.DELETE, "/**").hasAuthority("ROLE_ADMIN")
//
//
//
//
//            	    // BOTH ADMIN + USER
//           	    .requestMatchers(
//            	        "/getemp/**",
//           	        "/getallemp",
//            	        "/get-personal-details/**",
//            	        "/get-professional-details/**",
//            	        "/get-finance-details/**",
//            	        "/get-project-details/**"
//            	    ).hasAnyRole("ADMIN","EMPLOYEE")
//                    .requestMatchers(HttpMethod.GET, "/**")
//                    .hasAnyAuthority("ROLE_ADMIN", "ROLE_EMPLOYEE")
//
//            	    .anyRequest().authenticated()
//            	)
            .authorizeHttpRequests(auth -> auth

            	    // public endpoints FIRST
            	    .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            	    .requestMatchers(HttpMethod.POST, "/login", "/register").permitAll()

            	    // ADMIN-only writes
            	    .requestMatchers(HttpMethod.POST,
            	            "/addemp",
            	            "/add-personal-details",
            	            "/add-professional-details",
            	            "/add-finance-details",
            	            "/add-project-details"
            	    ).hasAuthority("ROLE_ADMIN")

            	    .requestMatchers(HttpMethod.PUT, "/**").hasAuthority("ROLE_ADMIN")
            	    .requestMatchers(HttpMethod.DELETE, "/**").hasAuthority("ROLE_ADMIN")

            	    // READ access
            	    .requestMatchers(HttpMethod.GET, "/**")
            	    .hasAnyAuthority("ROLE_ADMIN", "ROLE_EMPLOYEE")

            	    .anyRequest().authenticated()
            	)

            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

 
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:5173"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }
}





