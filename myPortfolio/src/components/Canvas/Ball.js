import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture, } from "@react-three/drei";
import CanvasLoader from "../../components/Loader/Loader";
import LazyCanvas from "./LazyCanvas";
const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (_jsxs(Float, { speed: 1.75, rotationIntensity: 1, floatIntensity: 2, children: [_jsx("ambientLight", { intensity: 0.25 }), _jsx("directionalLight", { position: [0, 0, 0.05] }), _jsxs("mesh", { castShadow: true, receiveShadow: true, scale: 2.75, children: [_jsx("icosahedronGeometry", { args: [1, 1] }), _jsx("meshStandardMaterial", { color: '#fff8eb', polygonOffset: true, polygonOffsetFactor: -5, flatShading: true }), _jsx(Decal, { position: [0, 0, 1], rotation: [2 * Math.PI, 0, 6.25], scale: 1, map: decal })] })] }));
};
const BallCanvas = ({ icon }) => {
    return (_jsx(LazyCanvas, { children: _jsxs(Canvas, { frameloop: 'demand', dpr: [1, 2], gl: { preserveDrawingBuffer: true }, children: [_jsxs(Suspense, { fallback: _jsx(CanvasLoader, {}), children: [_jsx(OrbitControls, { enableZoom: false }), _jsx(Ball, { imgUrl: icon })] }), _jsx(Preload, { all: true })] }) }));
};
export default BallCanvas;
