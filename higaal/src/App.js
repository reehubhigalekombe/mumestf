import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Herittage from "./pages/Herittage";
import Wards from "./pages/Wards";
import Latest from "./pages/Latest"
import Mission from "./pages/Mission";
import Tenders from "./pages/Tenders"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Student from "./pages/Student";
import Contacts from "./pages/Contacts";
import HerittageImages from "./pages/HerittageImages";
import AuthenticationPage from "./components/AuthenticationPage";
import Public from "./pages/Public";
import FloatingButton from "./pages/FloatingButton";
import Testimonies from "./pages/Testimonies";
import Signin from "./pages/Signin";
import Logout from "./pages/Logout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPass from "./pages/ResetPass";
import SpreadSheet from "./pages/SpreadSheet";
import Status from "./pages/Status";
import Application from "./pages/Application";
import Eligibility from "./pages/Eligibility";
import TenderStatus from "./pages/TenderStatus";
import TenderForm from "./pages/TenderForm";
import Downloads from "./pages/Downloads";


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/auth"/>}/>
        <Route path="/auth"  element={<AuthenticationPage/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/mission" element={<Mission/>}/>
<Route path="/contacts" element={<Contacts/>} />
<Route path="/herittage" element={<Herittage/>}/>
<Route path="/tenders" element = {<Tenders/>} />
<Route path="/wards" element={<Wards/>}/>
<Route path="/latest" element={<Latest/>}/>
<Route path="/sign" element={<Signin/>}/>
<Route  path="/logout"  element={<Logout/>}  />
<Route path="/testimonies" element={<Testimonies/>}/>
<Route path="/herri" element={<HerittageImages/>}/>
<Route path="/portal" element={<Student/>}/>
<Route path="/spreadsheet" element={<SpreadSheet/>} />
<Route path="/public" element={<Public/>}/>
<Route path="/forgot" element={<ForgotPassword/>} />
<Route path="/reset-password/:token" element={<ResetPass/>} />
<Route path="/status" element={<Status/>}/>
<Route path="/application" element={<Application/>}/>
<Route path="/eligibility" element={<Eligibility/>} />
<Route path="/tenderstatus" element={<TenderStatus/>} />
<Route path="tform" element={<TenderForm/>} />
<Route path="/downloads" element={<Downloads/>} />
      </Routes>
      <FloatingButton/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
