import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useLoaderData, Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData()
   
    return (
        <section className='my-10 max-w-6xl mx-auto'>
            <div className='text-center py-8'>
                <p className='mb-3 tracking-[2px]'>THE BEST CHOISE</p>
                <h2 className='text-4xl font-extrabold'>OUR <span 
                className='  relative
                after:content[""] after:absolute after:w-full 
                after:h-[5px] after:left-0 after:bottom-2 after:bg-[#85cdca] after:opacity-50 after:-z-10'>PACKAGES</span></h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5  md:grid-cols-3 p-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service} />)
                }

            </div>
            <div className='text-center mt-6'>
                <Link to={'/services'} className="inline-block border-none bg-[#003a6c] py-2 px-4 text-white font-medium rounded-lg hover:bg-[#05233d] duration-300 hover:scale-105">See More <AiOutlineArrowRight className='inline' /> </Link>
            </div>
        </section>
    );
};

export default Services;