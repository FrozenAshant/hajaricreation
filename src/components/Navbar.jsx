import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import {logo} from '../images/hajaricreation.png'

const Navbar = ({image}) => {

    const NavLinkStyles = ({isActive})=> {
        return {
            color:isActive? "white" : "black",
            border: isActive? "1 px solid black": "none",
            backgroundColor: isActive? " rgb(55 65 81 / var(--tw-bg-opacity))":"transparent",
            borderRadius:isActive? "5px": "none",
            padding:isActive? "5px 10px": "0",
            transition:isActive? "300ms ease-in-out": "none"
        }
    }
    // const MobileNavLinkStyle = (props)=>{
    //     return{
    //         backgroundColor:props.isActive?"pink":"transparent",
    //         borderRadius:props.isActive?"50%":"none",
    //         // width:props.isActive?"50px":"0",
    //         // height:props.isActive?"50px":"0",
    //     }
    // }

    return (
        <>
            <div className='px-7 py-3 flex justify-between items-center lg:px-36 fixed inset-x-0 bottom-0 md:relative lg:relative border border-t-1 bg-white z-10'>
                <div className='flex space-x-5 items-center md:hidden md:order-3'>
                    <NavLink to="/" ><AiOutlineHome className='w-8 h-8 md:hidden cursor-pointer' /></NavLink>
                    <BiCategory className='w-6 h-6 cursor-pointer' />

                </div>
                <div className='flex md:order-1 space-x-2'>
                    <div className='font-semibold text-lg mr-5 lg:text-xl ml-4'>
                        {/* <img src="/images/hajaricreation.png" className='w-auto h-10' alt="" /> */}
                        <h2 className='select-none font-bold text-base md:text-lg lg:text-lg'>Hajari Creation</h2>
                    </div>
                    <ul className='nav-item text-sm items-center hidden md:flex space-x-2 lg:text-base lg:text-gray-900'>
                        {/* <div><Link to="/">Home</Link></div>
                        <div><Link to="/categories">Categories</Link></div> */}
                        <li><NavLink style={NavLinkStyles} to="/" >Home</NavLink></li>
                        <li><NavLink style={NavLinkStyles} to="/about" >About</NavLink></li>
                        <li><NavLink style={NavLinkStyles} to="/services" >Services</NavLink></li>
                        <li><NavLink style={NavLinkStyles} to="/order" >Order</NavLink></li>
                        <li><NavLink style={NavLinkStyles} to="/contact" >Contact</NavLink></li>
                    </ul>
                </div>
                <div className='flex items-center space-x-5 md:order-2'>
                    <BiCategory  className='w-6 h-6 hidden' />
                    <AiOutlineShoppingCart className='w-7 h-7 cursor-pointer' />                
                    <BiUserCircle   className='w-8 h-8 cursor-pointer' />
                </div>
            </div>
            <hr className='drop-shadow-lg' />
        </>
    )
}

export default Navbar
