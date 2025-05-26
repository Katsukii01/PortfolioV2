import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { SectionWrapper } from '../wrapper';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

// CarouselItem Component
const CarouselItem = ({ position, image, link, renderOrder }) => {
  const [texture] = useTexture([image]);
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0); // Ensure item faces the center
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      renderOrder={renderOrder} // Ensure correct stacking order
      onClick={() => window.open(link, '_blank')}
    >
      <boxGeometry args={[4.3, 3, 0.1]} /> 
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

// Carousel Component
const Carousel = ({ projects }) => {
  const sceneRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sceneRef.current.rotation.y = t / 15; // Adjust rotation speed here
  });

  return (
    <group ref={sceneRef}>
      {projects.map((project, index) => {
        const angle = (Math.PI * 2 / projects.length) * index;
        const x = Math.cos(angle) * 10; // Adjust distance from center here
        const z = Math.sin(angle) * 10;
        return (
          <CarouselItem
            key={index}
            position={[x, 0, z]}
            image={project.image}
            link={project.link}
            renderOrder={projects.length - index} // Ensure front items cover back items
          />
        );
      })}
    </group>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
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
    <div className='relative w-full h-screen'>
      <motion.div variants={textVariant()}>
        <h1 className='w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pb-2 mt-20'>
          Projects
        </h1>
      </motion.div>
      <div className='flex justify-center items-center'>
        <Canvas
          camera={{ position: [0, 0, 13], fov: 90 }}
          style={{
            height: isMobile ? '50vh' : '100vh',
            width: '100vw',
          }}
          onCreated={({ gl }) => {
            gl.domElement.style.position = 'absolute';
            gl.domElement.style.top = 0;
            gl.domElement.style.left = 0;
            gl.domElement.style.width = '100%';
            gl.domElement.style.height = '100%';
          }}
        >
          <ambientLight intensity={3.5} />
          <spotLight intensity={1} position={[10, 10, 10]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            rotateSpeed={0.2}
          />
          <Carousel projects={projects}  />
        </Canvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
