import React, { Fragment } from 'react'

import { CgFacebook } from 'react-icons/cg';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { GrYoutube } from 'react-icons/gr';
import './footer.css'

export default function Footer() {
  return (
    <Fragment>
    <div className='text-center footer bg-dark text-light py-3'>
        <CgFacebook className='icon' size={25}/>
        <BsTwitter size={25} className='mx-3 icon'/>
        <BsInstagram size={25} className='mx-3 icon'/>
        <GrYoutube className=' icon' size={25}/>
    </div>
    </Fragment>
  )
}
