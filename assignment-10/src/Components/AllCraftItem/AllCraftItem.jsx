import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCraftItem from '../DisplayCraftItem/DisplayCraftItem';

const AllCraftItem = () => {
    const allCraft = useLoaderData();
    const [useCraft, setUseCraft] = useState(allCraft);
    console.log(allCraft)
    return (
        <div>
            <h1>All Craft Data: {allCraft.length}</h1>
            
          <div className='grid grid-cols-1  md:grid-cols-3 gap-12 container mx-auto'>
            {
               allCraft.map(craft => <DisplayCraftItem 
                key={craft._id}
                 craft={craft}
                 useCraft = {useCraft}
                 setUseCraft = {setUseCraft}
                 >

                 </DisplayCraftItem>)
            }
          </div>
            
        </div>
    );
};

export default AllCraftItem;