import React, {useState} from 'react'
import Logo from '../img/logo.png'
import '../Event/StTimetable/TT.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import axios from "axios";



const FaqAdd = () => {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error('Please fill email, subject and message');
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:4000/api/email`, {
        email,
        subject,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

 
    return (
       <>
       <div className="menu">
       <div className="logo pb-5">
       <img src={Logo} alt="..."     width="250vw"/>
       </div>

       

<div className="contain">
<ToastContainer position="bottom-center" limit={1} />


       <div className="form-body" style={{ color: "black" , opacity:"70%"}}>
        <div className="row">
            <div className="form-holder" style={{marginTop: "10%"}}>
                <div className="form-content">
                    <div className="form-items" >
                        <h3>EMAIL SYSTEM</h3>
                        <form className="requires-validation" noValidate onSubmit={submitHandler}>

                            <div className="col-md-12">
                               <input className="form-control" type="email"  placeholder="EMAIL ID" required   onChange={(e) => setEmail(e.target.value)}/>
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                            
                            <div className="col-md-12">
                               <input className="form-control" type="text"  placeholder="SUBJECT" required  onChange={(e) => setSubject(e.target.value)}/>
                               <div className="valid-feedback">name field is valid!</div>
                               <div className="invalid-feedback">name field cannot be blank!</div>
                            </div>
                              
                              <br/>

                            <div className="col-md-12">
                            <textarea id="message" placeholder='MESSAGE' onChange={(e) => setMessage(e.target.value)}></textarea>
                           </div>
                           

                  
   




                         <div className="form-button mt-3">
                         <button id="submit" type="submit" className="btn btn-primary" disabled={loading}> {loading ? 'Sending...' : 'Submit'}   </button>
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

export default FaqAdd
