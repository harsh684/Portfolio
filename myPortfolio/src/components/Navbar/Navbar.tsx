import { useState } from 'react'
import { styles } from '../../Styles/styles'
import { Link } from 'react-router-dom'
import { logo } from '../../assets';
import { navLinks } from '../../utils/Constants';
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
function Navbar() {
    const [active,setActive] = useState("");
    const [toggle,setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-black`}>
        <div className='w-full flex justify-between tems-center max-w-7xl mx-auto'>
            <Link to='/' className='flex items-center gap-2'
                onClick={()=>{
                    setActive("")
                    window.scrollTo(0,0);
                }}
                >
                    <img src={logo} alt='logo' className='w-12 h-12 object-contain rounded-full'/>
                    <p className='text-white flex text-[18px] font-bold cursor-pointer'>Harsh Dangi &nbsp;<span className='hidden sm:block'>| Software Engineer</span></p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
                    {navLinks.map((link:any)=>(
                        <li key={link.id}
                        className={`${active === link.title ?
                            "text-white":
                            "text-gray-400"
                        } hover:text-white text-[17px] font-medium cursor-pointer`}
                        onClick={()=> setActive(link.title)}
                        >
                            
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}

                </ul>

                {/* mobile navbar */}
                    <div className='sm:hidden flex flex-1 justify-end items-center'>
                        <img 
                        src={toggle ? close :menu} 
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={()=> setToggle(!toggle)}
                        />
                        <div className={`${toggle ? 'flex':'hidden'} p-6 bg-gradient-to-r from-gray-700 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {navLinks.map((link:any)=>(
                        <li key={link.id}
                        className={`${active === link.title ?
                            "text-white":
                            "text-gray-400"
                        } font-poppins font-medium text-[16px] cursor-pointer`}
                        onClick={()=> {
                            setToggle(!toggle);
                            setActive(link.title);
                        }}
                        >
                            
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}

                </ul>
                        </div>
                    </div>
        </div>
    </nav>
  )
}

export default Navbar
