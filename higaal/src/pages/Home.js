import "../styles/home.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StarIcon from "@mui/icons-material/Star"
function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
     <div className='home-top'>
<div className='home-botright'>
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
<button onClick={ () => navigate("/logout")} className="logout">Logout</button>
<h1>
  <span className="heri"  style={{display: "inline", backgroundColor: "rgb(129, 222, 129)", padding: "0 4px", color: "white"}}>
Testimonials
</span>
</h1>
<hr/>
      </div>
      <div className='home-bottom'>
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
