import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaMoon, FaBars, FaSun } from 'react-icons/fa';


const Nav = ({ handleSmoothScroll, homeRef, aboutRef, skillsRef, servicesRef, contactRef }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const handleDarkMode = () => {
        setIsDark(!isDark);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
        });
    },[]);

    return (
        <nav className={`fixed w-full top-0 left-0 z-[999] transition-all ${isSticky ? 'bg-gray-50 ' : 'bg-transparent text-red'}`}>
            <div className="flex items-center justify-between h-[4rem] w-full px-[9rem] font-poppins text-primary ">
                <div>
                    <img 
                        src={Logo}
                        alt="logo name" 
                        width={60}
                    />
                </div>
                <div className="hidden md:block relative">
                    <div className="flex items-center gap-[1.8rem]">
                        <button 
                            className="hover-button"
                            onClick={() => handleSmoothScroll(homeRef)}
                        >
                            Home
                        </button>
                        <button 
                            className="hover-button"
                            onClick={() => handleSmoothScroll(aboutRef)}
                        >
                            About
                        </button>
                        <button 
                            className="hover-button"
                            onClick={() => handleSmoothScroll(skillsRef)}
                        >
                            Skills
                        </button>
                        <button 
                            className="hover-button"
                            onClick={() => handleSmoothScroll(servicesRef)}
                        >
                            Services
                        </button>
                        <button 
                            className="hover-button"
                            onClick={() => handleSmoothScroll(contactRef)}
                        >
                            Contact
                        </button>
                        <button
                            onClick={handleDarkMode}
                            className="text-[28px]"
                        >
                            { isDark ? <FaMoon className="text-zinc-700" /> : <FaSun className="text-yellow-300"/>}
                        </button>
                    </div>  
                </div>
                <button className="block md:hidden">
                    <FaBars />
                </button>
            </div>
        </nav>
    );
}

export default Nav;