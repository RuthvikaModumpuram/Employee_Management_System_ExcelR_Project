import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register =()=>{
    const [user, setUser] = useState({username:"", password:""});
    const [showPassword, setShowPassword]= useState(false);
    const navigate = useNavigate();

    const handleChange =(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
};
    const handleRegister =()=>{
        registerUser(user).then(()=>{
            alert("Register Successful");
            navigate("/login");
        })
        .catch(()=> alert("Error in Registration"));
    };
    return(
        <div id="register-container">
            <h2>Register</h2>
            <input name="username" placeholder="Username" onChange={handleChange}/>
            <input name ="password" type={showPassword ? "text":"password"} placeholder="Password" onChange={handleChange}/>
            <label style={{fontSize:"14px"}}>
                <input type="checkbox"  onChange={()=> setShowPassword(!showPassword)}/> Show Password
            </label>
            <button onClick={handleRegister}>Register</button>
            <p onClick={()=> navigate("/login")}>Already have an account? Login</p>
        </div>
    );
};
export default Register;