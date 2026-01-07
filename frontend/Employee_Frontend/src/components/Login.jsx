import {  useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Login =()=>{
    const [user, setuser]= useState({username:"", password:""});
    const [showPassword, setShowPassword]= useState(false);
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setuser({...user, [e.target.name]: e.target.value});
    };

    const handleLogin =()=>{
        localStorage.removeItem("token");
       
        loginUser(user).then((res)=>{
            const token = res.data;
            localStorage.setItem("token", token);//store jwt
            const decoded = jwtDecode(token);
            const role = decoded.role;
            if(role === "ADMIN"){
                navigate("/dashboard");
            }else{
                navigate("/employee-dashboard");
            }
        })
        .catch((err)=> alert(err.response?.data || "Invalid Credentials"));
    };

    return(
        <div  id="login-container">
            <h2>Login</h2>
            <input name ="username" placeholder="Username" onChange={handleChange}/>
            <input name ="password" type={showPassword ? "text":"password"} placeholder="Password" onChange={handleChange}/>
            <label style={{fontSize:"14px"}}>
                <input type="checkbox"  onChange={()=> setShowPassword(!showPassword)}/>{" "} Show Password
            </label>
            <button onClick={handleLogin}>Login</button>
            <p onClick={()=> navigate("/register")}>No account? Register</p>
        </div>
    );
};
export default Login;