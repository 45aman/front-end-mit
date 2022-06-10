import React, {Component} from 'react';
import Logo from '../Certificates/logo.png'
import '../OffTr.css'
import i1 from '../Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




class ConGC extends Component {
    constructor(){
        super()
        this.state = {
            prn:'',
            mob:'',
            email:'',
            trino:''
        }
        this.changePRN = this.changePRN.bind(this)
        this.changeMOB = this.changeMOB.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeTriNo = this.changeTriNo.bind(this)
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
    changeTriNo(event){
        this.setState({
            trino:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const submitted = {
            prn: this.state.prn,
            mob: this.state.mob,
            email: this.state.email,
            trino: this.state.trino
        }                                      

        axios.post('http://localhost:4000/app/ConGC', submitted)
        .then(response => console.log(response.data))

        this.setState({
            prn:'',
            mob:'',
            email:'',
            trino:''
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
                        <h3>CONSOLIDATED GRADE CARD form</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                                <label>PRN:
                               <input className="form-control" type="number" name="prn" placeholder="ENTER PRN"
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
                                <label>Trimester No. :
                                <input className="form-control" type="text" name="trino" placeholder="TRI No. OF GRADE CARD"
                                 onChange={this.changeTriNo} value={this.state.trino}  required/>
                                 <div className="valid-feedback">Trimester No field is valid!</div>
                                 <div className="invalid-feedback">Trimester No cannot be blank!</div>
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
<p className="question">Q. Can I get backlog and regular result on a single grade card?</p>
<p>Ans. Yes, you can apply for a consolidated grade card.</p>
<p className="question">Q. How is a Consolidated Grade Card different from a transcript?</p>
<p>Ans. Consolidated grade card shows revised result of only one trimester with revised GPA and CGPA where as a transcript is a document that includes updated results of all trimesters with revised GPA and CGPA trimester wise.</p>

<button className="btn btn-light"><a href="https://drive.google.com/file/d/1dIZ1BSak1ErAFBvnI4z__NcK8qBzO8_H/view?usp=sharing">READ MORE</a></button>
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

export default ConGC