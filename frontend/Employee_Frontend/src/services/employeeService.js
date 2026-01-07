import axios from "axios";

axios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token");
  if(token && 
    !config.url.includes("/login") &&
    !config.url.includes("/register")
  ){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const BASE_URL = "http://localhost:8081";

export const addEmployee = (emp) =>
  axios.post(`${BASE_URL}/addemp`, emp);

export const updateEmployee = (emp) =>
  axios.put(`${BASE_URL}/updateemp`, emp);

export const getEmployeeById = (id) =>
  axios.get(`${BASE_URL}/getemp/${id}`);

export const getAllEmployees = () =>
  axios.get(`${BASE_URL}/getallemp`);

export const deleteEmployeeById = (id) =>
  axios.delete(`${BASE_URL}/deleteemp/${id}`);

export const addPersonalDetails =(data)=>
  axios.post(`${BASE_URL}/add-personal-details`, data);

export const getPersonalDetails =(empId)=>
  axios.get(`${BASE_URL}/get-personal-details/${empId}`);

export const addProfessionalDetails = (data) =>
  axios.post(`${BASE_URL}/add-professional-details`, data);

export const getProfessionalDetails = (empId) =>
  axios.get(`${BASE_URL}/get-professional-details/${empId}`);

export const addFinanceDetails = (data) =>
  axios.post(`${BASE_URL}/add-finance-details`, data);

export const getFinanceDetails = (empId) =>
  axios.get(`${BASE_URL}/get-finance-details/${empId}`);

export const addProjectDetails = (data) =>
  axios.post(`${BASE_URL}/add-project-details`, data);

export const getProjectDetails = (empId) =>
  axios.get(`${BASE_URL}/get-project-details/${empId}`);

export const updatePersonalDetails = (data) =>
  axios.put(`${BASE_URL}/update-personal-details`, data);

export const updateProfessionalDetails = (data) =>
  axios.put(`${BASE_URL}/update-professional-details`, data);

export const updateFinanceDetails = (data) =>
  axios.put(`${BASE_URL}/update-finance-details`, data);

export const updateProjectDetails = (data) =>
  axios.put(`${BASE_URL}/update-project-details`, data);



