import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk }  from "@fortawesome/free-solid-svg-icons"

const EditEquC = ({EditEquCData, handleEditChange, upload}) => {
  return (
    <>
        <tr>
        
        <td>
            <input className="form-control" type="number"  name="prn" value={EditEquCData.prn}  placeholder="ID"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="year" value={EditEquCData.year}  placeholder="FILE TITLE"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="gpa" value={EditEquCData.gpa}  placeholder="FILE TITLE"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text" name="reason" value={EditEquCData.reason} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="date" value={EditEquCData.date} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <select className="form-select mt-3" required name="status" value={EditEquC.status} onChange={handleEditChange} >
                                      <option selected disabled value="">COMPLETED</option>
            <option>PENDING</option>
            <option>COMPLETED</option>
            </select>         
             </td>
             <td>
            <input className="form-control" type="text" name="msg" value={EditEquCData.msg} placeholder="FILE LINK" onChange={handleEditChange} required    /> 
            </td>
            <td>
     <button className="btn" type='submit' onClick={upload} ><FontAwesomeIcon icon={faFloppyDisk} className="icon" /></button>

      </td>
        </tr>
    </>
  )
}

export default EditEquC