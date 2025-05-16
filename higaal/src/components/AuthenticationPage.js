import React from 'react';

import "../styles/auth.css";
import { Link } from 'react-router-dom';

function AuthenticationPage() {

        const labels = ["Bussaries", "Student Portal", "Tenders", "Downloads", "Projects", "Herittage", "Home" ]
        const positions  = [
            {
                top: "-20px", left: "100px",  link: "/home"
            }, 
            {
                top: "-10px", left: "210px", link: "/home"
            }, 

            {
                top: "140px", left: "210px", link: "/home"
            }, 
            {
                top: "200px", left: "90px", link: "/home"
            }, 
            {
                top: "140px", left: "-20px", link: "/home"
            }, 
            {
                top: "-5px", left: "-10px", link: "/home"
            }, 
            {
                top: "90px", left: "95px", link: "/home"
            }, 
        ]
  return (

    <div className='auth-page'  >
        <div className='auth-left'>
       <div className='mylabels'>
        {positions.map((pos, index) => (
            <a key={index} href={pos.link}
            className={`hex ${index === 6 ? 'center' : ''}`}
            style={{top: pos.top, left: pos.left}}>  <span>
            {labels[index] } 
        </span>
</a>
        ))}
       </div>

        </div>
        <div className='auth-right'>
        <button>
            <Link to="/sign">Register</Link>
        </button>

        <button>
            <Link to="/login">Login</Link>
        </button>
        </div>
    </div>
  )
}
export default AuthenticationPage
