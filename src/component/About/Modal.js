import React, { Fragment } from 'react'
import Griditem from './grid-item'

export default function Modal() {
  return (
    <Fragment>
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Learn More
       </button>

<div className="modal bg-dark fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
       <div className="modal-body">
        <Griditem/>
      </div>
     </div> 
  </div>
</div>
    </div>
    </Fragment>
  )
}
