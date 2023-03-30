import React from 'react';
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { title, description, price, img, _id } = service;
    return (
        <div className="card glass mb-5 rounded-none">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} className="" alt="car!" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="font-bold text-xl pb-3 border-b ">{title}</h2>
                <h2 className="font-medium text-2xl pb-3 border-b text-right"> {price}</h2>
                <p>
                    {
                        description.length > 100 ? description.slice(0, 100) + '...' :
                            description
                    }
                </p>
                <div className="card-actions mt-5">
                    <Link to={`/service/${_id}`}>
                        <button className="tracking-[2px] uppercase bg-[#85cdca]  py-2 px-5 text-sm rounded-full text-white">Dtails</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default ServiceCard;