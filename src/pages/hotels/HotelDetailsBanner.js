import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HotelDetailsBanner = ({bannerImg, name}) => {
    return (
        <div>
            <div className='text-white relative bg-gradient-to-t from-stone-900 to-slate-800  
            h-[300px] md:h-[430px]'>
                <img src={bannerImg} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay'/>
                <div className='flex flex-col justify-end max-w-6xl h-full mx-auto p-10 md:p-20'>
                 <h2 className=' font-bold mb-3 tracking-[5px] text-3xl flex items-center'>{name}</h2>
                 <p className='font-medium text-sm sm:text-lg flex'><Link to={'/'}>Home </Link>
                        <span className='inline-block'>{<AiOutlineRight className=' inline-block text-2xl ml-2 mr-2'
                        />}
                        </span> <span className='inline-block'><Link to="/hotels"> Hotels {<AiOutlineRight className='text-2xl ml-2 inline-block ' />}  </Link></span>
                        <span className='text-gray-300 ml-2'>{name}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailsBanner;