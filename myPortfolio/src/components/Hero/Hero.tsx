import {motion} from 'framer-motion';
import { styles } from '../../Styles/styles';
import ComputersCanvas from '../Canvas/Computers'
import herobg from '../../assets/herobg.png';

const Hero = () => {
  return (
    <section 
    className={`relative bg-auto w-full h-screen mx-auto`}
    >
    <img className='absolute z-[-10] h-full w-full' src={herobg} alt="" />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500 to-[rgba(139,92,246,0)]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Harsh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            I am a Full Stack Engineer 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-gray-400 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
