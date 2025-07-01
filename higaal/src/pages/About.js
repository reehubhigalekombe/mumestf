
import "../styles/herittage.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
function About() {

  const images = [
    {
      src: "https://mumestbck.onrender.com/uploads/n9.jpeg",
      title: "Nabongo the King",
      link: "https//orbitech/"
  },
  {
    src: "https://mumestbck.onrender.com/uploads/n8.jpeg",
    title: "Nabongo the King",
    link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n6.jpeg",
  title: "Nabongo the King",
  link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n11.jpeg",
  title: "Nabongo the King",
  link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n12.jpeg",
  title: "Nabongo the King",
  link: "https//orbitech/"
},
{
  src: "https://mumestbck.onrender.com/uploads/n1.webp",
  title: "Nabongo the King",
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
<p>Climate Change and Health is the acceptance of increased changes Earth’s climate 
  that is affecting the human health in impactful manner. This is caused by increased shifts in global average temperatures and
   weather patterns resulting to significant emerging human health complications.</p>
<p>In recent years, quite a number of health challenges have been on rise as a result of 
  Climate Change, making it a human health issue. These essay will discuss the challenges 
  encountered in addressing this emerging issue, roles of International
   Organizations and way in which the political factors influence the policy response</p>
   <p>Diverse measures and actions have been formulated to by professionals and
     organizations, they have proved to be beneficial in reducing the effects climate change on
      public health. The key challenges include: - inadequate funding, due to minimal resources 
      available. There is little investment in climate resilient health systems programs by governments. 
      Ignorance among the public, no sensitization programs thus public remain unaware
     of the human health implications of climate change (Kotcher et al., 2021)</p>
     <p>International Organizations have and are still playing a significant role in addressing this 
      global health issue. This is done through enhancing scientific research and sharing of information. 
      They conduct research on protecting human health from climate changes and asses risk 
      (Campbell-Lendrum et al., 2023). They also formulate policies/frameworks for both climate 
      change and health sustainability and champion for its implementation. They are involved in 
      apacity building by helping nations g
      lobally to formulate climate change and health policies and strategies via training. 
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
      
    </a>
  )) }

       <div className="view">
<button><Link to="/herri"
style={{
  color: "white",
textDecoration: "none"
}}>VIEW MORE <FaArrowAltCircleRight/></Link></button>  
</div>

</div>
    </div>
  )
}

export default About;
