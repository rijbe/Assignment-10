import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const SectionTwo = () => {
    const [counter, setCounter] = useState(false)
    return (
        <div className='my-20 '>
        <div className='w-1/2 mx-auto text-center justify-center'>
           <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <h1 className="mb-5 text-6xl font-bold text-center text-zinc-100">Ready to Start Your <br></br> Artistic Journey</h1>
           </div>
            <div data-aos="fade-up"
                 data-aos-duration="3000">
                <p className="mb-12 text-xl">
                     Your Artistic Journey is an inviting and motivational phrase that encourages individuals to embark on their path of creativity and self-expression. It suggests a call to action, inspiring people to explore their artistic potential and begin creating art, whether through painting, drawing, or any other medium.
                </p>
            </div>
        </div>
            <div
                className="hero"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/q55v2N2/artist-drawing-by-artist-brush-mix-color-acrylic-water-color-oil-painting-art-creativity-part-131927.jpg)", height: "500px"
                }}>
                <div className="hero-overlay"></div>
                <div  className="hero-content text-white text-center ">
                    <div className="grid grid-cols-1  items-center">
                        <div className='w-1/2 text-center justify-center items-center mx-auto'>
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
                            <h1 className='text-5xl font-bold font-sans text-accent my-5'>A Guide to Launching Your Creative Career</h1>
                            </div>
                            <div data-aos="fade-up"
                                 data-aos-duration="3000">
                                <p className='text-xl'>Embarking on a career as an artist is an exciting and rewarding journey, filled with opportunities for self-expression and creativity. Whether you're a painter, sculptor, digital artist, or involved in any other artistic field</p>
                            </div>
                        </div>

                       
                   
                    </div>
                </div>
            </div>
            <div  className='container mx-auto my-10 '>
                
                <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
                <div className='grid grid-cols-1 text-center md:grid-cols-4 gap-10 p-4'>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='w-56 h-40 grid  items-center bg-primary rounded-lg'>
                        <h2 className='text-7xl text-white font-bold'>
                        {
                            counter && 
                            <CountUp start={0} end={10.4} delay={0}  duration={2.75}>
                        </CountUp>
                        }K+
                        </h2>
                        <p className='text-xl text-white'>Your Project</p>
                        
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className='w-56 h-40 md:-mt-36 grid  items-center bg-white rounded-lg'>
                    <h2 className='text-7xl text-accent font-bold'>
                        {
                            counter && 
                            <CountUp start={0} end={120.6} delay={0}  duration={2.75}>
                        </CountUp>
                        }K+
                        </h2>
                        <p className='text-xl text-black'>Your Members</p>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className='w-56 h-40 grid  items-center bg-accent rounded-lg'>
                    <h2 className='text-7xl font-bold text-white'>
                        {
                            counter && 
                            <CountUp start={0} end={200} delay={0}  duration={2.75}>
                        </CountUp>
                        }+
                        </h2>
                        <p className='text-xl text-black'>Award-Winning Alumni</p>
                    </div>
                    
                    <div data-aos="fade-up"
                        data-aos-duration="2000" className='w-56 h-40 grid md:-mt-36 items-center bg-blue-400 rounded-lg'>
                        <h2 className='text-7xl text-white font-bold'>
                        {
                            counter && 
                            <CountUp start={45} end={90} delay={0}  duration={2.75}>
                        </CountUp>
                        }+
                        </h2>
                        <p className='text-xl text-white'>Industry Partnerships</p>
                    </div>
                </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default SectionTwo;