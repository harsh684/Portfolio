import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { styles } from '../../Styles/styles';
import { Link } from 'react-router-dom';
import { logo } from '../../assets';
import { navLinks } from '../../utils/Constants';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (_jsx("nav", { className: `${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-black`, children: _jsxs("div", { className: 'w-full flex justify-between tems-center max-w-7xl mx-auto', children: [_jsxs(Link, { to: '/', className: 'flex items-center gap-2', onClick: () => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }, children: [_jsx("img", { src: logo, alt: 'logo', className: 'w-12 h-12 object-contain rounded-full' }), _jsxs("p", { className: 'text-white flex text-[18px] font-bold cursor-pointer', children: ["Harsh Dangi \u00A0", _jsx("span", { className: 'hidden sm:block', children: "| Software Engineer" })] })] }), _jsx("ul", { className: 'list-none hidden sm:flex flex-row items-center gap-10', children: navLinks.map((link) => (_jsx("li", { className: `${active === link.title ?
                            "text-white" :
                            "text-gray-400"} hover:text-white text-[17px] font-medium cursor-pointer`, onClick: () => setActive(link.title), children: _jsx("a", { href: `#${link.id}`, children: link.title }) }, link.id))) }), _jsxs("div", { className: 'sm:hidden flex flex-1 justify-end items-center', children: [_jsx("img", { src: toggle ? close : menu, alt: 'menu', className: 'w-[28px] h-[28px] object-contain cursor-pointer', onClick: () => setToggle(!toggle) }), _jsx("div", { className: `${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-r from-gray-700 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`, children: _jsx("ul", { className: 'list-none flex justify-end items-start flex-col gap-4', children: navLinks.map((link) => (_jsx("li", { className: `${active === link.title ?
                                        "text-white" :
                                        "text-gray-400"} font-poppins font-medium text-[16px] cursor-pointer`, onClick: () => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }, children: _jsx("a", { href: `#${link.id}`, children: link.title }) }, link.id))) }) })] })] }) }));
}
export default Navbar;
