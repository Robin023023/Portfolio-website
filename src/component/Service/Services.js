import React, { Fragment } from 'react'

import './Services.css'
import Slide from 'react-reveal/Slide';
import photo1 from './img/10.jpg'
import photo2 from './img/a.jpg';
import photo3 from './img/c.jpg'

export default function Services() {
  return (
    <Fragment>
    <div id='Services'>
    <div className='container m-auto py-5'>
        <div className='row container pt-5 '>
         <Slide right cascade>
            <div className='col-md-4'> 
                
                <div className='card'>
                    <img className='img-fluid' src={photo1} alt='photo'/>
                    <div className='card-body'>
                        <h2 className='card-text'>Web-design</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
           
            </div>
            <div className='col-md-4 mt-5 mt-md-0'>
              
                <div className='card'>
                    <img className='img-fluid' src={photo2} alt='photo'/>
                    <div className='card-body'>
                        <h2 className='card-text'>Web-Devolopment</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
          
            </div>
            <div className='col-md-4 mt-5 mt-md-0'>
              
                <div className='card'>
                    <img className='img-fluid' src={photo3} alt='photo'/>
                    <div className='card-body'>
                        <h2 className='card-text'>Digital-Marketing</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    </div>
                </div>
                
            </div>
            </Slide>   
        </div>    
    </div>
    </div>
    </Fragment>
  )
}
