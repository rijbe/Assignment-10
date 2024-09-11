import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
            <img className='w-52' src='https://i.ibb.co.com/Z2xjVrG/logo.png'></img>
                <p className='text-xl text-white my-4'>
                Wazors Painting & Wallpapering
                <br />
                Providing reliable tech since 1992
                </p>
                <div className='my-12'>
                    <div className='text-xl space-y-4'>
                        <div className='flex items-center gap-4'>
                            <span><FaPhoneVolume className='text-green-500' /></span>
                            <span>+0112369413</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <span><MdMarkEmailRead className='text-blue-200' /></span>
                            <span>rakib@gmail.com</span>
                        </div>
                       
                       <div className='flex items-center gap-4'>
                        <span><IoLocation className='text-white' /></span>
                        <span>Pathrail, Tangail, Dhaka-1200</span>
                       </div>

                    </div>
                    <div>
                     
                    </div>
                </div>
            </aside>
            <nav className='text-white'>
                <h6 className="footer-title text-xl text-white">Services</h6>
                <a className="link link-hover">Room Wallpaper</a>
                <a className="link link-hover">Wall Painting</a>
                <a className="link link-hover">Wall Sheets</a>
                <a className="link link-hover">Outdoor Designs</a>
                <a className="link link-hover">PVC Panels</a>
                <a className="link link-hover">Interior Design</a>

                
            </nav>
            <nav>
                <h6 className="footer-title text-xl">Company</h6>
                <a><NavLink to="/">Home</NavLink></a>
                <a><NavLink to="/allCraftItem">All Art & craft Items</NavLink></a>
                <a><NavLink to="/addCraft">Add Craft Item</NavLink></a>
                <a><NavLink to="/login">Login</NavLink></a>
                <a><NavLink to="/register">Register</NavLink></a>
                <a><NavLink to="/order">Order</NavLink></a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl">Contact</h6>
                <p className='text-white my-6'>Sign up email to get our daily latest news & updates from us</p>
                  <div className="form-control">
                    <input type="email" placeholder="email" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                    <button className="btn btn-outline">Login</button>
                </div>
                <div className='text-2xl flex gap-6 mt-4'>
                    <span><FaFacebook className='text-blue-600' /></span>
                    <span><IoLogoTwitter className='text-accent' /></span>
                    <span><CiLinkedin className='text-secondary' /></span>
                    <span><FaInstagram className='text-info' /></span>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;