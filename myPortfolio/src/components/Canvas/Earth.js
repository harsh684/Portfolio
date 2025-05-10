import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
import LazyCanvas from "./LazyCanvas";
const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");
    return (_jsx("primitive", { object: earth.scene, scale: 2.5, "position-y": 0, "rotation-y": 0 }));
};
const EarthCanvas = () => {
    return (_jsx(LazyCanvas, { className: "w-full h-full", children: _jsx(Canvas, { shadows: true, frameloop: 'demand', dpr: [1, 2], gl: { preserveDrawingBuffer: true }, camera: {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }, children: _jsxs(Suspense, { fallback: _jsx(CanvasLoader, {}), children: [_jsx(OrbitControls, { autoRotate: true, enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 }), _jsx(Earth, {}), _jsx(Preload, { all: true })] }) }) }));
};
export default EarthCanvas;
