import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import {logo} from '../images/hajaricreation.png'

const Navbar = ({image}) => {
    return (
        <>
            <div className='px-7 py-3 flex justify-between items-center lg:px-36 fixed inset-x-0 bottom-0 lg:relative border border-t-1 bg-white z-10'>
                <div className='flex space-x-5 items-center md:hidden md:order-3'>
                    <AiOutlineHome className='w-8 h-8 md:hidden cursor-pointer' />
                    <BsSearch className='w-6 h-6 cursor-pointer' />

                </div>
                <div className='flex md:order-1 space-x-2'>
                    <div className='font-semibold text-lg mr-5 lg:text-xl ml-4'>
                        {/* <img src="/images/hajaricreation.png" className='w-auto h-10' alt="" /> */}
                        <h2 className='select-none font-bold'>Hajari Creation</h2>
                    </div>
                    <div className='nav-item text-sm items-center hidden md:flex space-x-2 lg:text-base lg:text-gray-900'>
                        <div><a href="#">Home</a></div>
                        <div><a href="/categories">Categories</a></div>
                        <div><a href="#">About</a></div>
                        <div><a href="#">Services</a></div>
                        <div><a href="#">Order</a></div>
                        <div><a href="#">Contact</a></div>
                    </div>
                </div>
                <div className='flex items-center space-x-5 md:order-2'>
                    <BsSearch className='w-6 h-6 hidden' />
                    <AiOutlineShoppingCart className='w-7 h-7 cursor-pointer' />                
                    <BiUserCircle className='w-8 h-8 cursor-pointer' />
                </div>
            </div>
            <hr className='drop-shadow-lg' />
        </>
    )
}

export default Navbar
