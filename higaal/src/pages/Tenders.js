import React, { useState } from 'react'
import "../styles/tender.css";
import { FaSearch } from 'react-icons/fa';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
function Tenders() {
    const[query, setQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search for", query)
    }
  return (
    <div className='tender'>

<div className='tender1'>
<div className='searchbar'>
    <h1 style={{color: "white", fontSize: "3rem"}}>Tenders</h1>
    <form  onSubmit={handleSearch} className='search'>
        <FaSearch 
        style={{
            position: "absolute",
            top: '50%',
            right: "100px",
            color: "grey",
            transform: "translateY(-50%",
            cursor: "pointer",
            fontSize: "16px"
        }}
        />
        <input 
        type='text'
        value={query}
        placeholder='Search for Tender (name, tender id, ocid, PE: )'
        ocChange = {
            (e) => setQuery(e.target.value)          
        }
        style={{
        width: "70%",
        padding: "8px"

    }}
        />
    </form>
</div>
  <div className='tender-buttons'>
    <button><Link style={{color: "white", textDecoration: "none"}}>Eligibility </Link></button>
    <button><Link style={{color: "white", textDecoration: "none"}}>TOR</Link></button>
    <button><Link style={{color: "white", textDecoration: "none"}}>How to Apply</Link></button>
    <button><Link style={{color: "white", textDecoration: "none"}}>Application Form</Link></button>
    <button><Link style={{color: "white", textDecoration: "none"}}>Application Status</Link></button>
        </div>
</div>

<div className='tender2'>
<div className='tender-bar'>
    <Link to="/home" style={{textDecoration: "none", color: "black", fontSize: "14px", backgroundColor: "rgb(129, 222, 129", padding: "8px", borderRadius: "8px"}}>ACTIVE TENDERS</Link>
    <Link to="/home" style={{textDecoration: "none", color: "black", fontSize: "14px"}}>CLOSED TENDERS</Link>
    <Link to="/home"style={{textDecoration: "none", color: "black", fontSize: "14px"}}>RESTRICTED TENDERS</Link>
    <Link to="/home"style={{textDecoration: "none", color: "black", fontSize: "14px"}}>TERMINATED TENDERS</Link>
    <Link to="/home" style={{textDecoration: "none", color: "black", fontSize: "14px"}}>SHORT TERM</Link>
    <Link to="/home" style={{textDecoration: "none", color: "black", fontSize: "14px"}}>ALL TENDERS</Link>
    <Link to="/home" style={{textDecoration: "none", color: "black",
         fontSize: "14px", backgroundColor: "rgb(129, 222, 129", padding: "8px", borderRadius: "8px"}}>SUBCRIBE TO NOTIFICATION </Link>
</div>

</div>
<div className='tender-table'>

<button 
><Link to="/home" style={{display: "flex",
alignItems: "center", gap: "4px",
     textDecoration: "none", color: "black", fontSize: "14px"}}><DownloadIcon/> Download Excel</Link></button>
<form onSubmit={handleSearch}
style={{
    display: 'flex', flexDirection: "row", justifyContent: "flex-start", width: "100%", 
}}
>
    <input
    type='text'
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder='Search for a tender, tender id, ICE PE'

    style={{
        width: "100%",
        padding: "4px",
        fontSize: "0.9rem"

    }}
    />

</form>
</div>
<div className='spreadsheet'>

</div>

</div>

  )
}

export default Tenders
