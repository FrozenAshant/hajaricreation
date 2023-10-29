import React from 'react';
import {MdOutlineEmail, MdLocationOn} from 'react-icons/md';
import {BiSolidContact} from 'react-icons/bi';

const Contact = () => {
  return (
    <div className='flex flex-col lg:mx-40 mx-2 lg:content-between lg:flex-row mt-5'>
      {/* contact left */}
      <div className=' order-1 lg:order-1 mx-auto mb-5'>
        <h2 className=' mt-2 text-2xl font-bold'>Company Details</h2>
        <div className='h-1 w-14 bg-red-500 rounded mb-2' ></div>
        <div className='text-lg mt-5 lg:mt-10'>
          <div className='flex items-center space-x-2 lg:h-10  '>
            <MdOutlineEmail className='w-8 h-8' />
            <p>frozen.ashantchy@gmail.com</p>
          </div>
          <div className='flex items-center space-x-2 lg:h-10'>
            <MdLocationOn className='w-8 h-8' />
            <p>Sunakoti</p>
          </div>
          <div className='flex items-center space-x-2 lg:h-10'>
            <BiSolidContact className='w-8 h-8' />
            <p>+977 9815383222</p>
          </div>
        </div>


      </div>

      {/* contact right */}
      <div className='mx-auto order-2 lg:order-2x'>
        <h2 className=' mt-2 text-2xl font-bold'>Contact Us</h2>
        <div className='h-1 w-14 bg-red-500 rounded'></div>
        <form action="#">
          <div className='flex flex-col'>
            <div><input className='border border-black h-10 w-80 mb-3 mt-5 px-2 outline-blue-300 rounded-sm lg:w-96' type="text" name="name" id="" placeholder='Full Name' /></div>
            <div><input className='border border-black h-10 w-80 mb-3 px-2 outline-blue-300 rounded-sm lg:w-96' type="email" name="email" email id="" placeholder='Email' /></div>
            <div><textarea className="border border-black h-32 w-80 mb-3 px-2 outline-blue-300 rounded-sm lg:w-96" type="textarea" name="message" id="" placeholder='Message' /></div>
            <div><button className='border rounded-md py-1 px-5 bg-blue-700 hover:bg-blue-800 text-white lg:px-8'>Submit</button></div>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Contact
