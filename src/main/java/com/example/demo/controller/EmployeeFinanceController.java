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

import com.example.demo.entity.EmployeeFinanceDetails;
import com.example.demo.repository.EmployeeFinanceRepository;
import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeDao;


@RestController
@CrossOrigin("*")
public class EmployeeFinanceController {
	@Autowired
	private EmployeeFinanceRepository repo;
	@Autowired
	private EmployeeDao employeeDao;

	
	@PostMapping("/add-finance-details")
	public EmployeeFinanceDetails addFinanceDetails(@RequestBody EmployeeFinanceDetails details) {
		 Employee emp = employeeDao.findById(details.getEmpId())
		            .orElseThrow(() -> new RuntimeException("Employee not found"));
		 details.setEmployee(emp);
		 return repo.save(details);
	}
	
	@GetMapping("/get-finance-details/{empId}")
	public EmployeeFinanceDetails getFinancedetails(@PathVariable int empId) {
		return repo.findById(empId).orElse(null);
	}
	
	@PutMapping("/update-finance-details")
	public EmployeeFinanceDetails updateDetails(
	        @RequestBody EmployeeFinanceDetails details) {

		employeeDao.findById(details.getEmpId())
        .orElseThrow(() -> new RuntimeException("Employee not found"));
         repo.findById(details.getEmpId())
        .orElseThrow(() -> new RuntimeException("Finance details not found"));
	    return repo.save(details); 
	}

	@DeleteMapping("/delete-finance-details/{empId}")
	public String deleteDetails(@PathVariable int empId) {
	    repo.deleteById(empId);
	    return "Finance details deleted";
	}
	@GetMapping("/admin/finance-details")
	public List<EmployeeFinanceDetails> getAllFinanceDetails() {
	    return repo.findAll();
	}



}
