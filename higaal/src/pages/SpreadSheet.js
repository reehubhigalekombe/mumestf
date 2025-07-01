
import "../styles/spreadsheet.css";
import {CSVLink} from "react-csv";
import DownloadIcon from "@mui/icons-material/Download"

function SpreadSheet() {
    const  TenderInformation = [
        {id: "MECDF /OT/001/2025-2027", 
            number: "MECDF//OS/001/2025-2027"
             ,descr: "MWIRACHE SPRING WATER SERVICES PROJECT",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Water Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                {id: "MECDF /OT/002/2025-2027", 
            number: "MECDF /OT/023/2025-2027"
             ,descr: "ELUCHE-MUSANGO-KHABAKAYA ROAD PROJECT",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Road Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                {id: "YEDFB /OS/001/2025-2027", 
            number: "MECDF /OT/001/2025-2027"
             ,descr: "ST. PETERS KHABAKAYA SECONDARY SCHOOL (5 CLASSROOMS, 4 PIT LATRINE AND BOREHOLE PROJECTS",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Road Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                  {id: "YEDFB /OS/001/2025-2027", 
            number: "MECDF /OT/001/2025-2027"
             ,descr: "ST. PETERS KHABAKAYA SECONDARY SCHOOL (5 CLASSROOMS, 4 PIT LATRINE AND BOREHOLE PROJECTS",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Road Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                 {id: "MECDF /OT/001/2025-2027", 
            number: "MECDF//OS/001/2025-2027"
             ,descr: "MWIRACHE SPRING WATER SERVICES PROJECT",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Water Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                {id: "MECDF /OT/002/2025-2027", 
            number: "MECDF /OT/023/2025-2027"
             ,descr: "ELUCHE-MUSANGO-KHABAKAYA ROAD PROJECT",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Road Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                {id: "YEDFB /OS/001/2025-2027", 
            number: "MECDF /OT/001/2025-2027"
             ,descr: "ST. PETERS KHABAKAYA SECONDARY SCHOOL (5 CLASSROOMS, 4 PIT LATRINE AND BOREHOLE PROJECTS",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Road Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
                  {id: "YEDFB /OS/001/2025-2027", 
            number: "MECDF /OT/001/2025-2027"
             ,descr: "ST. PETERS KHABAKAYA SECONDARY SCHOOL (5 CLASSROOMS, 4 PIT LATRINE AND BOREHOLE PROJECTS",
             proc: "Mumias East NG-CDF",
              proc1: "Open Tender", 
              proc2: 'Road Works',
              date: "1st June, 2025",
              close: "Closes in 2 Months",
              addendum: 'None',
              status: "Active"},
              
    ];
    const headers = [
        
        {label: "Tender No.",  key: "number"},
        {label: "Description", key: "descr"},
        {label: "Proc. Entity", key : "proc"},
        {label: "Proc. Method", key : "proc1"},
        {label: "Proc. Category", key : "proc"},
        {label: "Published Date", key: "date"},
        {label: "Close Date", key: "close"},
        {label: "Addendum", key: "addendum"},
        {label: "ACTIONS", key: "actions"},
    ]
  return (
    <div className='spreadsheet'>
 <div className="table-pot">
  <table border="1" cellPadding="5">
     <thead>
    <tr>
        <th>Tender No.</th>
          <th>Description</th>
          <th>Proc. Entity</th>
          <th>Proc. Method</th>
          <th>Proc. Category</th>
        <th>Published Date</th>
              <th>Close Date</th>
                <th>Addendum</th>
              <th>Actions</th>
  
    </tr>
  </thead>
  <tbody>
{TenderInformation.map((tender) => (
    <tr key={tender.id}>
        <td>{tender.number}</td>
        <td>{tender.descr}</td>
                <td>{tender.proc}</td>
                       <td>{tender.proc1}</td>
                              <td>{tender.proc2}</td>
                                <td>{tender.date}</td>
                                 <td>{tender.close}</td>
                                  <td>{tender.addendum}</td>
                                   <td>{tender.actions}</td>
          
    </tr>
)) }
  </tbody>
 </table>
 </div>
 <button style={{width: "%", padding:"8px"}}>
    <CSVLink 
    data={TenderInformation}
    headers={headers}
    filename={"tender.csv"}
    style={{
        textDecoration: "none",
        color: "black",
        display:"inline-flex",
        alignItems: "center",
        gap: "4px"
    }}
    
    >
        <DownloadIcon/>
        Download
    </CSVLink>
 </button>
    </div>
  )
}

export default SpreadSheet
