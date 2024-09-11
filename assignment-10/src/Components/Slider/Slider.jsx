import React from 'react';
import './slider.css'
import './slide.js'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const Slider = () => {
    return (
        <div className='contentSli'>
            <div className=''>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name text-7xl'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
            <div className='item' style={{backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", }}>   
                <div className='content'>
                    <p className='name'>Bangladesh</p>
                    <p className='des'>lorem imp sun is he best languge</p>
                    <button>See More!</button>
                </div>
            </div>
        </div>
        <div className='but'>
            <button className='prev'><MdKeyboardArrowLeft /></button>
            <button className='next'><MdKeyboardArrowRight /></button>
        </div>
            
    </div>
    );
};

export default Slider;
