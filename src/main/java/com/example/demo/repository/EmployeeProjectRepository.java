package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.EmployeeProjectDetails;

public interface EmployeeProjectRepository extends JpaRepository<EmployeeProjectDetails, Integer> {
	void deleteByEmpId(int empId);
}
