import React from 'react';
import{AiOutlineHome} from 'react-icons/ai';
import{BiUser}  from 'react-icons/bi';
import{TiMessages} from 'react-icons/ti';

function Nav() {
  
  return (
    <nav>
      <a href='#home'><AiOutlineHome/></a>
      <a href='#about' ><BiUser/></a>
      <a href='#contact'><TiMessages/></a>
    </nav>
  )
}

export default Nav
