import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
import LazyCanvas from "./LazyCanvas";
const Computers = (props) => {
    // 3d model from sketchfab.com
    const computer = useGLTF("./desktop_pc/scene.gltf");
    return (_jsxs("mesh", { children: [_jsx("hemisphereLight", { intensity: 1.9, groundColor: 'black' }), _jsx("spotLight", { position: [-20, 50, 10], angle: 0.12, penumbra: 1, intensity: 2, castShadow: true, "shadow-mapSize": 1024 }), _jsx("pointLight", { intensity: 2 }), _jsx("primitive", { object: computer.scene, scale: props.isMobile ? 0.6 : 0.75, position: props.isMobile ? [0, -2.4, -1] : [0, -3.25, -1.5], rotation: [-0.01, -0.2, -0.1] })] }));
};
const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);
        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
    //   <Canvas
    //   frameloop='demand'
    //   shadows
    //   dpr={[1, 2]}
    //   camera={{ position: [20, 3, 5], fov: 24 }}
    //   gl={{ preserveDrawingBuffer: true }}
    // >
    //   <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls
    //       enableZoom={false}
    //       maxPolarAngle={Math.PI / 2}
    //       minPolarAngle={Math.PI / 2}
    //     />
    //     <Computers isMobile={isMobile} />
    //   </Suspense>
    //   <Preload all />
    // </Canvas>
    _jsx(LazyCanvas, { className: "w-[100%] h-full", children: _jsxs(Canvas, { frameloop: 'demand', shadows: true, dpr: [1, 2], camera: { position: [20, 3, 5], fov: 24 }, gl: { preserveDrawingBuffer: true }, children: [_jsxs(Suspense, { fallback: _jsx(CanvasLoader, {}), children: [_jsx(OrbitControls, { enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 }), _jsx(Computers, { isMobile: isMobile })] }), _jsx(Preload, { all: true })] }) }));
};
export default ComputersCanvas;
