import React from 'react'
import "../styles/herittage.css";
import { Link } from 'react-router-dom';
function Herittage() {

  const images = [
    {
      src: "http://localhost:5000/uploads/n1.webp",
      title: "Nabongo the King",
      link: "https//orbitech/"
  },
    
]
  return (
    <div className='herittage'>
<div className='heri1' style={{backgroundImage: `url("http://localhost:5000/uploads/mum1.jpg")`}}>
<h1>Our Herritage Our Pride - "ingo ni ingo Abanbefu"</h1>
<h2><em>obulala ni abwene </em></h2>
</div>
<div className='heri-middle'>

<div className='middle1' style={{backgroundImage: `url("http://localhost:5000/uploads/mum1.jpg")`}}>

</div>
<div className='middle2' >
<h1>Our Herritage our Pride  <em><strong>"inyingo"</strong></em></h1>
<hr/>


</div>
<div className='middle3' style={{backgroundImage: `url("http://localhost:5000/uploads/mum1.jpg)`}}>

</div>
</div>
<div className='heri2'>
  {images.map((item, index) => (
    <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='herittage-item'>
      <img src={item.src} alt={item.title} className='herittgae-images'/>
      <div className='image-titles'>
        {item.title}
      </div>
      
    </a>
  )) }

<h4><Link to="/herri"><em>View  more Herritage Images &rarr;</em></Link></h4>

</div>
    </div>
  )
}

export default Herittage
