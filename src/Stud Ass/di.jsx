import React, {Component, useState} from 'react';
import Logo from './Certificates/logo.png'
import './OffTr.css'
import i1 from './Certificates/designer.svg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';





class Div extends Component {
    

   

  


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

        axios.post('http://localhost:4000/app/Div', submitted)
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


    const facility =[
    { value:1,
      label:"Extra time for completing assignments and projects, as well as journal submissions"
    },
    { value:2,
      label:'Slight modifications in assignments'
    },
    { value:3,
      label:'Provision of audio recording the lectures of the teacher with due permission from the concerned subject teacher.'
    },
    { value:4,
      label:'Extra help inside and outside the class for related queries.'
    },
    { value:5,
      label:'Notes provided by peer (any one identified responsible peer)'
    },
    { value:6,
      label:'Pairing students with more able students in the class'
    },
    { value:7, 
      label:'Extra time of 20 minutes for unit test of 1 hour duration and 40 minutes for a 2 hour exam.'
    },
    { value:8, 
      label:'Provision of writers, if requested.'
    }
  ]


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
                        <h3>DIVYAGJAN SUPPORT FORM</h3>
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
                                <label>Current Trimester 
                                <input className="form-control" type="text" name="trino" placeholder='Enter Trimester No.'
                                 onChange={this.changeTriNo} value={this.state.trino}  required/>
                                 <div className="valid-feedback"> Trimester No/Passing Year field is valid!</div>
                                 <div className="invalid-feedback">Trimester No/Passing Year field cannot be blank!</div>
                                 </label>
                            </div>
<br/>
<div className="col-md-12">


<label>REQUIREMENTS</label>

<Select
    isMulti
    options={facility}   
   className="basic-multi-select"
    classNamePrefix="select"
    name="reason"
    onChange={(e)=>this.changeReason(e)} 
    value={this.state.reason} />

</div>
                
                            <div className="form-button mt-3">
                            <button className="btn btn-info" id="submit" type="submit" value='Submit'  >Proceed To Payment</button>                            </div>
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
}


export default Div