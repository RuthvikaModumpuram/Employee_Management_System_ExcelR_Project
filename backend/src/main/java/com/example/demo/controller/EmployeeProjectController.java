package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.EmployeeProjectDetails;
import com.example.demo.repository.EmployeeProjectRepository;
import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeDao;


@RestController
@CrossOrigin("*")
public class EmployeeProjectController {

    @Autowired
    private EmployeeProjectRepository repo;
    @Autowired
    private EmployeeDao employeeDao;


    @PostMapping("/add-project-details")
    public EmployeeProjectDetails addProjectDetails(
            @RequestBody EmployeeProjectDetails details) {
    	Employee emp = employeeDao.findById(details.getEmpId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    	details.setEmployee(emp);
    	return repo.save(details);
    }

    @GetMapping("/get-project-details/{empId}")
    public EmployeeProjectDetails getProjectDetails(
            @PathVariable int empId) {
        return repo.findById(empId).orElse(null);
    }
    
    @PutMapping("/update-project-details")
    public EmployeeProjectDetails updateDetails(
            @RequestBody EmployeeProjectDetails details) {

    	employeeDao.findById(details.getEmpId())
        .orElseThrow(() -> new RuntimeException("Employee not found"));
         repo.findById(details.getEmpId())
        .orElseThrow(() -> new RuntimeException("Project details not found"));

        return repo.save(details);  
    }

    @DeleteMapping("/delete-project-details/{empId}")
    public String deleteDetails(@PathVariable int empId) {
        repo.deleteById(empId);
        return "Project details deleted";
    }
    @GetMapping("/admin/project-details")
    public List<EmployeeProjectDetails> getAllProjectDetails() {
        return repo.findAll();
    }


}

