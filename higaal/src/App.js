import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Herittage from "./pages/Herittage";
import Wards from "./pages/Wards";
import Latest from "./pages/Latest"
import Mission from "./pages/Mission"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Student from "./pages/Student";
import HerittageImages from "./pages/HerittageImages";
import AuthenticationPage from "./components/AuthenticationPage";
import PrivateRoute from "./components/PrivateRoute";
import Public from "./pages/Public";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/authe" element={<AuthenticationPage/>}/>
<Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
<Route path="/mission" element={<Mission/>}/>
<Route path="/herittage" element={<Herittage/>}/>
<Route path="/wards" element={<Wards/>}/>
<Route path="/latest" element={<Latest/>}/>
<Route path="/herri" element={<HerittageImages/>}/>
<Route path="/student" element={<Student/>}/>
<Route path="/public" element={<Public/>}/>

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;


<div className='bot-down'>
<hr className='horizontal'/>
<h4>All Rights Reserved &copy;mumiaseast.go.ke</h4>
<h4>Designed and Developed by G-Space Technologies - Higal &copy;2025</h4>
</div>