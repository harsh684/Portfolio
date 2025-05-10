import { ReactNode } from "react";
type LazyCanvasProps = {
    children: ReactNode;
    className?: string;
    threshold?: number;
};
declare const LazyCanvas: ({ children, className, threshold }: LazyCanvasProps) => import("react/jsx-runtime").JSX.Element;
export default LazyCanvas;
