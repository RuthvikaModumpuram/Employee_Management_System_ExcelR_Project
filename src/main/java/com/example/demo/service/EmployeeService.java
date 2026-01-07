package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeDao;
import com.example.demo.repository.EmployeeFinanceRepository;
import com.example.demo.repository.EmployeePersonalRepository;
import com.example.demo.repository.EmployeeProfessionalRepository;
import com.example.demo.repository.EmployeeProjectRepository;

import jakarta.transaction.Transactional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao empDao;

    @Autowired
    private EmployeePersonalRepository personalRepo;

    @Autowired
    private EmployeeProfessionalRepository professionalRepo;

    @Autowired
    private EmployeeFinanceRepository financeRepo;

    @Autowired
    private EmployeeProjectRepository projectRepo;

    public Employee addEmployee(Employee emp) {
        return empDao.save(emp);
    }

    public Employee getEmployeeById(int id) {
        return empDao.findById(id).orElse(null);
    }

    public List<Employee> getAllEmployees() {
        return empDao.findAll();
    }

    public Employee updateEmployee(Employee emp) {
        return empDao.save(emp);
    }

   
    @Transactional
    public void deleteEmployee(int empId) {

        // delete child tables FIRST
        personalRepo.deleteByEmpId(empId);
        professionalRepo.deleteByEmpId(empId);
        financeRepo.deleteByEmpId(empId);
        projectRepo.deleteByEmpId(empId);

        // delete main employee LAST
        empDao.deleteById(empId);
    }
}
