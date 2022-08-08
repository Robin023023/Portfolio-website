import React,{Fragment, useState} from 'react'
import PortFolioJson from './Portfolio.json';
import './Portfolio.css'
import Slide from 'react-reveal/Slide';

export default function Portfolio() {
  const [items,setItems]=useState(PortFolioJson);

  const filterItem=(categItem)=>{
    const updatedItems=PortFolioJson.filter((curyElem)=>{
      return curyElem.category===categItem
    })
    setItems (updatedItems)
  }
  return (
    <Fragment>
    
    <div id='Portfolio'>
    <div className='container text-center'>
        <div className='text-center container my-5'>
          <button onClick={()=>setItems(PortFolioJson)} className='btn btn-outline-primary fw-bold active'>All</button>
          <button onClick={()=>filterItem('Web-Design')} className='btn btn-outline-primary fw-bold'>Web-Design</button>
          <button onClick={()=>filterItem('Web-Devlopment')} className='btn btn-outline-primary fw-bold'>Web-Devolopment</button>
          <button onClick={()=>filterItem('Digital-Marketing')} className='btn btn-outline-primary fw-bold'>Digital-Marketing</button>
        </div>

        <div className='row'>
        <Slide left cascade>
        {
         items.map((elo)=>{
           return <div className='col-lg-3 col-md-6 mb-4'>
            
            <div className='box'>
             <img className='img-fluid' src={elo.image}/>
             
            <div className='text'>
              <h4>{elo.category}</h4>
            </div>    
           </div>
           
          </div>
         })
       }
       </Slide>
        </div>
        
      </div>
      </div>
      </Fragment>
  )
}
