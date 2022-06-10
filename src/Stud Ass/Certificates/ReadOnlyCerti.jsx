import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare , faSms}  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyCerti = ({Certi, handleEditClick, handleViewClick}) => {
  return (
   <>
        <tr key={Certi.prn} >
      <th scope="row"><Link  to={`/studentprofile/${Certi.prn}`}
            key={Certi.prn}>{Certi.prn}</Link></th>
      <td>{Certi.trino}</td>
      <td>{Certi.reason}</td>
      
      <td>{Certi.date}</td>
      <td>{Certi.status}</td>
      <td>{Certi.remark}</td>
      <td>{Certi.msg}</td>



     


     
     
       <td className='d-flex justify-content-between'>
      <button className="btn" onClick={(event)=>handleEditClick(event, Certi, Certi._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

       </td>
       <td>
      <a href="https://web.whatsapp.com/"><strong className="item"><FontAwesomeIcon icon={faSms} className="icon" /></strong></a>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyCerti