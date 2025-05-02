import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../styles/auth.css";
import { Link } from 'react-router-dom';

function AuthenticationPage() {
    const navigate = useNavigate()
    const [isSignup, setIsSignup] =useState(false);
    const[form, setForm] =useState( {
        username: "",
        email: "",
        password: ""})
    
        const handleChange = (e) => {
            setForm({...form, [e.target.name]: e.target.value})
        }
        const handleSubmit = async (e)  => {
            e.preventDefault();
            const endpoint = isSignup ? "signup" :"login";
            try {
                const res = await axios.post(`http://localhost:5000/api/auth/${endpoint}`, form)
                if(!isSignup) {
                    localStorage.setItem("token", res.data.token);
                    alert("Your Login Successful")
                    navigate("/home")
                } else{
                    alert("Signup was Successful, Kindly Login");
                    setIsSignup(false)
                }
            }catch(err) {
                alert(err.response?.data?.message || "Something must have gone Wrong")
            }
        }
        const toggleMode = () => {
            setIsSignup(!isSignup);
            setForm({username: "", email: "", password: ""})
        }
    
  return (

    <div className='auth-page'  >
        <div className='auth-left'>
        <div className='hexa-wrapper'>
                
                <div className="hexa top">
                <Link to="/home">Home</Link>
                </div>

<div className="hexa topr">
<Link to="/home">Home</Link>
</div>
<div className="hexa topl">
<Link to="/home">Home</Link>
</div>
<div className="hexa bot">
<Link to="/home">Home</Link>
</div>
<div className="hexa botl">
<Link to="/home">Home</Link>
</div>
<div className="hexa botr">
<Link to="/home">Home</Link>
</div>

            </div>

        </div>
        <div className='auth-right'>
        <div className='auth-form'>

<h2> {isSignup ? "Sign Up" :  "Login"} </h2>
  <form onSubmit={handleSubmit} >
    {isSignup && (
        <input 
        type='text'
        name='username'
        value={form.username}
        onChange={handleChange}
        placeholder='username'
        required
    
        />
    )}
     <input 
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        placeholder='email'
        required
 
        />
         <input 
        type='password'
        name='password'
        value={form.password}
        onChange={handleChange}
        placeholder='password'
        required
  
        />

<button type='submit' >
{
    isSignup ? "Sign Up" : "Login"
}

</button>
  </form>

  <p className='toggle'>
    {
        isSignup ? "Already have an account?" : "Don have an account"
    }
    <span onClick={toggleMode} className='link'>
{    isSignup ? "Login"  :  "Sign Up"}
    </span>
  </p>
</div >
        </div>
    
     
    </div>
  )
}

export default AuthenticationPage
