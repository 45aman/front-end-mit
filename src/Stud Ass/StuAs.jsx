import React from 'react'
import Logo from '../img/logo.png'
import './StuAs.css'
import OT from '../img/OT.svg'
import BC from '../img/BC.svg'
import MOI from '../img/MOI.svg'
import NBC from '../img/NBC.svg'
import CGC from '../img/CGC.svg'
import TSC from '../img/TSC.svg'
import DGC from '../img/DGC.svg'
import DDC from '../img/DDC.svg'
import WES from '../img/WES.svg'
import EC from '../img/EC.svg'
import NCDC from '../img/NCDC.svg'
import NCGC from '../img/NCGC.svg'
import OQ from '../img/OQ.svg'
import BS from '../img/BS.svg'
import { Link } from 'react-router-dom'



const StuAs = (props) => {
    return (
        <>
       <div className="menu">

       <div className="logo">
       <img src={Logo} alt="..." width="200vmax"/>
       </div>

      


       <div className="container  pt-5">
      
    <div className="row pt-5 mt-5 ">
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5 " style={{height:"47%"}} src={OT} alt=" "/>
                <div className="card-block">
                    <Link to={props.transcript}><p className="card-text">OFFICIAL TRANSCRIPT</p></Link>
                  
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
            <img className="card-img-top img-fluid mb-5 " style={{height:"47%"}} src={CGC} alt=" "/>

                <div className="card-block">
                <Link to={props.consolidate}> <p className="card-text">CONSOLIDATED GRADE CARD</p></Link>
                    
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}}  src={BS} alt=" "/>
                <div className="card-block">
                <Link to={props.baclogsummary}> <p className="card-text">BACKLOG SUMMARY</p></Link>
                   
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
            <img className="card-img-top img-fluid mb-5" style={{height:"47%"}}  src={BC} alt=" "/>

                <div className="card-block">
                <Link to={props.banafide}> <p className="card-text">BONAFIDE CERTIFICATE</p></Link>
                    
                </div>
            </div>
        </div>
    </div>
    
    <div className="row pt-5   ">
        <div className="col-sm-3">
            <div className="card">
            <img className="card-img-top img-fluid mb-5"  style={{height:"47%"}}  src={EC} alt=" "/>

                <div className="card-block">
                <Link to={props.euivalent}>  <p className="card-text">EQUIVALENT % CERTIFICATE</p></Link>
                    
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
            <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={TSC} alt=" "/>

                <div className="card-block">
                <Link to={props.tritosem}>  <p className="card-text">TRIMESTER TO SEMESTER CONVERSION</p></Link>
                    
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
            <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={MOI} alt=" "/>

                <div className="card-block">
                <Link to={props.moi}> <p className="card-text">MEDIUM OF INSTRUCTION</p></Link>
                   
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5"  style={{height:"47%"}}  src={NBC} alt=" "/>
                <div className="card-block">
                <Link to={props.nobacklog}>  <p className="card-text">NO BACKLOG CERTIFICATE</p></Link>
                    
                </div>
            </div>
        </div>

        </div>
        
        <div className="row pt-5">
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={DGC} alt=" "/>
                <div className="card-block">
                <Link to={props.duplicateg}>  <p className="card-text">DUPLICATE GRADE CARD</p></Link>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={DDC} alt=" "/>
                <div className="card-block">
                <Link to={props.duplicated}>    <p className="card-text">DUPLICATE DEGREE CERTIFICATE</p></Link>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={NCGC} alt=" "/>
                <div className="card-block">
                    <p className="card-text">NAME CORRECTION GRADE CARD</p>
                    
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={NCDC} alt=" "/>
                <div className="card-block">
                    <p className="card-text">NAME CORRECTION DEGREE CERTIFICATE</p>
                    
                </div>
            </div>
        </div>

        </div>
        
        <div className="row pt-5  pb-5">
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={WES} alt=" "/>
                <div className="card-block">
                    <p className="card-text">WES</p>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid mb-5" style={{height:"47%"}} src={OQ} alt=" "/>
                <div className="card-block">
                <Link to={props.other}>   <p className="card-text">OTHER QUIRES</p></Link>
                </div>
            </div>
        </div>
    </div>
</div>


       </div>
       <div>
<footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>©2022.MITWPUEXAMDEPARTMENT.</small>
    </div>
  </footer>
  </div>
        </>
    )
}

export default StuAs
