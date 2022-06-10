import React, {useState, useEffect, Fragment} from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare, faSms }  from "@fortawesome/free-solid-svg-icons"
import axios from 'axios'
import ReadOnlyDupGC from './ReadOnlyDucGC'
import EditOnlyDupGC from './EditOnlyDucGC'
import StuPro from '../../login/StuPro'
import {Bar, Pie} from "react-chartjs-2"
import Logo from '../Certificates/logo.png'
import {Chart as ChartJS} from "chart.js/auto"

const StDupGC = () => {





   
const [EditDupGCData, setEditData] = useState({
    prn:'',
    mob:'',
    email:'',
    reason:'',
    trino:'',
    rob:'',
    year:'',
    gpa:'',
    fir:'',
    affidavite:'',
    date:'',
      status:"",
      msg:"",

})

const [DupGC, getDupGC]= useState([]);
//console.log(DupGC);

const abc = DupGC.map((data)=>data.status)


const map = abc.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());


const count = [...map.values()]
console.log(count);

const status = [...map.keys()]



const bcd =DupGC.map((data)=>data.date)



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

const [eDupGC, setEDupGC] = useState({
 

   })
   console.log(eDupGC);


useEffect(() => {
    getAllDupGC();
}, []);

const getAllDupGC = () =>{
    axios.get(`http://localhost:4000/app/getDupGC`) 
    .then((res)=>{
        const allDupGCs = res.data.reverse();
        getDupGC(allDupGCs);
        //console.log(allDupGCs);
    }) 
.catch(error => console.error(`Error: $(error`));
}


const [editDupGCId, setEditDupGCID] = useState(null);

const handleEditClick = (event, DupGC)=>{
    event.preventDefault();
    setEditDupGCID(DupGC._id);

    const DupGCValues ={
        prn: DupGC.prn,
        reason: DupGC.reason,
        trino: DupGC.trino,
        rob: DupGC.rob,
        year: DupGC.year,
        gpa: DupGC.gpa,
        date: DupGC.date,
        status: DupGC.status,
        msg: DupGC.msg,
        fir: DupGC.fir,
        affidavite: DupGC.affidavite,

    }
    
    setEditData(DupGCValues)
}

const handleEditChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newDupGCData = { ...EditDupGCData};
    newDupGCData[fieldName] = fieldValue;

    setEditData(newDupGCData);
}

const handleEditSubmit =(e, id) =>{
 e.preventDefault();
 const editedDupGC={
   _id: editDupGCId,
   prn: EditDupGCData.prn,
   reason: EditDupGCData.reason,
   trino: EditDupGCData.trino,
   rob: EditDupGCData.rob,
   year: EditDupGCData.year,
   gpa: EditDupGCData.gpa,
   date: EditDupGCData.date,
   status: EditDupGCData.status,
   msg: EditDupGCData.msg,
   fir: EditDupGCData.fir,
   affidavite: EditDupGCData.affidavite,

 }

 setEDupGC(editedDupGC)



  axios.post(`http://localhost:4000/app/updateDupGC`,editedDupGC) 


  .then(res => console.log(res))
  window.location.reload(false);



console.log(editedDupGC);
 


 
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
    <span className="navbar-text"> DUPLICATE GRADE CARD/ DEGREE CERTIFICATE     </span>
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
      <th scope="col">REASON</th>
      <th scope="col">TRIMESTER NO</th>
      <th scope="col">ROB</th>
      <th scope="col">YEAR</th>
      <th scope="col">GPA</th>
      <th scope="col">DATE</th> 
      <th scope="col">STATUS</th>
      <th scope="col">MSG</th>  
      <th scope="col">EDIT</th>
      <th scope="col">FIR</th>
      <th scope="col">AFFIDAVITE</th>
      <th scope="col">WH</th>



    </tr>
  </thead>
  <tbody>

  
 {DupGC.map((DupGC) => (
<Fragment>
{editDupGCId === DupGC._id ? (  <EditOnlyDupGC DupGC={DupGC} EditDupGCData={EditDupGCData} handleEditChange={handleEditChange}/>):(<ReadOnlyDupGC DupGC={DupGC} handleEditClick={handleEditClick} />)}
   
      
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


export default StDupGC