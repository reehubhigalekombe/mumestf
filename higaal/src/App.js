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
import Contacts from "./pages/Contacts";
import HerittageImages from "./pages/HerittageImages";
import AuthenticationPage from "./components/AuthenticationPage";
import PrivateRoute from "./components/PrivateRoute";
import Public from "./pages/Public";
import FloatingButton from "./pages/FloatingButton";
import Testimonies from "./pages/Testimonies";
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/auth"  element={<AuthenticationPage/>}/>
<Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
<Route path="/mission" element={<Mission/>}/>
<Route path="/contacts" element={<PrivateRoute><Contacts/></PrivateRoute>}/>
<Route path="/herittage" element={<Herittage/>}/>
<Route path="/wards" element={<PrivateRoute><Wards/></PrivateRoute>}/>
<Route path="/latest" element={<Latest/>}/>
<Route path="/testmonies" element={<Testimonies/>}/>
<Route path="/herri" element={<HerittageImages/>}/>
<Route path="/student" element={<Student/>}/>
<Route path="/public" element={<Public/>}/>

      </Routes>
      <FloatingButton/>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
