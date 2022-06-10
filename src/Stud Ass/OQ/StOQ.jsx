import React, {useState, useEffect, Fragment} from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare, faSms }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReadOnlyOQ from './ReadOnlyOQ'
import EditOnlyOQ from './EditOQ'
import StuPro from '../../login/StuPro'
import {Bar, Pie} from "react-chartjs-2"
import Logo from '../Certificates/logo.png'
import {Chart as ChartJS} from "chart.js/auto"

const StOQ = () => {





   
const [EditOQData, setEditData] = useState({
      prn:"",   
      query:"",
      date:"",
      status:"",
      msg: ""
})

const [OQ, getOQ]= useState([]);
//console.log(OQ);

const abc = OQ.map((data)=>data.status)


const map = abc.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());


const count = [...map.values()]
console.log(count);

const status = [...map.keys()]



const bcd =OQ.map((data)=>data.date)



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

const [eOQ, setEOQ] = useState({
 

   })
   console.log(eOQ);


useEffect(() => {
    getAllOQ();
}, []);

const getAllOQ = () =>{
    axios.get(`http://localhost:4000/app/getOQ`) 
    .then((res)=>{
        const allOQs = res.data.reverse();
        getOQ(allOQs);
        //console.log(allOQs);
    }) 
.catch(error => console.error(`Error: $(error`));
}


const [editOQId, setEditOQID] = useState(null);

const handleEditClick = (event, OQ)=>{
    event.preventDefault();
    setEditOQID(OQ._id);

    const OQValues ={
        prn: OQ.prn,
        query: OQ.query,
        date: OQ.date,
        status: OQ.status,
        msg: OQ.msg
    }
    
    setEditData(OQValues)
}

const handleEditChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newOQData = { ...EditOQData};
    newOQData[fieldName] = fieldValue;

    setEditData(newOQData);
}

const handleEditSubmit =(e, id) =>{
 e.preventDefault();
 const editedOQ={
   _id: editOQId,
   prn: EditOQData.prn,
   query: EditOQData.query,
   date: EditOQData.date,
   status: EditOQData.status,
   msg: EditOQData.msg
   
 }

 setEOQ(editedOQ)



  axios.post(`http://localhost:4000/app/updateOQ`,editedOQ) 


  .then(res => console.log(res))
  window.location.reload(false);



console.log(editedOQ);
 


 
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
    <span className="navbar-text">  OTHER QUERIES   </span>
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
      <th scope="col">QUERY</th>
      <th scope="col">DATE</th> 
      <th scope="col">STATUS</th> 
      <th scope="col">MSG</th> 
      <th scope="col">EDIT</th>
      <th scope="col">WH</th>



    </tr>
  </thead>
  <tbody>

  
 {OQ.map((OQ) => (
<Fragment>
{editOQId === OQ._id ? (  <EditOnlyOQ OQ={OQ} EditOQData={EditOQData} handleEditChange={handleEditChange}/>):(<ReadOnlyOQ OQ={OQ} handleEditClick={handleEditClick} />)}
   
      
      </Fragment>


    ))}
   
  
  </tbody>
</table>
</form>
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


export default StOQ