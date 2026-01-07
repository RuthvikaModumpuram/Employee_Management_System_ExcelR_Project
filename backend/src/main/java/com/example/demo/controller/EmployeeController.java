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

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService empService;
	
	@PostMapping("/addemp")
    public Employee addEmployee(@RequestBody Employee emp) {
        return empService.addEmployee(emp);
    }
	
	@GetMapping("/getemp/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return empService.getEmployeeById(id);
    }
	
	@GetMapping("/getallemp")
    public List<Employee> getAllEmployees() {
        return empService.getAllEmployees();
    }
	
	@PutMapping("/updateemp")
    public Employee updateEmployee(@RequestBody Employee emp) {
        return empService.updateEmployee(emp);
    }
	
	@DeleteMapping("/deleteemp/{id}")
    public String deleteEmployee(@PathVariable int id) {
        empService.deleteEmployee(id);
        return "Employee deleted successfully";
    }

}
