package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.EmployeePersonalDetails;

public interface EmployeePersonalRepository extends JpaRepository<EmployeePersonalDetails, Integer>{
      void deleteByEmpId(int empId);
}
