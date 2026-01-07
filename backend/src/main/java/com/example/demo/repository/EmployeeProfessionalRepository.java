package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.EmployeeProfessionalDetails;

public interface EmployeeProfessionalRepository extends JpaRepository<EmployeeProfessionalDetails, Integer> {
	void deleteByEmpId(int empId);
}
