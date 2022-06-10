import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyTriToSem = ({TriToSem, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={TriToSem.prn} >
      <th scope="row"><Link  to={`/studentprofile/${TriToSem.prn}`}
            key={TriToSem.prn}>{TriToSem.prn}</Link></th>
      
      <td>{TriToSem.date}</td>
      <td>{TriToSem.status}</td>
      <td>{TriToSem.msg}</td>




     


     
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, TriToSem, TriToSem._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href={TriToSem.img}><button className="btn"><FontAwesomeIcon icon={faEye} className="icon" /></button></a>

       </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyTriToSem