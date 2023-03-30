import React from 'react';
import flight from "../../assets/service-short/flight.png"
import bed from "../../assets/service-short/bed.png"
import watch from "../../assets/service-short/watch.png"
import man from "../../assets/service-short/man.png"

const ServiceT = () => {
    const serviceT = [
        {
            img:flight,
            title:"FLIGHT TICKETS",
            text: "Dummy text ever since the very 1500s, when an unknown printer took."
        },
        {
            img:bed,
            title:"HOTEL RESERVATION",
            text: "A galley of type and scrambled it to make a type specimen book it to make."
        },
        {
            img:watch,
            title:"FLIGHT TICKETS",
            text: "Dummy text ever since the very 1500s, when an unknown printer took."
        },
        {
            img:man,
            title:"WALKING PARTNER",
            text: "A galley of type and scrambled it to make a type specimen book it to make"
        },
    ];
    return (
        <div className="bg-[url('https://dtora.wpengine.com/wp-content/uploads/2019/03/fullwidth-bg.jpg')] bg-cover bg-center ">
            <div className='max-w-6xl mx-auto px-5'>
                <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-10 md:py-16'>
                    {
                        serviceT.map((d,i) => <div key={i} className="p-5 hover:[&_img]:rotate-[360deg] ">
                        <div className='mb-8'>
                            <img src={d.img} alt="" className='innerImg  duration-500'/>
                        </div>
                        <h4 className='text-[#003a6c] font-bold tracking-[2px] pb-3'>
                            {d.title}
                        </h4>
                        <p style={{lineHeight: "30px"}} className=''>
                            {d.text}
                        </p>
                    </div>)
                    }
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceT;