import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk }  from "@fortawesome/free-solid-svg-icons"

const EditOnlyFaq = ({EditFaqData, handleEditChange, upload}) => {
  return (
    <>
        <tr>
        
        <td>
            <input className="form-control" type="number"  name="id" value={EditFaqData.id}  placeholder="ID"  onChange={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="title" value={EditFaqData.title}  placeholder="FILE TITLE"  onChange={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text" name="link" value={EditFaqData.link} placeholder="FILE LINK" onChange={handleEditChange} required    /> 
            </td>
            <td>
     <button className="btn" type='submit' onClick={upload} ><FontAwesomeIcon icon={faFloppyDisk} className="icon" /></button>

      </td>
        </tr>
    </>
  )
}

export default EditOnlyFaq