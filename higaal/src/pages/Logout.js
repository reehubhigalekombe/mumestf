import{useEffect}  from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        const logoutUser = async () => {
            try {
                await axios.post("http://localhost:5000/api/auth/logout",
                    {}, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                console.log("Logout Success");
            }catch(err) {
                console.error("Log out Failed", err.response?.data || err.message);
            }  finally {
                localStorage.removeItem("token");
                sessionStorage.removeItem("token");
                localStorage.removeItem("remeberedEmail");
                delete axios.defaults.headers.common["Authorization"];
                navigate("/login")
            }
        };logoutUser();
    }, [navigate]
);
  return null
}

export default Logout
