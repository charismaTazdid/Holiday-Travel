import { useForm } from '@formspree/react';
import React from 'react';
import { toast } from 'react-hot-toast';
import { BiUser } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineMessage } from 'react-icons/md';

const Contact = () => {
    const [state, handleSubmit] = useForm("mlevqzgg");

    if (state.succeeded) {
        toast.success("Message send sucessful")
    }

    return (
        <div id="contact" className='py-10  px-5 bg-[url("https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=b72JkIvEEmhF2XQyyb6F3bjD-Qsf8BNC13egb7isk6M=")] bg-cover object-fit bg-fixed'>
            <div className=' max-w-4xl mx-auto bg-slate-50 bg-opacity-80 shadow-xl'>
                <div className='my-10 p-7 max-w-4xl mx-auto'>
                    
                <h2 className='text-[#003a6c] text-2xl mb-8 font-semibold'>Leave Us a Message</h2>
                    <form className='' onSubmit={handleSubmit}>
                        <div className='bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                            <BiUser className='mr-2 text-xl inline-block' />
                            <input type="text" placeholder='Name' className='bg-transparent outline-none' name="name" required/>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-5'>
                            <div className='bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                                <IoIosCall className='mr-2 text-xl inline-block' />
                                <input type="number" placeholder='Phone' className='bg-transparent outline-none' name="number" />
                            </div>
                            <div className='bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                                <MdEmail className='mr-2 text-xl inline-block' />
                                <input type="email" placeholder='Email' className='bg-transparent outline-none' name="email" required/>
                            </div>
                        </div>
                        <div className='relative bg-[#e3f1f8] p-5 border-b-4 border-[#96daec] mb-8'>
                            <MdOutlineMessage className='mr-2 text-xl inline-block absolute top-6' />
                            <textarea placeholder='Message' rows={5} className=' w-full ml-8 bg-transparent outline-none' name="message" required></textarea>
                        </div>
                        <input type="submit" value="SUBMIT" className='bg-[#0072b5] w-full py-4 px-8 cursor-pointer tracking-[2px] text-white hover:bg-[#003a6c] duration-300 mb-8'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;