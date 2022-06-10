import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyConGC = ({ConGC, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={ConGC.prn} >
      <th scope="row"><Link  to={`/studentprofile/${ConGC.prn}`}
            key={ConGC.prn}>{ConGC.prn}</Link></th>
      <td>{ConGC.trino}</td>
      <td>{ConGC.date}</td>
      <td>{ConGC.status}</td>
      <td>{ConGC.msg}</td>
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, ConGC, ConGC._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyConGC