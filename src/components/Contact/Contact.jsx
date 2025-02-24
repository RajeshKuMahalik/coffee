import React from 'react'
import contactImg from '../../assets/contact-pic.jpg';
import { motion } from 'motion/react'

const ContactPic = {
    backgroundImage: `url(${contactImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}

const contactVariant  = {
    hidden: {opacity: 0, x: -50},
    visible: {
        opacity: 1, x: 0,
        transition: { delay:0.6 , type: "spring", stiffness: 150, damping: 20,ease: "easeInOut" },
    }
}

const Contact = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-9 my-9 md:mx-10'>
                <h1 className='text-4xl font-bold uppercase'>Contact <span className='text-orange-500'>Us</span> </h1>
                <p className='sm:w-1/3 text-center text-md mt-[-20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div style={ContactPic} className='grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 place-items-center min-h-[850px]'>
                <div> </div>
                <motion.form variants={contactVariant} initial="hidden" whileInView={"visible"} viewport={{ amount: 0.8 }} className=' mt-20  lg:mt-[25%] lg:w-1/2 md:mt-[16%]'>
                    <p className='text-2l '>Name : </p>
                    <motion.input whileHover={{border: "2px solid orange"}} required type="text" placeholder='Enter your Name' className='w-full p-2 rounded-md  border-2 border-gray-300' />
                    <p className='text-2l '>Email : </p>
                    <motion.input whileHover={{border: "2px solid orange"}} required type="email" placeholder='Enter your Email' className='w-full p-2 rounded-md  border-2 border-gray-300' />
                    <p className='text-2l '>Contact Number :</p>
                    <motion.input whileHover={{border: "2px solid orange"}} required type="number" placeholder='Enter your Contact Number' className='w-full p-2 rounded-md border-2 border-gray-300' />
                    <p className='text-2l '>Feedback :</p>
                    <motion.textarea whileHover={{border: "2px solid orange"}} required name="feedback" id="feedback" cols="30" rows="4" className='w-full p-2 rounded-md border-2 border-gray-300'></motion.textarea>
                    <motion.button whileHover={{border: "2px solid orange"}} className='bg-orange-500 text-white p-2 rounded-md border-2 border-gray-300'>Submit</motion.button>
                </motion.form>
            </div>
        </>
    )
}

export default Contact
