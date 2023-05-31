/* eslint-disable no-unused-vars */
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, name, years_of_experience, likes, recipes, chef_img_url, number_of_recipes } = chef;
    console.log(chef_img_url);

    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl my-4">
                <div className="avatar" height={400} offset={100}>
                    <LazyLoad className="rounded">
                        <img src={chef_img_url} />
                    </LazyLoad>
                </div>
                <div className="card-body">
                    <h2 className="card-title lg:text-3xl lg:font-bold">{name}</h2>
                    <p><span className='font-bold'>Years of experience: </span> {years_of_experience}</p>
                    <p><span className='font-bold'>Likes: </span>{likes}+</p>
                    <p><span className='font-bold'>Recipes: </span> {number_of_recipes}+</p>
                    <div className="card-actions justify-end">
                        <Link to={`/chef/${id}`} className="btn bg-stone-600">View Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;