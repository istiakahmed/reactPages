import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#295F98] py-5'>
        <div className="container flex justify-between items-center">
        <div className="info">
            <h1 className='text-white font-semibold text-[24px]'>Info</h1>
        </div>
        <div className="info_log">
            <ul className='flex justify-center items-center gap-7'>
                <li><a className='text-white ' href="#"><img className='w-7 inline-block mr-2 ' src="images/phone.png" alt="phone" />+0123688</a></li>
                <li><a className='text-white ' href="#"><img  className='w-7 inline-block mr-2' src="images/email.png" alt="email" />istiakahmed453@gmail.com</a></li>

            </ul>
        </div>

        </div>
      
    </div>
  )
}

export default Footer
