package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="employee_professional_details")
public class EmployeeProfessionalDetails {
	@Id
	private int empId;
	@JsonIgnore
	@OneToOne
	@MapsId
	@JoinColumn(name="emp_id")
	private Employee employee;
	
	private String officePhone;
	private String officeCity;
	private String reportingManager;
	private String hrName;
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getOfficePhone() {
		return officePhone;
	}
	public void setOfficePhone(String officePhone) {
		this.officePhone = officePhone;
	}
	public String getOfficeCity() {
		return officeCity;
	}
	public void setOfficeCity(String officeCity) {
		this.officeCity = officeCity;
	}
	public String getReportingManager() {
		return reportingManager;
	}
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}
	public String getHrName() {
		return hrName;
	}
	public void setHrName(String hrName) {
		this.hrName = hrName;
	}
	@Override
	public String toString() {
		return "EmployeeProfessionalDetails [empId=" + empId + ", officePhone=" + officePhone + ", officeCity="
				+ officeCity + ", reportingManager=" + reportingManager + ", hrName=" + hrName + "]";
	}
	public EmployeeProfessionalDetails(String officePhone, String officeCity, String reportingManager, String hrName) {
		super();
		this.officePhone = officePhone;
		this.officeCity = officeCity;
		this.reportingManager = reportingManager;
		this.hrName = hrName;
	}
	public EmployeeProfessionalDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public Employee getEmployee() {
		return employee;
	}
	
	

}
