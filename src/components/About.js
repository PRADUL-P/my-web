import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { fadeIn } from "../variants";
import { useInView } from 'react-intersection-observer';
import { Tilt } from "react-tilt";
import { BiChevronRight} from "react-icons/bi";
import myImage from '../assets/me.jpg';
import Events  from './events';
import Counter  from './counter';
import Skills from './skills';
import Interest from './interest';

const About = () => {
  const[ref,inView]=useInView({
    threshold:0.5,
   })
   const [showData1, setShowData1] = useState(false);
   const [showData2, setShowData2] = useState(false);
   const [showData3, setShowData3] = useState(false);
 
   const handleButtonClick = (buttonNum) => {
     if (buttonNum === 1) {
       setShowData1(true);
       setShowData2(false);
       setShowData3(false);
     } else if (buttonNum === 2) {
       setShowData1(false);
       setShowData2(true);
       setShowData3(false);
     } else if (buttonNum === 3) {
       setShowData1(false);
       setShowData2(false);
       setShowData3(true);
     }
   }
    // Calculate age based on date of birth
  const birthdate = new Date('2002-09-04');
  const diffInMs = Date.now() - birthdate.getTime();
  const ageDate = new Date(diffInMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return( 
  <section className='section' id='about' ref={ref}>
    <motion.div
    variants={fadeIn('down',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.1}}
    className='container mx-auto'>
    <motion.div
    variants={fadeIn('up',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.1}}
    className='flex-1'>  
          <h2 className='h2 text-accent'>About <span className='text-white'>me</span> </h2>
          <h3 className='h3 mb-4'></h3>
          <p className=''>Lorem Ipsum has been the industry's standard dummy text ever since the 15
          00s, when an unknown printer took a galley of type and scrambled it to make a type specimen b
          ook. It has survived not only five centuries,</p>
        
        </motion.div>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:mt-10 lg:gap-x-20 lg:gap-y-0 my-10'> 
     
       <Tilt className="xs:w-[20px] w-1/3" >
       <motion.div>
       <div className="w-full bg-gradient-to-r from-green-400 to-pink-400 p-1 rounded-2xl shadow-card h-96"
 style={{ backgroundImage: `url(${myImage})`, backgroundSize: "cover", height: "25rem",width:"25rem" }}>
</div>

</motion.div>
  </Tilt>


        <motion.div
    variants={fadeIn('left',0.5)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false,amount:0.1}}
        
        className='flex-1'>  
          <div className="col-lg-8 pt-4 pt-lg-0 ">
  <h3 className="text-white"></h3>
  <p className="fst-italic"></p>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap- mt-4">
    <div>
      <ul className=" list-inside ">
        <li  className='p-2.5' >
          <strong>Birthday:</strong> <span>09-04-2002</span></li>
        <li  className='p-2.5' > <strong>Website:</strong> <span> <a href="#" className="text-white">PRADUL-P</a></span></li>
        <li   className='p-2.5'> <strong>Phone:</strong> <span><a href="https://wa.me/+918078376902?text=Hello" target="_blank" className="text-white">+918078376902</a></span></li>
        <li  className='p-2.5' > <strong>City:</strong> <span>kannur,kerala</span></li>
      </ul>
    </div>
    <div>
      <ul className="list-inside ">
        <li className='p-2.5' > <strong>Age:</strong> <span>{age+1}</span></li>
        <li  className='p-2.5' > <strong>Degree:</strong> <span>B-Tech (ongoing)</span></li>
        <li  className='p-2.5' > <strong>Email:</strong> <span>pradul.p123@gmail.com</span></li>
        <li  className='p-2.5' > <strong>Freelance:</strong> <span>Available</span></li>
      </ul>
    </div>
  </div>
  <Counter/>
</div>

        
        </motion.div>
       
      </div>
      
      <div className="flex flex-col   items-center mt-10">
      <div className="flex gap-4 items-center">
  <button onClick={() => handleButtonClick(1)} className="btn text-white font-bold py-2 px-4 rounded uppercase">
     skill
  </button>
  <button onClick={() => handleButtonClick(2)} className="btn text-white font-bold py-2 px-4 rounded uppercase">
    interest
  </button>
  <button onClick={() => handleButtonClick(3)} className="btn  text-white font-bold py-2 px-4 rounded uppercase">
     BIO
  </button>
</div>

    {showData1 && (
      <div>
       <Skills/>
      </div>
    )}
    {showData2 && (
      <div>
        <Interest/>
      </div>
    )}
    {showData3 && (
      <div>
        <Events/>
      </div>
    )}
  </div>



    </motion.div>
 
    
  </section>)
};

export default About;