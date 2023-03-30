import React from 'react';

const HotelBanner = () => {
    const img = "https://dtora.wpengine.com/wp-content/uploads/2019/05/hotel-banner-bg.jpg"
    return (
        <div className='text-white relative bg-gradient-to-t from-stone-800 to-slate-800  
            h-[300px] md:h-[480px]'>
                <img src={img} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay'/>
                <div className='grid place-content-center h-full mx-auto p-10 md:p-20'>
                 <h2 className=' font-bold mb-3 tracking-[5px] text-2xl sm:text-3xl flex items-center text-center'>SEARCH FOR A HOTEL</h2>
                 <p className='text-center mt-3 sm:mt-5 font-medium'>Get the best deal & offers</p>
                </div>
            </div>
    );
};

export default HotelBanner;