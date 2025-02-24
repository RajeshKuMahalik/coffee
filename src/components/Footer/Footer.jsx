import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-seconday to-primary pt-10 pb-1 text-white'>
      <div className='flex flex-col lg:text-center sm:grid grid-cols-[1fr_1fr_1fr]  gap-14 my-10 mt-30 ml-[50px] mr-[50px] text-sm'>
        {/* ----- left section------ */}
        <div className=''>
          <p className='mb-5 w-40 text-xl sm:text-center lg:mr-[10px] text-orange-600'>COFFEE.</p>
          <p className='w-full md:w-2/2  leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio earum inventore velit illo repellendus eveniet in totam nihil vel minima lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi ex vel odio id maxime iure quae iste soluta maiores.</p>
        </div>
        {/* ----- center section------ */}
        <div className=''>
          <p className='text-xl font-medium mb-5 text-orange-600 '>COMPANY</p>
          <ul className='flex flex-col gap-2 '>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ----- Right section------ */}
        <div className=''>
          <p className='text-xl font-medium mb-5 text-orange-600'>GET IN TOUCH </p>
          <ul className='flex flex-col gap-2 ml-10'>
            <div className='flex gap-2'>
              <FaPhone className='text-3 lg:ml-[180px]' />
              <li className=''>+1-212-456-789</li>
            </div>
            <li className=''>rajeshmahalik@gmail.com</li>
            <div className='flex gap-2 lg:ml-[180px]'>
              <FaFacebook className='text-2xl hover:text-orange-600 cursor-pointer' />
              <FaInstagram className='text-2xl'/>
            </div>
          </ul>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Footer
