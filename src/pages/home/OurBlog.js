import React, { useContext } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/AuthProvider';
import BlogCard from '../blog/BlogCard';

const OurBlog = () => {
    const {blogData} = useContext(AuthContext);
    const blog3 = blogData.slice(0,3);
    return (
        <div className='my-16'>
            <div className='text-center mb-5'>
                <p className='mb-3 tracking-[2px]'>SHARE YOUR JURNEY</p>
                <h2 className='text-4xl font-extrabold'>OUR <span 
                className='  relative
                after:content[""] after:absolute after:w-full 
                after:h-[5px] after:left-0 after:bottom-2 after:bg-[#85cdca] after:opacity-50 after:-z-10'>BLOGS</span></h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto p-7'>
                {
                    blog3?.map(d => <BlogCard key={d.id} data={d} />)
                }
            </div>
            <div className='text-center mt-6'>
                <Link to={'/blog'} className="inline-block border-none bg-[#003a6c] py-2 px-4 text-white font-medium rounded-lg hover:bg-[#05233d] duration-300 hover:scale-105">See More <AiOutlineArrowRight className='inline' /> </Link>
            </div>
        </div>
    );
};

export default OurBlog;