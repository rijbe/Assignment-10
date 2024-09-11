import React from 'react';

const Section = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 bg-white text-black '>
             <div data-aos="zoom-in-right" className='w-2/3 mt-20 ml-10'>
                <h1 className='text-6xl font-bold  my-4'>Impressionist's Magic with Painting & Color</h1>
                <p className='top-12'>Painting involves applying pigment to a surface, typically using tools like brushes, knives, or sponges. It can be done with various materials like oils, acrylics, or watercolors. Painting is often associated with color, texture, and the ability to create dynamic, layered images.</p>

                <div data-aos="zoom-in-left" className='my-2'>
                    <button className='btn btn-outline btn-accent'>See More</button>
                </div>
            </div>
            <div data-aos="zoom-in-left">
                <img className='h-[600px]' src='https://i.ibb.co.com/6ZNWKBS/back-school-sketch-college-student-holding-bag-isolated-white-background-460848-14630.jpg'></img>
            </div>
           
        </div>
    );
};

export default Section;