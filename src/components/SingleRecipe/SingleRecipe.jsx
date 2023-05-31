import { Rating } from '@mui/material';
import React from 'react';
import { toast } from 'react-hot-toast';

const SingleRecipe = ({ recipe }) => {

    const { name, origin, description, img_url, ingredients, method, ratings } = recipe;

    const handleFavoriteButton = (event) => {
        event.target.setAttribute("disabled", true);
        toast.success(`${name} is added`)
    }

    return (
        <div className='my-4'>
            <div className="card card-side bg-base-100 shadow-xl flex justify-between gap-6">
                <div className="avatar">
                    <div className="rounded w-52">
                        <img src={img_url} />
                    </div>
                </div>
                <div className='px-10 py-6'>
                    <div className='flex gap-6'>
                    <h2 className="card-title">{name}</h2>
                    <button onClick={handleFavoriteButton} className='btn'>favorite</button>
                    </div>
                    <div className="card-body">

                        <p>{description}</p>
                        <p>Origin: {origin}</p>
                        <Rating name="half-rating-read" defaultValue={ratings} precision={0.5} readOnly />
                        <p><span className='font-semibold'>Ingredients:</span> {ingredients.map(ing => ing).join(', ')}</p>
                    </div>
                    <p>
                    {method}
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;