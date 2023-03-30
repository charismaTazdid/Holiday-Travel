import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../shared/useTitle';
import ServiceCard from '../home/ServiceCard';

const Allservices = () => {
    useTitle("Services")
    const services = useLoaderData();
  
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-8  md:grid-cols-3 p-3'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service} />)
            }
        </div>
    );
};

export default Allservices;