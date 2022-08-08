import React, { Fragment } from 'react';
import './About.css'
import Modal from './Modal'
import ProgressCcircle from './Progress-circle';
import Slide from 'react-reveal/Slide';
import MyPhoto from './img/4.jpg'


export default function About() {
  return (
    <Fragment>
    <div className='About pt-5'>
        <div className='grid-item row container pt-5 m-auto'>
         <div className='col-md-6'>
         <Slide left cascade>
          <img className='img-fluid' src={MyPhoto} alt='my-photo 2'/>
          </Slide>
         </div>
         <div className='col-md-6'> 
         <Slide right cascade>
          <h1>Robin Hossain</h1>
          <h4>Creative Desiner</h4>
           <hr/>
           <p>Hi gyus.I am Robin Hossain.I am web-desiner.I can create PSD TO REACR COMPONENT and FIGMA TO REACR COMPONENT.Coading is my passion and profetion. I have acquired the skills and knowledge.</p>
           
           <Modal/>
           </Slide>
         </div>
         <ProgressCcircle/>
        </div>     
    </div>
    </Fragment>
  )
}
