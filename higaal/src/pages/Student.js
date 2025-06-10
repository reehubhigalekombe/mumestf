import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../styles/portal.css"
function Student() {
  return (
    <div className='portal'>
<div className=' portal-top'>
<h1>Student Portal</h1>
</div>
<div className='portal-middle'>
  <Link to="/home"><FaHome style={{color: "white"}}/></Link>
<span className="my-dot"></span>
   <h2>Student Portal</h2>
</div>
<div className='portal-bottom'>
  <h2>Student Portal for Bussary Application</h2>
  <ul>
    <li> University, College, Secondary School Students  and Polytechnich Trainee Bussaries Available</li>
        <li> For online application, kindly make sure yu have signed in for your profile to be captured before filling the online Application form.</li>
            <li> You can also Download the Bussary Application Form online and fill the field provided for Physical Submission</li>
  </ul>

</div>
<div className='portal-bottom2'>
  <button><Link to="/sign"  style={{textDecoration: "none", color: "white", fontSize: "18px"}}>Sigin</Link></button>
  <button><Link to="/application" style={{textDecoration: "none", color: "white", fontSize: "18px"}}>Application Form</Link></button>
</div>
    </div>
  )
}

export default Student
