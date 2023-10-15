"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
         <div className="grid grid-cols-1 sm:grid-cols-12">
         <motion.div
         initial={{ opacity: 0, scale: 0.5}}
         animate={{ opacity: 1, scale: 1}}
         transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left">
         <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              James Scott{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Photography",
                3000,
                "Video",
                3000,
                "Mobile Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
         </h1>
         <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
          Detailed oriented photography, video and mobile development.
          </p>
         <div>
         </div>
         </motion.div>
         <motion.div
         initial={{ opacity: 0, scale: 0.5}}
         animate={{ opacity: 1, scale: 1}}
         transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
         <div className="rounded-full bg-[#181818] w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative">
         <Image src="/images/camera.png"
          alt='myImage'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={200}
          height={200}
          />
         </div>
         </motion.div>
         </div>
    </section>
  )
}

export default HeroSection