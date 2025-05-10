import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
function SectionWrapper(Component, idName) {
    function HOC() {
        return (_jsxs(motion.section, { variants: staggerContainer(), initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.25 }, className: `sm:px-10 px-6 sm:py-16 py-10 mx-auto relative z-0`, children: [_jsx("span", { className: 'hash-span', id: idName, children: "\u00A0" }), _jsx(Component, {})] }));
    }
    return HOC;
}
export default SectionWrapper;
