import {FaSearch,FaShoppingCart,FaBars,FaTimes} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import logo from "../assets/Yaghi-Market-logo.png";
import { useState } from "react";
const navItem = ({ isActive }) =>
  `relative px-2 py-1 font-semibold transition
   ${isActive ? "text-yellow-300" : "text-white hover:text-yellow-300"}
   after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-yellow-300
   after:scale-x-0 after:origin-left after:transition-transform after:duration-200
   ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`;
const mobileItem = ({ isActive }) =>
  `block w-full px-4 py-3 rounded-lg font-semibold transition
   ${isActive ? "bg-red-800 text-yellow-300" : "text-white hover:bg-red-800/60"}`;
function Navbar(){
    const cartCount = 2;
    const [open,setOpen] = useState(false);
    const closeMenu = ()=>setOpen(false);
return(
    <header className="sticky top-0 z-50 bg-red-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="h-16 flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-3">
                     <img src={logo} alt="Yaghi Market" className="w-11 h-11 rounded-full bg-white p-2 object-contain border border-gray-200"/>
                     <div className="leading-tight">
                        <div className="text-xl font-extrabold text-white">
                            Yaghi <span className="text-yellow-500">Market</span>
                        </div>
                        <div className="text-xs text-gray-300 -mt-0.5">
                            Supermarket - Butchery - Chicken
                        </div>
                     </div>
                </NavLink>
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink to="/" className={navItem} end>
                    Home
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-yellow-300 scale-x-0 origin-left transition-transform duration-200 group-[.active]:scale-x-100"/>
                    </NavLink>
                    <NavLink to="/supermarket" className={navItem}>Supermarket</NavLink>
                    <NavLink to="/butchery" className={navItem}>Butchery</NavLink>
                    <NavLink to="/chicken" className={navItem}>Chicken</NavLink>
                    <NavLink to="/offers" className={navItem}>Offers</NavLink>
                </nav>
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg hover:bg-yellow-500 text-white transition"
                            aria-label="Search"
                            onClick={()=>console.log("open Search")}>
                                <FaSearch/>
                    </button>
                    <NavLink to="/AddCart" className="relative p-2 rounded-lg hover:bg-yellow-500 text-white transition">
                    <FaShoppingCart/>
                    {cartCount>0 && (<span className="absolute -top-1 -right-1 text-[10px] bg-yellow-500 text-white font-bold px-1.5 py-0.5 rounded">
                        {cartCount}
                    </span>)}
                    </NavLink>
                    <button className="md:hidden p-2 rounded-lg hover:bg-yellow-500 text-white transition"
                            aria-label="Menu"
                            onClick={()=>setOpen((v)=>!v)}
                    >
                        {open ? <FaTimes/> : <FaBars/>}
                    </button>
                </div>
            </div>
            {open && (
                <div className="md:hidden pb-4">
                    <div className="mt-2 bg-yellow-500 border border-white rounded-2xl p-2 ">
                        <NavLink to="/" className={mobileItem} end onClick={closeMenu}>
                        Home
                        </NavLink>
                         <NavLink to="/supermarket" className={mobileItem} end onClick={closeMenu}>
                        Supermarket
                        </NavLink>
                         <NavLink to="/butchery" className={mobileItem} end onClick={closeMenu}>
                        Butchery
                        </NavLink>
                         <NavLink to="/chicken" className={mobileItem} end onClick={closeMenu}>
                        Chicken
                        </NavLink>
                        <NavLink to="/offers" className={mobileItem} end onClick={closeMenu}>
                        Offers
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    </header>
);
}
export default Navbar;