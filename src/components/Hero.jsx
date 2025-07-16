import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import { pfp } from '../assets';  // Sprawdź, czy ścieżka jest prawidłowa
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const { t } = useTranslation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 6000); // 3 * multiTextDelay + czas na przerwy

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-left px-4 bg-light-glass'>
      <div className='lg:w-1/2 flex flex-col justify-center items-start lg:items-end text-left px-24 '>
        <h1 className='text-2xl  sm:text-4xl md:text-4xl lg:text-6xl  font-bold text-white mb-4 '>
          {t('hi')}{' '}
          <span className=''>
            Kacper
          </span>
        </h1>
        <h2 className='min-h-[70px] text-2xl  sm:text-4xl md:text-4xl lg:text-6xl border-text bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-950'>
          <Typewriter
            startDelay={1000}
            words={['Fullstack Developer', 'Web Developer', t('itexp')]}
            typeSpeed={80}
            deleteSpeed={35}
            delaySpeed={1500}
            loop={true}
            cursor
            cursorStyle='_'
            cursorColor='orange'
          />
        </h2>
      </div>

      <div className='lg:w-1/2 flex  items-center lg:justify-start my-5 lg:px-16 xl:px-32 '>
        <motion.img
          src={pfp}
          alt='Profile'
          className='sm:w-80 sm:h-80 lg:w-96 lg:h-96  w-60 h-60 object-cover rounded-full border-4 border-cyan shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-r from-cyan-500 to-blue-950'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      <div className='absolute xs:bottom-4 bottom-16 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 bg-gradient-to-r from-cyan-500 to-blue-950 flex justify-center items-start p-2'>
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
