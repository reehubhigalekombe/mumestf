import "../styles/home.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import { FaArrowAltCircleRight } from "react-icons/fa";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EditNoteIcon from '@mui/icons-material/EditNote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaSearch } from "react-icons/fa";


function Home() {
  const[query, setQuery] = useState("")
  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Serch for our Services", query)
  }
  return (
    <div className='home'>
     <div className='home-top'>
      <div className="home-top1">
       <div className="home-top1l">
       </div>
        <div className="home-top1r">
          <div className="right1">
           <form onSubmit={handleSearch}>
          <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for our Services........."
          />
          <FaSearch 
             style={{position: "absolute", top: '23.2%', right: "130px", color: "grey",  transform: "translate(-50%",  cursor: "pointer",  fontSize: "16px" }}
          />
         </form>
         </div>
          <div className="circles">
<div className="circle">
  <div><Link to="/eligibility" style={{textDecoration: "none", color:"white", fontSize: "15px"}}>Bursaries</Link></div>
</div>
<div className="divide"></div>
<div className="circle1">
<div><Link to="/tenders" style={{textDecoration: "none", color:"white", fontSize: "15px"}}>Tenders</Link></div>
</div>
<div className="divide"></div>
<div className="circle2">
<div><Link to="/latest" style={{textDecoration: "none", color:"white",  fontSize: "15px"}}>Latest</Link></div>
</div>
          </div>
         
         <div className="right2">
<h2>Helping you to find </h2>
<h1>Access to our NG-CDF Services for a trasformative Mumias East  and its Jurisdiction</h1>
          </div>
         <div className="right3">
          <button><Link to="/sign"  style={{textDecoration: "none", color:"white"}}>Signin</Link></button>
            <button><Link to="/login"  style={{textDecoration: "none", color:"white"}}>Login</Link></button>
       <button><Link to="/login"  style={{textDecoration: "none", color:"white"}}>Subscribe</Link></button>
         </div>
       </div>
      </div>
    <div className="home-top2">
      <div className="home-top2t">
<div className="home-wrap" >
<div className="home-box">
  <CampaignIcon style={{color: "white", fontSize: "5rem"}}/>
         <h4>Engagements Held</h4>
         <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
         }}>
          <Link>
         <FaArrowAltCircleRight className="forward"  />
         </Link>
         </div>
</div>
 
      <div className="home-box">
        <EditNoteIcon style={{color: "white", fontSize: "5rem"}}/>
         <h4>Submit your Concerns Here</h4>
         <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
         }}>
          <Link>
         <FaArrowAltCircleRight className="forward"  />
         </Link>
         </div>
      </div>
         <div className="home-box">
        <YouTubeIcon style={{color: "white", fontSize: "5rem"}}/>
         <h4>Our Story. Watch Now!!</h4>
         
         <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
         }}>
          <Link>
         <FaArrowAltCircleRight className="forward"  />
         </Link>
         </div>
    </div>
        <div className="home-box">
            <HelpOutlineIcon style={{color: "white", fontSize: "5rem"}}/>
         <h4>FAQs</h4>
         <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
         }}>
          <Link><FaArrowAltCircleRight className="forward"  /></Link>
         </div>
        </div>
</div>
      </div>
           <div className="home-top2b">
          <div className="top-wrap">
<div className="top-middle1">
<div 
style={{
  flex: 3,
  display: "flex",
  flexDirection: "column",
  paddingLeft: "10px",
  color: "white"
}}
>
  <h1>Access Bussaries allocation, Status and Disbursment<br/>
  <h2 style={{
    fontSize: "22px",
    fontWeight: "lighter"
  }}>Equity and Transparacy in your Education Funding</h2>
  </h1>

</div>
<div  
style={{
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  paddingRight: "20px"
}}
>
<button style={{padding: "8px", fontWeight: "bold"}}> <Link to="/eligibility" style={{
  color: "black",
  textDecoration: "none",
  fontWeight: "lighter"
}}
>ACCESS NOW <FaArrowAltCircleRight className="forward"  /></Link></button>
</div>
          </div>      
         <div className="top-middle2">
<h1>Latest Updates</h1>
          </div>             
          </div>     
      </div>
      </div>
      </div>
      <div className='home-bottom'>
        <div className="home-bottom1">
<div className="bottom-wrap"> 
  <div className="bottom-box">
    <div className="img-cont">
<img src="https://mumestbck.onrender.com/uploads/pt2.jpg" alt="news" />
    </div>
    <div className="news-cont">
<Link to="/home" className="link-container">
Public Service Commission Chairperson Amb. Anthony Muchiri has called upon authorized officers Amb. Anthony Muchiri has called 
</Link>
<p>Public Service Commission Chairperson Amb. Anthony Muchiri has called upon authorized officers in…</p>
<Link to="/home" className="link-container1">Read More &rarr;</Link>
    </div>
  </div>
    <div className="bottom-box">
     <div className="img-cont">
<img src="https://mumestbck.onrender.com/uploads/p3.jpeg" alt="news" />
    </div>
    <div className="news-cont">
<Link to="/home" className="link-container">
Public Service Commission Chairperson Amb. Anthony Muchiri has called upon authorized officers Amb. Anthony Muchiri has called 
</Link>
<p>Public Service Commission Chairperson Amb. Anthony Muchiri has called upon authorized officers in…</p>
<Link to="/home" className="link-container1">Read More &rarr;</Link>
    </div>
    </div>
      <div className="bottom-box">
     <div className="img-cont">
<img src="https://mumestbck.onrender.com/uploads/p4.jpg" alt="news" />
    </div>
    <div className="news-cont">
<Link to="/home" className="link-container">
Public Service Commission Chairperson Amb. Anthony Muchiri has called upon authorized officers Amb. Anthony Muchiri has called 
</Link>
<p>Public Service Commission Chairperson Amb. Anthony Muchiri has called upon authorized officers in…</p>
<Link to="/home" className="link-container1">Read More &rarr;</Link>
    </div>   </div></div>
        <div className="view">
<button><Link to="/home"
style={{
  color: "white",
textDecoration: "none"
}}>VIEW MORE <FaArrowAltCircleRight/></Link></button>  </div>
        </div>
 <div className="home-bottom2">
       <div className="home-bottom2l">
<h1 style={{
  color: "white"
}}>    Upcoming Events </h1>
<div className="opps">
<p>Opps!! It looks like there are no events schelduled right now. Kindly check with us later for updates</p>
</div>
       </div>
         <div className="home-bottom2r">
       <div className="bottom-right1">
        <h1>Diversify our Opportunitied and Programs</h1>
        </div>
       <div className="bottom-right2">
<div className="side">
  <h2>Youth Empowerment  Promgrams</h2>
  <ul>
    <li>Boda Boda Khunjira</li>
        <li>Five Start Loans</li>
            <li>Nispoort Nisome</li>
                <li>Skills Initiaves</li>
                    <li>Talents Nature Group</li>
  </ul>
</div>
<div className="side">
<h2>Wards Development Initiatives</h2>
 <ul>
       <li>Ni  Support Nisome</li>
    <li>Mandeleo Kwa Wanawake</li>
        <li>Niinue Chama</li>
            <li>Mama mboga</li>
                <li>Linda Mama</li>   
  </ul>
</div>
       </div>
       </div>
        </div>
        
      </div>
    </div>
  )}
export default Home
