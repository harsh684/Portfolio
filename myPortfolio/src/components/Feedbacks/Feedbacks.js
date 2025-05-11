import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { testimonials } from "../../utils/Constants";
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) =>
  _jsxs(motion.div, {
    variants: fadeIn("", "spring", index * 0.5, 0.75),
    className:
      "bg-gradient-to-b from-gray-800 to-gray-900 p-10 xs:p-5 rounded-3xl xs:w-[320px] lg:w-[330px] xl:w-[340px] max-w-[350px] shadow-lg",
    children: [
      _jsx("p", {
        className: "text-white font-black xs:text-[39px] md:text-[48px]",
        children: '"',
      }),
      _jsxs("div", {
        className: "mt-1",
        children: [
          _jsx("p", {
            className:
              "text-gray-200 tracking-wide md:text-[18px] xs:text-[14px]",
            children: testimonial,
          }),
          _jsxs("div", {
            className: "mt-7 flex justify-between items-center gap-1",
            children: [
              _jsxs("div", {
                className: "flex-1 flex flex-col",
                children: [
                  _jsxs("p", {
                    className: "text-white font-medium text-[16px]",
                    children: [
                      _jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",
                        children: "@",
                      }),
                      " ",
                      name,
                    ],
                  }),
                  _jsxs("p", {
                    className: "mt-1 text-gray-400 text-[12px]",
                    children: [designation, " of ", company],
                  }),
                ],
              }),
              _jsx("img", {
                src: image,
                alt: `feedback_by-${name}`,
                className: "w-10 h-10 rounded-full object-cover",
              }),
            ],
          }),
        ],
      }),
    ],
  });
const Feedbacks = () => {
  return _jsxs("div", {
    className: "mt-12 bg-zinc-900 rounded-[20px] rounded-2xl shadow-xl",
    children: [
      _jsx("div", {
        className: "px-8 py-10",
        children: _jsxs(motion.div, {
          variants: textVariant(),
          children: [
            _jsx("p", {
              className: "text-gray-400 text-sm",
              children: "What others say",
            }),
            _jsx("h2", {
              className: "text-white text-3xl font-bold",
              children: "Testimonials.",
            }),
          ],
        }),
      }),
      _jsx("div", {
        className: "pb-14 px-8 flex flex-wrap md:flex-nowrap md:flex-col lg:flex-row lg:flex-wrap justify-start gap-30 xs:gap-10",
        children: testimonials.map((testimonial, index) =>
          _jsx(FeedbackCard, { index: index, ...testimonial }, testimonial.name)
        ),
      }),
    ],
  });
};
export default SectionWrapper(Feedbacks, "");
