import React, {Component, useState} from 'react';
import Logo from '../Certificates/logo.png'
import '../OffTr.css'
import i1 from '../Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const TriToSem =() => {
    




    const [tritosem, settritosem] = useState({
        prn:"",  
        mob: "",
          email: "",
          image:""
        })
        console.log(tritosem);

      /*  const imageselected = e =>{

            const file = e.target.files[0]
            settritosem(file)
        }*/
      
        const handlechange = e => {
          const {name, value } = e.target
          settritosem({
            ...tritosem,
            [name]: value
          })
        }
  
  
    const upload = () => {
      const {prn, mob, email ,image } = tritosem
    //  const {image}= image
      if(prn &&mob && email, image){
        axios.post("http://localhost:4000/app/tritosem", tritosem)  
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
                <div className="form-content">
                    <div className="form-items">
                        <h3>Trimester to Semester form</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" noValidate  onSubmit={upload} encType='multipart/form-data'>

                            <div className="col-md-12">
                                <label> PRN: 
                               <input className="form-control" type="text" name="prn" placeholder="ENTER PRN"
                               value={tritosem.prn} onChange={handlechange}  required/>
                               <div className="valid-feedback">PRN field is valid!</div>
                               <div className="invalid-feedback">PRN field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> Mobile Number: 
                               <input className="form-control" type="text" name="mob" placeholder="ENTER Mobile Number"
                               value={tritosem.mob} onChange={handlechange}   required/>
                               <div className="valid-feedback">Mobile Number field is valid!</div>
                               <div className="invalid-feedback">Mobile Number field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> EMAIL ID: 
                               <input className="form-control" type="email" name="email" placeholder="ENTER EMAIL"
                                value={tritosem.email} onChange={handlechange}  required/>
                               <div className="valid-feedback">Email field is valid!</div>
                               <div className="invalid-feedback">Email field cannot be blank!</div>
                               </label>
                            </div>
<br/>  
                            <div className="col-md-12">
                                <label>Attach screenshot of final year Grade card
                                <input className="form-control-file" type="text"  name='image' value={tritosem.image}
                                 onChange={handlechange}   required/>
                                 <div className="valid-feedback"> Grade card field is valid!</div>
                                 <div className="invalid-feedback">Grade card field cannot be blank!</div>
                                 </label>
                            </div>
                
                            <div className="form-button mt-3">
                            <button className="btn btn-info" id="submit" type="submit" value='Submit'  >Proceed To Payment</button>
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
<p className="question">Q.I require trimester to semester mark sheet conversion certificate? What is the procedure?</p>
<p>
Ans. Submit your query on Google form (Link - https://forms.gle/EbsrT87114AD14HY9) .under ???Trimester to Semester Conversion Certificate.???</p>
<p className="question">Q. What documents are required for applying for a trimester to semester conversion certificate?</p>
<p>Ans. Documents required are scan copy of grade card of final trimester and receipt of payment done for conversion certificate. Note: Payment screenshot should clearly show amount, date of payment, transaction Id & University account number.</p>
<button className="btn btn-light"><a href="https://drive.google.com/file/d/15F358y2ceODDnwdBcXi99jblRQE3eWit/view?usp=sharing">READ MORE</a></button>
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
      <small>??2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}


export default TriToSem
