import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import HotelCard from '../hotels/HotelCard';

const GetHotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        axios.get('/hotel.json')
            .then(function (res) {
                setHotels(res.data.slice(0,3))
            })
            .catch(function (err) {
                console.log(err)
            })
    }, []);
    console.log(hotels)
    return (
        <section className='py-10 bg-slate-50'>
            <div className=' max-w-6xl mx-auto'>
            <div className='text-center py-8'>
                <p className='mb-3 tracking-[2px]'>GET BEST HOTELS</p>
                <h2 className='text-4xl font-extrabold'>OUR HOTELS <span 
                className='  relative
                after:content[""] after:absolute after:w-full 
                after:h-[5px] after:left-0 after:bottom-2 after:bg-[#85cdca] after:opacity-50 '>PACKAGES</span></h2>
            </div>

            <div className='container mx-auto p-5'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                    {
                        hotels?.map((d, i) => <HotelCard key={i} data={d}  />)
                    }
                </div>
            </div>
            <div className='text-center mt-6'>
                <Link to={'/hotels'} className="inline-block border-none bg-[#003a6c] py-2 px-4 text-white font-medium rounded-lg hover:bg-[#05233d] duration-300 hover:scale-105">See More <AiOutlineArrowRight className='inline' /> </Link>
            </div>
            </div>
        </section>
    );
};

export default GetHotels;