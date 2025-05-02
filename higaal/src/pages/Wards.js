import React from 'react'
import "../styles/wards.css";
import { Link } from 'react-router-dom';


function Wards() {
  return (
    <div className='wards'>
      <div className='wards-top'>
<div className='map-left'>
<p> Mumias East Constituency is one of the twelve constituencies in Kakamega County.
   It has a population of approximately  116,851 [2019] – Census, area by size is 150.2 km² with

778.0/km² Population Density [2019] and 1.5% Annual Population Change [2009 → 2019].  its is further subdivided into three wards sections i.e. Lusheya-lubinu, Malaha-isongo-makunga, East WangaThe primary economic activity in Mumias East is Sugarcane Production with 
Mumias Sugar, a major sugar producer. There are several clans in the Constituency i.e. Abakolwe, Abashitsetse, Abatobe, Abamurono, Abang'ale, Abatura e.t.c. 
<em><Link to="/eastwanga" 
style={{color: "red", textDecoration: "none", fontWeight: "bold"}}>Read More.......</Link></em>
</p>
</div>
<div className='map-right'>
  <img  src="http://localhost:5000/uploads/mumiase.png" alt='map'/>

</div>
      </div>
      <div  className='wards-bot'>
      <div>
  <h4>   Approx. Population : 100956,</h4>
        <h4>Approx. Area in square km: 135.5,</h4>
        <p>Wards –  Lusheya-lubinu, Malaha-isongo-makunga, East Wanga</p>
  </div>
          
      <table className='wards-table'>
        <thead>
          <tr>
    <th>Ward name</th>
    <th> 	Approx. Population</th>
    <th>Approx. area in square km</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <th>East Wanga</th>
            <th>32343</th>
            <th>35.1</th>
          
            </tr>
            <tr>
            <th>Malaha-isongo-makunga</th>
        
              <th>31004</th>
              <th>43.4</th>
            </tr>

            <tr>
            <th>Lusheya-lubinu</th>
              <th> 	37609</th>
              <th>57.0</th>
            </tr>
            
          </tbody>
      
      </table>
      </div>
      </div>

    
  )
}

export default Wards
