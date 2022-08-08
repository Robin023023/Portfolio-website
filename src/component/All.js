import React, { useState, Fragment } from 'react'

import {Navbar,Container,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Services from './Service/Services';
import './All.css'


export default function All() {
  const [position,setPosition]=useState(false);

  const changePosition=()=>{
    if(window.scrollY>=100){
      setPosition(true);
    }
    else{
      setPosition(false);
    }
  }

  window.addEventListener('scroll',changePosition)
  
    return (
      <Fragment>
      <Router>
        <Navbar className={position?'Navbar Navbar2':'Navbar'} fixed='top' expand="md">
      <Container>
        <Navbar.Brand as={Link} to='/Home'><span className='logo'>Robin</span></Navbar.Brand>
        <Navbar.Toggle className='bg-info' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto Nav">
          
               <Nav.Link active className='text-danger' as={Link} to='/Home'>Home</Nav.Link> 
               <Nav.Link  className='text-danger' as={Link} to="/About">About</Nav.Link>
               <Nav.Link  className='text-danger' as={Link} to="/Services">Services</Nav.Link>
               <Nav.Link  className='text-danger' as={Link} to="/Portfolio">Portfolio</Nav.Link>
               <Nav.Link  className='text-danger' as={Link} to="/Contact">Contact</Nav.Link>
                     
          </Nav>
         
       </Navbar.Collapse>
      </Container>
    </Navbar>

        <Switch>  
            <Route path="/About" component={About}/>          
            <Route path="/Services" component={Services}/>
            <Route path="/Portfolio" component={Portfolio}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/" component={Home}/>
         </Switch>
      </Router>
      </Fragment>
    )
  
}
