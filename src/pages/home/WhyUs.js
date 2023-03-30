import React from 'react';
import global from "../../assets/whyUs/globe.png"
import book from "../../assets/whyUs/book.png"
import trolly from "../../assets/whyUs/trolly.png"
import women from "../../assets/whyUs/why-us-img-new.png"

const WhyUs = () => {
    const serviceT = [
        {
            img: global,
            title: "All Around the World Tours",
            text: "Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type"
        },
        {
            img: trolly,
            title: "Private & Customized Tours",
            text: "Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type"
        },
        {
            img: book,
            title: "Immigration & Passport Help",
            text: "Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type"
        },
    ];
    return (
        <section className="bg-[url('https://dtora.wpengine.com/wp-content/uploads/2019/04/why-us-section-bg.jpg')] bg-cover bg-center py-10 md:py-20">
            <div className='max-w-6xl mx-auto px-5'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
                        <div>
                            {/* title sec  */}
                            <div className='mb-10'>
                                <div className='flex items-center mb-5'>
                                    <p className='font-bold tracking-[5px] text-2xl sm:text-3xl text-[#1a4e7b]'>WHY US</p>
                                    <div className='h-1 bg-white w-11 ml-3'></div>
                                </div>
                                <p className='text-white'>We Make All The process easy</p>
                            </div>

                            <div>
                                {
                                    serviceT.map((d, i) => <div key={i} className="p-5 flex">
                                        <div className='mb-8 w-36'>
                                            <img src={d.img} alt="" />
                                        </div>
                                        <div className='px-4'>
                                            <h4 className='text-[#003a6c] text-xl font-bold pb-3'>
                                                {d.title}
                                            </h4>
                                            <p style={{ lineHeight: "30px" }} className='text-white'>
                                                {d.text}
                                            </p>
                                        </div>
                                    </div>)
                                }
                            </div>

                        </div>

                        <div className='z-10 aniwhy'>
                            <div className='px-4 relative'>
                                <div className='
                                after:animate-[my_1s_ease-in-out_infinite_alternate_running]  after:w-[80%] after:mt-[20%] after:border-[15px]  after:-z-10 after:absolute  after:h-[75%] after:top-0 after:left-0 after:ml-[10%]'>
                                </div>
                                    <img src={women} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;