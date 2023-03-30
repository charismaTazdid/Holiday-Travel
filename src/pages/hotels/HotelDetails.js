import React, { useContext } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { ImShare2 } from 'react-icons/im';
import { FcRating } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import HotelDetailsBanner from './HotelDetailsBanner';
import OurPromise from './OurPromise';
import facilities1 from "../../assets/facilities-icon/fac-img1.png"
import facilities2 from "../../assets/facilities-icon/fac-img2.png"
import facilities3 from "../../assets/facilities-icon/fac-img3.png"
import facilities4 from "../../assets/facilities-icon/fac-img4.png"
import facilities5 from "../../assets/facilities-icon/fac-img5.png"
import facilities6 from "../../assets/facilities-icon/fac-img6.png"
import { AuthContext } from '../../shared/AuthProvider';
import { useParams } from 'react-router-dom';

const HotelDetails = () => {
    const {hotels} = useContext(AuthContext);
    const { id } = useParams();
    const detailsData = hotels.find(d => d.id === parseInt(id));
    const {name, banner, bannerSlid, ratings, locate, price, street, des} = detailsData;

    const data = {
        "id": 9,
        "name": "Single Room",
        "img": "https://dtora.wpengine.com/wp-content/uploads/2019/03/room-1-750x500.jpg",
        "banner": "https://dtora.wpengine.com/wp-content/uploads/2019/05/breadcrumb-bg3.jpg",
        "bannerSlid": ["https://dtora.wpengine.com/wp-content/uploads/2019/03/room-6-1000x1000.jpg?1678030121638", "https://dtora.wpengine.com/wp-content/uploads/2019/03/room-9-1000x1000.jpg?1678030131398", "https://dtora.wpengine.com/wp-content/uploads/2019/03/room-2-1000x1000.jpg?1678030118235"],
        "capacity": "1",
        "ratings": "4.09",
        "locate": "France",
        "price": "17.5",
        "street": "8127 Myrtle Street, Muncie, IN 47302",
        "des": "Vivamus lectus turpis, consectetur at fermentum a, consectetur quis orci. Donec porta lorem vitae elit iaculis facilisis. Donec turpis nulla, porttitor sit amet placerat aliquam, ullamcorper in erat. Pellentesque eget tempor mi. Proin vehicula mi sed lorem lacinia, ac tincidunt dolor efficitur. Proin metus mi, rhoncus non purus nec, fringilla ullamcorper orci. Pellentesque in purus nulla. Suspendisse pulvinar nibh vel turpis sodales molestie. Quisque ipsum risus, facilisis nec venenatis sit amet, consectetur et lorem. Curabitur quis volutpat felis, sed varius enim. Pellentesque faucibus turpis vel enim imperdiet gravida. Phasellus nec odio vulputate, interdum lorem a, feugiat libero. Aliquam convallis in est vel posuere. Etiam vitae bibendum tellus. Fusce ullamcorper lectus scelerisque orci interdum maximus. Pellentesque placerat egestas ante in laoreet.",
        "facility": [
            {
                "title": "FULLY FURNISHED",
                "des": "With LED TV’s & Sofas"
            },
            {
                "title": "CUSTOM FOOD",
                "des": "Free Morning Breakfast"
            },
            {
                "title": "MODERN BATHROOM",
                "des": "Enjoy your world as you like"
            },
            {
                "title": "FREE WI-FI OPTION",
                "des": "Enjoy your world as you like"
            },
            {
                "title": "SWIMMIN POOL ACCESS",
                "des": "Full Day time access"
            },
            {
                "title": "FREE LOCAL COMMUTE",
                "des": "Enjoy your world as you like"
            }
        ]
    }

    const facilitiesData = [
        {
            img: facilities1,
            title: "CUSTOM FOOD",
            text: "Free Morning Breakfast"
        },
        {
            img: facilities2,
            title: "FULLY FURNISHED",
            text: "With LED TV’s & Sofas"
        },
        {
            img: facilities3,
            title: "MODERN BATHROOM",
            text: "Enjoy your world as you like"
        },
        {
            img: facilities4,
            title: "FREE WI-FI OPTION",
            text: "Enjoy your world as you like"
        },
        {
            img: facilities5,
            title: "SWIMMIN POOL ACCESS",
            text: "Full Day time access"
        },
        {
            img: facilities6,
            title: "FREE LOCAL COMMUTE",
            text: "Enjoy your world as you like"
        },
    ];

    return (
        <div>
            <HotelDetailsBanner bannerImg={banner} name={name} />
            <div className='max-w-6xl mx-auto'>
                <div className=' container mx-auto'>
                    <PhotoProvider
                        speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                    >
                        {bannerSlid.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                {index < 1 ? <img src={item} alt="" className="imgClass cursor-pointer duration-300 w-full max-h-[450px] my-7 object-cover" /> : undefined}
                            </PhotoView>
                        ))}
                    </PhotoProvider>
                    <div className='flex justify-between items-end p-3 sm:p-0'>
                        <div>
                            <div>
                                <h1 className='text-2xl text-[#003a6c] font-bold mb-3'>{name} <span className='text-base font-normal'> {locate}</span></h1>

                            </div>
                            <div className='flex items-end mb-2'>
                                <p className='mr-3'>from</p>
                                <p className='text-[#01abff] text-2xl font-bold mr-3'>${price}</p>
                                <p className='mr-3'>/ night</p>
                                <p ><FcRating className='inline-block' /> {ratings}</p>
                            </div>
                            <p > <GoLocation className='inline-block' /> {street}</p>
                        </div>
                        <div className='flex items-center text-lg'>
                            <p className='border-r-2 px-2'><AiOutlineHeart className='inline-block' /> <span>2</span></p>
                            <p className='px-2'><ImShare2 className='mr-1' /></p>
                        </div>
                    </div>
                    <hr className='my-8 ' />
                    <p style={{ lineHeight: "30px" }} className='mb-8 text-justify  p-3 sm:p-0'>{des}</p>

                    <div className='px-7 mb-8'>
                        <OurPromise title={"The best of all the Goodness"} text={"Not to get ot only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"} />
                        <OurPromise title={"Hospatility like your home"} text={"Making the best it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                        <OurPromise title={"The best of all the Goodness"} text={"We are making the It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} />
                    </div>

                    {/* Our Facilities part  */}
                    <div className=' p-3 sm:p-0'>
                        <div className='flex items-center my-10 md:my-16'>
                            <p className='font-bold tracking-[5px] text-2xl sm:text-3xl text-[#1a4e7b]'>OUR FACILITIES</p>
                            <div className='h-1 bg-yellow-400 w-11 ml-3'></div>
                        </div>
                        <div className='grid md:grid-cols-2 [&>div]:border-b [&>div]:border-gray-200 md:[&>*:nth-child(odd)]:border-r [&>*:nth-child(odd)]:border-gray-200 
                    md:[&>*:nth-child(5)]:border-b-0 md:[&>*:nth-child(6)]:border-b-0 mb-10 md:mb-16'>
                            {
                                facilitiesData.map((d, i) => <div key={i} className="py-7 px-5 flex gap-5">
                                    <div className=''><img src={d.img} alt="" /></div>
                                    <div>
                                        <h4 className='text-[#003a6c] font-bold tracking-[2px] mb-1'>{d.title}</h4>
                                        <p className=''>{d.text}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    {/* Leave a commet part  */}
                    <div className='mb-10 md:mb-16 p-3 sm:p-0'>
                    <div className='flex items-center'>
                            <p className='font-bold tracking-[5px] text-2xl sm:text-3xl text-[#1a4e7b]'>OUR REVIEWS</p>
                            <div className='h-1 bg-yellow-400 w-11 ml-3'></div>
                        </div>
                        <form>
                            <div className='mt-10 mb-8'>
                                <p className='mb-3'>Your email address will not be published.</p>
                                <p>Required fields are marked *</p>
                            </div>
                            <div className='mb-8'>
                                <p className='mb-4'>Your Review <span className='text-red-600'> *</span> </p>
                                <textarea rows={5} className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3 resize-none' required></textarea>
                            </div>
                            <div className='sm:grid grid-cols-2 gap-5'>
                            <div className='mb-8'>
                                <p className='mb-4'>Name<span className='text-red-600'> *</span> </p>
                                <input type="text" className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3' required />
                            </div>
                            <div className='mb-8'>
                                <p className='mb-4'>Email<span className='text-red-600'> *</span> </p>
                                <input type="email" className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3' required />
                            </div>
                            </div>
                            <input type="submit" value="SUBMIT" className='bg-[#01abff] py-3 px-5 text-white tracking-widest' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;