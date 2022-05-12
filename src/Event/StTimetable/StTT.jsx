import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'


import Logo from './logo.png'
import { Link } from 'react-router-dom'
import './TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';




export default class StTT extends React.Component  {
   
  state = {  
    timetables: []  
  }  
 

  componentDidMount() {  
    axios.get(`http://localhost:4000/getdata`)  
      .then(res => {  
        const timetables = res.data.reverse();  
        this.setState({ timetables });  
      })  
  }  




  deleteRow(id, e){  
    axios.delete(`http://localhost:4000/deletetimetable/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
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

<div className='mt-5'>
    <div className=''>
        <div className='add_btn mt-2'>
            <Link to="/timetableadd"><button className="btn"><strong className="item">ADD <FontAwesomeIcon icon={faCirclePlus} className="icon" /></strong></button></Link>
        </div>

        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>

        <div>
        <table className="table" id="table-to-xls">
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col">SR</th>
      <th scope="col">DEPARTMENT</th>
      <th scope="col">TRIMESTER</th>
      <th scope="col">TYPE</th>
      <th scope="col">DATE</th>

      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

  
  {this.state.timetables.map((element)=>(

      <tr>
      <th scope="row">{element.id}</th>
      <td>{element.department}</td>
      <td>{element.trimester}</td>
      <td>{element.type}</td>
      <td>{element.date}</td>

      <td className='d-flex justify-content-between'>
       <a  href={element.ttfile}> <button className="btn"><FontAwesomeIcon icon={faEye} className="icon" /></button></a>
        <button className="btn" onClick={(e) => this.deleteRow(element._id, e)}><FontAwesomeIcon icon={faTrashCan} className="icon"/></button>
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