import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import LazyLoad from 'react-lazyload';

const Recipe = () => {
    const chef = useLoaderData();
    const { name, years_of_experience, description, likes, recipes, chef_img_url,number_of_recipes } = chef;

    return (
        <div className=''>
            <div className="bg-stone-400">
                <div className="hero-content border-none flex-col lg:flex-row mx-auto max-w-7xl">
                    <div className="avatar">
                        <LazyLoad className="rounded-full" height={400} offset={100}>
                            <img src={chef_img_url} />
                        </LazyLoad>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">
                            {description}
                        </p>
                        <p> <span className='font-bold'>Years of experience: </span>{years_of_experience}</p>
                        <p> <span className='font-bold'>Likes: </span> {likes}+</p>
                        <p> <span className='font-bold'>Recipes: </span>{number_of_recipes}+</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center flex-col mx-auto max-w-7xl'>
                {recipes.map((recipe, index) => <SingleRecipe key={index} recipe={recipe}></SingleRecipe>)}
            </div>
        </div>
    );
};

export default Recipe;