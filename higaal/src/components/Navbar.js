import {useState, useRef, useEffect} from 'react';
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaHome} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = async () => {
          const token = localStorage.getItem("token");
          if(!token) {
            alert("You are looged out allready")
            navigate("auth");
            return
          }
        try {
    
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/logout`,
                 {}, 
                 {    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                 }
                );
                if(response.status === 200) {
                    localStorage.removeItem("token");
                    sessionStorage.removeItem("token")
                    navigate("/auth");
                    alert("You've logged out Successfully")
                }
        }catch(err) {
            console.error("Logout has failed", err.response?.data || err.message);
            alert("Your logout has failed, Kindly try again later")
        }
    }
    const navbarRef = useRef(null);

    const[menuOpen, setMenuOpen] = useState(false);
    const[openSubMenuIndex, setOpenSubMenuIndex]  = useState(null);
const toggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex ===  index ? null : index)
};
    const mainPages = [
        {title: (<span style={{display: "flex", alignItems: "center", gap: "5px"}}>
                    <FaHome style={{fontSize: "1rem", verticalAlign: "middle", color: "white"}} /> HOME</span>
         ),
            link: "/home",
            subpages: [
            ] },
        {title: "ABOUT",
            link: "/about",
            subpages: [
                {title: "Herittage", link: "/herittage"},

                {
                    title: "Wards", link: "/wards"},
                {title: "Latest News", link: "/latest"}
            ]},
        {title: "BURSARIES", link: "/student",
            subpages: [
                {  title: "Eligibility & Application", link: "/eligibility"  },
                {
                    title: "Students Portal", link: "/portal"
                }, 
                {
                    title: "Bussary Application Status", link: "/status"
                },
            ]
        },
        {
            title: "PUBLIC", link: "/public",
            subpages: [
                {
                    title: "Public Portal", link: "/public"
                },
                  
                   {
                    title: "Forgot Password", link: "/forgot"
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
            title: "DOWNLOADS", link: "/downloads",
                  subpages: [ 
            ]
        },
         {
            title: "CONTACTS", link: "/contacts",
                  subpages: [
            ]  },
    ]
    useEffect(() => {
        const navbarHeight = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty("--navbar-height",
            `${navbarHeight}px`
        );
    }, [])
  return (
    <div className='navbar' ref={navbarRef}>
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
    <Link to="/contacts" className='footer-icons'>    <FaMapMarkerAlt  className='icons' />
      P . O. BOX 50106 Shianda, Kakamega</Link>
      
        </div>

</div>
<div className='nav-bot'>
<div className='logo1'>
<img src="https://mumestbck.onrender.com/uploads/cgd2.jpeg" alt='logo'/>
<button>Admin</button> 
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
                }else {
                    setMenuOpen(false)
                }
            } }  >
{page.title}
            </Link>
            {page.subpages.length > 0 && (
                <div className={`subpages ${
                    openSubMenuIndex === index ? "open" : ""
                }`}   >
            {page.subpages.map((sub, subIndex) => (
                <Link
                to={sub.link} key={subIndex}        
                onClick={() => {
                    setMenuOpen(false);
                    setOpenSubMenuIndex(null)
                }}       
                >
                {sub.title}
                </Link>
            ) ) }
                    </div>
            )}
            </div>
    ))}
</div>
<div className='logo2'>
<button onClick={handleLogout}>Logout</button> 
<img src="https://mumestbck.onrender.com/uploads/cdf1.jpeg" alt='logo'/>
</div>
</div>
    </div>
  )}
export default Navbar
