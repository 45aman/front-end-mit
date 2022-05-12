import React, {useState} from 'react'
import Logo from '../img/logo.png'
import '../Event/StTimetable/TT.css'
import { Link } from 'react-router-dom'
import axios from "axios";



const FaqAdd = () => {


    const [faq, setFaq] = useState({
      id:"",  
      title: "",
        link: "",
      })
    
      const handlechange = e => {
        const {name, value } = e.target
        setFaq({
          ...faq,
          [name]: value
        })
      }


  const upload = () => {
    const {id, title, link  } = faq
    if(id &&title && link){
      axios.post("http://localhost:4000/faqadd", faq)  
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
                        <h3>ADD FAQ DATA</h3>
                        <form className="requires-validation" noVali>

                        <div className="col-md-12">
                               <input className="form-control" type="number" name="id"  value={faq.id} placeholder="FILE ID" required  onChange={handlechange}   />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="title"  value={faq.title} placeholder="FILE TITLE" required  onChange={handlechange}   />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            
                            <div className="col-md-12">
                               <input className="form-control" type="text" name="link" value={faq.link} placeholder="FILE LINK" required onChange={handlechange} />
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
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
      <small>©2022.MITWPUEXAMtitle.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}

export default FaqAdd
