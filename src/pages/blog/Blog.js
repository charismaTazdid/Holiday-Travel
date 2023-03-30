import React, { useContext } from 'react';
import useTitle from '../../shared/useTitle';
import bannerImg from '../../assets/img/blogbanner.jpg';
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { AuthContext } from '../../shared/AuthProvider';
 
const Blog = () => {
    useTitle("Blog");
    const {blogData} = useContext(AuthContext)

   

    return (
        <section >
            <div className='text-white relative bg-gradient-to-t from-stone-900 to-slate-500  
            h-[430px]'>
                <img src={bannerImg} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay'/>
                <div className='flex flex-col justify-end h-full mx-auto p-10 md:p-20'>
                 <h2 className=' font-bold mb-3 tracking-[5px] text-3xl flex items-center'>Blog</h2>
                    <p className='font-medium text-lg flex'><Link to={'/'}>Home</Link> <span className='inline-block'>{<AiOutlineRight className='text-2xl ml-2' />}</span> <span className='text-gray-300 ml-2'>Blog</span></p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-10 sm:my-20 max-w-6xl mx-auto p-7'>
                {
                    blogData && blogData.map(d => <BlogCard key={d.id} data={d} />)
                }
            </div>
        </section>
    );
};

export default Blog;