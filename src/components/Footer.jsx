import React from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' bg-gray-700 px-5 py-8 h-fit border text-white mt-10 inset-x-0 bottom-0 lg:mb-0 md:mb-0 mb-14 lg:px-36'>
      <div className='flex justify-between flex-col md:flex-row lg:flex-row'>
        {/* Hajari Creation */}
        <div className='mb-10 md:mb-0 lg:mb-0'>
          <div>
            <h2 className='text-xl'>Hajari Creation</h2>
            <div className='h-1 w-14 bg-red-500'></div>
          </div>
          <div className='mt-1 text-sm'>
            <p>A Fashion Brand</p>
            <p>Made In Nepal</p>
          </div>
        </div>

        {/* subscribe */}
        <div className="mb-10 md:mb-0 lg:mb-0">
          <div>
            <h2 className='text-xl'>Subscribe to get impotant updates</h2>
            <div className='h-1 w-14 bg-red-500'></div>
          </div>
          <div className='mt-2'>
            <form action="#" className='flex flex-col'>
              <input className='h-8 text-black outline-none px-2 py-1 w-80 rounded-sm' type="text" name="" id="" />
              <button className=' rounded-md w-fit px-5 py-1 mt-2 bg-red-600'>Subscribe</button>
            </form>
          </div>
        </div>

        {/* socials */}
        <div className="mb-10 md:mb-0 lg:mb-0">
          <div>
            <h2 className='text-xl'>Follow Us</h2>
            <div className='h-1 w-14 bg-red-500'></div>
          </div>
          <div className='mt-3'>
            <ul className='flex space-x-4'>

              <li><a href="https://www.facebook.com/hajaricreation" target='_blank'> <ImFacebook2 className='h-6 w-6 cursor-pointer' /></a></li>
              <li><a href="https://www.instagram.com/hajaricreation/" target='_blank'><BsInstagram className='h-6 w-6 cursor-pointer' /></a></li>
            </ul>
          </div>
        </div>
        {/* Call us */}
        <div className="mb-10 md:mb-0 lg:mb-0">
          <div>
            <h2 className='text-xl'>Call Us</h2>
            <div className='h-1 w-14 bg-red-500'></div>
          </div>
          <p className='mt-1'>+977 9815383222</p>
        </div>
      </div>
      {/* lower footer */}
      <hr className='mt-5 md:mb-2 lg:mb-2' />
      <div className='my-2 flex flex-col md:flex-row lg:md-row lg:justify-between'>
        <div className=''><p>@HajariCreation. All Rights Are Reserved </p></div>
        <div className=''>
          <ul className='text-sm md:text-sm flex space-x-2'>
            <li><a href="#">Privacy Policy</a></li>
            <li>|</li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </div>
        <div className='hidden md:block lg:block'></div>
      </div>
    </div>
  )
}

export default Footer
