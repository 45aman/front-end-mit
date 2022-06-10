import React, {Component, useState , useEffect} from 'react';
import Logo from './logo.png'
import '../OffTr.css'
import i1 from './designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



class Certificates extends Component {


    constructor(){
        super()
        this.state = {
            prn:'',
            mobileno:'',
            gmail:'',
            trino:'',
            reason:''
        }
        this.changePRN = this.changePRN.bind(this)
        this.changeMOBILENO = this.changeMOBILENO.bind(this)
        this.changeGMAIL = this.changeGMAIL.bind(this)

        this.changeTriNo = this.changeTriNo.bind(this)
        this.changeReason = this.changeReason.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }    

    changePRN(event){
        this.setState({
            prn:event.target.value
        })
    }

    changeMOBILENO(event){
        this.setState({
            mobileno:event.target.value
        })
    }
    changeGMAIL(event){
        this.setState({
            gmail:event.target.value
        })
    }
    changeTriNo(event){
        this.setState({
            trino:event.target.value
        })
    }

    changeReason(event){
        this.setState({
            reason:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const submitted = {
            prn: this.state.prn,
            mobileno: this.state.mobileno,
            gmail: this.state.gmail,
            trino: this.state.trino,
            reason: this.state.reason
        }                                      

        axios.post('http://localhost:4000/app/Certificates', submitted)
        .then(response => console.log(response.data))


        this.setState({
            prn:'',
            mobileno:'',
            gmail:'',
            trino:'',
            reason:''
        })
    }


render(){

    
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
                    <div className="form-items" onSubmit={this.onSubmit}>
                        <h3>CERTIFICATES</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                                <label> PRN: 
                               <input className="form-control" type="text" name="prn" placeholder="ENTER PRN"
                                onChange={this.changePRN} value={this.state.prn} required/>
                               <div className="valid-feedback">PRN field is valid!</div>
                               <div className="invalid-feedback">PRN field cannot be blank!</div>
                               </label>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <label> MOBILE NO: 
                               <input className="form-control" type="text" name="mobileno" placeholder="ENTER MOBILE NO"
                                onChange={this.changeMOBILENO} value={this.state.mobileno} required/>
                               <div className="valid-feedback">mobileno field is valid!</div>
                               <div className="invalid-feedback">mobileno field cannot be blank!</div>
                               </label>
                            </div>
                            <br/>
                            <div className="col-md-12">
                                <label> GMAIL: 
                               <input className="form-control" type="text" name="gmail" placeholder="ENTER GMAIL"
                                onChange={this.changeGMAIL} value={this.state.gmail} required/>
                               <div className="valid-feedback">GMAIL field is valid!</div>
                               <div className="invalid-feedback">GMAIL field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label>Current Trimester (If still pursuing course  ) and Month and Year of Passing (ex. May 2021) (If pass out student)
                                <input className="form-control" type="text" name="trino" placeholder='Enter Trimester No./ Passing year'
                                 onChange={this.changeTriNo} value={this.state.trino}  required/>
                                 <div className="valid-feedback"> Trimester No/Passing Year field is valid!</div>
                                 <div className="invalid-feedback">Trimester No/Passing Year field cannot be blank!</div>
                                 </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label> Reason for Application of this certificate
                               <select  className="form-control" type="text" name="reason"
                                onChange={this.changeReason} value={this.state.reason} required>
                                    <option select disabled value="">Select reason of application of this Certificate.</option>
                                    <option>Program Completion Certificate</option>
                                    <option>No Backlog Certificate</option>
                                    <option>Medium of Instruction</option>
                                    <option>Bonafide Certificate</option>
                               </select>     
                               <div className="valid-feedback">Reason field is valid!</div>
                               <div className="invalid-feedback">Reason field cannot be blank!</div>
                               </label>
                            </div>                       
                
                            <div className="form-button mt-3">
                            <button className="btn btn-info" id="submit" type="submit" value='Submit' onClick={displayRazorpay} >Proceed To Payment</button>                            </div>
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
<p className="question">Q. I need to submit a Course completion / Bonafide in my Company. What is the procedure?</p>
    <p>Ans. Submit your query on Google form (Link - <a>https://forms.gle/EbsrT87114AD14HY9</a>) under ‘Program Completion Certificate’ </p>
<p className="question">Q. In how many days, can I get the Certificate?</p>
   <p className="faq">Ans. Processing requires minimum 5 working days from date of application. Once it is ready, you will be notified on mail.
 </p>
 <button className="btn btn-light"><a href="https://drive.google.com/file/d/1YC-nn3TlMiuPUzZcnhJ6lsSOHmkFciTy/view?usp=sharing">READ MORE</a></button>

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
    <div className="container text-center">
      <small>©2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}
}

export default Certificates