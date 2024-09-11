import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateCraft = () => {
    const craft = useLoaderData();
    const { name, _id, item, date, email, stock, category, price, ratting, photo, short, radio,} = craft;
    const handleUpdateCraft = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const item = e.target.item.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        const stock = e.target.stock.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const ratting = e.target.ratting.value;

        const photo = e.target.photo.value;
        const short = e.target.short.value;
        const radio = e.target.radio.value; 
    
        const updateCraft = {
            name, item, date, email, stock, category, price, ratting, photo, short, radio,
        }
        console.log(updateCraft)
    
        
    fetch(`http://localhost:5000/craft/${_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify(updateCraft)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: "success",
                    title: "Successfully",
                    text: "Your craft was update successfully", 
                });
            }
        })
    }
    return (
        <div className='container mx-auto'>
        <h1 className='text-5xl text-center font-bold my-4 text-white'>Update Craft Item</h1>
        <p className='w-1/2 flex text-center mx-auto text-white'>The upgraded cotton cord is sourced from eco-friendly, sustainable materials, offering both strength and flexibility for long-lasting, beautiful creations.</p>
        <div>
            <div>
                <form onSubmit={handleUpdateCraft} className="card-body">
                    <div className='grid grid-cols-2 gap-8'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item_name</span>
                        </label>
                        <input type="text" placeholder="Enter item_name" name='item' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory_Name</span>
                        </label>
                        <input type="text" placeholder="Enter subcategory_Name" name='category' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" placeholder="Enter user name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" placeholder="Enter user email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">StockStatus</span>
                        </label>
                        <input type="text" placeholder="Enter your stockStatus" name='stock' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">processing_time</span>
                        </label>
                        <input type="datetime-local" placeholder="Enter processing_time" name='date' className="input input-bordered" required />
                        </div>
                        
                       
                    </div>
                    <div className='grid grid-cols-3 gap-10'>
                    <div className="form-control">
                        <p>Customization</p>
                        <div className='flex gap-8 my-2'>
                        Yes: <input type="radio" name="radio" value="Yes" className="radio radio-warning" defaultChecked />
                        No: <input type="radio" name="radio" value="No" className="radio radio-warning" />

                        </div>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Enter coffee price" name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                            <div>
                                <input type="text" placeholder="Enter coffee price" name='ratting' className="input input-bordered" required />
                                {/* <span className='m'>K  <Rater total={5} rating={2} /></span> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea name='short' className="textarea textarea-accent" placeholder="Enter your text"></textarea>
                   
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Add your coffee photo" className="input input-bordered" required />
                   
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">UpdateCraft</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
    );
};

export default UpdateCraft;