import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyEquC = ({EquC, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={EquC.prn} >
      <th scope="row"><Link  to={`/studentprofile/${EquC.prn}`}
            key={EquC.prn}>{EquC.prn}</Link></th>
      <td>{EquC.year}</td>
      <td>{EquC.gpa}</td>
      <td>{EquC.reason}</td> 
      <td>{EquC.date}</td>
      <td>{EquC.status}</td>
      <td>{EquC.msg}</td>



     


     
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, EquC, EquC._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyEquC