import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../utils/Constants";

interface FeedbackCardProps {
  index: number,
  testimonial: any,
  name: string,
  designation: string,
  company: string,
  image?: any,
}

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-gradient-to-b from-gray-800 to-gray-900 p-10 xs:p-5 rounded-3xl xs:w-[320px] lg:w-[270px] xl:w-[340px] max-w-[350px] shadow-lg'
  >
    <p className='text-white font-black xs:text-[39px] md:text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-gray-200 tracking-wide md:text-[18px] xs:text-[14px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'>@</span> {name}
          </p>
          <p className='mt-1 text-gray-400 text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-zinc-900 rounded-[20px] rounded-2xl shadow-xl'>
      <div className='px-8 py-10'>
        <motion.div variants={textVariant()}>
          <p className='text-gray-400 text-sm'>What others say</p>
          <h2 className='text-white text-3xl font-bold'>Testimonials.</h2>
        </motion.div>
      </div>

      <div className='pb-14 px-8 flex flex-wrap justify-evenly gap-7'>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
