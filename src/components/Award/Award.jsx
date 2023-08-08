import React from 'react';


// import award1 from '../../assets/image/award1'

const Award = () => {
    return (
        <div className='text-center py-10'>
            <h2 className='text-2xl font-semibold lg:font-bold lg:text-3xl'>OUR AWARD ACHIEVEMENTS</h2>
            <p className='px-6 my-4 text-xl'>We are honoured to recieve International acknowledment and rewards </p>
            <div className='lg:flex w-40'>
                <img className='ml-20' src={'/assets/image/award1.png'} alt="" />
                <img className='ml-20' src={'/assets/image/award4.jpg'} alt="" />
                <img className='ml-20' src={'/assets/image/award2.jpg'} alt="" />
                <img className='ml-20' src={'/assets/image/award5.png'} alt="" />
                <img className='ml-20' src={'/assets/image/award6.png'} alt="" />
            </div>
            <p></p>
        </div>
    );
};

export default Award;