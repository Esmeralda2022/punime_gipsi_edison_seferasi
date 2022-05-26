import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

function Social() {
  return (
    <div className='header_socials'>
        <a href='https://www.instagram.com/?hl=en' target= '_blank'className='btn btn-outline-light insta'><AiOutlineInstagram/></a>
        <a href='https://www.facebook.com/lite/' target= '_blank' className='btn btn-outline-light fb'><FaFacebook/></a>
    </div>
  )
}

export default Social