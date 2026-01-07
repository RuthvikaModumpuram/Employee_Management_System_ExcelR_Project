package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee_project_details")
public class EmployeeProjectDetails {

    @Id
    private int empId;
     @JsonIgnore
    @OneToOne
    @MapsId
    @JoinColumn(name="emp_id")
    private Employee employee;
    
    private String projectCode;
    private String startDate;
    private String endDate;
    private String clientName;
    private String reportingManager;
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getProjectCode() {
		return projectCode;
	}
	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getClientName() {
		return clientName;
	}
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	public String getReportingManager() {
		return reportingManager;
	}
	public void setReportingManager(String reportingManager) {
		this.reportingManager = reportingManager;
	}
	@Override
	public String toString() {
		return "EmployeeProjectDetails [empId=" + empId + ", projectCode=" + projectCode + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", clientName=" + clientName + ", reportingManager=" + reportingManager
				+ "]";
	}
	public EmployeeProjectDetails(String projectCode, String startDate, String endDate, String clientName,
			String reportingManager) {
		super();
		this.projectCode = projectCode;
		this.startDate = startDate;
		this.endDate = endDate;
		this.clientName = clientName;
		this.reportingManager = reportingManager;
	}
	public EmployeeProjectDetails() {
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

