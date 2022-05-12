import React, {useState} from 'react'
import Logo from '../StTimetable/logo.png'
import '../StTimetable/TT.css'
import { Link } from 'react-router-dom'
import axios from "axios";



const ConvoAdd = () => {


    const [convo, setConvo] = useState({
        department: "",
        date: "",
        time: "",
        venue:"",
        invitation: "", 
      })
    
      const handlechange = e => {
        const {name, value } = e.target
        setConvo({
          ...convo,
          [name]: value
        })
      }


  const upload = () => {
    const { department, date, time, venue,  invitation} = convo
    if(department && date && time && venue && invitation){
      axios.post("http://localhost:4000/convoadd", convo)  
      .then(res => console.log(res))
    }else{
       alert("invalid input")
    }

  }
 
    return (
       <>
       <div className="menu">
       <div className="logo pb-5">
       <img src={Logo} alt="..."     width="250vw"/>
       </div>

       

<div className="contain">


       <div className="form-body" style={{ color: "black" , opacity:"70%"}}>
        <div className="row">
            <div className="form-holder" style={{marginTop: "10%"}}>
                <div className="form-content">
                    <div className="form-items" >
                        <h3>ADD CONVOCATION DETAILS</h3>
                        <form className="requires-validation" noValidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="department"  value={convo.department} placeholder="DEPARTMENT NAME " required  onChange={handlechange}   />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            
                            <div className="col-md-12">
                               <input className="form-control" type="text" name="date" value={convo.date} placeholder="DATE" required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                              

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="time" value={convo.time} placeholder="TIME" required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                           <div className="col-md-12">
                               <input className="form-control" type="text" name="venue"  value={convo.venue} placeholder=" VENUE " required  onChange={handlechange}   />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>

                           <div className="col-md-12">
  <input className="form-control" type="text" id="formFile" name='invitation' value={convo.invitation}  placeholder=" INVITATION LINK "  onChange={handlechange}/>
</div>

   




                         <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary" onClick={upload} >UPLOAD</button>
                            </div>
                        </form>
                    </div>
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

export default ConvoAdd
