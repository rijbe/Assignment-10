import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const SectionThree = () => {
    const [counter, setCounter] = useState(false)
    return (
       <div>
         <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)}>
        <div className='grid grid-cols-5'>
            <div className='text-3xl'>
                <h2 className='text-4xl text-white'>
                {
                    counter && 
                    <CountUp start={0} end={100} delay={0}  duration={2.75}>
                </CountUp>
                }%
                </h2>
                
            </div>
            <div  className='text-3xl'>
            <h2 className='text-4xl text-white'>
                {
                    counter && 
                    <CountUp start={0} end={120} delay={0}  duration={2.75}>
                </CountUp>
                }%
                </h2>
            </div>
            <div  className='text-3xl'>
            <h2 className='text-4xl text-white'>
                {
                    counter && 
                    <CountUp start={0} end={190} delay={0}  duration={2.75}>
                </CountUp>
                }%
                </h2>
            </div>
            <div  className='text-3xl'>
            <h2 className='text-4xl text-white'>
                {
                    counter && 
                    <CountUp start={0} end={150} delay={0}  duration={2.75}>
                </CountUp>
                }%
                </h2>
            </div>
            <div  className='text-3xl'>
            <h2 className='text-4xl text-white'>
                {
                    counter && 
                    <CountUp start={45} end={90} delay={0}  duration={2.75}>
                </CountUp>
                }%
                </h2>
            </div>
        </div>
        </ScrollTrigger>
       </div>
        
    );
};

export default SectionThree;