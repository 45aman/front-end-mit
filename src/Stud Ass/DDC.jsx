import React from 'react'
import Logo from '../img/logo.png'
import './OffTr.css'
import i1 from '../img/faq.svg'
import { Link } from 'react-router-dom'



const DDC = () => {
    return (
       <>
       <div className="menu">
       <div className="logo pb-5">
       <img src={Logo} alt="..."     width="250vw"/>
       </div>

       <div className="title">
       <Link to="/studentassistance"><h1 style={{ color: "white" }}>STUDENT ASSISTANCE</h1></Link>
       </div>

<div className="contain">
       <div className="row">

       <div className="col-md-6 mt-5  ">

       <div className="form-body" style={{ color: "black" , opacity:"70%"}}>
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>DUPLICATE DEGREE CERTIFICATE FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="NUMBER" placeholder="FORM NO" required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="text" name="TRIMESTER NO." placeholder="REQUIRED COPIES" required/>
                                 <div className="valid-feedback">Monthand year field is valid!</div>
                                 <div className="invalid-feedback">Monthand year field cannot be blank!</div>
                            </div>

                           

                           <div className="col-md-12">
                                <select className="form-select mt-3" required>
                                      <option selected disabled value="">REGULAR</option>
                                      <option value="jweb">REGULAR</option>
                                      <option value="sweb">BACKLOG</option>
                                      <option value="sweb">BOTH</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div>


                           <div className="col-md-12">
                                <input className="form-control" type="TEXT" name="" placeholder="MONTH AND YEAR OF EXAMINATION" required/>
                                 <div className="valid-feedback">Monthand year field is valid!</div>
                                 <div className="invalid-feedback">Monthand year field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="TEXT" name="" placeholder="GPA OF THAT TRIMESTER" required/>
                                 <div className="valid-feedback">GPA field is valid!</div>
                                 <div className="invalid-feedback">GPA field cannot be blank!</div>
                            </div>


                            <div className="col-md-12">
  <label for="formFile" className="form-label">POLICE FIR</label>
  <input className="form-control" type="file" id="formFile"/>
</div>

<div className="col-md-12">
  <label for="formFile" className="form-label">AFFIDAVITE</label>
  <input className="form-control" type="file" id="formFile"/>
</div>

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">PAYMENT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


       </div>
       <div className="col-md-6 mb-5 pb-5 mt-5" >
       <div className="game" >

<div className="front">
   <img className="im" src={i1} alt=""/>
   <h3 className="name">FAQ</h3>

</div>

<div className="back">
<div className="stats">
   <p className="faq">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

   </div>
</div>

<div className="background" >


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

export default DDC
