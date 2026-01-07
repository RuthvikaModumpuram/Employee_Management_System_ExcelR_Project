package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.EmployeeProfessionalDetails;
import com.example.demo.repository.EmployeeProfessionalRepository;
import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeDao;


@RestController
@CrossOrigin("*")
public class EmployeeProfessionalController {
	@Autowired
	private EmployeeProfessionalRepository repo;
	@Autowired
	private EmployeeDao employeeDao;

	@PostMapping("/add-professional-details")
	public EmployeeProfessionalDetails addDetails(@RequestBody EmployeeProfessionalDetails details) {
		Employee emp = employeeDao.findById(details.getEmpId()).orElseThrow(()-> new RuntimeException("Employee not found"));
		details.setEmployee(emp);
		return repo.save(details);
	}
	
	@GetMapping("/get-professional-details/{empId}")
	public EmployeeProfessionalDetails getDetails(@PathVariable int empId) {
		return repo.findById(empId).orElse(null);
	}
	
	@PutMapping("/update-professional-details")
	public EmployeeProfessionalDetails updateDetails(
	        @RequestBody EmployeeProfessionalDetails details) {

		employeeDao.findById(details.getEmpId())
        .orElseThrow(() -> new RuntimeException("Employee not found"));
        repo.findById(details.getEmpId())
        .orElseThrow(() -> new RuntimeException("Professional details not found"));
	    return repo.save(details);  
	}

	@DeleteMapping("/delete-professional-details/{empId}")
	public String deleteDetails(@PathVariable int empId) {
	    repo.deleteById(empId);
	    return "Professional details deleted";
	}
	@GetMapping("/admin/professional-details")
	public List<EmployeeProfessionalDetails> getAllProfessionalDetails() {
	    return repo.findAll();
	}



}
