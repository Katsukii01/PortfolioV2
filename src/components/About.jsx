import React from 'react'
import { SectionWrapper } from '../wrapper';

const About = () => {
  return (
    <div className='relative w-full h-screen mx-auto flex flex-col md:flex-row md:justify-between p-4 '>
        About me
    </div>
  )
}

export default SectionWrapper(About, 'about')
