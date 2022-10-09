import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import PersonalQuestion from './components/Question/PersonalQuestion';
import Education from './components/Question/Education';
import Skills from './components/Question/Skills';
import Project from './components/Question/Project';
import Extra from './components/Question/Extra';
import PDF from './components/PDF/PDF';
import Footer from './components/Footer/Footer';

let Personal = {};
let Educations = {};
let Skill = {};
let Projects = {}
let Extras = {};


function App() {
  const [pdetailsbool, pdetailss] = useState(true);
  const [edetailsbool, edetailss] = useState(false);
  const [sdetailsbool, sdetailss] = useState(false);
  const [prdetailsbool, prdetailss] = useState(false);
  const [exdetailsbool, exdetailss] = useState(false);
  const [pdfbool, pdf] = useState(false);

  function pHandler(pdetails){
    Personal = pdetails;
    console.log(Personal);
    pdetailss(false);
    edetailss(true);
  }

  function eHandler(edetails){
    Educations = edetails;
    console.log(Educations);
    edetailss(false);
    sdetailss(true);
  }

  function sHandler(sdetails){
    Skill = sdetails;
    console.log(Skill);
    sdetailss(false);
    prdetailss(true);
  }

  function prHandler(prdetails){
    Projects = prdetails;
    console.log(Projects);
    prdetailss(false);
    exdetailss(true);
  }

  function exHandler(exdetails){
    Extras = exdetails;
    console.log(Extras);
    exdetailss(false);
    pdf(true);
  }

  return (
    <div className="App">
      <Header></Header>
      {pdetailsbool===true && <PersonalQuestion onSave={pHandler}></PersonalQuestion>}
      {edetailsbool===true && <Education onSave={eHandler}>Abhay</Education>}
      {sdetailsbool===true && <Skills onSave={sHandler}></Skills>}
      {prdetailsbool===true && <Project onSave={prHandler}>Abhay</Project>}
      {exdetailsbool===true && <Extra onSave={exHandler}>Abhay</Extra>}
      {pdfbool===true && <PDF Person={Personal} Edu={Educations} Ski={Skill} Proj={Projects} Ext={Extras}></PDF>}
      <Footer></Footer>
    </div>
  );
}

export default App;
