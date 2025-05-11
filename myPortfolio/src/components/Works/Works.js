import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../../Styles/styles";
import github from "../../assets/github.png";
import { SectionWrapper } from "../hoc";
import { projects } from "../../utils/Constants";
import { fadeIn, textVariant } from "../../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return _jsx(motion.div, {
    variants: fadeIn("up", "spring", index * 0.5, 0.75),
    children: _jsxs(Tilt, {
      tiltMaxAngleX: 20,
      tiltMaxAngleY: 20,
      scale: 1,
      transitionSpeed: 450,
      className:
        "bg-zinc-900 p-5 rounded-2xl sm:w-[400px] md:w-[360px] lg:w-[300px] xl:w-[360px] w-full h-full",
      children: [
        _jsxs("div", {
          className: "relative w-full h-[230px]",
          children: [
            _jsx("img", {
              src: image,
              alt: "project_image",
              className: "w-full h-full object-cover rounded-2xl",
            }),
            source_code_link &&
              _jsx("div", {
                className:
                  "absolute inset-0 flex justify-end m-3 card-img_hover",
                children: _jsx("div", {
                  onClick: () => window.open(source_code_link, "_blank"),
                  className:
                    "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",
                  children: _jsx("img", {
                    src: github,
                    alt: "source code",
                    className: "w-1/2 h-1/2 object-contain",
                  }),
                }),
              }),
          ],
        }),
        _jsxs("div", {
          className: "mt-5",
          children: [
            _jsx("h3", {
              className: "text-white font-bold text-[24px]",
              children: name,
            }),
            _jsx("p", {
              className: "mt-2 text-secondary text-[14px]",
              children: description,
            }),
          ],
        }),
        _jsx("div", {
          className: "mt-4 flex flex-wrap gap-2",
          children: tags.map((tag) =>
            _jsxs(
              "p",
              {
                className: `text-[14px] font-medium ${tag.color} bg-clip-text text-transparent`,
                children: ["#", tag.name],
              },
              `${name}-${tag.name}`
            )
          ),
        }),
      ],
    }),
  });
};
const Works = () => {
  return _jsxs(_Fragment, {
    children: [
      _jsxs(motion.div, {
        variants: textVariant(),
        children: [
          _jsx("p", {
            className: `${styles.sectionSubText} `,
            children: "My work",
          }),
          _jsx("h2", {
            className: `${styles.sectionHeadText}`,
            children: "Projects.",
          }),
        ],
      }),
      _jsx("div", {
        className: "w-full flex",
        children: _jsx(motion.p, {
          variants: fadeIn("", "", 0.5, 1),
          className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",
          children:
            "Following projects showcase my skills and experiences through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
        }),
      }),
      _jsx("div", {
        className: "mt-20 flex flex-wrap justify-evenly gap-8 xl:gap-10 w-full",
        children: projects.map((project, index) =>
          _jsx(ProjectCard, { index: index, ...project }, `project-${index}`)
        ),
      }),
    ],
  });
};
export default SectionWrapper(Works, "projects");
