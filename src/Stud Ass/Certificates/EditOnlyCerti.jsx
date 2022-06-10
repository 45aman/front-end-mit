import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk }  from "@fortawesome/free-solid-svg-icons"

const EditOnlyCerti = ({EditCertiData, handleEditChange, upload}) => {
  return (
    <>
        <tr>
        
        <td>
            <input className="form-control" type="number"  name="prn" value={EditCertiData.prn}  placeholder="ID"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="trino" value={EditCertiData.trino}  placeholder="FILE TITLE"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text" name="reason" value={EditCertiData.reason} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="date" value={EditCertiData.date} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <select className="form-select mt-3" required name="status" value={EditOnlyCerti.status} onChange={handleEditChange} >
                                      <option selected disabled value="">COMPLETED</option>
            <option>PENDING</option>
            <option>COMPLETED</option>
            <option>PROCESSING</option>
            </select>         
             </td>
             <td>
            <input className="form-control" type="text" name="remark" value={EditCertiData.remark} placeholder="REMARK" onChange={handleEditChange}     /> 
            </td>
             <td>
            <input className="form-control" type="text" name="msg" value={EditCertiData.msg} placeholder="FILE LINK" onChange={handleEditChange}     /> 
            </td>
            <td>
     <button className="btn" type='submit' onClick={upload} ><FontAwesomeIcon icon={faFloppyDisk} className="icon" /></button>

      </td>
        </tr>
    </>
  )
}

export default EditOnlyCerti