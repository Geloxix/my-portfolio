import { NavLink, Link } from "react-router-dom";
import { FaMoon, FaBars } from 'react-icons/fa';


const Nav = () => {

    const handleLink = ({ isActive }) => {
        return isActive ? 'border-2 border-primary hover:text-primary' : null;
    };

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
                            to="/"
                            onClick={handleLink}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={handleLink}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/skills"
                            onClick={handleLink}
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            to="/services"
                            onClick={handleLink}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={handleLink}
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