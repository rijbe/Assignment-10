import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCraftItem from '../DisplayCraftItem/DisplayCraftItem';
import SectionCatagory from '../SectionCatagory/SectionCatagory';
import Section from '../Section/Section';
import SectionTwo from '../SectionTwo/SectionTwo';
import App from '../../App';

const Home = () => {
    const allItems = useLoaderData()
    return (
        <div> 
            
            <App></App>
            <SectionTwo></SectionTwo>
            <div className='my-20'>
               <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"> <h1 className='text-5xl my-3 text-white w-1/2 text-center font-bold mx-auto'>Welcome to Our Collection of All Art & Craft Items</h1></div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"><p className='w-1/2 text-center text-white text-xl mx-auto'>Unleash your creativity with our comprehensive range of art and craft supplies! Whether you're a seasoned artist, a passionate hobbyist, or just starting out, we have everything you need to bring your ideas to life</p></div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-3 gap-12 container mx-auto'>
            {
                allItems.map(craft => <DisplayCraftItem key={craft._id} craft={craft}></DisplayCraftItem>)
            }
            </div>

            <div className='my-20'>
               <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"> <h1 className='text-5xl my-3 text-white w-1/2 text-center font-bold mx-auto'>Explore Our Art & Craft Categories</h1></div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"><p className='w-1/2 text-center text-white text-xl mx-auto'>Discover a world of creativity with our diverse range of art and craft categories, carefully curated to meet all your creative needs. Whether you're into fine arts, DIY crafts, or hands-on projects for kids, we have the perfect supplies for you.</p></div>
            </div>

          <SectionCatagory></SectionCatagory>
          <Section></Section>
          

        </div>

       
    );
};

export default Home;