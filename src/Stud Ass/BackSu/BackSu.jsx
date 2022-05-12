import React from 'react'
import Logo from './logo.png'
import '../OffTr.css'
import i1 from './faq.svg'
import { Link } from 'react-router-dom'




const  BackSu = () => {
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
                        <h3>OFFICIAL TRANSCRIPT FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="NUMBER" placeholder="FORM NO" required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="REQUIRED COPIES" placeholder="REQUIRED COPIES" required/>
                                 <div className="valid-feedback">Email field is valid!</div>
                                 <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>

                           

                           <div className="col-md-12">
                                <select className="form-select mt-3" required>
                                      <option selected disabled value="">POST</option>
                                      <option value="jweb">BY HAND</option>
                                      <option value="sweb">POST</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div>


                           <div className="col-md-12">
                                <input className="form-control" type="email" name="" placeholder="ADDRESS" required/>
                                 <div className="valid-feedback">Email field is valid!</div>
                                 <div className="invalid-feedback">Email field cannot be blank!</div>
                            </div>


                          

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">Register</button>
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
   <img className="im" src={i1}/>
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
<footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>©2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}

export default  BackSu
