import React from 'react';
import { SectionWrapper } from '../wrapper';
import { skills } from '../constants';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import {useEffect, useState } from 'react';

// Helper function to generate random text colors
const getRandomColor = () => {
  const letters = '6789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
};

// Helper function to lighten or darken a color
const adjustColor = (color, factor) => {
  let colorInt = parseInt(color.slice(1), 16);
  let r = (colorInt >> 16) + factor;
  let g = ((colorInt >> 8) & 0x00FF) + factor;
  let b = (colorInt & 0x0000FF) + factor;
  
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  
  return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
};

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <motion.div variants={textVariant()}>
      <h1 className='w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pt-16 pb-2 mt-4'>
        Skills
      </h1>
      </motion.div>
      <div className='relative w-full h-full  min-h-screen  flex flex-col items-center px-4'>
        <div className='relative w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          {skills.map((skill, index) => {
            const color = getRandomColor();
            const darkerColor = adjustColor(color, -30);
            const lighterColor = adjustColor(color, 30);
            
            return (
              <motion.div
              variants={fadeIn(isMobile?'left':'up', 'spring', index * 0.5, 0.5)}
                key={index}
                className='w-full '
              >
              <div className='flex items-center justify-center text-center rounded-lg card3D bg-glass mb-10 p-4'
                              style={{
                                color,
                                borderBottom: `3px solid ${darkerColor}`,
                                borderLeft: `2px solid ${lighterColor}`,
                                gridColumn: 'span 1',
                                gridRow: 'span 1',
                                height: '220px',
                              }}
              >
                <div className='font-bold text-sm md:text-base lg:text-lg'>
                  {skill.desc}
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
