import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed z-[100]">
                <button onClick={() => setIsOpen(!isOpen)} className="absolute md:h-16 h-14 md:w-16 w-14  md:top-10 top-6 md:left-10 left-6 rounded-full bg-opacity-30 bg-gray-700 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-[6px]" >
                        <div className={`h-[2px] w-8 bg-gray-200 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
                            style={{ transformOrigin: "center" }}
                        ></div>

                        <div className={`h-[2px] w-8 bg-gray-200 transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`}
                        >
                        </div>

                        <div className={`h-[2px] w-8 bg-gray-200 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
                            style={{ transformOrigin: "center" }}
                        ></div>
                    </div>
                </button>
            </nav>

            <div className={`fixed z-[75] flex items-center transition-all bg-black  w-full h-screen ${isOpen ? "" : "translate-x-full"}`}>
                <div className="w-full flex h-full bg-black bg-[linear-gradient(to_right,#bfbfbf1a_1px,transparent_1px),linear-gradient(to_bottom,#bfbfbf1a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:44px_44px]">
                    <div className={`flex w-full flex-col items-center justify-center gap-6`}>
                        <NavItem setIsOpen={setIsOpen} title="Home" to="/" />
                        <NavItem setIsOpen={setIsOpen} title="Register" to="/register" />
                        <NavItem setIsOpen={setIsOpen} title="Events" to="/events" />
                        <NavItem setIsOpen={setIsOpen} title="Schedule" to="/schedule" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;



function NavItem({ title, to, setIsOpen }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `text-5xl hover:text-gray-400 fancyfont font-semibold ${isActive ? 'text-yellow-500' : 'text-white'}`
            }
            onClick={() => setIsOpen(false)}
        >
            <h2>
                {title}
            </h2>
        </NavLink>
    );
}