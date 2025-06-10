import React from 'react';
import "../styles/tenderform.css";
import  html2pdf  from 'html2pdf.js';
import DownloadIcon from "@mui/icons-material/Download"
function TenderForm() {

    const handleDownload = () => {
        const element = document.querySelector(".tender-form");
        const opt = {
            margin: "0.5",
            filename: "Tender Application",
            image: {type: "jpeg", quality: "0.98"},
            html2canvas: {scale:2},
            jsPDF: {unit: "in", format: "letter", orientation: "landscape"}
        }
        html2pdf().set(opt).from(element).save()
    }
  return (
    <div className='tender-form'>
<form>
    <h1 style={{
                fontSize: "1.8rem",
                textAlign: "center",
                marginBottom: "4px"
             }}>TENDER APPLICATION FORM</h1>
    <fieldset>
   <div className='profile-layout'>
        <div className='profile-detail'>
         <label htmlFor='aplicantName'>Applicant Name</label>
<input
type='text'
name='applicantName'
placeholder='Applicant Name'
required
 />
       </div>

       <div className='profile-detail'>
        <label htmlFor='kra'>Applicant KRA PIN</label> 
        <input 
        type='text' name='kra' placeholder='Applicant KRA PIN' required

        />
       </div>
              <div className='profile-detail'>
        <label htmlFor='tender'>Tender Name</label> 
        <input 
        type='text' name='tender' placeholder='Tender Name' required

        />
       </div>
           <div className='profile-detail'>
        <label htmlFor='tender'>Tender No./OICD</label> 
        <input 
        type='number' name='tender' placeholder='Tender No./OICD' required

        />
       </div>
   </div>
    </fieldset>
</form>
        <button onClick={handleDownload}>
            <DownloadIcon/>
            Download
        </button>
    </div>
  )
}

export default TenderForm
