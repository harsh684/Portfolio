import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../Styles/styles";
import EarthCanvas from "../../components/Canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../../utils/motion";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic empty check
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          from_name: form.name,
          to_name: "Harsh Dangi",
          from_email: form.email,
          to_email: "harshd941gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return _jsxs("div", {
    className: `xl:mt-12 flex lg:flex-row flex-col-reverse gap-10 overflow-hidden`,
    children: [
      _jsxs(motion.div, {
        variants: slideIn("left", "tween", 0.2, 1),
        className: "flex-[0.75] bg-gray-900 p-8 rounded-2xl h-fit",
        children: [
          _jsx("p", {
            className: styles.sectionSubText,
            children: "Get in touch",
          }),
          _jsx("h3", {
            className: styles.sectionHeadText,
            children: "Contact.",
          }),
          _jsxs("form", {
            ref: formRef,
            onSubmit: handleSubmit,
            className: "mt-12 flex flex-col gap-8",
            children: [
              _jsxs("label", {
                className: "flex flex-col",
                children: [
                  _jsx("span", {
                    className: "text-white font-medium mb-4",
                    children: "Your Name",
                  }),
                  _jsx("input", {
                    type: "text",
                    name: "name",
                    value: form.name,
                    onChange: handleChange,
                    placeholder: "What's your good name?",
                    className:
                      "bg-gray-900 py-4 px-2 placeholder:text-slate-400 text-white rounded-lg outline-none border-none font-medium",
                  }),
                ],
              }),
              _jsxs("label", {
                className: "flex flex-col",
                children: [
                  _jsx("span", {
                    className: "text-white font-medium mb-4",
                    children: "Your email",
                  }),
                  _jsx("input", {
                    type: "email",
                    name: "email",
                    value: form.email,
                    onChange: handleChange,
                    placeholder: "What's your web address?",
                    className:
                      "bg-tertiary py-4 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                  }),
                ],
              }),
              _jsxs("label", {
                className: "flex flex-col",
                children: [
                  _jsx("span", {
                    className: "text-white font-medium mb-4",
                    children: "Your Message",
                  }),
                  _jsx("textarea", {
                    rows: 7,
                    name: "message",
                    value: form.message,
                    onChange: handleChange,
                    placeholder: "What you want to say?",
                    className:
                      "bg-tertiary py-4 px-2 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                  }),
                ],
              }),
              _jsx("div", {
                className: "md:flex md:justify-end",
                children: _jsx("button", {
                  type: "submit",
                  className:
                    "bg-zinc-900 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",
                  children: loading ? "Sending..." : "Send",
                }),
              }),
            ],
          }),
        ],
      }),
      _jsx(motion.div, {
        variants: slideIn("right", "tween", 0.2, 1),
        className: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",
        children: _jsx(EarthCanvas, {}),
      }),
    ],
  });
};
export default SectionWrapper(Contact, "contact");
