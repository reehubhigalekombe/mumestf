import React from 'react'
import "../styles/home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
     <div className='home-top'>
<h1>Hello World</h1>
      </div>

      <div className='home-bottom'>
        <div className='home-botleft'>
        <form>
            <fieldset>
              <legend>
                <img src="http://localhost:5000/uploads/pt1.jpg"  alt='testimony'/>
              </legend>
              <h1> Ayub Salasya(<em>Resident</em>)</h1>
              <p>"Mumias East Adminstration has been a bed rock in many dimensions to its residents, essentilal projects to benefit the locals are 
                launched across the constituency"</p>
            </fieldset>

            <fieldset>
              <legend>
                <img src="http://localhost:5000/uploads/luni.jpg"  alt='testimony'/>
              </legend>
              <h1>Irene Mueni (<em> College Student</em>)</h1>
              <p><strong><em style={{fontWeight: "bold", fontSize: "20px"}}>THANKS MHESH🙌💚</em></strong>My College education has been made pretty easy from bursaries I applied and they went sucess</p>
            </fieldset>

            <fieldset>
              <legend>
                <img src="http://localhost:5000/uploads/Ken.jpg"  alt='testimony'/>
              </legend>
              <h1>Ken Gitau (<em>Ward Amdinstrator</em>)</h1>
              <p>Mumias East is doing <strong ><em style={{color: "blue"}}>TREMENDOUSLY</em></strong> good in terms of implimenting ground breaking project!!🚀🚀🚀</p>
            </fieldset>          
          </form>
          <button ><Link to="/testmonies" style={{textDecoration: "none", 
            ontWeight: "bold", color: "white"}}>Click for More  &rarr;</Link></button>
        </div>
        <div className='home-botright' style={{backgroundImage: `url("http://localhost:5000/uploads/newceo.jpg")`}}>
          <h1> Mumias East:</h1>
          <h1>Kakamega's Finest</h1>
          <p>Our Constituency is a Zero Corruption Zone, this creates an enabling environment for vibrant growth🙌🥳✍️</p>
        </div>        
      </div>
    </div>
  )
}

export default Home
