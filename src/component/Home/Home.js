import React, { Fragment } from 'react'

import Typed from 'react-typed'
import Slide from 'react-reveal/Slide'
import './Home.css'
import MyPhoto from './img/4.png';


export default function Home() {
  return (
    <Fragment>
    <div className='Home'>
      
      <div className='Home-option'>
        <div className='row container mx-auto'>
          <div className='col-lg-7'>
          <Slide left cascade>
            <div className='row1'>
              
            <h1 className='heading'>Creatively designed by
            <br/>
             <span className='text-warning'>Robin Hossain</span></h1>

             <h1 className='text-light'><Typed
                    strings={["Web-Desiner","Front-End-Devolopar","Freelancer"]}
                    loop
                    typeSpeed={50}
                    backSpeed={30}
                />
            </h1>

             <p className='text-info pe-4 fw-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

             <button className='btn btn-outline-primary me-3 text-light'>Learn More</button>
             <button className='btn btn-outline-primary text-light'>Hire Me</button>
            </div>
            </Slide>
            
          </div>
          <div className='col-lg-5'>
          <Slide right cascade>
            <img className='img-fluid img' src={MyPhoto}/>
            
            </Slide>
          </div>
          </div>
        </div>
    </div>
    </Fragment>
  )
}
