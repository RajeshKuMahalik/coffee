import React from 'react'
import BgImage from '../../assets/bg-slate.png'
import { motion } from 'motion/react'
import Coffee from "../../assets/blacks.png"
import CoffeeCup from "../../assets/cup.png"
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'


// const bgImage = {
//     backgroundImage: `url(${BgImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repear",
// }

const Hero = () => {
    return (
        <div  className='bg-gradient-to-b from-seconday to-primary bg-cover bg-center bg-no-repeat mt-[-20px]'>
            <section className='relative min-h-[750px] w-full'>
                <div className='container'>
                    {/* Navbar section */}
                    {/* <Navbar /> */}
                    {/* Hero section */}
                    <div className='display justify-evenly grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] '>
                        {/* text content section */}
                        <div className='text-white mt-[100px] md:mt-0 p-4 space-y-28'>
                            <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 4, delay: 1, repeat: Infinity }} className='text-7xl font-bold leading-tight ml-14'>Black Coffee</motion.h1>
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 4, delay: 2, type: "spring", stiffness: 100, damping: 10 }} className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Coffee is Love</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'>lorem ipsum dolor sit, amet aonsectetur adipiscing elit, delectus aspernatur, umque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus bitae</h1>
                                </div>
                                <div className='absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25'></div>
                            </motion.div>
                        </div>
                        {/* Hero content section */}
                        <div className='relative sm:flex justify-center items-center'>
                            <motion.img whileHover={{ scale: 1.10 }} initial={{ opacity: 0, y: 100 }} animate={{ duration: 0.5, delay: 0.5, opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 10 }} src={Coffee} className='relative z-40 h-[400px] md:h-[700px]  sm:h-[300px] img-shadow' />
                            <div className='hidden md:block absolute -top-0.5 right-[-500px]'>
                                <motion.img src={CoffeeCup} alt='' initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, rotate: 360, x: 0 }} transition={{ duration: 10, delay: 0.5, repeat: Infinity }} className='pic-shadow ' />
                            </div>
                        </div>
                        {/* third div section */}
                        <div className='hidden lg:block'>
                            <div className='text-white mt-[100px] md:mt-0 p-4 space-y-28'>
                                <h1 className=' opacity-0 text-7xl font-bold leading-tight ml-14 '>Black Coffee</h1>
                                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 4, delay: 2, type: "spring", stiffness: 100, damping: 10 }} className='relative'>
                                    <div className='relative z-10 space-y-4 '>
                                        <h1 className='text-2xl'>Why Coffee?</h1>
                                        <h1 className='text-sm opacity-55 leading-loose '>lorem ipsum dolor sit, amet aonsectetur adipiscing elit, delectus aspernatur, umque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus bitae</h1>
                                    </div>
                                    <motion.div className='absolute -top-6 -left-10  w-[250px] h-[180px] bg-gray-900/25 '></motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Header /> */}
        </div>
    )
}

export default Hero
