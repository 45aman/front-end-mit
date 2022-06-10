import React, {Component} from 'react';
import Logo from '../Certificates/logo.png'
import '../OffTr.css'
import i1 from '../Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




class EquC extends Component {
    constructor(){
        super()
        this.state = {
            prn:'',
            mob:'',
            email:'',
            year:'',
            gpa:'',
            reason:''
        }
        this.changePRN = this.changePRN.bind(this)
        this.changeMOB = this.changeMOB.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeYear = this.changeYear.bind(this)
        this.changeGPA = this.changeGPA.bind(this)
        this.changeReason = this.changeReason.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }    

    changePRN(event){
        this.setState({
            prn:event.target.value
        })
    }
    changeMOB(event){
        this.setState({
            mob:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeYear(event){
        this.setState({
            year:event.target.value
        })
    }
    changeGPA(event){
        this.setState({
            gpa:event.target.value
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
            mob: this.state.mob,
            email: this.state.email,
            year: this.state.year,
            gpa: this.state.gpa,
            reason: this.state.reason
        }                                      

        axios.post('http://localhost:4000/app/EquC', submitted)
        .then(response => console.log(response.data))

        this.setState({
            prn:'',
            mob:'',
            email:'',
            year:'',
            gpa:'',
            reason:''
        })
    }


render(){
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
                        <h3>Equivalent % certificate form</h3>
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
                            <div>
                            <label> Mobile Number: 
                               <input className="form-control" type="text" name="mob" placeholder="ENTER Mobile Number"
                                onChange={this.changeMOB} value={this.state.mob} required/>
                               <div className="valid-feedback">Mobile Number field is valid!</div>
                               <div className="invalid-feedback">Mobile Number field cannot be blank!</div>
                               </label>
                            </div>
<br/>
                            <div>
                            <label> EMAIL ID: 
                               <input className="form-control" type="email" name="email" placeholder="ENTER EMAIL"
                                onChange={this.changeEmail} value={this.state.email} required/>
                               <div className="valid-feedback">Email field is valid!</div>
                               <div className="invalid-feedback">Email field cannot be blank!</div>
                               </label>
                            </div>
<br/> 
                            <div className="col-md-12">
                                <label>Year of Passing(ex. 2020-2021)
                                <input className="form-control" type="text" name="year" placeholder="Enter Year of Passing" 
                                 onChange={this.changeYear} value={this.state.year}  required/>
                                 <div className="valid-feedback"> Year field is valid!</div>
                                 <div className="invalid-feedback">Year field cannot be blank!</div>
                                 </label>
                            </div>
<br/>
                            <div className="col-md-12">
                                <label>Final CGPA and Percentage
                                <input className="form-control" type="text" name="gpa" placeholder="Enter CGPA and %"
                                 onChange={this.changeGPA} value={this.state.gpa}  required/>
                                 <div className="valid-feedback">GPA field is valid!</div>
                                 <div className="invalid-feedback">GPA cannot be blank!</div>
                                 <p>(Last Trimester CGPA - Percentage, ex. Tri.9-9.4-86.5)<br/>
                                 Formula: Equivalent Percentage = (Final CGPA-0.75)*10
                                 </p>
                                 </label>
                            </div>

                            <div className="col-md-12">
                                <label>Reason for application of this certificate
                                <input className="form-control" type="text" name="reason" placeholder="Enter Reason" 
                                 onChange={this.changeReason} value={this.state.reason}  required/>
                                 <div className="valid-feedback"> Reason field is valid!</div>
                                 <div className="invalid-feedback">Reason field cannot be blank!</div>
                                 </label>
                            </div>
                            

                
                            <div className="form-button mt-3">
                            <button className="btn btn-info" id="submit" type="submit" value='Submit'>SUBMIT</button>
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
<p className="question">Q. How do I apply for Equivalent Percentage Certificate?</p>
<p>Ans. Submit your query on Google form under ‘Equivalent Percentage Certificate’</p>
<p className="question">Q. Will I get a soft copy/hard copy of the Equivalent Percentage Certificate?</p>
<p>Ans. Soft copy of Equivalent Percentage Certificate will be provided, only if required. You have to mail to exam.helpdesk@mitwpu.edu.in for the same after you receive the completion message. You must collect the hard copy from Department of Examination within a week after it is ready.</p>
<button className="btn btn-light"><a href="https://drive.google.com/file/d/1Er969XfCCBjnhNZOqkXWqQfQf62TAl8X/view?usp=sharing">READ MORE</a></button>
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
}

export default EquC