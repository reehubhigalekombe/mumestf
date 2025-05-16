import React from 'react';
import "../styles/navbar.css"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
<div className='nav-top'>

    <div className='contacts'>
  
    Helpline: 
    <FaPhoneAlt className='icons'/>
    <a href='tel:+254742106109' className='footer-icons'>+254742106109</a>/
        <a href='tel: +25436941383' className='footer-icons'>+25436941383</a>
    </div>

    <div className='contacts'>
    <FaEnvelope className='icons'/>
    <a href='mailto:elonreagnanp@gmail.com' className='footer-icons'> cdfmumiaseast@ngcdf.go.ke</a>
        </div>
        <div className='contacts'>
    <Link to="/contacts" className='footer-icons'>    <FaMapMarkerAlt  className='icons' />  P . O. BOX 50106 Shianda, Kakamega</Link>
      
        </div>

</div>
<div className='nav-bot'>
<div className='logo1'>
<img src="http://localhost:5000/uploads/cgd2.jpeg" alt='logo'/>
</div>
<div className='logo-middle'>

<div className='main-pages'>
<Link to="/home" className='links'>HOME</Link>
</div>

<div className='main-pages'>
<Link to="/herittage" className='links'>ABOUT</Link>
<div className='sub-pages'>
    <Link to="/herittage">Herittage</Link>
    <Link to="/wards">Wards</Link>
    <Link to="/latest">Latest News</Link>
</div>
</div>

<div className='main-pages'>
<Link to="/student" className='links'>BURSARIES</Link>
<div className='sub-pages'>
    <Link to="/welcome">Eligibilty & Application</Link>
    <Link to="/student">Students Portal</Link>
    <Link to="/latest">Application Form</Link>
    <Link to="/welcome">Status Tracking</Link>
    <Link to="/welcome">Downloads</Link>
    
</div>
</div>

<div className='main-pages'>
<Link to="/public" className='links'>PUBLIC</Link>
<div className='sub-pages'>
    <Link to="/sign">Signin</Link>
    <Link to="/login">Login</Link>
    <Link to="/mission">Concerns Status</Link>
    <Link to="auth">AuthenticationPage</Link>
</div>
</div>
 

<div className='main-pages'>
<Link to="/about" className='links'>LEARDERSHIP</Link>
<div className='sub-pages'>
    <Link to="/welcome">MPS Profile</Link>
    <Link to="/mission">Staff</Link>

</div>
</div>

<div className='main-pages'>
<Link to="/about" className='links'>PROJECTS</Link>
<div className='sub-pages'>
    <Link to="/welcome">Completed</Link>
    <Link to="/mission">On-going</Link>
    <Link to="/latest">Up-coming</Link>
</div>
</div>

<div className='main-pages'>
<Link to="/about" className='links'>TENDERS</Link>
<div className='sub-pages'>
    <Link to="/welcome">Welcome</Link>
    <Link to="/mission">Mission and Vission</Link>
    <Link to="/latest">Latest News</Link>
</div>
</div>
<div className='main-pages'>
<Link to="/about" className='links'>DOWNLOADS</Link>
<div className='sub-pages'>
    <Link to="/mission">Reports</Link>
    <Link to="/latest">Forms and Policy</Link>
    <Link to="/welcome">Policy</Link>
</div>
</div>

<div className='main-pages'>
<Link to="/contacts" className='links'>CONTACTS</Link>

</div>
</div>

<div className='logo2'>
<button>Admin</button> 
<img src="http://localhost:5000/uploads/cdf1.jpeg" alt='logo'/>
</div>

</div>
    </div>
  )
}

export default Navbar
