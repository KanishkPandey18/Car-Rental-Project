import React, { useState } from 'react'
import Title from '../../Components/owner/Title'
import { assets } from '../../assets/assets';

const AddCar = () => {

    const currency = import.meta.env.VITE_CURRENCY
    const [image,setImage]=useState(null);
    const [car,setCar] = useState({
        brand:'',
        model:'',
        year:0,
        pricePerDay:0,
        category:'',
        transmission:'', 
        fuel_type:'',
        seating_capacity:'',
        location: '',
        description:'',
    });

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
    }
    return (
        <div className='px-4 pt-10 md:px-10 flex-1'>
            <Title title='Add New Car' subTitle='Fill in the detail to list a new car for booking, including pricing, availability and car specifications.'/>

            <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
                {/* Car Image */}
                <div className='flex items-center gap-2 w-full'>
                    <label htmlFor="car-image" className='text-gray-500'>
                        <img src={image? URL.createObjectURL(image):assets.upload_icon}alt="" className='h-14 rounded-md cursor-pointer'/>
                        <input type="file" name="" id="car-image" hidden accept='image/*' onChange={(e)=>(setImage(e.target.files[0]))}/>
                    </label>
                    <p className='text-sm'>Upload a picture of your car</p>
                </div>

                {/* Car Brand and model */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Brand</label>
                        <input type="text" placeholder='e.g. BMW, Mercedes, Audi...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md' value={car.brand} onChange={(e)=>setCar({...car,brand:e.target.value})}/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Model</label>
                        <input type="text" placeholder='e.g. X5, E-class, M4...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md' value={car.model} onChange={(e)=>setCar({...car,model:e.target.value})}/>
                    </div>
                </div>

                {/* Car year,price,category */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Car Year</label>
                        <input type="number" placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md' value={car.year} onChange={(e)=>setCar({...car,year:e.target.value})}/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Price ({currency})</label>
                        <input type="number" placeholder="249" required className='px-3 py-2 mt-1 border border-borderColor rounded-md' value={car.pricePerDay} onChange={(e)=>setCar({...car,pricePerDay:e.target.value})}/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Category</label>
                        <select name="" id="" className='px-3 py-2 mt-1 border border-borderColor rounded-md' onChange={(e)=>setCar({...car,category:e.target.value})} value={car.category}>
                            <option value="">Select a category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                </div>

                {/* car transmission, fuel_type, seating capacity */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Transmission</label>
                        <select name="" id="" className='px-3 py-2 mt-1 border border-borderColor rounded-md' onChange={(e)=>setCar({...car,transmission:e.target.value})} value={car.transmission}>
                            <option value="">Select a Transmission</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Semi-Automatic">Semi-Automatic</option>
                            <option value="Manual">Manual</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Fuel Type</label>
                        <select name="" id="" className='px-3 py-2 mt-1 border border-borderColor rounded-md' onChange={(e)=>setCar({...car,fuel_type:e.target.value})} value={car.fuel_type}>
                            <option value="">Select Fuel Type</option>
                            <option value="PetrolDeisel">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Gas">Gas</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Seating Capacity </label>
                        <input type="number" placeholder="2,3..." required className='px-3 py-2 mt-1 border border-borderColor rounded-md' value={car.seating_capacity} onChange={(e)=>setCar({...car,seating_capacity:e.target.value})}/>
                    </div>
                </div>

                {/* car location */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="">Location</label>
                        <select name="" id="" className='px-3 py-2 mt-1 border border-borderColor rounded-md' onChange={(e)=>setCar({...car,fuel_type:e.target.value})} value={car.fuel_type}>
                            <option value="">Select a location</option>
                            <option value="New York">New York</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Houston">Houston</option>
                            <option value="Chicago">Chicago</option>
                        </select>
                </div>

                {/* car description */}
                <div className='flex flex-col w-full'>
                    <label htmlFor="">Description</label>
                    <textarea rows={5} placeholder='e.g. A luxurious SUV with a spacious interior and a powerfull engine.' className='px-3 py-2 mt-1 border border-borderColor rounded-md' required value={car.description} onChange={(e)=>setCar({...car,description:e.target.value})}></textarea>
                </div>

                <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary/90 text-white rounded-md font-medium w-max cursor-pointer hover:bg-primary'>
                    <img src={assets.tick_icon} alt="" />
                    List Your Car
                </button>
            </form>
        </div>
    )
}

export default AddCar
