import React from 'react';
import linguacraft from '../../../../public/linguacraft.png'
import marketplace from '../../../../public/toy-marketplace.jpg'
import lumeo from '../../../../public/lumeo.jfif'

const SingleProjects = () => {
    return (
        <section className='projects'>
            
           <div className='grid grid-cols-2 gap-8 lg:max-w-5xl mx-auto p-4 m-4'>
                <div className="card w-auto project md:w-full sm:mx-auto sm:mb-2 md:p-2 md:m-2 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={linguacraft} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">LinguaCraft</h2>
                        <p className='text-justify'>Linguacraft is a language learning website Where people can find
                        different types of language courses.This website has 3 tiers of user (admin, teachers, and students) role functionality.
                        There have different dashboard features for each user.</p>
                        <div className="flex gap-4">
                        <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-Webmaker-Abid"><button className="btn button font-bold">Code Link</button></a>
                        <a href="https://summer-camp-b6866.web.app/"><button className="btn button2 font-bold">Live Website Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto project md:w-full sm:mx-auto sm:mb-2 md:p-2 md:m-2 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={marketplace} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Game Master</h2>
                        <p className='text-justify'>Game Master is a marketplace website Where sellers can sell toys. A seller can create an account to sell any kind of puzzle toy.
                        The seller can upload, delete and update his products and also he can see all the products
                        uploaded.</p>
                        <div className="flex gap-4">
                        <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Webmaker-Abid">
                            <button className="btn button font-bold">Code Link</button></a>
                        <a href="https://a-11-8bcd2.web.app/"><button className="btn button2 font-bold">Live Website Link</button></a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto project md:w-full sm:mx-auto md:p-2 md:m-2 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={lumeo} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Lumeo</h2>
                        <p className='text-justify'>Lumeo is a food recipe website. Here people can find different kinds Malaysian food recipe. For every food Recipe here has a card. If anyone click on the recipe details, people can see a well explanation about this food.</p>
                        <div className="flex gap-4">
                        <a href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-Webmaker-Abid"><button className="btn button font-bold">Code Link</button></a>
                        <a href="https://a-10-5b076.web.app/"><button className="btn button2 font-bold">Live Website Link</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProjects;