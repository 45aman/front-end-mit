import React, {useState, useEffect, Fragment} from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'
import '../Event/StTimetable/TT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReadOnlyFaq from './ReadOnlyFaq'
import EditOnlyFaq from './EditOnlyFaq'



export default class Faq extends React.Component  {
   
  state = {  
    faqs: [],
    currfaqId:""  
  }  
 

  componentDidMount() {  
    axios.get(`http://localhost:4000/getfaqdata`)  
      .then(res => {  
        const faqs = res.data;  
        this.setState({ faqs });  
      })  
  }  

  update(e) {
    e.preventDefault();
    const faq = {
        link: this.state.link,
    }
    axios.put('http://localhost:4000/updatefaq/{this.state.title}', faq)
    .then(res => console.log(res.data));
}

 changeid= (d) => {
  this.setState(st=>{st.currfaqId = d});
  console.log(this.state.currfaqId);
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
   
   
   
    <div className='bg-img' >
    
    <div class="row ">
    <div class="col-3"></div>
    <div class="col-8">
        <div className='add_btn mt-2'>
      
            <Link to="/faqadd"><button className="btn"><strong className="item">ADD <FontAwesomeIcon icon={faCirclePlus} className="icon" /></strong></button></Link>
        </div>

      



        <div>

<form>
        <table className="table">
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col">SR</th>
      <th scope="col">FAQ FILE TITLE</th>
      <th scope="col">FILE LINK</th>
      

      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>

  
  {this.state.faqs.map((element)=>(
<Fragment>
     <EditOnlyFaq />
      <ReadOnlyFaq element={element} />
      </Fragment>

    ))}
  
  </tbody>
</table>
</form>
        </div>
        <div class="col-1" >

        </div>
    </div>
    </div>
    </div>
</div>

    </>
  )
}
}