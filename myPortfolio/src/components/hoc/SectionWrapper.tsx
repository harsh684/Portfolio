import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../../Styles/styles'
import { staggerContainer } from '../../utils/motion';

interface SectionWrapperProps{
    Component:any;
    idName:string;
}
function SectionWrapper(Component:any,idName:string) {
  function HOC(){
    return (
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:px-10 px-6 sm:py-16 py-10 mx-auto relative z-0`}
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
            <Component/>
        </motion.section>
    )
  }
  return HOC;
}

export default SectionWrapper
