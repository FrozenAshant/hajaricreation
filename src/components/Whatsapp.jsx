import React from 'react';
import {BsWhatsapp} from 'react-icons/bs';

const Whatsapp = () => {
  return (
    <div className='fixed  bottom-1 right-2 rounded-lg h-10 w-10 mb-16 mr-3 lg:mb-0 lg:mr-0 bg-green-100'>
        <a href="https://wa.me/9815383222" target='_blank'><BsWhatsapp className='h-10 w-10 p-1 text-green-600 border border-green-600 rounded-md' /></a>
      
    </div>
  )
}

export default Whatsapp
