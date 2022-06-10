import React, {useState} from 'react';
import Logo from '../Certificates/logo.png'
import '../OffTr.css'
import i1 from '../Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



const DupGC = () => {

    const [dupgc, setdupgc] = useState({
        prn:'',
            mob:'',
            email:'',
            reason:'',
            trino:'',
            rob:'',
            year:'',
            gpa:'',
            fir:'',
            affidavite:''
        })

        const handlechange = e => {
            const {name, value } = e.target
            setdupgc({
              ...dupgc,
              [name]: value
            })
          }
    
  
          const upload = () => {
            const {prn, mob, email, reason,trino,rob,year,gpa,fir,affidavite } = dupgc
          //  const {image}= image
            if(prn &&mob && email && reason && trino && rob && year && gpa && fir && affidavite){
              axios.post("http://localhost:4000/app/DupGC", dupgc)  
              .then(res => console.log(res))
              console.log("uploaded");
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
                <div className="form-content">
                    <div className="form-items" onSubmit={upload}>
                        <h3>DUPLICATE GRADE CARD/ DEGREE CERTIFICATE FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                                <label> PRN: 
                               <input className="form-control" type="text" name="prn" placeholder="ENTER PRN"
                                onChange={handlechange} value={dupgc.prn} required/>
                               <div className="valid-feedback">PRN field is valid!</div>
                               <div className="invalid-feedback">PRN field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> Mobile Number: 
                               <input className="form-control" type="text" name="mob" placeholder="ENTER Mobile Number"
                                onChange={handlechange} value={dupgc.mob} required/>
                               <div className="valid-feedback">Mobile Number field is valid!</div>
                               <div className="invalid-feedback">Mobile Number field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> EMAIL ID: 
                               <input className="form-control" type="email" name="email" placeholder="ENTER EMAIL"
                                onChange={handlechange} value={dupgc.email} required/>
                               <div className="valid-feedback">Email field is valid!</div>
                               <div className="invalid-feedback">Email field cannot be blank!</div>
                               </label>
                            </div>

                            <div className="col-md-12">
                                <label> Reason for Application
                               <select className="form-control" type="text" name="reason"
                                onChange={handlechange} value={dupgc.reason} required>
                                    <option select disabled value="">Select one of either.</option>
                                    <option>Duplicate Grade Card</option>
                                    <option>Duplicate Degree Certificate</option>
                               </select>     
                               <div className="valid-feedback"> Field is valid!</div>
                               <div className="invalid-feedback"> This field cannot be blank!</div>
                               </label>
                            </div> 
<br/>
                            <div className="col-md-12">
                                <label> Trimester No. for which Duplicate grade card is required:
                                <input className="form-control" type="text" name="trino" placeholder="ENTER TRIMESTER NUMBER"
                                 onChange={handlechange} value={dupgc.trino}  required/>
                                 <div className="valid-feedback">Trimester No field is valid!</div>
                                 <div className="invalid-feedback">Trimester No cannot be blank!</div>
                                 </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label> Regular/Backlog Grade card
                               <select className="form-control" type="text" name="rob"
                                onChange={handlechange} value={dupgc.rob} required>
                                    <option select disabled value="">Select one of either.</option>
                                    <option>Regular</option>
                                    <option>Backlog</option>
                               </select>     
                               <div className="valid-feedback"> Field is valid!</div>
                               <div className="invalid-feedback"> This field cannot be blank!</div>
                               </label>
                            </div>   
<br/>
                            <div className="col-md-12">
                                <label>Month/Year of Examination (MM/YYYY)
                                <input className="form-control" type="text" name="year" placeholder="Enter Month and Year of Exam" 
                                 onChange={handlechange} value={dupgc.year}  required/>
                                 <div className="valid-feedback">rEQUIRED COPIES field is valid!</div>
                                 <div className="invalid-feedback">REQUIRED COPIES field cannot be blank!</div>
                                 </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label>GPA of that Trimester(only for regular grade card)
                                <input className="form-control" type="text" name="gpa" placeholder="GPA OF THAT TRIMESTER"
                                 onChange={handlechange} value={dupgc.gpa}  required/>
                                 <div className="valid-feedback">GPA field is valid!</div>
                                 <div className="invalid-feedback">GPA cannot be blank!</div>
                                 </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label>Attach Police FIR
                                <input className="form-control" type="text" name="fir" placeholder="FIR"
                                 onChange={handlechange} value={dupgc.fir}  required/>
                                 <div className="valid-feedback">FIR field is valid!</div>
                                 <div className="invalid-feedback">FIR cannot be blank!</div>
                                 </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label>Attach Affidavite
                                <input className="form-control" type="text" name="affidavite" placeholder="AFFIDAVITE"
                                 onChange={handlechange} value={dupgc.affidavite}  required/>
                                 <div className="valid-feedback">AFFIDAVITE field is valid!</div>
                                 <div className="invalid-feedback">AFFIDAVITE cannot be blank!</div>
                                 </label>
                            </div>


                
                            <div className="form-button mt-3">
                            <button className="btn btn-info" id="submit" type="submit" value='Submit' onClick={displayRazorpay} >Proceed to Payment</button>
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
   <img className="im" alt="..." src={i1}/>
   <h3 className="name">FAQ</h3>

</div>


<div className="back" style={ {width:"35vw", backgroundColor:"black" ,padding:"2vw", marginLeft:"-10vw"}}>
<div className="stats">
<p className="question">Q. I have lost my grade card? Can I get another copy of grade card?</p>
<p>Ans. Grade card is issued only once. In case, you have lost your grade card, you can apply for a duplicate grade card only.
</p>
<p className="question">Q. What documents are required while applying for the duplicate grade card?</p>
<p>Ans. FIR copy, Affidavit on Rs.100/- stamp paper giving details and receipt of fee for duplicate
grade card.
</p>
<p className='question'>Q. What are the charges for obtaining a duplicate grade card?</p>
<p>Ans. Fee of Rs.500/- + Rs. 100/- per trimester grade card.</p>
<button className="btn btn-light"><a href="https://drive.google.com/file/d/1MGt7b8ctNN2JvZiguAfwaMQKBd0zCyz9/view?usp=sharing">READ MORE</a></button>
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


export default DupGC