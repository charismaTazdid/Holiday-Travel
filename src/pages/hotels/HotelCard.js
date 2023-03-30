import React, { useEffect } from 'react';
import { GoLocation } from 'react-icons/go';
import { FaRegUserCircle } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import AOS from "aos";

const HotelCard = ({ data,aosAnimate }) => {
    const { name, img, price, capacity, ratings, street,id } = data;
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
       }, []);

    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
            <div className='[&_.imgClass]:hover:scale-105 mb-5  overflow-hidden' >
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className="imgClass duration-300 cursor-pointer" alt="car!" />
                    </PhotoView>
                </PhotoProvider>
                <div className='h-48 bg-white border border-gray-100 hover:shadow-lg duration-500 text-sm'>
                    <div className=' my-auto grid grid-cols-5'>
                        <div className='col-span-3 px-5 my-3 border-r-[0.8px] border-gray-200'>
                            <p className='text-xl  font-semibold '>{name}</p>
                            <p className='flex gap-3 mt-5'> <GoLocation />{street}</p>
                        </div>
                        <div className='col-span-2 px-5 my-3  text-center'>
                            <p className='text-2xl text-blue-400 font-bold mr-2 lg:mr-0 inline-block lg:block'>${price}</p>
                            <p className='inline-block lg:block'>/night</p>
                            <p className='flex items-center my-2'><FaRegUserCircle className='mr-1' />{capacity} Persons</p>
                            <p className='flex items-center gap-2'><BsFillStarFill className='text-yellow-400' />{ratings}</p>
                        </div>
                        
                    <div className='px-5 mt-6'>
                    <Link to={`/hotels/${id}`} className='mt-2 mb-8 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500 tracking-[2px] text-xs'>DETAILS</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;