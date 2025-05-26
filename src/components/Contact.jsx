import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../wrapper';
import { motion } from 'framer-motion';
import { fadeIn , textVariant} from '../utils/motion';

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm('service_3uncvke', 'template_w3yrp53', formRef.current, 'gFqYgpTcPZDmD6zeI')
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          if (formRef.current) formRef.current.reset();
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        });
    }
  };

  return (
    <motion.div variants={textVariant()} className='w-full h-screen' >
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1.5)} className=' flex flex-col items-center  '>
        
        <div className='w-3/4 max-w-lg p-8 bg-opacity-90 rounded-lg shadow-lg mt-48 bg-black  border-orange-300  border-2 '>
          <h2 className='text-2xl font-bold mb-6 text-center text-orange-400'>Contact Me</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-orange-100'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className='mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-orange-100'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className='mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-orange-100'>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className='mt-1 block w-full px-3 py-2 border border-orange-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'
                required
              />
            </div>
            <div className='flex items-center justify-center'>
              <button
                type="submit"
                className='px-4 py-2 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              >
                Send
              </button>
            </div>
          </form>
        </div>


        <div className='flex space-x-4 bg'>
        <div className='flex items-center'>
        <ul className="wrapperlink">
            <a href="https://www.facebook.com/kacperpiotr.kordalski" target='_blank'>
              <li className="icon facebook">
                <span className="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/kacper-kordalski-8a9a32303/" target='_blank'>
              <li className="icon linkedin">
                <span className="tooltip">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V150.8h92.88V448zm-46.44-305.4c-29.8 0-54.06 24.3-54.06 54.06s24.3 54.06 54.06 54.06 54.06-24.3 54.06-54.06-24.3-54.06-54.06-54.06zm391.96 305.4h-92.8V317.6c0-31.56-11.2-53.08-39.12-53.08-21.3 0-33.92 14.36-39.52 28.28-2.04 4.92-2.56 11.76-2.56 18.68v145.08H174.4V150.8h89.6v40.44c12-18.6 33.64-45.2 82.48-45.2 60.72 0 106.2 39.88 106.2 125.44v176.16z"></path>
                </svg>
              </li>
            </a>
            <a href="https://github.com/Katsukii01" target='_blank'>
              <li className="icon github">
                <span className="tooltip">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.5 5.44 7.56.4.07.55-.17.55-.38v-1.4c-2.22.48-2.68-1.07-2.68-1.07-.36-.92-.88-1.16-.88-1.16-.72-.49.05-.48.05-.48.8.06 1.24.81 1.24.81.71 1.22 1.86.86 2.31.66.07-.51.28-.86.51-1.06-1.78-.2-3.65-.89-3.65-3.97 0-.88.31-1.6.81-2.16-.08-.2-.35-1.02.08-2.12 0 0 .67-.22 2.19.84.63-.18 1.32-.27 2-.27.68 0 1.37.09 2 .27 1.51-1.06 2.18-.84 2.18-.84.43 1.1.17 1.92.08 2.12.5.56.81 1.28.81 2.16 0 3.09-1.87 3.77-3.66 3.97.29.25.55.74.55 1.49v2.21c0 .21.15.46.55.38C13.71 14.5 16 11.53 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </li>
            </a>
          </ul>
        </div>
      </div>



      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
