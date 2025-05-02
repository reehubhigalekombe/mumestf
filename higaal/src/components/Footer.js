import React from 'react'
import "../styles/footer.css";
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import  X  from '@mui/icons-material/X';
import Facebook  from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top'>
<div className='social-media'>
    <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' ><Instagram className='socio-icons' /></a>
    <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer'><Facebook className='socio-icons'/></a>
    <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' ><X className='socio-icons'/></a>
    <a href='https://x.com/HigalEkomb52804' target='_blank' rel='noopener noreferrer' ><YouTube className='socio-icons' /></a>
</div>
      </div>
      <div className='footer-bot'>
      <div className='partion'>
<h2>Contact us </h2>
<div className='footer-contacts'><FaPhoneAlt className='icons'/>
    <a href='tel:+254742106109' className='footer-icons'>+254742106109</a>
        </div>
<div className='footer-contacts'>
      <FaEnvelope className='icons'/>
         <a href='mailto:elonreagnanp@gmail.com' className='footer-icons'> info@mumiaseast.go.ke</a>
</div>
<div className='footer-contacts'> <FaMapMarkerAlt  className='icons' />
        P . O. BOX 50106 Shianda, Kakamega</div>
<div className='footer-contacts'>Open  24hrs - 24/7</div>
     
</div>
<div className='partion1'>
<h2>QUICK LINKS</h2>
<Link to="/home" className='footer-links'>Home</Link>
<Link to="latest" className='footer-links'>Latest News</Link>
<Link to="tenders" className='footer-links'>Tenders</Link>
<Link to="downloads" className='footer-links'>Downloads</Link>

</div>
<div className='partion2'>
<div className='footer-right'>
          <a href='http://www.parliament.go.ke/the-national-assembly/hon-salasya-peter-kalerwa'><img src="http://localhost:5000/uploads/pa1.jpeg" alt='pa'/></a>
          <h4>Parliament of Kenya</h4>
          </div>
<div className='footer-right'>
      <a href='http://www.parliament.go.ke/the-national-assembly/hon-salasya-peter-kalerwa'><img src="http://localhost:5000/uploads/pt1.jpg" alt='pa'/></a>
      <h4>  Hon. Peter Kalerwa Salasya (Incumbent)
      </h4>
      </div>
</div>
      </div>
      <div className='bot-down'>
<hr className='horizontal'/>
<h4>All Rights Reserved &copy;mumiaseast.go.ke</h4>
<h4>Designed and Developed by G-Space Technologies - Higal &copy;2025</h4>
</div>
    </div>
  )
}

export default Footer;







