import React from 'react';


const Banner = () => {
    return (

        <div className=' text-center' style={{
            backgroundImage: `url("assets/image/banner-night.jpg")`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}>
            <div className='pt-52 bg-gradient-to-t from-black min-h-screen'>

                <h1 className='lg:text-6xl text-xl text-neutral-300 font-bold'>WELCOME TO OUR
                    <br />
                    LUXURY RESTAURANT
                </h1>
                <p className='lg:text-2xl font bold text-neutral-300'>
                    It’s the story of an everlasting love affair, Dieter Delicioz and the Lugano Lake.
                    <br />
                    We serve experience, quality & hermony since 1995.
                </p>
            </div>

        </div>
    );
};

export default Banner;