import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
const Stars = (props) => {
    const ref = useRef(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
    useFrame((_state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    return (_jsx("group", { rotation: [0, 0, Math.PI / 4], children: _jsx(Points, { ref: ref, positions: sphere, stride: 3, frustumCulled: true, ...props, children: _jsx(PointMaterial, { transparent: true, color: '#f272c8', size: 0.002, sizeAttenuation: true, depthWrite: false }) }) }));
};
const StarsCanvas = () => {
    return (_jsx("div", { className: 'w-full h-auto absolute inset-0 z-[-1]', children: _jsxs(Canvas, { camera: { position: [0, 0, 1] }, children: [_jsx(Suspense, { fallback: null, children: _jsx(Stars, {}) }), _jsx(Preload, { all: true })] }) }));
};
export default StarsCanvas;
