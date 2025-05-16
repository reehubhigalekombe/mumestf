import React, {useState} from 'react';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/signin.css"

function Signin() {
    const navigate = useNavigate();
    const[showPassword, setShowPassword] = useState(false);
    const[showConfirm, setShowConfrim] = useState(false)

    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        nationalId: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassWord: "",
    });

    const[error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassWord) {
            setError("Password do not match!!.");
            return;
        }
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", formData)
            console.log(res.data);
            alert("Registration was Successful!")
            navigate("/login")
        }catch(err) {
            console.error(err)
            setError("Registartion failed")
        }

    };
  return (
    <div className='signin-page'>
        <div className='sign-left'>
           

        </div>
        <div className='sign-right'>
        <form onSubmit={handleSubmit} className='sign-form'>
            <h1>Create Account!</h1>
            <p>Kindly enter your names exacatly as displayed on you Natioanal ID/Birth Certificate</p>
            {error && <p className='error'>{error}</p>}
            <div className='input-arrange'>
            <input type='text' 
            name='firstName' 
            onChange={handleChange} 
            required
             placeholder='First Name'/>
             
             <input type='text' 
            name='middleName' 
            onChange={handleChange} 
            required
             placeholder='Middle Name'/>
            </div>
            
            <div className='input-arrange'>
            <input type='text' 
            name='lastName' 
            onChange={handleChange} 
            required
             placeholder='Last Name'/>

             <input type='text' 
             name='nationalId'
             onChange={handleChange}
             placeholder='National ID/Passport'
             required
             
             />
                </div>
                <div className='input-arrange'>
                
             <input type='text' 
             name='phoneNumber' 
             onChange={handleChange}
             placeholder='Phone Number'
             required
              />
              <input type='email'
              name='email'
              onChange={handleChange}
              placeholder='email'
              required
              
              />
                </div>
                
                <div className='input-arrange'>
                    <div className='pass-container'>
                    <input type={showPassword ? "text" : "password"} 
              name='password'
              value={formData.password}
              onChange={handleChange}
              required 
              placeholder='password'/>
              <span className='pass'
                onClick={ () => setShowPassword(v => !v)}    
              >
                {showPassword ? <VisibilityOff/> : <Visibility/>}
              </span>
                    </div>

                <div className='pass-container'>
                <input  type={
                showConfirm ? "text" : "password"
              }
              name='confirmPassWord'
              value={formData.confirmPassWord}
          
              onChange={handleChange}    placeholder='Re-EnterPassword'
              required
              />
              <span 
              onClick={() => setShowConfrim(v => !v)

              }
              >
                {
                    showConfirm ? <VisibilityOff/> : <Visibility/>
                }
              </span>

                </div>
             
                </div>

            <div className='input-arrange'>
            <button type='submit'>Sign Up</button>
            </div>
        </form>
      
            </div>
       
    </div>
  )
}

export default Signin
