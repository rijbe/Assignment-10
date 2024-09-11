import React from 'react';
import { useLoaderData } from 'react-router-dom';
const ViewDetails = () => {
    const craft = useLoaderData();
    const { name, _id, item, date, email, stock, category, price, ratting, photo, short, radio,} = craft;

    console.log(craft)
    return (
        <div className='text-center flex justify-center my-10'>
            <div className="card card-compact bg-base-100  w-96 shadow-xl rounded-lg">
            <div  data-aos="zoom-in-right">
                <img className=' rounded-t-box'
                src={photo}
                alt="photo" />
            </div>
            <div className="card-body text-white">
                <h2 className="card-title text-4xl my-2 text-accent">{item}</h2>              
                <p className='text-2xl my-1'>Description: {short}</p>
                <div className='flex gap-24'>
                 <p className='text-xl'>Price: ${price}</p>
    
                </div>
                <div className='flex justify-between gap-20'>
                    <p>StockStatus: {stock}</p>
                    <p>Customization: {radio}</p>
                </div>              
                
            </div>
            </div>
        </div>
    );
};

export default ViewDetails;