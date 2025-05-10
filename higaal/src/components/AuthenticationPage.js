import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import "../styles/auth.css";


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
        const labels = ["Bussaries", "Student Portal", "Tenders", "Downloads", "Projects", "Herittage", "Home" ]
        const positions  = [
            {
                top: "-20px", left: "100px",  link: "/home"
            }, 
            {
                top: "-10px", left: "210px", link: "/home"
            }, 

            {
                top: "140px", left: "210px", link: "/home"
            }, 
            {
                top: "200px", left: "90px", link: "/home"
            }, 
            {
                top: "140px", left: "-20px", link: "/home"
            }, 
            {
                top: "-5px", left: "-10px", link: "/home"
            }, 
            {
                top: "90px", left: "95px", link: "/home"
            }, 
        ]
  return (

    <div className='auth-page'  >
        <div className='auth-left'>
        <h1 >Mumias East</h1>
       
       <div className='mylabels'>
        {positions.map((pos, index) => (
            <a key={index} href={pos.link}
            className={`hex ${index === 6 ? 'center' : ''}`}
            style={{top: pos.top, left: pos.left}}>  <span>
            {labels[index] } 
        </span>
</a>
        ))}
       </div>

        </div>
        <div className='auth-right'>
        <h1 >Mumias East :Kakamega's Heartbeat</h1>

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
        isSignup ? "Already have an account?" : "Don't have an account"
    }
    <span onClick={toggleMode} className='link'>
{    isSignup ? "Login"  :  "Sign Up"}
    </span>
  </p>
</div >
<h2>Misson: <em>ukhukhusia oluya mubulala nende maendeleo</em></h2>
<h2>Vission: <em>to build Eshialo sho ubulala nende maendeleo</em></h2>
        </div>
    </div>
  )
}
export default AuthenticationPage
