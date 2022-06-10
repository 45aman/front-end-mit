import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk }  from "@fortawesome/free-solid-svg-icons"

const EditOnlyDupGC = ({EditDupGCData, handleEditChange, upload}) => {
  return (
    <>
        <tr>
        
        <td>
            <input className="form-control" type="number"  name="prn" value={EditDupGCData.prn}  placeholder="ID"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text" name="reason" value={EditDupGCData.reason} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="trino" value={EditDupGCData.trino}  placeholder="FILE TITLE"  readOnly={handleEditChange} required   /> 
            </td>
           
            <td>
            <input className="form-control" type="text" name="rob" value={EditDupGCData.rob} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="year" value={EditDupGCData.year} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="gpa" value={EditDupGCData.gpa} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="date" value={EditDupGCData.date} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <select className="form-select mt-3" required name="status" value={EditOnlyDupGC.status} onChange={handleEditChange} >
                                      <option selected disabled value="">COMPLETED</option>
            <option>PENDING</option>
            <option>COMPLETED</option>
            </select>         
             </td>
             <td>
            <input className="form-control" type="text" name="msg" value={EditDupGCData.msg} placeholder="FILE LINK" onChange={handleEditChange} required    /> 
            </td>
           
            <td>
     <button className="btn" type='submit' onClick={upload} ><FontAwesomeIcon icon={faFloppyDisk} className="icon" /></button>

      </td>
      <td>
            <input className="form-control" type="text" name="fir" value={EditDupGCData.fir} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="affidavite" value={EditDupGCData.affidavite} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
        </tr>
    </>
  )
}

export default EditOnlyDupGC