import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      
        <SwiperSlide>
          <div className='min-h-screen' style={{ backgroundImage: "url(https://i.ibb.co.com/NVRfSQ1/top-view-woman-drawing-ipad-23-2150040111.jpg)" ,backgroundRepeat: "no-repeat", backgroundSize:"cover" }}>
           
              <div data-aos="zoom-in-left" className='mt-44 w-1/2 float-start mx-10'>
                  <h1 className='text-6xl text-accent font-bold '>Painting and Drawing A Creative Journey</h1>
                  <p className='text-white text-xl my-4'>
                  Drawing often uses tools like pencils, charcoal, or pens, while painting involves brushes and paints on surfaces such as canvas, paper, or walls. Whether realistic or abstract, painting and drawing allow people to express ideas, emotions, and visions.
                  </p>
                  <button className='btn btn-outline btn-info'>See More</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='min-h-screen' style={{ backgroundImage: "url(https://i.ibb.co.com/0FN6cd8/surreal-portrait-person-with-geometric-animal-representation-23-2151456774.jpg)" ,backgroundRepeat: "no-repeat", backgroundSize:"cover" }}>
              <div data-aos="zoom-in-left" className='mt-44 mx-10 w-1/2 float-start'>
                  <h1 className='text-6xl text-accent font-bold '>Sculpture and Modeling</h1>
                  <p className='text-white text-xl my-4'>
                  Sculpture is a three-dimensional art form created by shaping or combining materials into objects. These can be freestanding or part of a surface, and sculptures may range in scale from small models to massive public monuments. Sculpture has a long history, spanning cultures and time periods, and it uses a variety of techniques, styles, and materials.
                  </p>
                  <button className='btn btn-outline btn-info'>See More</button>
              </div>
          </div>
        </SwiperSlide>
       
          <SwiperSlide>
            <div className='min-h-screen' style={{ backgroundImage: "url(https://i.ibb.co.com/Mg92TTP/two-artists-painting-canvas-1308-34625.jpg)", backgroundRepeat:"no-repeat",}}>
              <div  data-aos="fade-down-right" className='mt-40 w-1/2 mx-12 float-end'>
                  <h1 className='text-6xl text-accent font-bold '>The Art of Pencil Sketch Portraits</h1>
                  <p className='text-black text-xl my-4'>
                  A pencil sketch portrait is a detailed drawing of a person's face or figure using pencil as the primary medium. These portraits are known for their precision, expressive detail, and ability to capture the likeness, emotion, and character of the subject. Pencil sketching is a popular form of portrait art due .
                  </p>
                  <button className='btn btn-outline btn-info'>See More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='min-h-screen'   style={{ backgroundImage: "url(https://i.ibb.co.com/cJTL1pW/human-hand-painting-origami-fish-using-paintbrush-23-2148188333.jpg)", backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
              <div  data-aos="fade-down-right" className='mt-40 mx-10 w-1/2 float-end'>
                  <h1 className='text-6xl text-info font-bold '>Exploring the Beauty of Paper Crafts and Glass Art</h1>
                  <p className='text-black text-xl my-4'>
                  Paper crafts involve creating decorative or functional objects using paper as the primary material. Paper, being highly versatile, can be cut, folded, shaped, glued, and layered, offering endless possibilities for creativity.
                  </p>
                  <button className='btn btn-outline btn-info'>See More</button>
              </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='min-h-screen'   style={{ backgroundImage: "url(https://i.ibb.co.com/gSm5kfF/amazing-watercolor-painting-tshirt-design-vector-1261215-653.jpg)", backgroundRepeat:"no-repeat", backgroundSize: "cover" }}>
              <div  data-aos="fade-down-right" className='mt-40 mx-10 w-1/2 float-start'>
                  <h1 className='text-6xl text-info font-bold '>An Amazing Watercolor Painting </h1>
                  <p className='text-white text-xl my-4'>
                  Watercolor painting is a delicate and expressive art form that uses water-soluble pigments mixed with water to create translucent washes of color. Known for its fluidity and unpredictability, watercolor allows artists to create vibrant and luminous paintings with soft gradients and layered effects.
                  </p>
                  <button className='btn btn-outline btn-info'>See More</button>
              </div>
          </div>
          </SwiperSlide>
          
          <SwiperSlide>
              <div className='min-h-screen'   style={{ backgroundImage: "url(https://i.ibb.co.com/1KXBMGv/man-is-painting-landscape-with-mountains-background-1261236-9785.jpg)", backgroundSize: "cover" }}>
              <div data-aos="fade-left" className='mt-40 mx-10 w-1/2 float-start'>
                  <h1 className='text-6xl text-red-500 font-bold '>Exploring the Beauty of Nature Art</h1>
                  <p className='text-white text-xl my-4'>
                  Nature art is a form of artistic expression that takes inspiration from the natural world, often using nature as both the subject and medium. It reflects an intimate connection between the artist and the environment, highlighting the beauty, complexity, and ever-changing character of landscapes, plants, animals, and natural elements.
                  </p>
                  <button className='btn btn-outline btn-info'>See More</button>
              </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}
