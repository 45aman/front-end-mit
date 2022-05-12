import React, {useState} from 'react'
import Logo from '../img/logo.png'
import '../Stud Ass/OffTr.css'
import { Link } from 'react-router-dom'
import axios from "axios";



const RegStaff = () => {




 
  const [staff, setStaff] = useState({
    staffname: "",
    sfprn: "",
    sfpassword: "",
    reEntersfPassword: "",
    designation: "",
    sfmobile: "",
    sfemail: "",


   
  })

  const handlechange = e => {
    const {name, value } = e.target
    setStaff({
      ...staff,
      [name]: value
    })
  }

  const registerstaff = () => {
    const { staffname, sfprn, sfpassword, reEntersfPassword, designation, sfmobile, sfemail,
     } = staff
    if( staffname &&  sfprn  && sfpassword && (sfpassword===reEntersfPassword )  && designation && sfmobile && sfemail){
      axios.post("http://localhost:4000/registerstaff", staff)  
      .then(res => console.log(res))
    }else{
       alert("invalid input")
    }

  }
 
    return (
       <>
       <div className="menu">
       <div className="logo pb-5">
       <img src={Logo} alt="..."     width="250vw"/>
       </div>

       

<div className="contain">


       <div className="form-body" style={{ color: "black" , opacity:"70%"}}>
        <div className="row">
            <div className="form-holder" style={{marginTop: "10%"}}>
                <div className="form-content">
                    <div className="form-items" >
                        <h3>STAFF REGISTRATION FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" noValidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="staffname"  value={staff.staffname} placeholder="NAME " required onChange={handlechange}  />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                           
                 
                            <div className="col-md-12">
                               <input className="form-control" type="text" name="sfprn" value={staff.sfprn} placeholder="PRN" onChange={handlechange} required/>
                               <div className="valid-feedback">staffname field is valid!</div>
                               <div className="invalid-feedback">staffname field cannot be blank!</div>
                            </div>
                            <div className="col-md-12">
                               <input className="form-control" type="password" name="sfpassword" value={staff.sfpassword} placeholder="PASSSWORD" onChange={handlechange}  required/>
                               <div className="valid-feedback">sfPassword is valid!</div>
                               <div className="invalid-feedback">sfPassword cannot be blank!</div>
                            </div> 
                            <div className="col-md-12">
                               <input className="form-control" type="password" name="reEntersfPassword" value={staff.reEntersfPassword} placeholder="RE-ENTER-PASSSWORD" required onChange={handlechange}/>
                               <div className="valid-feedback">sfPassword is valid!</div>
                               <div className="invalid-feedback">sfPassword cannot be blank!</div>
                            </div>    

                           

                           <div className="col-md-12">
                                <select className="form-select mt-3" required name="designation" value={staff.designation} onChange={handlechange} >
                                      <option selected disabled value="">COE</option>
            <option>COE</option>
            <option>DCOE</option>
            <option>ACOE</option>
            <option>SR.EXECUTIVE</option>
            <option>EXECUTIVE</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div>

                           <br/>

                           <div className="col-md-12">
                                <input className="form-control" type="number" name="sfmobile" value={staff.sfmobile} placeholder="MOBILE NO." onChange={handlechange}  required/>
                                 <div className="valid-feedback">sfMobile No. field is valid!</div>
                                 <div className="invalid-feedback">sfMobile No. cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="sfemail" value={staff.sfemail} placeholder="EMAIL" onChange={handlechange}  required/>
                                 <div className="valid-feedback">sfEmail field is valid!</div>
                                 <div className="invalid-feedback">sfEmail field cannot be blank!</div>
                            </div>


                         <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary"  onClick={registerstaff}>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


       </div>
     

       



       <div>
<footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>©2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}

export default RegStaff
