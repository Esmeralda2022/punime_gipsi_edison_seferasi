import React, { useState } from 'react';
import{AiOutlineHome} from 'react-icons/ai';
import{BiUser}  from 'react-icons/bi';
import{TiMessages} from 'react-icons/ti';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className= { activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className= { activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className= { activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav