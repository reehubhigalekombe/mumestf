import React, { useState } from 'react';
import axios from 'axios';
import "../styles/public.css"
function Public() {
  const[phone, setPhone] = useState("");
  const[amount, setAmount] = useState("");
  const[message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidPhone = (num) => /^2547\d{8}$/.test(num);
  
  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage("")

    if(!isValidPhone(phone)){
      alert("Kindly enetr a valid MPESA number");
      return;
    }
      if(!amount || Number(amount) <10) {
        alert("Please enetrt amount from (minimum KES 10");
        return
      }
      setLoading(true);
      setMessage("");
  
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/mympesa/stkpush`, {
        phone, 
        amount
      });

      const {CheckoutRequestID} = res.data.data;
      setMessage("The STK Push has been initiated. Kindly wait for the response");

      const interval  = setInterval(async () => {
        try {
          const statusRes = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/mympesa/status/${CheckoutRequestID}`
          );
          const {status, resultDesc} = statusRes.data;

          if(status !== "Pending") {
            clearInterval(interval)
            setLoading(false)
            setMessage(
              status === "Sucesss" ? `✅ ${resultDesc}` :  `❌${resultDesc}`
            );
          }
        }catch(pollErr) {
          clearInterval(interval);
          setLoading(false);
          setMessage("❌ Checking Error")
        }
      }, 5000)

    }catch(err) {
            setLoading(false)
     setMessage( "❌ " + (err.response?.data?.error || err.message) )
    } 
  }
  return (

    <div className='public'>

      <form onSubmit={handlePayment}>
              <h1 className='payment-title'>PAY WITH MPESA</h1>
      <label htmlFor='phone-number'>
        <span>Enter Phone No.</span>
          <input
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        disabled={loading}
            className='hello'
        />
      </label>
<label htmlFor='amount'>
  <span>Enter Amount</span>
 <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        disabled={loading}
        className='hello'
        />
</label>
       
        <button type='submit' className='mpesaButton'
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
