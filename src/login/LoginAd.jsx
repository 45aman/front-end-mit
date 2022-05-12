import React, { useState } from 'react'
import '../login/Login.css'
import bgimg1 from "../img/MIT-WPU-Pune.jpeg"
import logo from "../img/logo.png"
import designer from "../img/admin.svg"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

function LoginAd() {

  const nevigate = useNavigate()



  const [admin, setAdmin] = useState({
      adprn: "",
      adpassword: "",

  })

  const handlechange = e => {
      const { name, value } = e.target
      setAdmin({
          ...admin,
          [name]: value
      })
  }

  const loginadmin = () => {
      axios.post("http://localhost:4000/loginadmin", admin)
          .then(res => {
              alert(res.data.message)
              if (res.data.message === "Login Sucessfull") {
                  nevigate("/home")
              } else {
                  nevigate("/")
              }
          })
  }


    return (
      <>
      <div className='container'>
        <img className='bg' src={bgimg1} alt=''  ></img>
        <div>
          <img className='logoAL' src={logo} alt='' style={{height: '13vh'}} ></img>
          <div className='justify-content-centre align-items-centre'>
          <div className="caard text-dark bg-light" style={{borderRadius:10,opacity:'90%', width:'20vw', marginLeft:'14%',marginRight:'5%', top:'25%', position:'absolute', paddingBottom: '2%'}}>
          <div className="caard-header" style={{fontSize:'2vw', fontWeight: 'bold', paddingTop:'15px'}}>ADMIN PAGE</div>
          <div className="caard-body" style={{padding:'0px'}}>
            <img className='caard-img' src={designer} alt='' style={{width:'15vw'}}></img>
            
            <form>
              <h6 style={{fontWeight: 'bold', textAlign:'left', paddingLeft:'15px', fontSize:'1.2vw'}}>PRN</h6>
              <label>
                <input className='username'  name = "adprn" value = { admin.adprn } onChange = { handlechange } type="text"/>
              </label>
              <br/>
              <br/>
              <h6 style={{fontWeight: 'bold', textAlign:'left', paddingLeft:'15px', fontSize:'1.2vw'}}>PASSWORD</h6>
              <label>
                <input className='password'  name = "adpassword" value = { admin.adpassword } onChange = { handlechange } type="password"/>
              </label>
              <br/>
              <br/>
              <div className='mx-5 d-flex flex-column align-items-center'>
                <button className='btn btn-warning  align-self-center' type="button" onClick = {loginadmin} style={{fontWeight:'bold', fontSize:'1.3vw', width:'13vw'}}>LOGIN</button>
              
              <button className='forgotPass align-self-center' href="/">FORGOT PASSWORD?</button>
              <Link to = '/registeradmin' className = "align-self-centre" > create new account </Link>
              </div>
            </form>
          </div>
          </div>
          </div>
        </div>  
      </div> 
      </>
    );
  }
  
  
  
  export default LoginAd
