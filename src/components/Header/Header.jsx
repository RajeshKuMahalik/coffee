import React from 'react'
import img1 from "../../assets/coffee3.png";
import img2 from "../../assets/coffee1.png";
import img3 from "../../assets/coffee3.png"
import { motion } from 'motion/react';

const PictureData = [
  {
    id: 1,
    image: img1,
    title: "Cold Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos..",
  },
  {
    id: 2,
    image: img2,
    title: "Black Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos..",
  },
  {
    id: 3,
    image: img3,
    title: "Chocolate Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos..",
  },

];

const Headvariants = {
  hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20,ease: "easeInOut" },
  }
}
const containerVariants = {
  hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.5 },
  }
}

const Header = () => {

  return (
    <div className='flex flex-col items-center gap-8 my-9 md:mx-10'>
      <h1 className='text-4xl font-bold uppercase'>About <span className='text-orange-500'>Coffee</span> </h1>
      <p className='sm:w-1/3 text-center text-md mt-[-20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ amount: 0.8 }} className='flex flex-col items-center sm:grid-cols-2 md:grid-cols-3 gap-9 service'>
        {PictureData.map((service) => (
          <motion.div variants={Headvariants} initial="hidden" whileInView={"visible"} viewport={{ amount: 0.8 }} className='flex flex-row items-center gap-4  border-2 rounded-[10px] p-4 bg-gray-300'>
            <motion.img whileHover={{ scale: 1.1 }} initial={{ scale: 0.8 }} transition={{ duration: 0.4, ease: "easeInOut" }} src={service.image} alt="" className='w-1/6' />
            <div className=' '>
              <h1 className='text-2xl font-bold text-left '>{service.title}</h1>
              <p className='text-[16px] '>{service.description}</p>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Header
