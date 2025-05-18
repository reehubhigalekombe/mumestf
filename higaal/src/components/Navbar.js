import {useState} from 'react';
import "../styles/navbar.css"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const[menuOpen, setMenuOpen] = useState(false);
    const[openSubMenuIndex, setOpenSubMenuIndex]  = useState(null);
const toggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex ===  index ? null : index)
};

    const mainPages = [
        {
            title: "HOME",
            link: "/home", 
            subpages: [

            ]
        },
        {title: "ABOUT",
            link: "/herittage",
            subpages: [
                {
                    title: "Herittage", link: "/herittage"
                },
                {
                    title: "Wards", link: "/wards"
                },
                {
                    title: "Latest News", link: "/latest"
                }
            ],
        },
        {
            title: "BURSARIES", link: "/student",
            subpages: [
                {
                    title: "Eligibility & Application", link: "/welcome"
                },
                {
                    title: "Students Portal", link: "/student"
                }, {
                    title: "Application Form", link: "/welcome"
                },
                {
                    title: "Status Tracking", link: "/welcome"
                },
                {
                    title: "Downloads", link: "/download"
                }

            ]
        },
        {
            title: "PUBLIC", link: "/public",
            subpages: [
                {
                    title: "Public Portal", link: "/public"
                }
            ]
        },
             {
            title: "LEADERSHIP", link: "/leadership",
            subpages: [
                {
                    title: "MPS PROFILE", link: "/profile"
                }
            ]
        },
         {
            title: "PROJECTS", link: "/projects",
            subpages: [
                    {
                    title: "Completed Projects", link: "/completed"
                },
                     {
                    title: "Commenced Projects", link: "/commense"
                },
            ]
        },
         {
            title: "TENDERS", link: "/tenders",
                  subpages: [

            ]
        },
         {
            title: "DOWNLOADS", link: "/dowloads",
                  subpages: [

            ]
        },
         {
            title: "CONTACTS", link: "/contacts",
                  subpages: [

            ]
        
        },

    ]

  return (

    <div className='navbar'>
<div className='nav-top'>

    <div className='contacts'>
  
    Helpline: 
    <FaPhoneAlt className='icons'/>
    <a href='tel:+254742106109' className='footer-icons'>+254742106109</a>/
        <a href='tel: +25436941383' className='footer-icons'>+25436941383</a>
    </div>

    <div className='contacts'>
    <FaEnvelope className='icons'/>
    <a href='mailto:elonreagnanp@gmail.com' className='footer-icons'> cdfmumiaseast@ngcdf.go.ke</a>
        </div>
        <div className='contacts'>
    <Link to="/contacts" className='footer-icons'>    <FaMapMarkerAlt  className='icons' />  P . O. BOX 50106 Shianda, Kakamega</Link>
      
        </div>

</div>
<div className='nav-bot'>
<div className='logo1'>
<img src="http://localhost:5000/uploads/cgd2.jpeg" alt='logo'/>
</div>

<div className='menu-bar'
onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes size={26} /> : <FaBars size={26}  />  }
</div>

<div className={`logo-middle ${menuOpen ? "open" : ""}`}>
    {mainPages.map((page, index) => (
        <div className='main-pages' key={index}  >
            <Link to={page.link} className='links' 
            onClick={(e) => {
                if(page.subpages.length > 0) {
                    e.preventDefault();
                    toggleSubMenu(index)
                }
            } }
            >
{page.title}
            </Link>

            {page.subpages.length > 0 && (
                <div className={`subpages ${
                    openSubMenuIndex === index ? "open" : ""
                }`}
                >
            {page.subpages.map((sub, subIndex) => (
                <Link
                to={sub.link} key={subIndex}               
                >
                {sub.title}
                </Link>
            )
        ) }


                    </div>
            )}

            </div>

    ))}

</div>


<div className='logo2'>
<button>Admin</button> 
<img src="http://localhost:5000/uploads/cdf1.jpeg" alt='logo'/>
</div>

</div>
    </div>
  )
}

export default Navbar
