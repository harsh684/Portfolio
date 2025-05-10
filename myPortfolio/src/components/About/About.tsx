import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../Styles/styles'
import { services } from '../../utils/Constants'
import { fadeIn } from '../../utils/motion'
import { SectionWrapper } from '../hoc'

interface ServiceCardProps{
  index:number;
  title:string;
  icon:any;
}

const ServiceCard = ({ index, title, icon }:ServiceCardProps) => (
  <Tilt className="w-full sm:w-[300px] md:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-br from-green-400 via-pink-500 to-purple-500 p-[1px] rounded-[20px] shadow-xl"
    >
      <div
        className="bg-[#1f1f2e] rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-lg font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

function About() {
  return (
    <>
      <motion.div 
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)} //direction, type, delay, duration
      className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a highly motivated Software Engineer with a desire to take on new challenges. Possess a strong
 foundation in Full-Stack Technologies and the ability to adapt to new technologies. Experienced in Java, Javascript, Typescript, MySql, and expertise in frameworks like React, Angular, Spring Boot, ThreeJs and other technologies like
 AWS, Docker, Jenkins.  Adept at working
 effectively unsupervised and quickly mastering new skills
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-32'>
        {services.map((service:any, index:number )=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
