import React from 'react';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const { banner, cardImg, date, description1, description2, description3, description4, description5, react, title, view, travelBestImg, author } = data.find(d => d.id === parseInt(id));
    // console.log(details)
    return (
        <section >
            <div className='text-white relative bg-gradient-to-t from-black to-slate-500  
            h-[430px]'>
                <img src={banner} alt="/" className='absolute h-full w-full object-cover mix-blend-overlay' />
                <div className='flex flex-col justify-end h-full mx-auto p-10 md:p-20'>
                    <h2 className=' font-bold mb-3 tracking-[5px] text-3xl flex items-center'>Blog</h2>
                    <p className='font-medium text-sm sm:text-lg flex'><Link to={'/'}>Home </Link>
                        <span className='inline-block'>{<AiOutlineRight className=' inline-block text-2xl ml-2 mr-2'
                        />}
                        </span> <span className='inline-block'><Link to="/blog"> Blog {<AiOutlineRight className='text-2xl ml-2 inline-block ' />}  </Link></span>
                        <span className='text-gray-300 ml-2'>{title}</span>
                    </p>
                </div>
            </div>
            <div className='max-w-4xl mx-auto p-5 lg:p-0 my-10'>
                <div>
                    <img src={cardImg} alt="" className='mb-5'/>
                </div>
                <div className='flex items-center mb-5'>
                    <div className='flex'>
                        <MdOutlineDateRange className='mr-2' />
                        <span className='text-sm mr-3'>{date}</span>
                    </div>
                    <div className='flex'>
                        <FiMessageCircle className='mr-2' />
                        <span className='text-sm mr-3'> 0</span>
                    </div>
                    <div className='flex'>
                        <AiFillHeart className='mr-2' />
                        <span className='text-sm mr-3'> {react}</span>
                    </div>
                    <div className='flex'>
                        <FaEye className='mx-2' />
                        <span className='text-sm'> {view}</span>
                    </div>
                </div>
                <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description1}</p>
                <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description2}</p>

                <div className='md:grid grid-cols-6 mb-8'>
                    <div className='col-span-2'><img src={travelBestImg} className="h-72 mx-auto mb-5" alt="" /></div>
                    <div className='col-span-4 ml-5 '>
                        <h3 className='text-xl mb-5 font-semibold text-black'>Getting the best of Travel</h3>
                        <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description3}</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description4}</p>
                    <p style={{ lineHeight: "30px" }} className='mb-8 font-poppins text-justify'>{description5}</p>
                </div>

                {/* Author Details  */}
                <div className='relative my-10 mb-20'>
                    <hr />
                    <div className='absolute -top-14 left-[44%] '>
                        <img src={author.authorImg} alt="" className='w-28 h-28 ring-8 ring-white rounded-full object-cover
                        ' />
                    </div>
                    <div className='text-center mt-20'>
                        <p className='text-sm tracking-[1.5px] text-[#003a6c] font-semibold'>AUTHOR</p>
                        <p className='text-2xl font-semibold mb-8'>{author.name}</p>
                        <p style={{ lineHeight: "30px" }} className='mb-10 text-sm font-poppins text-center'>{author.authorDescription}</p>
                        <hr />
                    </div>
                </div>

                {/* Leave a commet part  */}
                <div>
                    <div className='relative'>
                        <p className=' before:top-1/2 before:-z-10 before:absolute before:h-[1px] before:w-[35%] before:left-0 before:bg-slate-300 
                        after:top-1/2 after:-z-10 after:absolute after:h-[1px] after:w-[35%] after:right-0 after:bg-slate-300
                        text-center font-semibold text-2xl uppercase text-black tracking-[1px]'>Leave a Comment</p>

                    </div>
                    <form>
                        <div className='mt-10 mb-8'>
                            <p className='mb-3'>Your email address will not be published.</p>
                            <p>Required fields are marked *</p>
                        </div>
                        <div className='mb-8'>
                            <p className='mb-4'>Comment <span className='text-red-600'> *</span> </p>
                            <textarea rows={5} className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3 resize-none' required></textarea>
                        </div>
                        <div className='mb-8'>
                            <p className='mb-4'>Name<span className='text-red-600'> *</span> </p>
                            <input type="text" className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3' required/>
                        </div>
                        <div className='mb-8'>
                            <p className='mb-4'>Email<span className='text-red-600'> *</span> </p>
                            <input type="email" className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3' required />
                        </div>
                        <div className='mb-8'>
                            <p className='mb-4'>Website </p>
                            <input type="text" className='outline outline-gray-200 outline-1 p-5 focus:outline-gray-200 focus:bg-[#f2f2f2] duration-300 w-full py-3' />
                        </div>
                        <input type="submit" value="POST COMMENT" className='bg-[#01abff] py-3 px-5 text-white tracking-widest' />
                    </form>
                </div>

            </div>
        </section>
    );
};

export default BlogDetails;