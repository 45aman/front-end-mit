import React, {Component} from 'react';
import Logo from './logo.png'
import '../OffTr.css'
import i1 from './designer.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'



class Certificates extends Component {
    constructor(){
        super()
        this.state = {
            prn:'',
            trino:'',
            reason:''
        }
        this.changePRN = this.changePRN.bind(this)
        this.changeTriNo = this.changeTriNo.bind(this)
        this.changeReason = this.changeReason.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }    

    changePRN(event){
        this.setState({
            prn:event.target.value
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
            trino: this.state.trino,
            reason: this.state.reason
        }                                      

        axios.post('http://localhost:4000/app/Certificates', submitted)
        .then(response => console.log(response.data))

        this.setState({
            prn:'',
            trino:'',
            reason:''
        })
    }


render(){
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
                    <div className="form-items" onSubmit={this.onSubmit}>
                        <h3>Certificates</h3>
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
                               <select className="form-control" type="text" name="reason"
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
}

export default Certificates