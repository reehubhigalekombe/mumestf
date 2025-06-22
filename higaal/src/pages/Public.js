import React, { useState } from 'react';
import axios from 'axios';
import "../styles/public.css"
function Public() {
  const[phone, setPhone] = useState("");
  const[amount, setAmount] = useState("");
  const[message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const isValidPhone = (num) => {
    const pattern = /^(07\d{8}|2547\d{8})$/;
    return pattern.test(num)
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    if(!isValidPhone(phone)){
      alert("Kindly enetr a valid MPESA number");
      return;
    }
      if(!amount || Number(amount) <10) {
        alert("Please enetrt amount from (minimum KES 5");
        return
      }
      setLoading(true);
      setMessage("")
    
    const data = {
      phone ,
      amount: Number(amount)
    }
    try {
      const res = await axios.post("http://localhost:5000/api/stkPush", data);
      console.log(res.data);
      alert("In order to complete payments Check your phone number")
    }catch(err) {
      console.error(err);
      alert("Payment failed");
      
    }
  }
  return (

    <div className='public'>
      <form onSubmit={handlePayment}>
        <input
        type='number'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='Enter your Safaricom Number'
        />

        <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        
        />
        <button type='submit' 
        disabled={loading}
        >{loading ? "Processing..." : "Pay Now"}
        </button>
        {message && (
          <p
          style={{marginTop: "10px", color: message.includes("✅") ? "green" : "red"}}
          >
            {message}
          </p>
        )}
      </form>

    </div>
  )
}

export default Public;
