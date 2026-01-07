package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="employee_finance_details")
public class EmployeeFinanceDetails {
	@Id
	private int empId;
	@JsonIgnore
	@OneToOne
	@MapsId
	@JoinColumn(name="emp_id")
	private Employee employee;
	
	private String aadharCard;
    private String panCard;
    private String bankName;
    private String branch;
    private String ifscCode;
    private double ctcBreakup;
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getAadharCard() {
		return aadharCard;
	}
	public void setAadharCard(String aadharCard) {
		this.aadharCard = aadharCard;
	}
	public String getPanCard() {
		return panCard;
	}
	public void setPanCard(String panCard) {
		this.panCard = panCard;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}
	public double getCtcBreakup() {
		return ctcBreakup;
	}
	public void setCtcBreakup(double ctcBreakup) {
		this.ctcBreakup = ctcBreakup;
	}
	@Override
	public String toString() {
		return "EmployeeFinanceDetails [empId=" + empId + ", aadharCard=" + aadharCard + ", panCard=" + panCard
				+ ", bankName=" + bankName + ", branch=" + branch + ", ifscCode=" + ifscCode + ", ctcBreakup="
				+ ctcBreakup + "]";
	}
	public EmployeeFinanceDetails(String aadharCard, String panCard, String bankName, String branch, String ifscCode,
			double ctcBreakup) {
		super();
		this.aadharCard = aadharCard;
		this.panCard = panCard;
		this.bankName = bankName;
		this.branch = branch;
		this.ifscCode = ifscCode;
		this.ctcBreakup = ctcBreakup;
	}
	public EmployeeFinanceDetails() {
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
