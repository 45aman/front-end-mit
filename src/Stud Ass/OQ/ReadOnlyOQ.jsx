import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyOQ = ({OQ, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={OQ.prn} >
      <th scope="row"><Link  to={`/studentprofile/${OQ.prn}`}
            key={OQ.prn}>{OQ.prn}</Link></th>
      
      <td>{OQ.query}</td> 
      <td>{OQ.date}</td>
      <td>{OQ.status}</td>
      <td>{OQ.msg}</td>



     


     
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, OQ, OQ._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyOQ