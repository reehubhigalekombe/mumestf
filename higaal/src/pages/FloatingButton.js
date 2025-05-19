import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import "../styles/floating.css"

function FloatingButton() {

    const defaultMessage = "Member Wabolakho!! How can I help you";
    const phoneNumber = "+25442106109";

  return (
    <div className='floatings'>
        <a href={`https:/wa.me/${254742106109}?text=${encodeURIComponent(defaultMessage)}`} 
        target='_blank' rel='noopener noreferrer' 
        ><FaWhatsapp className='floating-icon'/></a>
        <a href={`tel: ${phoneNumber}`} className='anchor'>
            <FaPhone className='floating-icon1'/></a>
    </div>
  )
}

export default FloatingButton
