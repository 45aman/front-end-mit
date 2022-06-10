import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFloppyDisk }  from "@fortawesome/free-solid-svg-icons"

const EditOnlyOffTr = ({EditOffTrData, handleEditChange, upload}) => {
  return (
    <>
        <tr>
        
        <td>
            <input className="form-control" type="number"  name="prn" value={EditOffTrData.prn}  placeholder="ID"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text"  name="reqCopies" value={EditOffTrData.reqCopies}  placeholder="REQ.COPIES"  readOnly={handleEditChange} required   /> 
            </td>
            <td>
            <input className="form-control" type="text" name="collectingOption" value={EditOffTrData.collectingOption} placeholder="COLLECTING OPTION" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="address" value={EditOffTrData.address} placeholder="ADDRESS" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <input className="form-control" type="text" name="date" value={EditOffTrData.date} placeholder="FILE LINK" readOnly={handleEditChange} required    /> 
            </td>
            <td>
            <select className="form-select mt-3" required name="status" value={EditOnlyOffTr.status} onChange={handleEditChange} >
                                      <option selected disabled value="">COMPLETED</option>
            <option>PENDING</option>
            <option>COMPLETED</option>
            </select>         
             </td>
             <td>
            <input className="form-control" type="text" name="msg" value={EditOffTrData.msg} placeholder="MSG" onChange={handleEditChange} required    /> 
            </td>
            <td>
     <button className="btn" type='submit' onClick={upload} ><FontAwesomeIcon icon={faFloppyDisk} className="icon" /></button>

      </td>
        </tr>
    </>
  )
}

export default EditOnlyOffTr