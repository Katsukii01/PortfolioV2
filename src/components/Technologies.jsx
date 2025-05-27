import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../wrapper';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

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
  const [rows, setRows] = useState(chunkArray(technologies, 5));

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let calculatedRowSize = Math.floor((width /321));
      if (calculatedRowSize < 1) calculatedRowSize = 1;
      if (calculatedRowSize > 5) calculatedRowSize = 5;
      if (calculatedRowSize !== rowSize) {
        setRowSize(calculatedRowSize);
        setRows(chunkArray(technologies, calculatedRowSize));
      }
    }

    handleResize(); // ustaw na start

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [rowSize]);

  return (
    <div className="w-full min-h-screen">
      <motion.div variants={textVariant()}>
        <h1 className="w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pt-24 pb-2 mt-4">
          Technologies
        </h1>
      </motion.div>

      <div className="w-full h-full pt-6">
      <div
        className="w-full mx-auto rounded-3xl p-8 "
      >
          {rows.map((row, rowIndex) => (
            <div  
              key={rowIndex}
              className={`flex gap-9 flex-wrap ${
                rowIndex % 2 === 1 ? 'ml-28 mt-4' : ' ml-6 mt-4'
              }`}
            >
              {row.map(({ name, icon }) => (
                <div
                  key={name}
                  className="octagon relative"
                  aria-label={name}
                  role="img"
                >
                  <img src={icon} alt={name} className="h-32 w-32" 
                    style={{
                      filter: 'drop-shadow(5px 0px 15px rgb(0, 0, 0))',
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Technologies, 'technologies');
