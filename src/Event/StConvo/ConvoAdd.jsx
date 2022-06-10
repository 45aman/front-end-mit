import React, {useState} from 'react'
import Logo from '../StTimetable/logo.png'
import '../StTimetable/TT.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";



const ConvoAdd = () => {

  const nevigate = useNavigate()

    const [convo, setConvo] = useState({
        department: "",
        date: "",
        time: "",
        venue:"",
      })
    
      const handlechange = e => {
        const {name, value } = e.target
        setConvo({
          ...convo,
          [name]: value
        })
      }


  const upload = () => {
    const { department, date, time, venue } = convo
    if(department && date && time && venue ){
      axios.post("http://localhost:4000/convoadd", convo)  
      .then(res => console.log(res))
      nevigate("/Stconvocation")

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
                                <select className="form-select mt-3" required name="department" value={convo.department} onChange={handlechange} >
                                      <option selected disabled value="">Faculty of Commerce</option>
            <option>Faculty of Commerce</option>
            <option>Faculty of Commerce & Economics</option>
            <option>Faculty of Consciousness</option>
            <option>Faculty of Design</option>
            <option>Faculty of Economics</option>
            <option>Faculty of Education</option>
            <option>Faculty of Engineering and Technology</option>
            <option>Faculty of Fine arts, Media and Journalism</option>
            <option>Faculty of Governance</option>
            <option>Faculty of Government</option>
            <option>Faculty of Law</option>
            <option>Faculty of Liberal Arts</option>
            <option>Faculty of Liberal Arts, Science and Commerce</option>
            <option>Faculty of Management</option>
            <option>Faculty of Management UG</option>
            <option>Faculty of Peace Studies</option>
            <option>Faculty of Pharmacy</option>
            <option>Faculty of Science</option>
            <option>Faculty of Sustainability Studies</option>
            <option>Faculty of Tourism Studies</option>
            <option>Faculty of Visual Arts, Media and Journalism</option>
            <option>MAEER Pune - RO</option>
            <option>MIT School of Business</option>
            <option>MIT-WPU HO</option>
            <option>School of polytechnic & Skill Development</option>
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div> 

<br/>
                            
                            <div className="col-md-12">
                               <input className="form-control" type="date" name="date" value={convo.date} placeholder="DATE" required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>

                           

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="time" value={convo.time} placeholder="TIME" required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            <div className="col-md-12">
  <input className="form-control" type="text" name='venue' value={convo.venue}  placeholder=" VENUE "  onChange={handlechange}/>
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
