import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlydupGC = ({DupGC, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={DupGC.prn} >
      <th scope="row"><Link  to={`/studentprofile/${DupGC.prn}`}
            key={DupGC.prn}>{DupGC.prn}</Link></th>
                  <td>{DupGC.reason}</td>
      <td>{DupGC.trino}</td>
      <td>{DupGC.rob}</td>
      <td>{DupGC.year}</td>
      <td>{DupGC.gpa}</td>
      <td>{DupGC.date}</td>
      <td>{DupGC.status}</td>
      <td>{DupGC.msg}</td>



     


     
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, DupGC, DupGC._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href={DupGC.fir}><strong className="item"><FontAwesomeIcon icon={faEye} className="icon" /></strong></a>

      </td>
      <td>
      <a href={DupGC.affidavite}><strong className="item"><FontAwesomeIcon icon={faEye} className="icon" /></strong></a>

      </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlydupGC