
import React from 'react';
import '../styles/contacts.css';


function Contacts() {
  const labels = ["One", "Two", "Three", "Four", "Five", "Six", "Center"];

const positions = [
  { top: "-30px", left: "90px" },   //
  { top: "-10", left: "230px" },      // top right
  { top: "140px", left: "210px" },   // bottom right
  { top: "210px", left: "90px" },   // bottom
  { top: "130px", left: "-20px" },    // bottom left
  { top: "-10", left: "-40px" },       // top left
  { top: "90px", left: "95px" },    // center
];

  return (
    
    <div className='contacts'>
      <div className="hex-container">
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`hex ${index === 6 ? 'center' : ''}`}
          style={{ top: pos.top, left: pos.left }}
        >
          <span>{labels[index]}</span>
        </div>
      ))}
      </div>
     
    </div>
  );
}

export default Contacts;
