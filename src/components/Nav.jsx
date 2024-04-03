import { NavLink, Link } from "react-router-dom";
import { FaMoon, FaBars } from 'react-icons/fa';


const Nav = () => {
    return (
        <nav className="bg-transparent w-full fixed top-0 right-0 z-50">
            <div className="flex items-center justify-between h-[6rem] w-full px-[9rem] font-poppins text-primary ">
                <Link to="/">
                    <h1>
                        Logo
                    </h1>
                </Link>
                <div className="hidden md:block relative">
                    <div className="flex items-center gap-6">
                        <NavLink
                            to="/"s
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/skills"
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            to="/services"
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                        <button>
                            <FaMoon />
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