package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.entity.User;
import com.example.demo.repository.EmployeeDao;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;

@RestController
@CrossOrigin("*")
public class AuthController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private EmployeeDao employeeDao;

	//register
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {

	    //  Check if employee exists (created by admin)
	    Employee emp = employeeDao.findByEmail(user.getUsername())
	        .orElse(null);

	    if (emp == null) {
	        return ResponseEntity
	            .status(HttpStatus.BAD_REQUEST)
	            .body("Employee not found. Contact Admin.");
	    }

	    //  Check if user already registered
	    if (userRepository.findByUsername(user.getUsername()).isPresent()) {
	        return ResponseEntity
	            .status(HttpStatus.BAD_REQUEST)
	            .body("User already registered");
	    }

	    //  Register user
	    user.setPassword(passwordEncoder.encode(user.getPassword()));
	    user.setRole("EMPLOYEE");
	    userRepository.save(user);

	    return ResponseEntity.ok("Registration successful");
	}

	@Autowired
	private JwtUtil jwtUtil;
	
	//login
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User loginUser) {

	    User user = userRepository.findByUsername(loginUser.getUsername())
	        .orElse(null);

	    if (user == null) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	            .body("Invalid username");
	    }

	    if (!passwordEncoder.matches(loginUser.getPassword(), user.getPassword())) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	            .body("Invalid password");
	    }

	    Employee emp = employeeDao.findByEmail(user.getUsername())
	        .orElseThrow(() ->
	            new RuntimeException("Employee record missing"));

	    String token = jwtUtil.generateToken(
	        user.getUsername(),
	        user.getRole(),
	        emp.getEmpId()
	    );

	    return ResponseEntity.ok(token);
	}


}
