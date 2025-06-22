import  {useState, useEffect} from 'react';
import axios from 'axios';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import "../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

function AuthenticationPage() {
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[rememberMe, setRememberMe] = useState(false);
    const navigate  = useNavigate();
 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
                rememberMe
            });
            const token = res.data.token;
            if(rememberMe) {
                localStorage.setItem("token", token);
                localStorage.setItem("rememberedEmail", email)
            } else {
                sessionStorage.setItem("token", token)
                sessionStorage.setItem("rememberedEmail")
            }
            axios.defaults.headers.common["Authorization"] = `bearer ${token}`
            navigate("/home")
               console.log("Login Successful", res.data)
        }catch(err) {
            console.error("Login Failed try again", err.response?.data || err.message)
        }
    }
        useEffect(() => {
            const savedEmail = localStorage.getItem("rememberedEmail");
            if(savedEmail) {
                setEmail(savedEmail);
                setRememberMe(true)
            }

        }, [])

return (
       <div className='auth'>
     <div className='auth-left'>
        <div className='leftTop'>
            <div className='img-wrap'>
                           <img src='http://localhost:5000/uploads/cgd2.jpeg'  /> 

            </div>
                <div className='verticalLine'></div>
                <div className='img-wrap'>
     <img src='http://localhost:5000/uploads/cdf1.jpeg'  /> 
            </div>
<h1 style={{
    fontSize: "1.7rem"
}}>NG-CDF Mumias East</h1>
        </div>
<div className='leftMiddle'>
<h1>OneLogin</h1>
<div style={{display: "flex", alignItems: "center", gap: "4px", margin: "10px 0", justifyContent: "center" }}>
    <hr style={{height: "2px", width:"60px", backgroundColor: "black", border: "none", margin: "0"}}/>
<span style={{color: "blue"}}>All NG-CDF Services</span>
        <hr style={{height: "2px", width: "60px", backgroundColor: "black", border: "none", margin: "0"}}/>
</div>
</div>
        <div className='leftBottom'>
<form onSubmit={handleLogin}>
               <label htmlFor='emailAdress'>Email Address</label>
        <input 
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name='email'
        required
        />
<label htmlFor='password'>Password</label>
         <input 
         type='password'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         name='password'
         required
        
        />
        <div className='remember'>
<input
type='checkbox'
id='rememeber'
value={rememberMe}
onChange={(e) => setRememberMe(e.target.value)}
required
/>
<label htmlFor='remember'>Remember Me</label>
  <Link to="/forgot" className='forgot-pass'>Forgot Password</Link>
        </div>
       
        <h2 style={{ fontSize: "23px"}}>Don't have an account? <Link to="/sign" style={{textDecoration: "none", color: "blue", fontSize: "18px"}}>Sign up</Link> </h2>
        <button type='submit' style={{width: "19%"}}>Login</button>
       </form>

        </div>
 
     
     </div>

     <div className='auth-right'>

     </div>
    </div>
  )
}
export default AuthenticationPage
