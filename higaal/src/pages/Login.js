import  {useState, useEffect} from 'react';
import axios from 'axios';
import "../styles/login.css"
import { Link, useNavigate } from 'react-router-dom';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff"
function Login() {
  const[showPassword, setShowPassword] = useState(false);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

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
              sessionStorage.setItem("token", token);
              localStorage.removeItem("rememberedEmail");
             }

             axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
             navigate("/home")
            console.log("Login Succes", res.data)

        }catch(err) {
            console.error("Login failed:", err.response?.data || err.message)
        }
    }
    useEffect(() => {
      const savedEmail =  localStorage.getItem("rememberedEmail");
      if(savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    }, [])

  return (
    <div className='login'>
      <div className='login-left'>

      </div>
      <div className='login-right'>
        <h1>Welcome Back!!</h1>
      <form onSubmit={handleLogin}>
        <input  type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        required/>
       <div className='pass-container' >
         <input type={showPassword ? "text" : "password"}
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        required
        />
        <span 
        onClick={() => setShowPassword(v => !v)} 
        >
          {showPassword ? <Visibility/> : <VisibilityOff/>}

        </span >
       </div>
        <div className='remember'>
        <input type='checkbox'

        id='rememberMe'
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor='rememberMe'>Remember Me</label>
        </div>
        <Link to="/forgot" style={{textDecoration: "none"}}>Forgot Password?</Link>
        <h2>Don't have Account? <Link to="/sign" style={{textDecoration: "none", color: "blue"}}>Register</Link></h2>
        <button type='submit'>Login</button>
      </form>
      </div>
      
    </div>
  )
}

export default Login
