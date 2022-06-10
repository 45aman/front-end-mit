import * as React from 'react';
import  {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSms, faEye, faTrashCan, faPenToSquare }  from "@fortawesome/free-solid-svg-icons"

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



export default function CertificateTable() {





  
  
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          
          <TableCell align="">PRN</TableCell>
            
            <TableCell align="">TRIMESTER NO</TableCell>
            <TableCell align="">REASON</TableCell>
            <TableCell align="">DATE</TableCell>

        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>NAME</TableCell>
                      <TableCell>FATHERSNAME</TableCell>
                      <TableCell align="right">PROGRAM</TableCell>
                      <TableCell align="right">FACALTY</TableCell>
                      <TableCell align="right">EMAIL</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Stu.map((Stu) => (
                      <TableRow key={Stu.prn}>
                      <TableCell>{Stu.studentname}</TableCell>

                        <TableCell component="th" scope="row">
                          {Stu.fathername}
                        </TableCell>
                        <TableCell>{Stu.program}</TableCell>
                        <TableCell align="right">{Stu.specialization}</TableCell>
                        <TableCell align="right">
                          {Stu.email}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
 
  



  const [open, setOpen] = React.useState(false);




    const [Certi, getCerti]= useState([]);


useEffect(() => {
    getAllCerti();
}, []);

const getAllCerti = () =>{
    axios.get(`http://localhost:4000/app/getcertificate`) 
    .then((res)=>{
        const allCertis = res.data;
        getCerti(allCertis);
    }) 
.catch(error => console.error(`Error: $(error`));
}


const [Stu, getStu]= useState([]);


useEffect(() => {
    getAllStu();
}, []);

const getAllStu = () =>{
    axios.get(`http://localhost:4000/getstudent`) 
    .then((res)=>{
        const allStu = res.data;
        getStu(allStu);
    }) 
.catch(error => console.error(`Error: $(error`));
}
  return (


    <>
      <div>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          <TableCell/>

            <TableCell align="">PRN</TableCell>
            
            <TableCell align="">TRIMESTER NO</TableCell>
            <TableCell align="">REASON</TableCell>
            <TableCell align="">DATE</TableCell>
            <TableCell align=""></TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
                        {Certi.map((phase) => (

                            <TableRow key={phase._id}>

                            <TableCell>  <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            
            
            
            
            </TableCell>

                            
                                <TableCell component='th' scope='phase'>
                                    {phase.prn}
                                </TableCell>
                                <TableCell>{phase.trino}</TableCell>
                                <TableCell>{phase.reason}</TableCell>
                                <TableCell>{phase.date}</TableCell>
                                <TableCell>            <a href="https://web.whatsapp.com/"><button classNameName="btn"><strong classNameName="item">whatsapp <FontAwesomeIcon icon={faSms} classNameName="icon" /></strong></button></a>
</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
        
      </Table>
    </TableContainer>


</div>

<div>


<ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    classNameName="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" id="test-table-xls">
      <TableHead>
                    <TableRow>
                      <TableCell>NAME</TableCell>
                      <TableCell>FATHERSNAME</TableCell>
                      <TableCell align="right">PROGRAM</TableCell>
                      <TableCell align="right">FACALTY</TableCell>
                      <TableCell align="right">EMAIL</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Stu.map((Stu) => (
                      <TableRow key={Stu.prn}>
                      <TableCell>{Stu.studentname}</TableCell>

                        <TableCell component="th" scope="row">
                          {Stu.fathername}
                        </TableCell>
                        <TableCell>{Stu.program}</TableCell>
                        <TableCell align="right">{Stu.specialization}</TableCell>
                        <TableCell align="right">
                          {Stu.email}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
        
      </Table>
    </TableContainer>


</div>
</>
  );
}
