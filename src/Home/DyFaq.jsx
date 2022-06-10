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
const DyFaq = () => {



  const [eFaq, setEFaq] = useState({
    _id:"",
    id:"",  
    title: "",
      link: "",
    })



const [faq, getFaq]= useState([]);

const [EditFaqData, setEditData] = useState({
  id:"",
      title: "",
        link: "",
})

useEffect(() => {
    getAllFaqs();
}, []);

const getAllFaqs = () =>{
    axios.get(`http://localhost:4000/getfaqdata`) 
    .then((res)=>{
        const allFaqs = res.data;
        getFaq(allFaqs);
        console.log(allFaqs);
    }) 
.catch(error => console.error(`Error: $(error`));
}

const [editFaqId, setEditFaqID] = useState(null);

const handleEditClick = (event, faq)=>{
    event.preventDefault();
    setEditFaqID(faq._id);

    const faqValues ={
      id: faq.id,
      title: faq.title,
        link: faq.link,
    }
    
    setEditData(faqValues)
}

const handleEditChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFaqData = { ...EditFaqData};
    newFaqData[fieldName] = fieldValue;

    setEditData(newFaqData);
}

const handleEditSubmit =(e, id) =>{
 e.preventDefault();
 const editedFaq={
   _id: editFaqId,
   id: EditFaqData.id,
   title: EditFaqData.title,
   link: EditFaqData.link
 }

 setEFaq(editedFaq)



  axios.post(`http://localhost:4000/updatefaq`,editedFaq) 

  .then(res => console.log(res))


console.log(editedFaq);
 


 
}



  return (
    <>
      <div className='add_btn mt-2'>
      
      <Link to="/faqadd"><button className="btn"><strong className="item">ADD <FontAwesomeIcon icon={faCirclePlus} className="icon" /></strong></button></Link>
  </div>
        <form onSubmit={handleEditSubmit}>
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

  
 {faq.map((faq) => (
<Fragment>
{editFaqId === faq._id ? (  <EditOnlyFaq faq={faq} EditFaqData={EditFaqData} handleEditChange={handleEditChange}/>):(<ReadOnlyFaq faq={faq} handleEditClick={handleEditClick} />)}
   
      
      </Fragment>

    ))}
  
  </tbody>
</table>
</form>
    </>
  )
}


export default DyFaq