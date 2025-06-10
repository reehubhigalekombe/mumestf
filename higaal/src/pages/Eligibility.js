import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/eligibility.css"
function Eligibility() {
  return (
<div className='eligibility'>

    <div  className='eligibility1'>
           <h1>Mumias East NG-CDF Bursary Fund FY 2025/2026 Application Form Portal</h1>
    </div>
    <div className='eligibility2'>
<p>Are you a student in need of funding and currently reside in Mumias East Constituency?  Mhesh has GAT You COVERED!! <br/>
           Applications for NG-CDF bursary funding for FY 2025/2026 is ongoing and will end on 20th July.</p>
           <p>Mumias East NG-CDF Department of Education seeks to offer Bursary funding to her residents. 
            The program led by Mhesh himself is targeted at continuing Secondary, University, Polytechnic and College students, etc.</p>
    </div>
    <div className='eligibility3'>
<h1 style={{fontSize: "1.5rem"}}>Requirements for Mumias East Bursary Fund Fy 2025/2026 </h1>
<p style={{color: " rgb(130, 128, 128)", fontSize: "1.3rem"}}>In oder to qualify for our bursary the following eligibility criteria must be met: -</p>
<ul  style={{fontSize: "1.2rem", lineHeight: "1rem"}}>
    <li> Applicant must be residing in Mumias East</li>
       <li> He or she must have a valid National Identification Card or Birth Certificate(for Secondary School Bursary).</li>
          <li> Candidate must be either a continuing student with a valid admission lette.</li>
             <li> Ability to express self effectively is necessary.</li>
               
</ul>
<h1  style={{fontSize: "1.5rem"}}>How to Apply</h1>
<p  style={{color: " rgb(130, 128, 128)", fontSize: "1.3rem"}}>
    You can Apply the Bussary online  by first Sign In, Login and navigate to the Bussaries Page then Student Portal and Click the application
    button to naviagte online Application form. Carefully fill and complete the form , then submit 
</p>
   <button><Link to="/portal" style={{textDecoration: "none", color:"white"}}>Student Portal</Link></button>
   <p  style={{color: " black", fontSize: "1.3rem"}}>Or</p>
   <p  style={{color: " rgb(130, 128, 128)", fontSize: "1.3rem"}}>Download the Application Form from the
     Student Portal, fill all the field and Submit the form to the your Area Chief office collection <e style={{color: "black"}}><strong>8.00am to 5.00pm until Monday, 20th January 2025.</strong></e></p>

     <h1  style={{fontSize: "1.5rem"}}><em>Key Deatails to Note:</em></h1>
     <ul>
        <li> Upon applying ensure you provide all the key information needed correctly.</li>
                <li> Avoid submitting application form multiple times.</li>
                        <li> Ensure you provide a valid admission letter</li>
                                <li> For Physical submisisons, kindly attach all required credentials as indicated</li>                                    
     </ul>
     <h3>This is a call to whom it may concern to apply for Mumias  East NG-CDF 
        Bursary Funds application for FY 2025/2026 and we are looking forward that the guidelines provided in this article has been helpful.</h3>
    </div>

    </div>
  )
}

export default Eligibility
