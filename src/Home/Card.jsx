import React, {useState,useEffect} from 'react'
import axios from 'axios'
import './Card.css'
const Card = () => {

  const [faq, getFaq]= useState([]);
console.log();

  useEffect(() => {
    getAllFaqs();
}, []);

const getAllFaqs = () =>{
    axios.get(`http://localhost:4000/getfaqdata`) 
    .then((res)=>{
        const allFaqs = res.data;
        getFaq(allFaqs);
        console.log(allFaqs);
    }) 
.catch(error => console.error(`Error: $(error`));
}
  
    return (
        <>
        
        <div>
            
<div className="containerr">
  <div className="cardd">
    <h3 className="titlee">EXAM FORM ISSUES</h3>
   
    <div className="barr">
    <p className="question">Q. Do I need to submit an Exam form for the end term exam?</p>
    <p>
Ans. Yes, it is necessary to fill exam form for every end term exam.</p>
<p className="question">
Q. I have an internal backlog; do I need to submit an exam form?</p>
<p>
Ans. Yes, it is necessary to fill exam form for internal backlog also.
</p>
<div className="text-center">


 

    <a href={faq[0]?.link}><button type="button" className="btn btn-light btn-md">READ MORE</button></a>

 
  

    </div>

    </div>
    


    
  </div>
  <div className="cardd">
    <h3 className="titlee">EXAMINATION RELATED QUERIES</h3>
    <div className="barr">
      <p className="question">Q. How to fill an Examination form?</p>
      <p>Ans. Select Exam, Course Year and Click on Show. Submit the application and take printout of your exam application form. Submit the print along with complete exam fees ( regular + backlog as applicable ) to student section. Save the receipt.</p>
      <p className="question"></p>
      <p></p>
      <div className="text-center">
  <a href={faq[2]?.link}>  <button type="button" className="btn btn-light btn-md">READ MORE</button></a>

    </div>
      

    </div>
    <div className="circlee">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    </svg>
    </div>
  </div>
  <div className="cardd">
    <h3 className="titlee">MITSOB TRANSCRIPT TO WES</h3>
    <div className="barr">
    <p className="question">Qs. I am a student of MITSOB. I want a transcript. What is the procedure?</p>
      <p>Ans. Send scan copies of mark sheets of both years and screenshot of payment for transcript to exam.helpdesk@mitwpu.edu.in. The payment details mentioned on the website (https://mitwpu.edu.in/examination)</p>
      <div className="text-center">
    <a></a><button type="button" className="btn btn-light btn-md">READ MORE</button>

    </div>
    </div>
   
  </div>
  <div className="cardd">
    <h3 className="titlee"> REFUND QUERIES</h3>
    <div className="barr">
    <p className="question">Q. I have paid exam fees twice. How do I apply for refund of the exam fees?</p>
      <p>Ans. Send an application to exam.helpdesk@mitwpu.edu.in along with Bank Details (Name, Bank Name, Branch, Account number, IFSC code) and transaction details as well as screenshots of a cancelled cheque .</p>
      <div className="text-center">
    <button type="button" className="btn btn-light btn-md">READ MORE</button>

    </div>
    </div>
    
    
  </div>
  <div className="cardd">
    <h3 className="titlee">RECHECKING AND REVALUATION</h3>
    <div className="barr">
    <p className="question">Q. What is the procedure to obtain a photocopy of answer booklet?</p>
      <p>Ans. Pay the required fee at Department of Examination and fill student assistance form. Photocopy will be made available within two days when revaluation dates are declared.</p>
      <div className="text-center">
    <button type="button" className="btn btn-light btn-md">READ MORE</button>

    </div>
    </div>
            
  </div>
  

</div>




        </div>
        </>
    )
}

export default Card
