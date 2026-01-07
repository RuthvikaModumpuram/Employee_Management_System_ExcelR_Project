import axios from 'axios';
const BASE_URL = "http://localhost:8081";
export const loginUser = (data)=>{
    return axios.post(`${BASE_URL}/login`, data);
};

export const registerUser =(data)=>{
    return axios.post(`${BASE_URL}/register`, data);
};