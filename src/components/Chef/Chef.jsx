
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {

    const chefs = useLoaderData();

    return (
        <div>
            <div className='py-10 px-4'>
                <h2 className="text-3xl font-bold text-center">MEET OUR WORLD CLASS CHEFS</h2>
                <p className='mb-4 px-6 text-xl'>Our restaurant chefs are masters of their craft, using fresh, locally-sourced ingredients to create delectable dishes. Each dish is a masterpiece crafted with passion and precision, from savory steaks to succulent seafood. Join us for an unforgettable dining experience that celebrates the art of gastronomy.
                </p>
                
                <div className='lg:grid grid-cols-3 mx-4'>
                    {chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
                </div>
            </div>
            
        </div>
    );
};

export default Chef;