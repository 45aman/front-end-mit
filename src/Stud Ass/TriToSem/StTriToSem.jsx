import React, {useState, useEffect, Fragment} from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare, faSms }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReadOnlyTriToSem from './ReadOnlyTriToSem'
import EditOnlyTriToSem from './EditOnlyTriToSem'
import StuPro from '../../login/StuPro'
import {Bar, Pie} from "react-chartjs-2"
import Logo from '../Certificates/logo.png'
import {Chart as ChartJS} from "chart.js/auto"

const StTriToSem = () => {





   
const [EditTriToSemData, setEditData] = useState({
      prn:"",   
      date:"",
      image:"",
      status:"",
      msg: ""
})

const [TriToSem, getTriToSem]= useState([]);
//console.log(TriToSem);

const abc = TriToSem.map((data)=>data.status)


const map = abc.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());


const count = [...map.values()]
console.log(count);

const status = [...map.keys()]



const bcd =TriToSem.map((data)=>data.date)



const date = bcd.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());


const datec = [...date.values()]


const dater = [...date.keys()]


console.log(dater);
//console.info([...map.keys()])
//console.info([...map.values()])
/*const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
const status = abc.filter(unique)

//console.log(status);*/


const data = {
  labels: status,
  datasets: [{
    label: 'Count of Applications',
    data: count,
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(255, 159, 64, 0.5)',
      'rgba(255, 205, 86, 0.5)',
      
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      
    ],
    borderWidth: 2
  }]
};



const data2 = {
  labels: dater,
  datasets: [{
    label: 'Count of Applications Day Wise',
    data: datec,
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(255, 159, 64, 0.5)',
      'rgba(255, 205, 86, 0.5)',
      
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      
    ],
    borderWidth: 2
  }]
};

const [eTriToSem, setETriToSem] = useState({
 

   })
   console.log(eTriToSem);


useEffect(() => {
    getAllTriToSem();
}, []);

const getAllTriToSem = () =>{
    axios.get(`http://localhost:4000/app/getTriToSem`) 
    .then((res)=>{
        const allTriToSems = res.data.reverse();
        getTriToSem(allTriToSems);
        //console.log(allTriToSems);
    }) 
.catch(error => console.error(`Error: $(error`));
}


const [editTriToSemId, setEditTriToSemID] = useState(null);

const handleEditClick = (event, TriToSem)=>{
    event.preventDefault();
    setEditTriToSemID(TriToSem._id);

    const TriToSemValues ={
        prn: TriToSem.prn,
        image: TriToSem.image,
        date: TriToSem.date,
        status: TriToSem.status,
        msg: TriToSem.msg
    }
    
    setEditData(TriToSemValues)
}

const handleEditChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newTriToSemData = { ...EditTriToSemData};
    newTriToSemData[fieldName] = fieldValue;

    setEditData(newTriToSemData);
}

const handleEditSubmit =(e, id) =>{
 e.preventDefault();
 const editedTriToSem={
   _id: editTriToSemId,
   prn: EditTriToSemData.prn,
   image: EditTriToSemData.image,
   date: EditTriToSemData.date,
   status: EditTriToSemData.status,
   msg: EditTriToSemData.msg
   
 }

 setETriToSem(editedTriToSem)



  axios.post(`http://localhost:4000/app/updateTriToSem`,editedTriToSem) 


  .then(res => console.log(res))
  window.location.reload(false);



console.log(editedTriToSem);
 


 
}



  return (
    <>

<div className="">
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
    <span className="navbar-text">  Trimester to Semester Conversion Certificate   </span>
  </div>
</nav>

    <div className='row' style={{ margin: "40px" } }>
   
    <div style={{width: 800, margin: "10px", padding:"10px" } } className="col-6">
      <Bar data={data2} />
    </div>

    <div style={{width: 400, margin: "10px" , marginRight:"10px", padding:"10px" } } className="col-6">
      <Pie data={data} />
    </div>

    </div>
      <div style={{ margin: "10px" } } className="table-responsive">
        <form onSubmit={handleEditSubmit}>
        <table className="table table-bordered" >
  <thead className="thead-dark">
    <tr className='table-dark'>
      <th scope="col">PRN</th>
      <th scope="col">DATE</th> 
      <th scope="col">STATUS</th> 
      <th scope="col">MSG</th> 
      <th scope="col">EDIT</th>
      <th scope="col">IMAGE</th>

      <th scope="col">WH</th>



    </tr>
  </thead>
  <tbody>

  
 {TriToSem.map((TriToSem) => (
<Fragment>
{editTriToSemId === TriToSem._id ? (  <EditOnlyTriToSem TriToSem={TriToSem} EditTriToSemData={EditTriToSemData} handleEditChange={handleEditChange}/>):(<ReadOnlyTriToSem TriToSem={TriToSem} handleEditClick={handleEditClick} />)}
   
      
      </Fragment>


    ))}
   
  
  </tbody>
</table>
</form>
 </div>
 <div>
<footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>??2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
    </>
  )
}


export default StTriToSem