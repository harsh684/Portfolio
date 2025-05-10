import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type LazyCanvasProps = {
    children: ReactNode;
    className?: string;
    threshold?: number;
  };
  
  const LazyCanvas = ({ children, className, threshold = 0.1 }: LazyCanvasProps) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold,
    });
  
    return (
      <div ref={ref} className={className}>
        {inView ? children : null}
      </div>
    );
  };
  
  export default LazyCanvas;