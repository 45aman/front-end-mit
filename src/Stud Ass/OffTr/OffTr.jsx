import React, {Component, useState} from 'react';
import Logo from '../Certificates/logo.png'
import '../OffTr.css'
import i1 from '../Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const OffTr = () =>{
    const navigate = useNavigate()


const [offtr, setOffTr] = useState({
    prn:'',
            mob:'',
            email:'',
            reqCopies:'',
            collectingOption:'',
            address:''
    
  })

  const handlechange = e => {
    const {name, value } = e.target
    setOffTr({
      ...offtr,
      [name]: value
    })
    e.preventDefault();

  }


const upload = (e) => {
 e.preventDefault();
const { prn,mob,email,reqCopies,collectingOption,address } = offtr
if(prn && mob && email && reqCopies && collectingOption && address ){
  axios.post("http://localhost:4000/app/OffTr", offtr)  
  .then(res => console.log(res))

}else{
   alert("invalid input")
}

}

function loadScript(src) {
  return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = src
      document.body.appendChild(script)
      script.onload = () => {
          resolve(true)    
      }
      script.onerror = () => {
          resolve(false)
      }
      document.body.appendChild(script)
  })
}

const _DEV_ = document.domain === 'localhost'

async function displayRazorpay() {

  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  if(!res){
      alert('Razorpay SDK failed to load. Check your internet connection')
      return
  }

  const data = await fetch('http://localhost:4000/razorpay' , { method : 'POST' }) 
  .then((t) => t.json ()
  )    

  console.log(data)

  const options = {
      key: _DEV_ ? 'rzp_test_NCgVjDkvV1r7jm' : 'API_NOT_AVAILABLE',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id, 
      name: "MITWPU Exam Dept",
      description: "Test Transaction",
      image: "",
      handler: function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      }
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
   
    return (
       <>
       <div className="menu">
       <div className="logo pb-5">
       <img src={Logo} alt="..."     style={{width:"17vw"}}/>
       </div>

       <div className="title">
       <Link to="/studentassistance"><h1 style={{fontSize:"2.5vw", color:"white", textDecorationLine:"none"}}>STUDENT ASSISTANCE</h1></Link>
       </div>

<div className="contain">
       <div className="row">

       <div className="col-md-6 mt-5  ">

       <div className="form-body" style={{ color: "black" , opacity:"70%"}}>
        <div className="row">
            <div className="form-holder">
                <div className="form-content" >
                <div className="form-items" onSubmit={upload} >
                        <h3>OFFICIAL TRANSCRIPT FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>
                            
                         
                            <div className="col-md-12">
                                <label>PRN:
                               <input className="form-control" type="text" name="prn" placeholder="ENTER PRN"
                              onChange={handlechange}  value={offtr.prn} required/>
                               <div className="valid-feedback">PRN field is valid!</div>
                               <div className="invalid-feedback">PRN field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> Mobile Number: 
                               <input className="form-control" type="text" name="mob" placeholder="ENTER Mobile Number"
                                onChange={handlechange} value={offtr.mob} required/>
                               <div className="valid-feedback">Mobile Number field is valid!</div>
                               <div className="invalid-feedback">Mobile Number field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> EMAIL ID: 
                               <input className="form-control" type="email" name="email" placeholder="ENTER EMAIL"
                                onChange={handlechange}  value={offtr.email} required/>
                               <div className="valid-feedback">Email field is valid!</div>
                               <div className="invalid-feedback">Email field cannot be blank!</div>
                               </label>
                            </div>
<br/> 
                            <div className="col-md-12">
                                <label>Required Copies:
                               <input className="form-control" type="number" name="reqCopies" placeholder="REQUIRED COPIES"
                               onChange={handlechange}  value={offtr.reqCopies} required/>
                               <div className="valid-feedback">Required Copies field is valid!</div>
                               <div className="invalid-feedback">Required Copies field cannot be blank!</div>
                               </label>
                            </div>
<br/>

                           <div className="col-md-12">
                               <label>Collection Option:
                                <select className="form-select mt-3" name="collectingOption"
                               onChange={handlechange}  value={offtr.collectingOption} required>
                                      <option selected disabled value="">BY Hand/POST</option>
                                      <option value="jweb">BY HAND</option>
                                      <option value="sweb">POST</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Select one option</div>
                                </label>
                           </div>
        <br/>

                           <div className="col-md-12">
                               <label>Address:
                                <input className="form-control" type="string" name="address" placeholder="ADDRESS"
                                onChange={handlechange}  value={offtr.address} required/>
                                 <div className="valid-feedback">Address field is valid!</div>
                                 <div className="invalid-feedback">Address field cannot be blank!</div>
                                 </label>
                            </div>


                            <div className="form-button mt-3">
                            <button className="btn btn-info" id="submit" type="submit" value='Submit' onClick={displayRazorpay} >SUBMIT</button>
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
   <img className="im" alt='...' src={i1}/>
   <h3 className="name">FAQ</h3>

</div>

<div className="back" style={ {width:"35vw", backgroundColor:"black" ,padding:"2vw", marginLeft:"-10vw"}}>
<div className="stats">
<p className="question">Q. What is an official transcript?</p>
<p>Ans. An official transcript is an authentic document that includes updated results of all trimesters declared till date of application and it is signed by the Controller of Examinations.</p>
<p className="question">Q. What documents are required for applying for a transcript?</p>
<p>Ans. Receipt of payment done for transcript processing.</p>

<button className="btn btn-light"><a href="https://drive.google.com/file/d/1F5C4HgMWHySB8mey_-f4dX-WpbB85eW0/view?usp=sharing">READ MORE</a></button>
   </div>
</div>

<div className="background" >


</div>

</div>
       </div>

       </div>
      
       </div>



       



       <div>
<footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50" style={{   bottom: "0"
}}>
    <div className="container text-center">
      <small>©2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}


export default OffTr