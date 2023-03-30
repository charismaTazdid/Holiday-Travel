import React from 'react';

const State = () => {
    return (
        <div className='bg-stone-100 mb-3 py-10'>
            <div className='text-4xl font-semibold text-center mb-4'>
                Our service Quality Rating
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center">

                <div className="stat">
                    <div className="stat-title">Insurence client</div>
                    <div className="stat-value">160+</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Delevery Total</div>
                    <div className="stat-value">90+</div>
                </div>

                <div className="stat">
                    <div className="stat-title">India tour visa</div>
                    <div className="stat-value">15+ </div>
                </div>

            </div>
        </div>
    );
};

export default State;