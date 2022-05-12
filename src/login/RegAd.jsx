import React, {useState} from 'react'
import Logo from '../img/logo.png'
import '../Stud Ass/OffTr.css'
import { Link } from 'react-router-dom'
import axios from "axios";



const RegAd = () => {




 
  const [admin, setAdmin] = useState({
    adminname: "",
    adprn: "",
    adpassword: "",
    reEnteradPassword: "",
    designation: "",
    admobile: "",
    ademail: "",


   
  })

  const handlechange = e => {
    const {name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value
    })
  }

  const registeradmin = () => {
    const { adminname, adprn, adpassword, reEnteradPassword, designation, admobile, ademail,
     } = admin
    if( adminname &&  adprn  && adpassword && (adpassword===reEnteradPassword )  && designation && admobile && ademail){
      axios.post("http://localhost:4000/registeradmin", admin)  
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
                        <h3>ADMIN REGISTRATION FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" noValidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="adminname"  value={admin.adminname} placeholder="NAME" required onChange={handlechange}  />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                           
                 
                            <div className="col-md-12">
                               <input className="form-control" type="text" name="adprn" value={admin.adprn} placeholder="PRN" onChange={handlechange} required/>
                               <div className="valid-feedback">adminname field is valid!</div>
                               <div className="invalid-feedback">adminname field cannot be blank!</div>
                            </div>
                            <div className="col-md-12">
                               <input className="form-control" type="password" name="adpassword" value={admin.adpassword} placeholder="PASSSWORD" onChange={handlechange}  required/>
                               <div className="valid-feedback">adPassword is valid!</div>
                               <div className="invalid-feedback">adPassword cannot be blank!</div>
                            </div> 
                            <div className="col-md-12">
                               <input className="form-control" type="password" name="reEnteradPassword" value={admin.reEnteradPassword} placeholder="RE-ENTER-PASSSWORD" required onChange={handlechange}/>
                               <div className="valid-feedback">adPassword is valid!</div>
                               <div className="invalid-feedback">adPassword cannot be blank!</div>
                            </div>    

                           

                           <div className="col-md-12">
                                <select className="form-select mt-3" required name="designation" value={admin.designation} onChange={handlechange} >
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
                                <input className="form-control" type="number" name="admobile" value={admin.admobile} placeholder="MOBILE NO." onChange={handlechange}  required/>
                                 <div className="valid-feedback">adMobile No. field is valid!</div>
                                 <div className="invalid-feedback">adMobile No. cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="ademail" value={admin.ademail} placeholder="EMAIL" onChange={handlechange}  required/>
                                 <div className="valid-feedback">adEmail field is valid!</div>
                                 <div className="invalid-feedback">adEmail field cannot be blank!</div>
                            </div>


                         <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary"  onClick={registeradmin}>SUBMIT</button>
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

export default RegAd
