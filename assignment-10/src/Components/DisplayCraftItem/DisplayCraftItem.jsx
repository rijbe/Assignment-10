import React from 'react';
import Swal from 'sweetalert2'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";


const DisplayCraftItem = ({craft, useCraft, setUseCraft}) => {
    const { name, _id, item, date, email, stock, category, price, ratting, photo, short, radio,} = craft;
    const handleDelete = (_id) =>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/craft/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                const remaining = useCraft.filter(craft => craft._id !== _id);
                setUseCraft(remaining)
                }
                
            })
          
        }
    });
           
    }
    return (
       <div className=''>
         <div className="card card-compact bg-base-100  w-96 shadow-xl rounded-lg">
            <div  data-aos="zoom-in-right">
                <img className=' rounded-t-box'
                src={photo}
                alt="photo" />
            </div>
            <div className="card-body text-white">
                <h2 className="card-title text-2xl text-center my-2 text-accent">{item}</h2>              
                <p className='text-xl my-1 '>{short}</p>
                <h4 className='flex gap-2 my-1 text-xl items-center'><BiCategory className='text-2xl text-accent' />: {category}</h4>
                <div className='flex gap-24'>
                <p className='text-xl'>Price: ${price}</p>
                <p className='flex items-center text-xl gap-1'>Ratting: {ratting}  <FaStarHalfAlt className='text-yellow-300' /></p>
                </div>
                <div className='flex justify-between gap-20'>
                    <p>StockStatus: {stock}</p>
                    <p>Customization: {radio}</p>
                </div>              
              
                
                <div className='flex gap-20 my-1'>
                <p className='flex gap-2 text-xl items-center'><FaRegUserCircle className='text-2xl text-accent' /> {name}</p>
                <p className='flex gap-2 text-xl items-center'><MdMarkEmailRead  className='text-2xl text-accent'/> {email}</p>
                </div>
                <p className='flex gap-2 text-xl items-center'><FaBusinessTime className='text-2xl text-accent' />: {date}</p>
                <div  data-aos="zoom-out-up" className="card-actions flex justify-around mt-5 ">
                    <Link to={`/view/${_id}`}><button className="btn text-gray-300 text-3xl"><FaEye /></button></Link>
                    <Link to={`update/${_id}`}><button className="btn text-green-400 text-3xl"><FaEdit /></button></Link>
                    <button className="btn text-red-500 text-3xl" onClick={()=>handleDelete(_id)}><MdAutoDelete /></button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default DisplayCraftItem;