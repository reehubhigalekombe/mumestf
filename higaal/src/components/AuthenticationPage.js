import  {useState, useEffect} from 'react';
import axios from 'axios';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import "../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

function AuthenticationPage() {
    const[step, setStep] = useState(1);
    const[otp, setOtp] = useState(""); 
    const[message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const[showPassword, setShowPassword] = useState(false);
    const[password, setPassword] = useState("")
    const[rememberMe, setRememberMe] = useState(false);
    const navigate  = useNavigate();
 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });
            setMessage(res.data.message);
            setStep(2);
           
        }catch(err) {
            setMessage(err.response.data?.message || "Login has Failed")
        }
    };

const handleVerifyOtp = async(e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:5000/api/auth/verifyotp", {
            email, 
            otp,
        });
        setMessage(res.data.message);
        console.log("You've logged in");
        navigate("/home")

    }catch(err) {
        setMessage(err.response?.data?.message || "OTP verification has failed")

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
                           <img src='http://localhost:5000/uploads/cgd2.jpeg' alt='pic'  /> 

            </div>
                <div className='verticalLine'></div>
                <div className='img-wrap'>
     <img src='http://localhost:5000/uploads/cdf1.jpeg' alt='pic' /> 
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
            <h2>
                {step ===1 ? "Login" : "Enter OTP"}
            </h2>
            {
                message && <p>{message}</p>
            }
       {step ===1 ? (<form onSubmit={handleLogin}>
               <label htmlFor='emailAddress'>Email Address</label>
        <input 
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name='email'
        id='emailAddress'
        required
        />
<label htmlFor='password'>Password</label>
       <div className='pass-container'>
        <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
         />
         <span className='pass'
         onClick={() => setShowPassword(v => !v)}
         >
{showPassword ? <VisibilityOff/> : <Visibility/>}
         </span>

       </div>
        <div className='remember'>
<input
type='checkbox'
id='rememeber'
value={rememberMe}
onChange={(e) => setRememberMe(e.target.checked)}
required
/>
<label htmlFor='remember'>Remember Me</label>
  <Link to="/forgot" className='forgot-pass'>Forgot Password</Link>
        </div>
       
        <h2 style={{ fontSize: "23px"}}>Don't have an account? <Link to="/sign" style={{textDecoration: "none", color: "blue", fontSize: "18px"}}>Sign up</Link> </h2>
        <button type='submit' >Login</button>
       </form>

       ) : (
        <form onSubmit={handleVerifyOtp}>
            <input 
            type='text'
            value={otp}
            onChange={(e) => setOtp((e.target.value))}
            required
            placeholder='Enter the OPT sent to your email'
            />
<br/>
<button type='submit' style={{ width: "29%"}}>
    Verify OTP
</button>
        </form>
       )}


        </div>
 
     
     </div>

     <div className='auth-right'>

     </div>
    </div>
  )
}
export default AuthenticationPage
