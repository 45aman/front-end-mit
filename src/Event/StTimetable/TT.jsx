import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'


import Logo from './logo.png'
import { Link } from 'react-router-dom'
import './TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'



export default class TT extends React.Component  {
   
  state = {  
    timetables: []  
  }  
 

  componentDidMount() {  
    axios.get(`http://localhost:4000/getdata`)  
      .then(res => {  
        const timetables = res.data;  
        this.setState({ timetables });  
      })  
  }  




  deleteRow(id, e){  
    axios.delete(`http://localhost:4000/deletetimetable/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data.reverse());  
    
        const timetables = this.state.timetables.filter(item => item.id !== id);  
        this.setState({ timetables });  
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
TIMETABLE    </span>
  </div>
</nav>


        <div className='add_btn mt-5'>
        </div>

        <div>
        <table className="table">
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">YEAR</th>
      <th scope="col">TRIMESTER</th>
      <th scope="col">PROGRAM</th>
      <th scope="col">TYPE</th>
      <th scope="col">DATE</th>

      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

  
  {this.state.timetables.map((element)=>(

      <tr>
      <td>{element.department}</td>
      <td>{element.year}</td>
      <td>{element.trimester}</td>
      <td>{element.program}</td>
      <td>{element.type}</td>
      <td>{element.date}</td>

      <td className='d-flex justify-content-between'>
       <a  href={element.ttfile}> <button className="btn"><FontAwesomeIcon icon={faEye} className="icon" /></button></a>
      </td>
    </tr>

     
  

    ))}
  
  </tbody>
</table>

        </div>
        <div class="col-1" >

        </div>
  

    </>
  )
}
}