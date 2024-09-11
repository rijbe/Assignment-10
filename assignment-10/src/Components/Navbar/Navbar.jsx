import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const navList = <>
        <li className=' text-white '><NavLink to="/">Home</NavLink></li>
        <li className=' text-white '><NavLink to="/allCraftItem">All Art & craft Items</NavLink></li>
        <li className=' text-white '><NavLink to="/addCraft">Add Craft Item</NavLink></li>
        {/* <li className=' text-white '><NavLink to="/craftList">Art&Craft List</NavLink></li> */}
        <li className=' text-white '><NavLink to="/login">Login</NavLink></li>
        <li className=' text-white '><NavLink to="/register">Register</NavLink></li>
       
{/*       
        {
            user &&  <>
            <Link to="/order"><li><a>Galary</a></li></Link>
            <Link to="/order"><li><a>Phone</a></li></Link>
            <Link to="/order"><li><a>Dash</a></li></Link>
            </>
        } */}
    </>
    return (
        <div className="navbar bg-base-300 py-4 text-white ">
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
                    {
                        navList
                    }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-52' src='https://i.ibb.co.com/Z2xjVrG/logo.png'></img>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p>{user.email}</p>
                        <button className="btn btn-outline btn-accent" onClick={logOut}>SignOut</button>
                    </>:
                    <Link to="/login"> <button className="btn btn-outline btn-accent"> SignIn </button></Link>
                   
                }
            </div>
        </div>
    );
};

export default Navbar;