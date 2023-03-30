import React from 'react';
import { RiEmotionSadLine } from 'react-icons/ri';

const Err404 = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='text-center'>
                <div className='text-center'>
                    <RiEmotionSadLine className='text-[100px] w-full' />
                </div>
                <h3 className='text-3xl font-medium'>Opss!</h3>
                <p className='text-2xl'>Page Not found</p>
            </div>
        </div>
    );
};

export default Err404;