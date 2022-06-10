import React, {useState, useEffect} from 'react'
import Logo from '../img/logo.png'
import '../Stud Ass/OffTr.css'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";



const StuPro = () => {




 
  const [student, getStudent] = useState([]
  )

  console.log(student);


  const {id}= useParams();

  useEffect(() => {
      getStu();
      
  }, []);

  const getStu = async()=>{
      const res = await axios.get(`http://localhost:4000/getstudent/${id}`);
      getStudent(res.data);

  };


 
 
    return (
       <>
       <div className="menu">
       <div className="logo pb-5">
       <img src={Logo} alt="..."     width="250vw"/>
       </div>

       

<div className="contain">


       <div className="form-body" style={{ color: "black" , opacity:"70%"}}>
        <div className="row">
            <div className="form-holder" style={{marginTop: "10%"}}>
                <div className="form-content">
                    <div className="form-items" >
                        <h3>STUDENT INFO</h3>
                        <br/>


                        {student.map((student) => (

                            <ul>
                            <label for="floatingInputValue">Student Name:</label>

                           <li className="list-group-item list-group-item-dark" >{student.studentname}</li>
                           
                           <label for="floatingInputValue">Father Name:</label>
                           <li className="list-group-item list-group-item-dark">{student.fathername}</li>

                           <label for="floatingInputValue">Faculty:</label>
                           <li className="list-group-item list-group-item-dark">{student.program}</li>
                        
                         <label for="floatingInputValue">Email :</label>
                           <li className="list-group-item list-group-item-dark">{student.email}</li>

                           <label for="floatingInputValue">Mobile No.:</label>
                           <li className="list-group-item list-group-item-dark">{student.mobile}</li>

                       </ul>

    ))}
                       
                      
                    </div>
                </div>
            </div>
        </div>
    </div>


       </div>
     

       
 


       <div>
<footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>©2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>

       </div>
       </>
    )
}

export default StuPro
