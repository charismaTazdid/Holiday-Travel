import React from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineDateRange} from "react-icons/md"

const BlogCard = ({data}) => {
    const {cardImg, date,title, description3,id } = data;
    return (
        <div>
            <div className='[&_.imgClass]:hover:scale-105 mb-5'>
                    <div className='overflow-hidden'>
                        <img src={cardImg} alt={""} className="imgClass h-56 w-full object-cover mb-5 duration-300" />
                    </div>
                    <div className='flex items-center mb-5'>
                        <MdOutlineDateRange className='mr-2' />
                        <span className='text-sm'>{date}</span>
                    </div>
                    <Link className='inline-block text-xl font-semibold mb-6 text-black'>{title}</Link>
                    <p style={{lineHeight: "30px"}} className='mb-8 opacity-80'>
                        {description3.slice(0, 120)}...</p>
                    <Link to={`/blog/${id}`} className='mt-2 mb-8 px-3 py-2 bg-slate-300 text-[#003a6c] hover:bg-[#0b3962] hover:text-white duration-500 tracking-[2px] text-xs'>READ MORE +</Link>
                </div>
        </div>
    );
};

export default BlogCard;