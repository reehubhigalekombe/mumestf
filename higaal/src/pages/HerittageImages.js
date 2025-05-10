import React from 'react'
import "../styles/herittageImg.css"

function HerittageImages() {
    const images = [
        {
            src: "http://localhost:5000/uploads/n1.webp",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n2.webp",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n4.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n6.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n8.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n9.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n11.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n12.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n910.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/pt1.jpg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n1.webp",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n2.webp",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n4.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n6.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n8.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n9.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n11.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n12.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n910.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/pt1.jpg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
        {
            src: "http://localhost:5000/uploads/n11.jpeg",
            title: "Nabongo the King",
            link: "https//orbitech/"
        },
      
    ]
  return (
    <div  className='herittageimg'>
        {
            images.map((item, index) => (
                <a key={index} href={item.link} target='_blank'    rel='noopener noreferrer' className='herittage-item'>   
                <img  src={item.src} alt={item.title}  className='herittage-image'/>
                <div className='image-titles'>
                    {item.title}
                </div>
                </a>
            ))
        }
      
    </div>
  )
}

export default HerittageImages
