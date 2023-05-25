import { useState } from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { projects } from "../database/datas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

import Modal from 'react-modal';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
Modal.setAppElement('#root');

const ProjectModal = ({ project, isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
      <div className="modal-content bg-slate-800 rounded-lg shadow-lg p-6 max-h-screen overflow-y-auto">
        <button className="modal-close absolute top-0 right-0 mt-4 mr-4 text-gray-500" onClick={onRequestClose}>
          <FaTimes className="w-6 h-6" />
        </button>
       
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={project.image} alt={project.title} className="w-full" />
          </SwiperSlide>
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={project.title} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
        <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
        <p className="mt-4 ">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
          View project <FaExternalLinkAlt className="inline-block ml-1" />
        </a>
      </div>
    </Modal>
  );
};


const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  

  const handleBtnClick = (category) => {
    setActiveBtn(category);
  };

  const filteredProjects = activeBtn === "all" ? projects : projects.filter(project => project.category === activeBtn);

  return (
    <div className="container mx-auto py-12" id="projects">
      <div className="flex justify-center mb-6">
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "all" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("all")}
        >
          All
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "civilengg" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("civilengg")}
        >
          Civil Engineering
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "webdesign" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("webdesign")}
        >
          Web Design
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    <motion.div
      key={project.id}
      className="relative rounded-lg overflow-hidden shadow-lg bg-tertiary"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      // whileTap={{ scale: 0.95 }}
    >
      <Tilt className="tilt" options={{ max: 25 }}>
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={project.image}
          alt={project.title}
        />
       {/* <a
  href={project.hostedPage}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-3 right-3 m-2 p-2 rounded-full text-gray-700  text-sm font-medium hover:bg-slate-800-800 transition-colors duration-300"
>
  <Link to={project.hostedPage}>
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade />
    </Link>
</a> */}
      </Tilt>
      {/* <Tilt className="tilt" options={{ max: 25 }}> */}
        <div className="p-4 transition-transform duration-500 ease-in-out transform hover:scale-95">
          <motion.h2
            className="font-bold text-lg mb-2 uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            {project.title}
          </motion.h2>
          <motion.p
  className="text-gray-700 text-sm"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
>
  {project.description.slice(0, 100)}{project.description.length > 100 && '...'} 
  <button className="text-blue-500 hover:text-blue-700 transition-colors duration-300 focus:outline-none"  onClick={() => openProjectModal(project)}>More</button>
</motion.p>

          <button className="text-gradient btn-link lg:item-center text-center uppercase  m-5" onClick={() => openProjectModal(project)}>
                    View details
                  </button>
        </div>
      {/* </Tilt> */}
    </motion.div>
  ))}
</div>
{selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ProjectModal project={selectedProject} isOpen={true} onRequestClose={closeProjectModal} />
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;