import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import { pfp } from '../assets';  // Sprawdź, czy ścieżka jest prawidłowa

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000); // 3 * multiTextDelay + czas na przerwy

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-left px-4'>

      <div className='lg:w-1/2 flex flex-col justify-center items-start lg:items-end text-left px-16 '>
        <h1 className='text-6xl font-bold text-white mb-4'>
          Hi, I am{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'>
            Kacper
          </span>
        </h1>
        <h2 className='text-3xl md:text-4xl lg:text-6xl border-text'>
          <Typewriter
            startDelay={1000}
            cursorColor="#fff"
            words={['Web Developer', 'Frontend Developer', 'React Enthusiast']}
            typeSpeed={70}
            deleteSpeed={35}
            delaySpeed={1500}
            loop={true}
            cursor
            cursorStyle='_'
          />
        </h2>
      </div>

      <div className='lg:w-1/2 flex justify-end items-center lg:justify-start my-5 lg:px-16 xl:px-32 '>
        <motion.img
          src={pfp}
          alt='Profile'
          className='w-80 h-80 object-cover rounded-full border-4 border-orange-400 shadow-lg hover:shadow-2xl transition-shadow duration-300'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 bg-gradient-to-r from-orange-500 to-yellow-500 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
