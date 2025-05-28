import React from 'react';
import { SectionWrapper } from '../wrapper';
import { experience } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)',
      }}
      contentArrowStyle={{
        borderRight: '8px solid rgba(255,255,255,0.1)',
      }}
      date={experience.years}
      iconStyle={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(6px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.06)',
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.logo}
            alt={experience.name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold text-white'>{experience.name}</h3>
        <p className='text-[16px] font-medium text-[#a8a8a8] mt-1'>
          {experience.position}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {experience.desc}
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className='w-full min-h-screen h-full mb-10'>
      <motion.div variants={textVariant()}>
      <h1 className='w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pt-16 pb-2 mt-4'>
          Experience
        </h1>
      </motion.div>
      <div className='mt-20 flex flex-col items-center'>
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
