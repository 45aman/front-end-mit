import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyOffTr = ({OffTr, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={OffTr.prn} >
      <th scope="row"><Link  to={`/studentprofile/${OffTr.prn}`}
            key={OffTr.prn}>{OffTr.prn}</Link></th>
      <td>{OffTr.reqCopies}</td>
      <td>{OffTr.collectingOption}</td>
      <td>{OffTr.address}</td>
      <td>{OffTr.date}</td>
      <td>{OffTr.status}</td>
      <td>{OffTr.msg}</td>



     


     
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, OffTr, OffTr._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyOffTr