
import DownloadIcon from "@mui/icons-material/Download"
import "../styles/status.css";
import htmlpdf from "html2pdf.js"

function Status() {
    const handleDownload = () => {
        const element = document.querySelector(".status-bottom");
        const opt = {
            margin: 0.5,
            filename: " Bassary Application Status",
            image: {type: "jpeg", quality: "0.98"},
            html2canvas: {scale: 2},
            jsPDF: {unit: "in", format: "letter", orientation: "landscape"}
        };
        htmlpdf().set(opt).from(element).save()
    }         
    const StudentData = [
         {id: 1,
        name: "Higal Ekombe",
        institution: "Chuka University",
        bussary: "University Bussary",
        year: "FY 2023/2024",
        amount: "15, 500.00",
        status: "Awarded"},
        {id: 2,
        name: "Higal Ekombe",
        institution: "Chuka University",
        bussary: "University Bussary",
        year: "FY 2024/2025",
        amount: "26, 500.00",
        status: "Disbursed"},
         {id: 3,
        name: "Higal Ekombe",
        institution: "Chuka University",
        bussary: "University Bussary",
        year: "FY 2024/2025",
        amount: "-",
        status: "pending"}
    ]
  return (
    <div className='status'>
    <div className='status-top '>
          <h2>Bussary Appication Status</h2>
                 </div>

          <div className="status-bottom" >
        
          <h2>Bussary Appication Status Form  </h2>
          
            <table border="1"cellPadding="5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Institution</th>
                              <th>Bussary Applied</th>
                              <th>Financial Year</th>
                                          <th>Amount Awarded</th>
                                          <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {StudentData.map((cdf) => (
                        <tr key={cdf.id}>
                            <td>{cdf.name}</td>
                            <td>{cdf.institution}</td>
                            <td>{cdf.bussary}</td>
                            <td>{cdf.year}</td>
                            <td>{cdf.amount}</td>
                            <td>{cdf.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleDownload}>
                    <DownloadIcon/>
                 Download
            </button>
          
          </div>
    </div>
  )}
export default Status
