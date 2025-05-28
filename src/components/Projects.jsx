import { projects } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { SectionWrapper } from '../wrapper';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { textVariant } from "../utils/motion";
import { techIcons } from "./iconsMap"; 

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        swipe: true,
      },
    },
  ],
};

const Projects = () => {

  return (
    <section className="relative w-11/12 mx-auto min-h-screen">
            <motion.div variants={textVariant()} className="mb-12">
            <h1 className='w-full lg:w-1/2 text-6xl font-bold text-[#a8a8a8] pt-16 pb-2 mt-4'>
              Projects
            </h1>
            </motion.div>

          <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2 h-[500px]">
              <div className=" bg-neutral-950 rounded-xl p-4 h-[450px] flex flex-col justify-between shadow-md ">
                <img src={project.image} className="rounded-lg h-48 w-full object-cover" />
                <h3 className="text-xl font-bold text-white mt-3">{project.name}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.map((tech, i) => (
                              <span
                              key={i}
                              className="bg-white/10 px-2 py-1 rounded text-xs text-white flex items-center gap-1"
                            >
                              {techIcons[tech] ? techIcons[tech]() : <span>🔧</span>}
                              {tech}
                            </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href={project.linkGithub} target="_blank" className="btn btn-sm flex items-center gap-1 border-2 border-black text-white bg-black/30 px-3 py-1 rounded-lg hover:bg-black hover:border-white">
                    <FaGithub /> GitHub
                  </a>
                  {project.linkLiveSite && (
                    <a href={project.linkLiveSite} target="_blank" className="btn btn-sm flex items-center gap-1 border-2 border-blue-500 text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-800 hover:border-white">
                      <FaGlobe /> Web
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
