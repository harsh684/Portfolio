import { jsx as _jsx } from "react/jsx-runtime";
import { useInView } from "react-intersection-observer";
const LazyCanvas = ({ children, className, threshold = 0.1 }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold,
    });
    return (_jsx("div", { ref: ref, className: className, children: inView ? children : null }));
};
export default LazyCanvas;
