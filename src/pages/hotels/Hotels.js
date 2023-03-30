import { useEffect, useState } from 'react';
import axios from 'axios';
import HotelBanner from './HotelBanner';
import HotelCard from './HotelCard';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        axios.get('/hotel.json')
            .then(function (res) {
                setHotels(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }, [])
    return (
        <section>
            <div>
                <HotelBanner />
            </div>
            <div className='max-w-2xl mx-auto my-10 md:mt-20'>
                <div className='flex justify-center items-center'>
                    <div className='h-1 bg-yellow-400 w-11 mr-3'></div>
                    <p className=' font-bold tracking-[5px] text-2xl sm:text-3xl text-center text-[#1a4e7b]'>POPULAR HOTELS</p>
                    <div className='h-1 bg-yellow-400 w-11 ml-3'></div>
                </div>
                <p className='leading-8 text-center mt-5'>Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='container mx-auto p-5'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                    {
                        hotels?.map((d, i) => <HotelCard key={i} data={d} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Hotels;