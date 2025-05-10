import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Tech from './components/Tech/Tech';
import Works from './components/Works/Works';
import Feedbacks from './components/Feedbacks/Feedbacks';
import Contact from './components/Contact/Contact';
import StarsCanvas from '../src/components/Canvas/Stars';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: 'h-[100vh] relative z-0 bg-black', children: [_jsxs("div", { className: 'bg-hero-pattern bg-cover bg-no-repeat bg-center', children: [_jsx(Navbar, {}), _jsx(Hero, {})] }), _jsx(About, {}), _jsx(Experience, {}), _jsx(Tech, {}), _jsx(Works, {}), _jsx(Feedbacks, {}), _jsxs("div", { className: 'relative z-0 ', children: [_jsx(Contact, {}), _jsx(StarsCanvas, {})] })] }) }));
}
export default App;
