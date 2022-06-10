
import Login from './login/Login';
import LoginStu from './login/LoginStu';
import LoginStaff from './login/LoginStaff';
import LoginAd from './login/LoginAd';
import RegStu from './login/RegStu';
import RegStaff from './login/RegStaff';
import RegAd from './login/RegAd';
import StuPro from './login/StuPro';

import SA from './Stud Ass/StuAs';
import OT from './Stud Ass/OffTr/OffTr'

import Slide1 from './img/home1.jpg'
import Slide2 from './img/slide1.jpg'
import Slide3 from './img/slide4.jpg'

import St1 from './img/St5.jpeg'
import St2 from './img/St3.jpg'
import St3 from './img/St2.jpg'

import Home from './Home/Home';
import ConGC from './Stud Ass/ConGC/ConGC';
import BackSu from './Stud Ass/BackSu/BackSu';
import BonC from './Stud Ass/BonC';
import DupGC from './Stud Ass/DupGC/DupGC';
import EquC from './Stud Ass/EquC/EquC';
import TriToSem from './Stud Ass/TriToSem/TriToSem';
import MOI from './Stud Ass/MOI';
import NBC from './Stud Ass/NBC';
import OQ from './Stud Ass/OQ/OQ';
import DDC from './Stud Ass/DDC';
import Certificates from './Stud Ass/Certificates/Certificates';
import StOffTr from './Stud Ass/OffTr/StOffTr';
import StConGC from './Stud Ass/ConGC/StConGC';
import StEquC from './Stud Ass/EquC/StEquC';
import StOQ from './Stud Ass/OQ/StOQ';



import TT from './Event/StTimetable/TT';
import TTAdd from './Event/StTimetable/TTAdd';
import StConvo from './Event/StConvo/StConvo';
import Convo from './Event/StConvo/Convo';
import ConvoAdd from './Event/StConvo/ConvoAdd';
import StTT from './Event/StTimetable/StTT';
import StResult from './Event/Result/StResult';
import ResultAdd from './Event/Result/ResultAdd'
import Result from './Event/Result/Result'
import Faq from './Home/Faq';
import DyFaq from './Home/DyFaq';
import FaqAdd from './Home/FaqAdd';
import EditFaq from './Home/EditFaq';
import WhatsSys from './chatsys/WhatsSys';

import StCertificate from './Stud Ass/Certificates/StCerti';
import DrpEmail from './Email/DrpEmail';
import StTriToSem from './Stud Ass/TriToSem/StTriToSem';
import StDupGC from './Stud Ass/DupGC/StDupGC';
import Div from './Stud Ass/Div';




import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    < >
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginstudent" element={<LoginStu />} />
        <Route path="/studentprofile/:id" element={<StuPro />} />

        <Route path="/registerstudent" element={<RegStu />} />

        <Route path="/loginstaff" element={<LoginStaff />} />
        <Route path="/registerstaff" element={<RegStaff />} />
        <Route path="/loginadmin" element={<LoginAd />} />
        <Route path="/registeradmin" element={<RegAd />} />

        <Route path="/email" element={<DrpEmail />} />





        <Route path="/home" element={<Home img1={Slide1} img2={Slide2} img3={Slide3} TT={"/timetable"} CONVO={"/convocation"} RESULT={'/result'}  Faq={"/faq"} whatsapp={"/"} certi={"/studentassistance"} email={"/"}/>} />

        <Route path="/Sthome" element={<Home img1={St1} img2={St2} img3={St3} TT={"/Sttimetable"} CONVO={"/Stconvocation"} RESULT={'/stresult'} Faq={"/Dyfaq"} whatsapp={"/whatsapp"} certi={"/ststudentassistance"} email={"/email"}/>} />
        
        <Route path="/faq" element={<Faq />} />  

        <Route path="/dyfaq" element={<DyFaq />} />  
        <Route path="/faqadd" element={<FaqAdd />} />  
        <Route path="/faqedit:{element._id}" element={<EditFaq />} />  
        <Route path="/whatsapp" element={<WhatsSys />} />  





        <Route path="/studentassistance" element={<SA transcript={"/officialtranscript"} consolidate={"/consolidatedgradecard"} programcc={"/certificates"}
        baclogsummary={"/backlogsummary"} banafide={"/certificates"} euivalent={"/equivalentcertificate"} 
        tritosem={"/trimestertosemister"} moi={"/certificates"} nobacklog={"/certificates"} 
        duplicateg={"/duplicategradecard"} duplicated={"/duplicategradecard"} other={"/otherquery"} />} />

        <Route path="/ststudentassistance" element={<SA transcript={"/stofftr"} consolidate={"/stcongc"} programcc={"/stcertificate"}
        baclogsummary={"/backlogsummary"} banafide={"/stcertificate"} euivalent={"/stequc"} 
        tritosem={"/sttritosem"} moi={"/stcertificate"} nobacklog={"/stcertificate"} 
        duplicateg={"/stdupgc"} duplicated={"/stdupgc"} other={"/stoq"} />} />
        
        <Route path="/officialtranscript" element={<OT />} />  
        <Route path="/consolidatedgradecard" element={<ConGC />} />  
        <Route path="/backlogsummary" element={<BackSu />} />  
        <Route path="/bonafidecertificate" element={<BonC />} />  
        <Route path="/duplicategradecard" element={<DupGC />} />  
        <Route path="/equivalentcertificate" element={<EquC />} />  
        <Route path="/trimestertosemister" element={<TriToSem />} />
        <Route path="/mediumofinstruction" element={<MOI />} />  
        <Route path="/nobacklogcertificate" element={<NBC />} />  
        <Route path="/otherquery" element={<OQ />} /> 
        <Route path="/duplicatedegreecard" element={<DDC />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/divyangjan" element={<Div />} />  
  
  
      
        <Route path="/Sttimetable" element={<StTT />} /> 
        <Route path="/timetable" element={<TT />} />  
 
        <Route path="/timetableadd" element={<TTAdd />} />  
        <Route path="/Stconvocation" element={<StConvo />} /> 
        <Route path="/convocation" element={<Convo />} />  
        <Route path="/convoadd" element={<ConvoAdd />} />  
        <Route path="/result" element={<Result />} />  
        <Route path="/stresult" element={<StResult />} />  
        <Route path="/resultadd" element={<ResultAdd />} /> 

        <Route path="/stcertificate" element={<StCertificate />} />
        <Route path="/stofftr" element={<StOffTr />} />
        <Route path="/stcongc" element={<StConGC />} />
        <Route path="/stequc" element={<StEquC />} />
        <Route path="/stoq" element={<StOQ />} />
        <Route path="/sttritosem" element={<StTriToSem />} />
        <Route path="/stdupgc" element={<StDupGC />} />















  




       





        </Routes>

        </Router>
        
        </>
  );
}

export default App;
