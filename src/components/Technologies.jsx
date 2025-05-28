import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../wrapper';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';

// Funkcja do podziału na rzędy po n elementów
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const Technologies = () => {
  const [rowSize, setRowSize] = useState(5);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let calculatedRowSize = Math.floor(width / 321);
      if (calculatedRowSize < 1) calculatedRowSize = 1;
      if (calculatedRowSize > 5) calculatedRowSize = 5;
      setRowSize(calculatedRowSize);
    }

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rows = chunkArray(technologies, rowSize);

  return (
    <div className="w-full min-h-screen">
      <motion.div initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={textVariant()}>
      <h1 className='w-full text-6xl font-bold text-[#a8a8a8] pt-16 pb-2 mt-4 break-words'>
          Technologies
        </h1>
      </motion.div>

      <div className="w-full h-full pt-6">
        <div className="w-full mx-auto rounded-3xl p-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex gap-9 flex-wrap ${
                rowIndex % 2 === 1 ? 'ml-28 mt-4' : 'ml-6 mt-4'
              }`}
            >
              {row.map(({ name, icon }, index) => (
                <motion.div
                  variants={fadeIn('left', 'spring', rowIndex * 0.1 + index * 0.4, 0.5)}
                  key={name}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.02 }}
                >
                  <div className="octagon relative" role="img">
                    <img
                      src={icon}
                      alt={name}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                      style={{
                        filter: 'drop-shadow(5px 0px 15px rgb(0, 0, 0))',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Technologies, 'technologies');
