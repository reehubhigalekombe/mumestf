import React, {useState} from 'react';
import "../styles/studentp.css"

function Student() {

 
    const [location, setLocation] = useState("");
    const locations = [
      "East Wanga", "Khaunga", "Isongo/Malaha", "Lubinu/Lushea", "Ekero"
    ];
  
  return (
    <div className='profile'>
       <form className='student-form'>
        <fieldset>
          <legend>Personal Information</legend>
          <div className='profile-layout'>
            <div className='profile-detail'>
            <label htmlFor='name'>First Name:</label>
          <input type='text' name='firtsName' placeholder='First Name' required />
            </div>

            <div className='profile-detail'>
            <label htmlFor='nmiddleName'>Middle Name:</label>
            <input type='text' name='' placeholder='Middle Name' required />
            </div>

            <div className='profile-detail'>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' name='lastName' placeholder='Last Name' required />
            </div>

           <div className='profile-detail'>
         <label htmlFor='gender'>Gender:</label>
         <select  name='gender' id='gender' required>
          <option value={""}>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Others</option>

         </select>
           </div>

            <div className='profile-detail'>
            <label htmlFor='dob'>Date of Birth:</label>
           <input type='datetime-local' name='dob' id='dob'  />
           </div>
           
           <div className='profile-detail'>
            <label htmlFor='birth'>National ID/Birth Certificate No.</label>
           <input type='number' name='birth' id='birth'  />
           </div>

           <div className='profile-detail'>
            <label htmlFor='passport'>Upload Current Passport </label>
            <input type='file' id='passport' name='passport' accept='.png, .jpg'/>
            </div>



          </div>
        
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          <div className='profile-layout'>
            <div className='profile-detail'>
              <label htmlFor='phone'>Phone No.</label>
              <input type='tel'  id='phone' name='phone' required placeholder='+254742106109'/>
            </div>

            <div className='profile-detail'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' placeholder='email adress' required />
            </div>

            <div className='profile-detail'>
            <label htmlFor='address'>Postal Adress</label>
           <input type='number' name='address' id='address'  required/>
           </div>

           <div className='profile-detail'>
            <label htmlFor='code'>Postal Code</label>
           <input type='number' name='code' id='code'  required/>
           </div>

           <div className='profile-detail'>
            <label htmlFor='location'>Location:</label>
       <select
       name='location'
       id='location'
       value={location} onChange={(e) => setLocation(e.target.value)}
       required
       >
        <option value="">
          Select Location
        </option>
        {locations.sort().map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>))}

       </select>
           </div>

          </div>
        </fieldset>

        <fieldset>
  <legend>Education Background</legend>
  <div className='profile-layout'>
    <div className='profile-detail'>
<label htmlFor='institution'>Instituion Name</label>
<input type='text' name='institution'  id='institution' required/>
    </div>

    <div className='profile-detail'>
         <label htmlFor='level'>Level of Education</label>
         <select  name='level' id='level' required>
          <option value={""}>Select Level of Education</option>
          <option value="college">College</option>
          <option value="polytechnic">Polytechnic</option>
          <option value="other">University</option>

         </select>
           </div>

           <div className='profile-detail'>
<label htmlFor='academic'>Academic Year</label>
<input type='text' name='academic'  id='academic' required/>
    </div>


    <div className='profile-detail'>
            <label htmlFor='adm'>Admission No/Student ID</label>
           <input type='number' name='adm' id='adm'  required/>
           </div>


           <div className='profile-detail'>
            <label htmlFor='trs'>Transcript/Progress Report</label>
            <input type='file' name='trs' id='trs'  accept='.pdf, .doc' required/>
          </div>
  </div>
</fieldset>

<fieldset>
  <legend>Family and Financial Background</legend>
  <div className='profile-layout'>
    <div className='profile-detail'>
<label htmlFor="parent">Parent/Gurdian Name(s)</label>
<input type='text' name='parent'  id='parent' required/>
    </div>


    <div className='profile-detail'>
              <label htmlFor='contact'>Parent/Gurdian Contact</label>
              <input type='tel'  id='contact' name='contact' required placeholder='+254742106109'/>
            </div>
            <div className='profile-detail'>
<label htmlFor="occu">Parent/Gurdian Occupation</label>
<input type='text' name='occu'  id='occu' required/>
    </div> 

    <div className='profile-detail'>
            <label htmlFor='inc'>Avarage Household Income</label>
           <input type='number' name='inc' id='inc'  required/>
           </div>
           <div className='profile-detail'>
            <label htmlFor='sib'>No. of Siblings/Dependents</label>
           <input type='number' name='sib' id='sib'  required/>
           </div>

           <div className='profile-detail'>
         <label htmlFor='gender'>Do you have any Dissability</label>
         <select  name='disabilty' id='disability' required>
          <option value={""}></option>
          <option value="male">Yes</option>
          <option value="female">No</option>
         </select>
           </div>

           <div className='profile-detail'>
<textarea required row="4" col="10">If Yes Explain in detail</textarea>
  </div>
  </div>

 
</fieldset>


        <fieldset>
          <legend>Attachments </legend>
          <div className='profile-layout'>
          <div className='profile-detail'>
            <label htmlFor='reco'>Recommandation Letter (if any)</label>
            <input type='file' name='reco' id='reco'  accept='.pdf, .doc' required/>
          </div>

<div className='profile-detail'>
            <label htmlFor='fee'>Fee Structure</label>
            <input type='file' name='fee' id='fee'  accept='.pdf, .doc' required/>
          </div>

          
<div className='profile-detail'>
            <label htmlFor='areas'>Fee Areas Slip</label>
            <input type='file' name='areas' id='areas'  accept='.pdf, .doc' required/>
          </div>
          </div>
          </fieldset>

          <fieldset>
<legend>Bank Informatio </legend>
<div className='profile-layout'>
  
<div className='profile-detail'>
            <label htmlFor='bank-name'>Bank  Name: </label>
            <input type='text' name='bank-name' id='bank-name' required placeholder='i.e. KCB,  Equaity etc.'/>
          </div>

          <div className='profile-detail'>
            <label htmlFor='bank-name'>Account  Name: </label>
            <input type='text' name='bank-name' id='bank-name' required placeholder='i.e. KCB,  Equaity etc.'/>
          </div>
          <div className='profile-detail'>
            <label htmlFor='account'>Account No.</label>
           <input type='number' name='account' id='account'  required/>
           </div>
          </div>

         
        </fieldset>

       </form>
    </div>
  )
}

export default Student
