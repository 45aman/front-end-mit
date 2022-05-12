import React, {useState} from 'react'
import Logo from '../StTimetable/logo.png'
import '../StTimetable/TT.css'
import { Link } from 'react-router-dom'
import axios from "axios";



const TTAdd = () => {


    const [result, setResult] = useState({
        department: "",
        trimester: "",
        type: "",
        date:"",
      })
    
      const handlechange = e => {
        const {name, value } = e.target
        setResult({
          ...result,
          [name]: value
        })
      }


  const upload = () => {
    const { department, trimester, type, date,  } = result
    if(department && trimester && type && date ){
      axios.post("http://localhost:4000/resultadd", result)  
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
                        <h3>ADD RESULT INFO</h3>
                        <form className="requires-validation" noValidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="department"  value={result.department} placeholder="DEPARTMENT NAME " required  onChange={handlechange}   />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            
                            <div className="col-md-12">
                               <input className="form-control" type="text" name="trimester" value={result.trimester} placeholder="TRIMESTER NO. " required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                              

                            <div className="col-md-12">
                                <select className="form-select mt-3" required name="type"  value={result.type} onChange={handlechange} >
                                                            <label for="formFile" className="form-label">EXAM TYPE</label>

                                      <option selected disabled value="">Regular</option>
            <option>Regular</option>
            <option>Backlog</option>
            <option>Regular/Backlog</option>
            
                               </select>
                                <div className="valid-feedback">You selected a position!</div>
                                <div className="invalid-feedback">Please select a position!</div>
                           </div>
                           <br/>
                           <div className="col-md-12">
                               <input className="form-control" type="date" name="date"  value={result.date} placeholder=" DATE " required  onChange={handlechange}   />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            <br/>

                  
   




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

export default TTAdd
