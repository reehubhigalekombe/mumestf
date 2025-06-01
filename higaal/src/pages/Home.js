import "../styles/home.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StarIcon from "@mui/icons-material/Star"

function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
     <div className='home-top'>
      <div className="home-top1">
       <div className="home-top1l">
        <h1>Hellow World</h1>
       </div>

        <div className="home-top1r">
          <div className='cirlces-container'>
            <div className='circle'> 26+</div>
            <div className='title'>
              <a href='/home'>Projects</a>
            </div>
          </div>
          <div className='divide'/>

          <div className='cirlces-container'>
            <div className='circle1'>
              501+
            </div>
            <div className='title'>
            <a href='/home'>Bussaries</a>
            </div>
          </div>
          <div className='divide'/>
          <div className='cirlces-container'>
            <div className='circle2'> 15+</div>
            <div className='title'>
              <a href='/home'>Tenders </a>
            </div>
          </div>

       </div>

      </div>
    <div className="home-top2">
      <div className="home-top2t">
<div className="home-wrap" >
  <div className="home-box"><h1>Hello world</h1></div>
    <div className="home-box"><h1>Hello world</h1></div>
      <div className="home-box"><h1>Hello world</h1></div>
        <div className="home-box"><h1>Hello world</h1></div>

</div>
      </div>
           <div className="home-top2b">
          <div className="top-wrap">
<div className="top-middle1">
<h1>Hello Reagan</h1>
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
    </div>

    </div>

    </div>
        <div className="view">
<button><Link to="/home"
style={{
  color: "white",
textDecoration: "none"
}}
>VIEW MORE &#9654;</Link></button>
        </div>
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
        
         <div className="home-bottom1">
          <h1>Hello World</h1>
        </div>
        <form>
            <fieldset>
              <legend>
                <img src="http://localhost:5000/uploads/pt1.jpg"  alt='testimony'/>
              </legend>
              <h1> Ayub Salasya(<em>Resident</em>)</h1>
              <p>"Mumias East Adminstration has been a bed rock in many dimensions to its residents, essentilal projects to benefit the locals are 
                launched across the constituency"</p>
                <p>{[...Array(4)].map((_, index) => (<StarIcon style={{color: "rgb(129, 222, 129)"}}/>

                ))}  </p>
            </fieldset>
            <fieldset>
              <legend>
                <img src="http://localhost:5000/uploads/luni.jpg"  alt='testimony'/>
              </legend>
              <h1>Irene Mueni (<em> College Student</em>)</h1>
              <p><strong><em style={{fontWeight: "bold", fontSize: "20px"}}>THANKS MHESH🙌💚</em></strong>My College education
               has been made pretty easy from bursaries I applied and they went sucess</p>
                          <p>{[...Array(4)].map((_, index) => (<StarIcon style={{color: "rgb(129, 222, 129)"}}/>

                ))}  </p>
            </fieldset>
            <fieldset>
              <legend>
                <img src="http://localhost:5000/uploads/Ken.jpg"  alt='testimony'/>
              </legend>
              <h1>Ken Gitau (<em>Ward Amdinstrator</em>)</h1>
              <p>Mumias East is doing <strong ><em style={{color: "blue"}}>TREMENDOUSLY</em></strong>
               good in terms of implimenting ground breaking project!!🚀🚀🚀</p>
                          <p>{[...Array(4)].map((_, index) => (<StarIcon style={{color: "rgb(129, 222, 129)"}}/>

                ))}  </p>
            </fieldset>        
          </form>
          <button>
            <Link to="/testi" style={{color: "green", textDecoration: "none", fontSize: "16px"}}>View all</Link>
              </button>  
      </div>
    </div>
  )
}
export default Home
