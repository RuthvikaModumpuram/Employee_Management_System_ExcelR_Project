package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Employee;
import com.example.demo.entity.EmployeePersonalDetails;
import com.example.demo.repository.EmployeeDao;
import com.example.demo.repository.EmployeePersonalRepository;

@RestController
@CrossOrigin("*")
public class EmployeePersonalController {

    @Autowired
    private EmployeePersonalRepository repo;

    @Autowired
    private EmployeeDao employeeDao;

    @PostMapping("/add-personal-details")
    public EmployeePersonalDetails addDetails(@RequestBody EmployeePersonalDetails details) {
        Employee emp = employeeDao.findById(details.getEmpId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        details.setEmployee(emp);
        return repo.save(details);
    }

    @GetMapping("/get-personal-details/{empId}")
    public EmployeePersonalDetails getDetails(@PathVariable int empId) {
        return repo.findById(empId).orElse(null);
    }

    @PutMapping("/update-personal-details")
    public EmployeePersonalDetails updateDetails(@RequestBody EmployeePersonalDetails details) {
        employeeDao.findById(details.getEmpId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        repo.findById(details.getEmpId())
                .orElseThrow(() -> new RuntimeException("Personal details not found"));
        return repo.save(details);
    }

    @DeleteMapping("/delete-personal-details/{empId}")
    public String deleteDetails(@PathVariable int empId) {
        repo.deleteById(empId);
        return "Personal details deleted";
    }

    @GetMapping("/admin/personal-details")
    public List<EmployeePersonalDetails> getAllPersonalDetails() {
        return repo.findAll();
    }
}
