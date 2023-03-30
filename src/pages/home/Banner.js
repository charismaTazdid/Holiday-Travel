import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/img/header-03.jpg" 

const Banner = () => {
    return (

        <div className='h-screen relative bg-gradient-to-b from-stone-800 to-slate-500'>
            <img src={bannerImg} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay' />
            <div className='grid place-items-center h-full text-center'>
                <div className='max-w-2xl px-7 lg:px-10 '>
                    <h2 style={{ 'lineHeight': '1.5' }} className='text-white font-bold text-5xl md:text-7xl'><span className='text-transparent bg-clip-text bg-gradient-to-l from-cyan-600 to-teal-500'>LOVE</span> & Travel</h2>
                    <p style={{ lineHeight: "32px" }} className=' tracking-[2px] uppercase opacity-90 py-3 text-white text-xs sm:text-sm'>Good idea and Good Person make your life easy. so, Discussion with me and take Right decission from me. </p>

                    <Link to="/services"
                        className='inline-block text-white bg-gradient-to-l to-teal-600 from-teal-500 px-8 py-3 lett rounded-full mt-4 duration-300 font-medium animate-bounce'>BOOK NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;