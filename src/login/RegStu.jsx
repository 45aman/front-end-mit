import React, {useState} from 'react'
import Logo from '../img/logo.png'
import '../Stud Ass/OffTr.css'
import { Link } from 'react-router-dom'
import axios from "axios";



const RegStu = () => {




 
  const [student, setSudent] = useState({
    studentname: "",
    fathername: "",
    prn: "",
   
    password: "",
    reEnterPassword: "",
    program: "",
    specialization: "",
    mobile: "",
    email: "",


   
  })

  const handlechange = e => {
    const {name, value } = e.target
    setSudent({
      ...student,
      [name]: value
    })
  }

  const register = () => {
    const { studentname, fathername, prn,  password, reEnterPassword, program, specialization, mobile, email,
     } = student
    if( studentname && fathername && prn   && password && (password===reEnterPassword ) && program && specialization && mobile && email){
      axios.post("http://localhost:4000/register", student)  
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
                        <h3>STUDENT REGISTRATION FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" noValidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="studentname"  value={student.studentname} placeholder="STUDENT NAME " required onChange={handlechange}  />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            <div className="col-md-12">
                               <input className="form-control" type="text" name="fathername" value={student.fathername} placeholder="FATHER NAME " required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            <br/>
                            <div className="col-md-12">
                               <input className="form-control" type="number" name="prn" value={student.prn} placeholder="PRN" onChange={handlechange}  required/>
                               <div className="valid-feedback">PRN field is valid!</div>
                               <div className="invalid-feedback">PRN field cannot be blank!</div>
                            </div>
                          
                            <div className="col-md-12">
                               <input className="form-control" type="password" name="password" value={student.password} placeholder="PASSSWORD" onChange={handlechange}  required/>
                               <div className="valid-feedback">Password is valid!</div>
                               <div className="invalid-feedback">Password cannot be blank!</div>
                            </div> 
                            <div className="col-md-12">
                               <input className="form-control" type="password" name="reEnterPassword" value={student.reEnterPassword} placeholder="RE-ENTER-PASSSWORD" required onChange={handlechange}/>
                               <div className="valid-feedback">Password is valid!</div>
                               <div className="invalid-feedback">Password cannot be blank!</div>
                            </div>    

                            <div className="col-md-12">
                                <select className="form-select mt-3" required name="program" value={student.program} onChange={handlechange} >
                                      <option selected disabled value="">Engineering and Technology</option>
            <option>Commerce</option>
            <option>Commerce & Economics</option>
            <option>Consciousness</option>
            <option>Design</option>
            <option>Economics</option>
            <option>Education</option>
            <option>Engineering and Technology</option>
            <option>Fine arts, Media and Journalism</option>
            <option>Governance</option>
            <option>Government</option>
            <option>Law</option>
            <option>Liberal Arts</option>
            <option>Liberal Arts, Science and Commerce</option>
            <option>Management</option>
            <option>Management UG</option>
            <option>Peace Studies</option>
            <option>Pharmacy</option>
            <option>Science</option>
            <option>Sustainability Studies</option>
            <option>Tourism Studies</option>
            <option>Visual Arts, Media and Journalism</option>
            <option>MAEER Pune - RO</option>
            <option>MIT School of Business</option>
            <option>MIT-WPU HO</option>
            <option>School of polytechnic & Skill Development</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div>

                                                    <div className="col-md-12">
                                <select className="form-select mt-3" required name="specialization" value={student.specialization} onChange={handlechange} >
                                      <option selected disabled value="">Faculty of Commerce</option>
            <option>Faculty of Commerce</option>
            <option>Faculty of Commerce & Economics</option>
            <option>Faculty of Consciousness</option>
            <option>Faculty of Design</option>
            <option>Faculty of Economics</option>
            <option>Faculty of Education</option>
            <option>Faculty of Engineering and Technology</option>
            <option>Faculty of Fine arts, Media and Journalism</option>
            <option>Faculty of Governance</option>
            <option>Faculty of Government</option>
            <option>Faculty of Law</option>
            <option>Faculty of Liberal Arts</option>
            <option>Faculty of Liberal Arts, Science and Commerce</option>
            <option>Faculty of Management</option>
            <option>Faculty of Management UG</option>
            <option>Faculty of Peace Studies</option>
            <option>Faculty of Pharmacy</option>
            <option>Faculty of Science</option>
            <option>Faculty of Sustainability Studies</option>
            <option>Faculty of Tourism Studies</option>
            <option>Faculty of Visual Arts, Media and Journalism</option>
            <option>MAEER Pune - RO</option>
            <option>MIT School of Business</option>
            <option>MIT-WPU HO</option>
            <option>School of polytechnic & Skill Development</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div> 

                          
                           <br/>



                           <div className="col-md-12">
                                <input className="form-control" type="number" name="mobile" value={student.mobile} placeholder="MOBILE NO." onChange={handlechange}  required/>
                                 <div className="valid-feedback">Mobile No. field is valid!</div>
                                 <div className="invalid-feedback">Mobile No. cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="email" value={student.email} placeholder="EMAIL" onChange={handlechange}  required/>
                                 <div className="valid-feedback">Email field is valid!</div>
                                 <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>


                         <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary"  onClick={register}>SUBMIT</button>
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

export default RegStu
