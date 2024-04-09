import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { FaMoon, FaBars, FaSun, FaXRay } from 'react-icons/fa';
import { Menu, X } from "lucide-react";



const Nav = ({ handleSmoothScroll, homeRef, aboutRef, skillsRef, servicesRef, contactRef }) => {
   const [isSticky, setIsSticky] = useState(false);
   const [isDark, setIsDark] = useState(false);
   const [isOpen, setisOpen] = useState(false);

   const handleDarkMode = () => {
      setIsDark(!isDark);
   };

   const handleIsOpen = () => {
      setisOpen(!isOpen);
   };

   const menuLinks = [
      { name: 'Home', navRef: homeRef },
      { name: 'About', navRef: aboutRef },
      { name: 'Skills', navRef: skillsRef },
      { name: 'Services', navRef: servicesRef },
      { name: 'Contact', navRef: contactRef }
   ];

   useEffect(() => {
      window.addEventListener('scroll', () => {
         const nav = document.querySelector('nav');
         window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
      });
   },[]);

   return (
      <nav className={`fixed w-full top-0 left-0 z-[999] transition-all ${isSticky ? 'bg-gray-50' : 'bg-transparent'}`}>
         <div className="flex items-center justify-between h-[4rem] w-full md:px-[9rem] px-[4rem] font-poppins text-primary relative">
               <div>
                  <img 
                     src={Logo}
                     alt="logo name" 
                     width={60}
                  />
               </div>

               <div className="md:block hidden">
                  <ul className="flex items-center gap-[1.8rem]">
                  {
                     menuLinks.map((menu) => (
                        <li 
                           key={menu.name}
                           className="hover-button list-none cursor-pointer"
                           onClick={() => handleSmoothScroll(menu.navRef)}
                        >
                           { menu.name }
                        </li>
                     ))
                     }
                     <button
                           onClick={handleDarkMode}
                           className="text-[28px]"
                     >
                           { isDark ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-zinc-700" />}
                     </button>
                  </ul>
               </div>
               

               <div className={`md:hidden block absolute w-2/4 h-screen px-5 bg-gray-200 top-0 duration-300 ${isOpen ? 'right-0' : 'right-[-100%]'}`}>
                  <ul className="flex flex-col justify-center t h-full gap-8 text-md px-1 text-lg list-none" >
                     {
                           menuLinks.map((menu) => (
                              <li 
                                 key={menu.name}
                                 onClick={() => handleSmoothScroll(menu.navRef)}
                                 className="p-2 hover:bg-gray-300 cursor-pointer transition duration-200 linear"
                              >
                                 { menu.name}
                              </li>
                           ))
                     }

                     <button
                           onClick={handleDarkMode}
                           className="text-[28px]"
                     >
                           { isDark ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-zinc-700" />}
                     </button>
                  </ul>  
               </div>
               <button 
                  className={`md:hidden block font-bold cursor-pointer z-[999]`}
                  onClick={handleIsOpen}
               >
                  { isOpen ? <X 
                     className="text-red-500 font-bold cursor-pointer"
                  /> : <Menu 
                     className="text-secondary font-bold"
                  />} 
               </button> 
         </div>
      </nav>
   );
}

export default Nav;