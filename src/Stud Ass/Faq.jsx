import React from "react";
import i1 from "../img/faq.svg"
import './Faq.css'

const Faq =() => {
  return (
    <>

        <div className="game">

        <div className="front">
           <img className="im" src={i1}/>
           <h3 className="name">FAQ</h3>

        </div>

        <div className="back">
        <div className="stats">
           <p className="faq">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

           </div>
        </div>

        <div className="background">
        

        </div>

        </div>



    </>
  );
};

export default Faq;