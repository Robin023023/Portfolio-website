import React,{useState,useEffect, Fragment} from 'react'

import './Contact.css'
import $ from 'jquery'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import Slide from 'react-reveal/Slide';
import photo from './img/gggg.jpg';

export default function Contact() {
  const [user,setUser]=useState({FirstName:'',LastName:'',email:'',password:'',ConfirmPassword:''})
    const {FirstName,LastName,email,password,ConfirmPassword}=user;

    // const isValid=FirstName && LastName && email && password && ConfirmPassword !=null && FirstName.trim() && LastName.trim() && email.trim() && password.trim() && ConfirmPassword.trim().length>0 && password.trim() != ConfirmPassword.trim();

    const isValid=password.trim() != ConfirmPassword.trim()
    

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        alert("Your login successfull");
        console.log(`${FirstName} ${LastName}`);
        setUser({FirstName:'',LastName:'',email:'',password:'',ConfirmPassword:''})
    } 

    const [show,setShow]=useState(false);
    const handleShow=()=>{
      setShow(!show)
    }


    const [show2,setShow2]=useState(false);
    const handleShow2=()=>{
      setShow2(!show2)
    }
    

    useEffect(()=>{
        $(document).ready(function() {
          $("#ConfirmPassword").on('keyup', function() {
            var password = $("#password").val();
            var confirmPassword = $("#ConfirmPassword").val();
            if (password != confirmPassword)
              $("#CheckPasswordMatch").html("Password does not match !").css("color", "red");
            else
              $("#CheckPasswordMatch").html("Password match !").css("color", "green");
          });
        });
      })
  return (
    <Fragment>
    <div className='Contact py-5'>
     <div className='row container m-auto pt-5'>
      <div className='col-lg-6'>
      <Slide left cascade>
      <div className=''>
    <form onSubmit={handleSubmit}>
        <input className='form-control' type='text' name='FirstName' placeholder='First Name' onChange={handleChange} value={FirstName} required/>

        <br/>

        <input className='form-control' type='text' name='LastName' placeholder='Last Name' onChange={handleChange} value={LastName} required/>

        <br/>

        <input className='form-control' type='email' name='email' placeholder='Email' onChange={handleChange} value={email} required/>

        <br/>

        <input className='form-control ' type={show ? 'text':'password'} name='password' id="password" placeholder='Password' onChange={handleChange} value={password} required/>
        
        <div className='Eye-Icon' onClick={handleShow}>
        {show ? <AiFillEyeInvisible/>:<AiFillEye/>}      
        </div>
        
        <br/>

        <input className='form-control password' type={show2 ? 'text':'password'} name='ConfirmPassword' id="ConfirmPassword" placeholder='Confirm Password' onChange={handleChange} value={ConfirmPassword} required/>

        <div className='Eye-Icon' onClick={handleShow2}>
        {show2 ? <AiFillEyeInvisible/>:<AiFillEye/>}
          
        </div>

        <div id="CheckPasswordMatch"></div>

        <br/>
        
        <button disabled={isValid} className='btn btn-warning fw-bold mb-4'>Submit</button>
    </form>

</div>
</Slide>
      </div>
      <div className='col-lg-6 '>
        <Slide right cascade>
        <img className='img-fluid rounded' src={photo}/>
        </Slide>
      </div>

     </div>
    </div>
    </Fragment>
  )
}