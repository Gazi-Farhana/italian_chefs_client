import React from 'react';

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="assets/image/logo.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">ABOUT US</h1>
                    <p className="py-6 text-xl">Lé Lugano Cucine Italiana is a renowned chef group specializing in authentic Italian cuisine. With our dedication to quality ingredients and expert culinary techniques, we offer a delectable dining experience for any occasion. Our doors are always open, as we proudly serve our customers 24/7.</p>
                    <button className="btn bg-stone-600">Keep in touch</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;