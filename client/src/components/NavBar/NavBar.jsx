import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed">
            <button onClick={() => setIsOpen(!isOpen)} className="absolute md:h-16 h-14 md:w-16 w-14 z-50 md:top-10 top-6 md:left-10 left-6 rounded-full bg-opacity-30 bg-gray-500 flex items-center justify-center">
                <div
                    className="flex flex-col items-center justify-center gap-[6px]"
                >
                    <div
                        className={`h-[2px] w-8 bg-gray-200 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                        style={{ transformOrigin: "center" }}
                    ></div>

                    <div
                        className={`h-[2px] w-8 bg-gray-200 transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`}
                    ></div>

                    <div
                        className={`h-[2px] w-8 bg-gray-200 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                        style={{ transformOrigin: "center" }}
                    ></div>
                </div>
            </button>

            <div className={`fixed flex items-center transition-all bg-black w-full h-screen ${isOpen ? "" : "translate-x-full"}`}>
                <div className={`flex w-full flex-col items-center justify-center gap-6`}>
                    <NavItem setIsOpen={setIsOpen} title="Home" to="/" />
                    <NavItem setIsOpen={setIsOpen} title="Register" to="/register" />
                    <NavItem setIsOpen={setIsOpen} title="Events" to="/events" />
                    <NavItem setIsOpen={setIsOpen} title="Schedule" to="/schedule" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;



function NavItem({ title, to, setIsOpen }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-5xl fancyfont font-semibold ${isActive ? 'text-yellow-500' : 'text-white'}`
            }
            onClick={() => setIsOpen(false)}
        >
            <h2>
                {title}
            </h2>
        </NavLink>
    );
}

