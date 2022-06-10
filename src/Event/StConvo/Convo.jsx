import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'


import Logo from '../StTimetable/logo.png'
import { Link } from 'react-router-dom'
import '../StTimetable/TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



export default class Convo extends React.Component  {
   
  state = {  
    convos: []  
  }  
 

  componentDidMount() {  
    axios.get(`http://localhost:4000/getconvodata`)  
      .then(res => {  
        const convos = res.data;  
        this.setState({ convos });  
      })  
  }  




  deleteRow(id, e){  
    axios.delete(`http://localhost:4000/deleteconvo/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const convos = this.state.convos.filter(item => item.id !== id);  
        this.setState({ convos });  
      })  
    
  }  
render (){
  return (
    <>



<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<Link to="/Sthome"> <img src={Logo} alt="..." height="50"/></Link>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"></a>
      </li>
    </ul>
    <span className="navbar-text">
CONVOCATION    </span>
  </div>
</nav>

<div className='mt-5'>
<div style={{margin:"5%"}}>
  <p>
  "Dear Students,</p>
  <p>We are glad to inform you that the 3rd Convocation was successfully conducted on 9th October 2021.
The Blockchain featured Medal Certificates, Rank Certificates and Degree Certificates have been delivered to all eligible students on their official email address.
Degree certificate also available on the Digi Locker."</p>
<p>
1) 2nd Convocation Degree Certificate by Post : https://docs.google.com/forms/d/e/1FAIpQLSe32uUDB6JqZJUigR_wxXN5vq0ZGsYqnHNPlCjm9f3tQ1wCnA/viewform?usp=sf_link
</p><p>
2) 3rd Convocation Degree Certificate by Post : https://docs.google.com/forms/d/e/1FAIpQLSdNaRjjpNM6mESmZ-fEUq0toRqnznDahijrIyz0Qo4pASbK5g/viewform?usp=sf_link
 
*If any query kindly mail on-   convocation@mitwpu.edu.in
  </p>
</div>
    <div className=''>
       

        <div>
        <table className="table">
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col"></th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">DATE</th>
      <th scope="col">TIME</th>
      <th scope="col">VENUE</th>

      <th scope="col">INVITATION</th>
      <th scope="col"></th>


    </tr>
  </thead>
  <tbody>

  
  {this.state.convos.map((element)=>(

      <tr>
      <th scope="row">{element.id}</th>
      <td>{element.department}</td>
      <td>{element.date}</td>
      <td>{element.time}</td>
      <td>{element.venue}</td>

      <td className='d-flex justify-content-between'>
       <a  href={element.invitation}> <button className="btn"><FontAwesomeIcon icon={faEye} className="icon" /></button></a>
      
      </td>
    </tr>

     
  

    ))}
  
  </tbody>
</table>

        </div>
    </div>
</div>

    </>
  )
}
}