import React, {Component} from 'react'
import Logo from '../img/logo.png'
import './OffTr.css'
import i1 from '../img/faq.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

class OffTr extends Component{
    constructor(){
        super()
        this.state = {
            prn:'',
            reqCopies:'',
            collectingOption:'',
            address:''
        }
        this.changePRN = this.changePRN.bind(this)
        this.changeReqCopies = this.changeReqCopies.bind(this)
        this.changeCollectingOption = this.changeCollectingOption.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
    }    

    changePRN(event){
        this.setState({
            prn:event.target.value
        })
    }
    changeReqCopies(event){
        this.setState({
            reqCopies:event.target.value
        })
    }
    changeCollectingOption(event){
        this.setState({
            collectingOption:event.target.value
        })
    }
    changeAddress(event){
        this.setState({
            address:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const submitted = {
            prn: this.state.prn,
            reqCopies: this.state.reqCopies,
            collectingOption: this.state.collectingOption,
            address: this.state.address
        }                                      

        axios.post('http://localhost:4000/app/OffTr', submitted)
        .then(response => console.log(response.data))

        this.setState({
            prn:'',
            reqCopies:'',
            collectingOption:'',
            address:''
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
                <div className="form-content" >
                <div className="form-items" onSubmit={this.onSubmit}>
                        <h3>OFFICIAL TRANSCRIPT FORM</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" novalidate>
                            
                         
                            <div className="col-md-12">
                               <input className="form-control" type="number" name="prn" placeholder="ENTER PRN"
                               onChange={this.changePRN} value={this.state.prn} required/>
                               <div className="valid-feedback">PRN field is valid!</div>
                               <div className="invalid-feedback">PRN field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="number" name="reqCopies" placeholder="REQUIRED COPIES"
                               onChange={this.changeReqCopies} value={this.state.reqCopies} required/>
                               <div className="valid-feedback">Required Copies field is valid!</div>
                               <div className="invalid-feedback">Required Copies field cannot be blank!</div>
                            </div>


                           <div className="col-md-12">
                                <select className="form-select mt-3" name="collectingOption"
                                onChange={this.changeCollectingOption} value={this.state.collectingOption} required>
                                      <option selected disabled value="">POST</option>
                                      <option value="jweb">BY HAND</option>
                                      <option value="sweb">POST</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div>
        <br/>

                           <div className="col-md-12">
                                <input className="form-control" type="string" name="address" placeholder="ADDRESS"
                                onChange={this.changeAddress} value={this.state.address} required/>
                                 <div className="valid-feedback">Address field is valid!</div>
                                 <div className="invalid-feedback">Address field cannot be blank!</div>
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
   <img className="im" alt='...' src={i1}/>
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

export default OffTr

