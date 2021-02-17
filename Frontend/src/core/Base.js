import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Section from './Section';


const Base = ({
    children
  }) =>{
    return(
        <div >
        <Header/>  
          {children}
        <Section/>
        <Footer/>
        </div>
    );
}

export default Base;