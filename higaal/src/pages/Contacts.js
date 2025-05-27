import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter, FaTiktok, } from "react-icons/fa6";
import {AiOutlineClockCircle} from "react-icons/ai"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {FaMapMarkerAlt} from "react-icons/fa";
import CallIcon from '@mui/icons-material/Call';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import "../styles/contacts.css" 

function Contacts() {
  const[formData, setFormData] =  useState({
     fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      textarea: "",
  })
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await axios.post("http://localhost:5000/api/contact", formData)
    alert("Message sent Succesfully")
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      textarea: "",
    });
    }catch(error) {
      console.error(error)
      alert("Message sent failed")
    }
  }
  return (
    <div className='contact'>
<div className="contact-top">
  <div className="contact-top1">
    <div className="top1">
 <h1>Contact Us</h1>
    </div>
    <div className="top2">
<img src="http://localhost:5000/uploads/bull.jpg" alt="top2"/> 
    </div>
  </div>
  <div className="contact-top2">
<Link to="/home"><FaHome style={{color: "white"}}/></Link>
<span className="my-dot"></span>
   <h2>Contact Us</h2>

  </div>

</div>

<div className="contact-middle">
<div className="contact-wrap">
<div className="box">
  <FaMapMarkerAlt className="contact-icon"/>
<h1>Location</h1>
<p> P . O. BOX 50106 Shianda, Kakamega</p>
</div>

<div className="box1">
<CallIcon className="contact-icon"/>
<h1>Contacts</h1>
<p>+254742106109/+25436941383</p>
</div>

<div className="box">
  <AiOutlineClockCircle className="contact-icon"/>
<h1>Working Hours</h1>
<p> <strong>Mon-Fri:</strong>8:00 am - 5:00 pm</p>
<p>(Except Holidays)</p>
</div>

<div className="box1">
<NewspaperIcon className="contact-icon"/>
<h1>Latest News</h1>
<p>Subscribe to our newspaper for our updates</p>
</div>

<div className="box">
  <MailOutlineIcon className="contact-icon"/>
  <h1>Email Address</h1>
  <p>cdfmumiaseast@ngcdf.go.ke</p>
</div>

<div className="box1">
    <h1>Follow us on our socio-medias</h1>
 <div className="platforms">
  <a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener noreferrer">  <FaInstagram style={{color: "black"}}/></a>
  <a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener noreferrer">  <FaFacebook style={{color: "black"}}/></a>
  <a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener noreferrer">  <FaXTwitter style={{color: "black"}}/></a>
  <a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener noreferrer">  <FaTiktok style={{color: "black"}}/></a>
  <a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener noreferrer">  <FaYoutube style={{color: "black"}}/></a>
 </div>
</div>

</div>
</div>

<div className="contact-bottom">
  <div className="contact-bottom1">
    <h1>Contact Form</h1>
    <p>To Get in Touch!! Feel free to call, send and email us or fill the contact form below and we'll revert immidiately</p>
    <form onSubmit={handleSubmit}>

      <div className="contact-bot">
 <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
      placeholder="Full Name"
      required
      />
      <input
      type="email"
      name="email"
          value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
      placeholder="Email"
      required
      />
      </div>

          <div className="contact-bot">
      <input
     type="tel"
     name="phoneNumber"
         value={formData.phoneNumber}
    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
     placeholder="Phone Number"
     required
      />
      <input
      type="text"
      name="subject"
      value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
      placeholder="Subject"
      required
      />
      </div>
  
      <textarea
      name="textarea"
      value={formData.textarea}
      placeholder="Write your view/concern"
            onChange={(e) => setFormData({...formData, textarea: e.target.value})}
       rows="8" ></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
    <div className="contact-bottom2">
    <iframe 
    title="Mumias East Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.19814928445!2d34.48974872924843!3d0.31974660540722893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178027bc1a1fe5ad%3A0x775577297869e788!2sMumias%20East%20NG-CDF%20Office!5e0!3m2!1ssw!2ske!4v1747672198874!5m2!1ssw!2ske" 
  width="1250" height="600" 
  style={{border:0}}
  allowfullscreen="" loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
    </iframe>

  </div>
</div>

    </div>
  )
}

export default Contacts
