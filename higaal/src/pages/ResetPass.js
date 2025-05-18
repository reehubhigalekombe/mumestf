import axios from 'axios';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import Visibility from "@mui/icons-material/Visibility";
import VisbilityOff from "@mui/icons-material/VisibilityOff"
import "../styles/reset.css"

function ResetPass() {

    const {token} = useParams();
    const[newPassword, setNewPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("")
    const[message, setMessage] = useState("");

    const[showNewPassword, setShowNewPassword] = useState(false);
    const[showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleReset = async (e) => {
        e.preventDefault();
        
        if(newPassword !== confirmPassword) {
            setMessage("Password don match")
            return;
        }
        try {
            const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
                password: newPassword
            });
            setMessage(res.data.message);
        }catch(err) {
            setMessage("Hello, system failed to rest password try again")
        }
    };
  return (
    <div className='reset'>
<h2>Reset Password!!</h2>
        <form onSubmit={handleReset}>
<div className='pass-cont'>
  <input
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            placeholder='enter new password'
            />

            <span 
            onClick={() => setShowNewPassword(prev => !prev)}
            >
       { showNewPassword ? <Visibility/> : <VisbilityOff/>}
            </span>
</div>
<div className='pass-cont'>

            <input type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            require
            placeholder='confirm password'
            />
            <span onClick={() => setShowConfirmPassword(prev => !prev)}>
                {showConfirmPassword ? <Visibility style={{backgroundColor: "green"}}/> : <VisbilityOff/> }
            </span>
</div>
            <button
            type='submit' >
                Reset Password
            </button>
        </form>
        <p>
            {message}
        </p>
        <div>
            <h4>All Rights Reserved &copy;mumiaseast.go.ke <br/>
Designed and Developed by G-Space Technologies - Higal &copy;2025</h4>
        </div>
      
    </div>
  )
}

export default ResetPass
