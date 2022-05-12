import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/Login.css'
import {Link} from "react-router-dom"
import bgimg1 from "../img/MIT-WPU-Pune.jpeg"
import logo from "../img/logo.png"
import hire from "../img/hire.svg"

function Login() {
  return (
    <>
    <div className='container'>
      <img className='bg' src={bgimg1} alt='' ></img>
      <div>
        <img className='logoL' src={logo} alt='' ></img>
        <div className="caard text-dark bg-light mb-3" style={{borderRadius:10,opacity:'90%',Height:'100vh', maxWidth:'45%', marginLeft:'60%',marginRight:'5%', top:'20%', position:'absolute', paddingBottom:'3%'}}>
        <div className="caard-header" style={{fontSize:'2vw', fontWeight: 'bold', paddingTop:'25px'}} adjustsFontSizeToFit>CHOOSE ACCOUNT TYPE</div>
        <div className="caard-body" style={{padding:'0px'}}>
          <img className='caard-img' src={hire} alt='' ></img>
          <div className='mx-5 d-flex flex-column align-items-center '>
            <Link to='/loginadmin'>
            <button className='btn btn-info  align-self-center my-2' type="button" style={{width:'17vw', fontWeight:'bold', fontSize:'1.3vw'}}>LOGIN AS ADMIN </button>
            </Link>
            <Link to='/loginstaff'>
            <button className='btn btn-warning align-self-center my-2' type="button" style={{width:'17vw', fontWeight:'bold', fontSize:'1.3vw'}}>LOGIN AS STAFF </button>
            </Link>
            <Link to='/loginstudent'>
            <button className='btn btn-warning align-self-center my-2' type="button"style={{width:'17vw', fontWeight:'bold', fontSize:'1.3vw'}}>LOGIN AS Student </button>
            </Link>
          </div>
        </div>
        </div>
      </div>  
    </div> 
    </>
  );
}



export default Login
