import {useState}  from 'react';
import axios from 'axios';
import "../styles/forgot.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/api/auth/forgot-password", {email})
    setMessage(res.data.message)
  }catch(err) {
    setMessage("Something must have gone wrong, re-enter your email")
  }

}

  return (
    <div className='forgot'>
      <div>
        
        <form onSubmit={handleSubmit}>
              <h2>Password Reset</h2>
        <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='enter a registered email'
        required
        />
        <button type='submit'>
          Receive Reset Link
        </button>
      </form>
      
<p>
  {message}
</p>
  <h3>Check for the Password reset email in either inbox or spam. Email delivery may take some minutes!! (2-3mins) </h3>

      </div>
      <div >
<h4>All Rights Reserved &copy;mumiaseast.go.ke <br/>
Designed and Developed by G-Space Technologies - Higal &copy;2025</h4>
      </div>
  
        </div>
    
  )
}

export default ForgotPassword;
