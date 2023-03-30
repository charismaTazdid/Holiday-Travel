import React from 'react';
import img from '../../assets/img/banner1.jpg';
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='grid text-center  md:grid-cols-2 md:text-left gap-5 items-center my-5 p-3'>
            <div>
                <img src={img} className="rounded-lg h-full" alt="" />
            </div>
            <div className=''>
                <h2 className='text-3xl font-bold'>About Our Services</h2>
                <div>
                    <p className='leading-8 text-lg py-3'>
                        we always try to give best service Every Coustomer. And it is a good New for everyone and we that Most of the client is seticfied for our Services. its our pleaser</p>

                </div>
                <Link to={'/services'} className='inline-block m-2  bg-indigo-500 p-3 rounded-full duration-300 text-white font-semibold hover:text-white hover:bg-red-400'> Get Our Services</Link>
            </div>
        </div>
    );
};

export default About;