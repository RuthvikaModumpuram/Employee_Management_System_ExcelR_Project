package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.EmployeeFinanceDetails;

public interface EmployeeFinanceRepository extends JpaRepository<EmployeeFinanceDetails, Integer> {
	void deleteByEmpId(int empId);
}
