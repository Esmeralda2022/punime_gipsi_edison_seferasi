import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

function Social() {
  return (
    <div className='header_socials'>
        <a href='https://www.instagram.com/accounts/login/?next=/gips.work.s.b/' className='btn btn-outline-light insta'><AiOutlineInstagram/></a>
        <a href='https://www.facebook.com/lite/' className='btn btn-outline-light fb'><FaFacebook/></a>
    </div>
  )
}

export default Social
