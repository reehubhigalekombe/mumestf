import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter, FaTiktok,} from "react-icons/fa6";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {FaMapMarkerAlt} from "react-icons/fa";
import "../styles/contacts.css" 

function Contacts() {
  return (
    <div className='contact'>
<div className="contact-top">
<h1>Hello Reagan</h1>
</div>

<div className="contact-middle">
<div className="box" style={{backgroundColor: "transparent"}}>
<FaMapMarkerAlt   style={{color: "red", fontSize: "50px"}}/>
<div>
  <h1>Location</h1>
  <p>P . O. BOX 50106 Shianda, Kakamega</p>
</div>
</div>

<div className="box" >
<h1>hello Reagan</h1>
</div>

<div className="box email-staff" style={{backgroundColor: "transparent"}}>
    <MailOutlineIcon style={{color: "red", fontSize: "50px"}}/>
<div className="email-content">
  <h1 className="header3">Email Address</h1>
<p>cdfmumiaseast@ngcdf.go.ke</p>
</div>
  
</div>

<div className="box">
<h1>hello Reagan</h1>
</div>

<div className="box" style={{backgroundColor: "transparent"}}>
<h1>hello Reagan</h1>
</div>


<div className="box">
<div><h1 
style={{textAlign: 'center', fontSize: "18px", fontWeight: "lighter"}}
>Our Social Media Platforms</h1></div>
<div className="socia-medias">
  <a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener  noreferrer" ><FaInstagram social-icon/></a>
<a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener  noreferrer" ><FaFacebook/></a>
<a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener  noreferrer" ><FaXTwitter/></a>
<a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener  noreferrer" ><FaYoutube/></a>
<a href="https://x.com/HigalEkomb52804" target="_blank" rel="noopener  noreferrer" ><FaTiktok/></a>
</div>
<div>

</div>
</div>

</div>

<div className="contact-bottom">
  <iframe 
    title="Mumias East Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.19814928445!2d34.48974872924843!3d0.31974660540722893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178027bc1a1fe5ad%3A0x775577297869e788!2sMumias%20East%20NG-CDF%20Office!5e0!3m2!1ssw!2ske!4v1747672198874!5m2!1ssw!2ske" 
  width="1250" height="500" 
  style={{border:0}}
  allowfullscreen="" loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
    </iframe>"

</div>

    </div>
  )
}

export default Contacts
