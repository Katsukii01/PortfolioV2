import React, { useState } from 'react';
import { SectionWrapper } from '../wrapper';
import { motion, useInView} from 'framer-motion';
import { fadeIn, expandFromBottom  } from '../utils/motion';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation();
  // State to control the Typewriter start
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Reference to the section we want to observe
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  return (
    <div ref={ref} className='w-full min-h-screen'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.1, 1)}
        className='w-full  px-12'
        onAnimationComplete={() => setIsAnimationComplete(true)} 
      >
      <h1 className='w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pt-16 pb-2 mt-4'>
        {t('about_me')}
      </h1>
        <motion.div
        variants={expandFromBottom(1.2, 1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Trigger animation based on scroll

      >
        <p className='text-2xl border-text border-text-sm Container-form'>
          {isAnimationComplete && ( 
            <Typewriter
              startDelay={1000}
              cursorColor="#fff"
              words={[t('about')]}
              typeSpeed={15}
              loop={1}
              cursor
              cursorStyle='_'
            />
          )}
        </p>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
