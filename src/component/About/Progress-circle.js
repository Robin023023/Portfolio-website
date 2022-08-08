import React, { Fragment } from 'react'

import './progress-circle.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Slide from 'react-reveal/Slide';

export default function ProgressCcircle() {
  return (
    <Fragment>
    <div className='progres'>
      <Slide left cascade>
     <div>
         <h4>HTML</h4>
            <Progress type="bar" percent={80}/>
            <h4 className='mt-3'>CSS</h4>
            <Progress type="bar" percent={90}/>
            <h4 className='mt-3'>BOOTSTRAP</h4>
            <Progress type="bar" percent={90}/>
            <h4 className='mt-3'>Jquery</h4>
            <Progress type="bar" percent={50}/>
            <h4 className='mt-3'>React</h4>
            <Progress type="bar" percent={60}/>   
       
    </div>
    </Slide>
    </div>
    </Fragment>
  )
}
