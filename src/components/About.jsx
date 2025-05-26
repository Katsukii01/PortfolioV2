import React, { useState } from 'react';
import { SectionWrapper } from '../wrapper';
import { motion, useInView} from 'framer-motion';
import { fadeIn, expandFromBottom  } from '../utils/motion';
import { Typewriter } from 'react-simple-typewriter';


const About = () => {
  // State to control the Typewriter start
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Reference to the section we want to observe
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  return (
    <div ref={ref} className='relative w-full min-h-screen mx-auto flex flex-col md:flex-row md:justify-between top-32 pb-14'>
      <motion.div
        variants={fadeIn('right', 'tween', 0.1, 1)}
        className='w-full  px-12'
        onAnimationComplete={() => setIsAnimationComplete(true)} 
      >
      <h1 className='w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pt-16 pb-2 mt-4'>
       About me
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
              words={[
                "Highly motivated IT Engineer with a solid foundation in web development and database management. Proficient in JavaScript, PHP, SQL, .NET, and Python, with hands-on experience in modern frameworks and tools such as React, Next.js, and Laravel. I have completed a variety of projects using these technologies — ranging from CV analysis tools and human recognition software to fully functional streaming services, online stores, a game hub for multiplayer browser games, and even Unity-based games. Over the past few years, I’ve consistently advanced my IT knowledge, progressing from a technician-level background to my current engineering qualifications. Eager to leverage strong problem-solving skills and a fast learning curve to contribute to innovative projects."
              ]}
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
