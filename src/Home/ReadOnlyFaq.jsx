import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"

const ReadOnlyFaq = ({faq, handleEditClick}) => {
  return (
   <>
        <tr key={faq.id} >
      <th scope="row">{faq.id}</th>
      <td>{faq.title}</td>
     
      <td className='d-flex justify-content-between'>
       <a  href={faq.link}> <button className="btn"><FontAwesomeIcon icon={faEye} className="icon" /></button></a>
       </td>
       <td>
     <button className="btn" onClick={(event)=>handleEditClick(event, faq, faq._id)}><FontAwesomeIcon icon={faPenToSquare} className="icon" /></button>

      </td>
    </tr>
   </>
  )
}

export default ReadOnlyFaq