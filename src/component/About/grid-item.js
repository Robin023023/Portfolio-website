import React, { Fragment } from 'react';

import './grid-item.css'
import MyPhoto from './img/4.jpg'

export default function Griditem() {

  return (
    <Fragment>
    <div className='row'>
        <div className='col-md-6 row-option text-dark pb-0 pb-md-5'>
            <img className='img-fluid h-50 rounded-circle' src={MyPhoto}/>
            <h2>Robin Hossain</h2>
            <h5 className='pb-4'>Creative Desiner</h5>

            Name:Robin Hossain
            <hr/>
            Birth:12-07-1998
            <hr/>
            Place:Faridpur,Bangladesh
            <hr/>
            Phone:01863306160;
            <hr/>
            Email:023023robin@gmail.com;
            <hr/>
        </div>
        <div className='col-md-6 text-dark'>
          <div className='row-option-2'>
          <h2>About Me</h2>
          <hr/>
          <p>Hi gyus.I am Robin Hossain.I am web-desiner.Coding is my passion and profession. I have built many websites and landing pages out there.I can create PSD TO REACR COMPONENT and FIGMA TO REACR COMPONENT.Coading is my passion and profetion.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s I have acquired the skills and knowledge.Lorem Ipsum is simply dummy text of the printing and typesetting
         industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s</p>
          </div>
        </div>
        
    </div>
    </Fragment>
  )
}
