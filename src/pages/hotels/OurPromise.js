import React from 'react';
import { GiPlainSquare } from 'react-icons/gi';

const OurPromise = ({title, text}) => {
    return (
        <div>
            <p className='text-[#003a6c] font-bold'><span><GiPlainSquare className='inline-block text-xs mr-3 rotate-45 text-[#01abff]' /></span> {title}</p>
            <p className='py-4 border-l-2 ml-1.5 my-2 pl-6 border-[#003a6c]'>{text}
            </p>
        </div>
    );
};

export default OurPromise;