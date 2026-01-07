package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="employee_personal_details")
public class EmployeePersonalDetails {
	@Id
	private int empId;
	@JsonIgnore
	@OneToOne
	@MapsId
	@JoinColumn(name = "emp_id")
	private Employee employee;
	
	private String dateOfBirth;
	private String gender;
	private int age;
	private String address;
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "EmployeePersonalDetails [empId=" + empId + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender
				+ ", age=" + age + ", address=" + address + "]";
	}
	public EmployeePersonalDetails(String dateOfBirth, String gender, int age, String address) {
		super();
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.age = age;
		this.address = address;
	}
	public EmployeePersonalDetails() {
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
