
import "../styles/herittage.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Herittage() {

  const images = [
    {
      src: "https://mumestbck.onrender.com/uploads/n9.jpeg",
      title: "Nabongo the King",
      description: "Nabongo Mumia Shiundu was a prince who became 17th King of the Wanga Kingdom in pre-colonial Kenya.",
      link: "https//orbitech/"
  },
  {
    src: "https://mumestbck.onrender.com/uploads/n8.jpeg",
    title: "Nabongo the King",
    description: "Nabongo Mumia Shiundu was a prince who became 17th King of the Wanga Kingdom in pre-colonial Kenya.",
    link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n6.jpeg",
  title: "Nabongo the King",
  description: "Nabongo Mumia Shiundu was a prince who became 17th King of the Wanga Kingdom in pre-colonial Kenya.",
  link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n11.jpeg",
  title: "Nabongo the King",
  description: "Nabongo Mumia Shiundu was a prince who became 17th King of the Wanga Kingdom in pre-colonial Kenya.",
  link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n12.jpeg",
  title: "Nabongo the King",
  description: "Nabongo Mumia Shiundu was a prince who became 17th King of the Wanga Kingdom in pre-colonial Kenya.",
  link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n1.webp",
  title: "Nabongo the King",
  description: "Nabongo Mumia Shiundu was a prince who became 17th King of the Wanga Kingdom in pre-colonial Kenya.",
  link: "https//orbitech/"
},


    
]
  return (
    <div className='herittage'>
<div className='heri1' >
<h1>Our Herritage Our Pride - "ingo ni ingo Abanbefu"</h1>
<h2><em>obulala ni abwene </em></h2>
</div>
<div className='heri-middle'>

<div className='middle1' style={{backgroundImage: `url("https://mumestbck.onrender.com/uploads/mum1.jpg")`}}>

</div>
<div className='middle2' >
<h1>Our Herritage our Pride  <em><strong>"inyingo"</strong></em></h1>
<hr/>
<p>Mumias is named after Nabongo Mumia, the last sovereign king of the Wanga kingdom,
   which was a Luhya kingdom. The town, originally called Lureko, was renamed in his honor. 
   Mumias was the capital of the Wanga 
  kingdom and a significant trading center, particularly known for trade links with the coast. </p>
<p>
      <Link to="/home" style={{textDecoration: "none", color: "red", fontWeight: "bold"}}><em>Read More</em></Link></p>
</div>
<div className='middle3' style={{backgroundImage: `url("https://mumestbck.onrender.com/uploads/mum1.jpg")`}}>

</div>
</div>
<div className='heri2'>
  {images.map((item, index) => (
    <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='herittage-item'>
      <img src={item.src} alt={item.title} className='herittgae-images'/>
      <div className='image-titles'>
        {item.title}
      </div>
        <p className='description'>{ item.description }</p>
      
    </a>
  )) }

  
<button><Link to="/herri"
style={{
  color: "white",
textDecoration: "none"
}}>VIEW MORE <FaArrowAltCircleRight/></Link></button>  


</div>
    </div>
  )
}

export default Herittage;
