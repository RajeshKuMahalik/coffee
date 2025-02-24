import React from 'react'
import { useState } from 'react';
import { motion } from 'motion/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import cross_icon from '../../assets/cross_icon.png'
import { useNavigate } from 'react-router-dom';


const Headvariants = {
    hidden: {opacity: 0, x:100},
      visible: {
        opacity: 1, x: 0,
        transition: { duration: 1, delay: 1, repeat: 0 },
    }
  }



const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);

    return (
        // <nav classNam<dive='absolute top-0 left-0 w-full pt-10 text-white '>
        <div className='bg-gradient-to-b from-seconday to-primary'>
        <div className=' container flex items-center justify-between  pt-8 text-sm py-4 mb-5  text-white'>
            {/* logo section */}
            <motion.p initial={{ opacity: 0, y: 0}} animate={{ duration: 0.9, delay: 1, opacity: 1, y: 10 }} transition={{ type: "spring", stiffness: 100, damping: 10 }} className='text-4xl font-semibold cursor-pointer text-orange-700 uppercase mb-7'>Coffee.</motion.p>
            {/* bar section */}

            <div className='hidden md:flex items-start gap-10 '>
                <motion.a initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className='title text-center cursor-pointer w-200 border-2 border-solid border-orange-500 rounded-md px-2 py-1 '>Home</motion.a>
                <motion.a initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className='title text-center cursor-pointer  w-200 border-2 border-solid border-orange-500 rounded-md px-2 py-1 '>About</motion.a>
                <motion.a initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className='title text-center cursor-pointer w-200 border-2 border-solid border-orange-500 rounded-md px-2 py-1 '>Contact</motion.a>
            </div>
           <GiHamburgerMenu  onClick={()=>setShowMenu(true)}className=' text-2xl mr-[10px] md:hidden cursor-pointer text-orange-700' />
            <div className={`${showMenu ? ' w-[150px]' : 'hidden'} md:hidden absolute top-0 right-0 h-[148%]  bg-gradient-to-b from-seconday to-primary backdrop-blur-[50px] z-10`}>
                    <div className='flex items-center justify-between px-14 py-10'>
                        <motion.img onClick={() => setShowMenu(false)} src={cross_icon} alt='logo' animate={{ rotate: 360 }} transition={{duration: 1, repeat: Infinity }}  className='w-7 cursor-pointer '/>
                    </div>
                    <div className='flex flex-col justify-center gap-20'>
                    <ul className='flex flex-col items-center gap-9 mt-5 px-5 text-lg font-medium'>
                        <motion.a    onClick={() => setShowMenu(false)} variants={Headvariants} initial="hidden" whileInView={"visible"} className='px-4 py-2 rounded inline-block border-2 border-solid border-orange-500'>Home</motion.a>
                        <motion.a   onClick={() => setShowMenu(false)}  variants={Headvariants} initial="hidden" whileInView={"visible"} className='px-4 py-2 rounded inline-block border-2 border-solid border-orange-500  '>About</motion.a>
                        <motion.a   onClick={() => setShowMenu(false)} variants={Headvariants} initial="hidden" whileInView={"visible"} className='px-4 py-2 rounded inline-block border-2 border-solid border-orange-500 '>Contact</motion.a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        // </nav>
    )
}

export default Navbar
