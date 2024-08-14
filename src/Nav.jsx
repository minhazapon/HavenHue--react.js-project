import { NavLink } from "react-router-dom";

import logo from '../src/image/WhatsApp Image 2024-08-14 at 06.33.08_b063196d.jpg'


const Nav = () => {


    const nav = <>
    
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/About">AboutUs</NavLink></li>
        <li><NavLink to="/design">Design</NavLink></li>
    
    
    
    
    </>

    return (
        <div>

<div className="navbar bg-base-100 mt-2  shadow-md ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>

    <div className=" flex items-center gap-2">
      <img className=" h-[60px]" src={logo} alt="" />
      <a className=" text-4xl font-bold  text-yellow-400 ">Haven<span className=" text-2xl text-orange-600">Hue</span></a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {nav}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn   ">SignIn</a>
  </div>
</div>
                    
        </div>
    );
};

export default Nav;