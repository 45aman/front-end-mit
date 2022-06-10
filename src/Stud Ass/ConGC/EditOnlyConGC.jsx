import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk }  from "@fortawesome/free-solid-svg-icons"

const EditOnlyConGC = ({EditConGCData, handleEditChange, upload}) => {
  return (
    <>
        <tr>
        
        <td>
            <input className="form-control" type="number"  name="prn" value={EditConGCData.prn}  placeholder="ID"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="trino" value={EditConGCData.trino}  placeholder="TRI. NO."  readOnly={handleEditChange} required   /> 
            </td>
            
            <td>
            <input className="form-control" type="text" name="date" value={EditConGCData.date} placeholder="DATE" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <select className="form-select mt-3" required name="status" value={EditOnlyConGC.status} onChange={handleEditChange} >
                                      <option selected disabled value="">COMPLETED</option>
            <option>PENDING</option>
            <option>COMPLETED</option>
            </select>         
             </td>
             <td>
            <input className="form-control" type="text" name="msg" value={EditConGCData.msg} placeholder="MSG" onChange={handleEditChange} required    /> 
            </td>
            <td>
     <button className="btn" type='submit' onClick={upload} ><FontAwesomeIcon icon={faFloppyDisk} className="icon" /></button>

      </td>
        </tr>
    </>
  )
}

export default EditOnlyConGC