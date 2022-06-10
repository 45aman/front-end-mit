import React, {Component} from 'react';
import Logo from '../Certificates/logo.png'
import '../OffTr.css'
import i1 from '../Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




class OQ extends Component {
    constructor(){
        super()
        this.state = {
            prn:'',
            mob:'',
            email:'',
            query:''
        }
        this.changePRN = this.changePRN.bind(this)
        this.changeMOB = this.changeMOB.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeQuery = this.changeQuery.bind(this)
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
    changeQuery(event){
        this.setState({
            query:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const submitted = {
            prn: this.state.prn,
            mob: this.state.mob,
            email: this.state.email,
            query: this.state.query
        }                                      

        axios.post('http://localhost:4000/app/OQ', submitted)
        .then(response => console.log(response.data))

        this.setState({
            prn:'',
            mob:'',
            email:'',
            query:''
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
                        <h3>Other Queries</h3>
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
                                <label>Enter your queries in detail.
                                <input className="form-control" type="text" name="query" placeholder='Enter queries'
                                 onChange={this.changeQuery} value={this.state.query}  required/>
                                 <div className="valid-feedback"> Query field is valid!</div>
                                 <div className="invalid-feedback">Query field cannot be blank!</div>
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
<p className="question">Q. What is covered under student grievance?</p>
<p>If you feel that you have been treated unfairly in terms of students rights related to examinations, then that query will come under grievance.
ex. 1. Unfair response to student assessment performance. 2. Recurring complaint not being addressed.
3. Act of defaming an individual.
4. Unfair exam environment.
5. Recurring complaint not being addressed.
6. Discrimination.
7. Deviation to prescribed University processes.</p>
<button className="btn btn-light"><a href="https://drive.google.com/file/d/1rcwHUn-nYVGuxdfEMXgBu7-tzWwwhuFI/view?usp=sharing">READ MORE</a></button>
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

export default OQ