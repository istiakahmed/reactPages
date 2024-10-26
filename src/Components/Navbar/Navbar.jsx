import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="py-6 bg-slate-500	">
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="menu_logo w-12"><img src="images/logo.png" alt="logo" /></div>
                <div>
                    <ul className='flex gap-6 text-[#F5F5F5] text-2xl font-semibold '>
                        <li><a className='hover:text-[#424242] hover:bg-[#ED3EF7] transition duration-300 rounded-[10px] px-[5px] py-[5px]' href="/">Home</a></li>
                        <li><a className='hover:text-[#424242] hover:bg-[#ED3EF7] transition duration-300 rounded-[10px] px-[5px] py-[5px]' href="/about">About</a></li>
                        <li><a className='hover:text-[#424242] hover:bg-[#ED3EF7] transition duration-300 rounded-[10px] px-[5px] py-[5px]' href="/blog">Blog</a></li>
                        <li><a className='hover:text-[#424242] hover:bg-[#ED3EF7] transition duration-300 rounded-[10px] px-[5px] py-[5px]' href="/contact">Contact</a></li>

                        
                    </ul>
                </div>
            </div>
        </div>

    </nav>
    
    </>
  )
}

export default Navbar
