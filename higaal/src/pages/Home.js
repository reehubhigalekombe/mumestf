import "../styles/home.css";
import { Link } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import { FaArrowAltCircleRight } from "react-icons/fa";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EditNoteIcon from '@mui/icons-material/EditNote';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Home() {
  return (
    <div className='home'>
     <div className='home-top'>
      <div className="home-top1">
       <div className="home-top1l">
        <h1>Hellow World</h1>
       </div>

        <div className="home-top1r">
      

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
          <Link>
         <FaArrowAltCircleRight className="forward"  />
         </Link>
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
<button> <Link to="/home" style={{
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
<img src="http://localhost:5000/uploads/pt2.jpg" alt="news" />
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
<img src="http://localhost:5000/uploads/p3.jpeg" alt="news" />
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
<img src="http://localhost:5000/uploads/p4.jpg" alt="news" />
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
