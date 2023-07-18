import React from 'react';
import profile from '../../../../public/profile2.png'
import { Link } from 'react-router-dom';
import facebook from '../../../../public/facebook.png'
import github from '../../../../public/github.png'
import linkedin from '../../../../public/linkedin.png'
import gmail from '../../../../public/gmail.png'
import website from '../../../../public/website.png'



const Banner = () => {
    return (
        <section >
            <div className='flex justify-between items-center lg:max-w-5xl mx-auto p-4 m-4'>
                <div className='w-2/3'>
                    <h1 className='lg:text-5xl font-bold text p-2 m-2'>Hello_</h1>
                    <h2 className='lg:text-lg font-bold text-slate-700 p-2 m-2'>I am Abid</h2>
                    <h3 className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Junior MERN Stack Developer</h3>
                    <ul className='flex items-center gap-4 m-2 p-2'>
                    <Link ><img src={facebook} className='w-10 h-10 bg-white rounded-full'></img></Link>
                    <Link ><img src={github} className='w-10 h-10 bg-white rounded-full'></img></Link>
                    <Link ><img src={linkedin} className='w-10 h-10 bg-white rounded-full'></img></Link>
                    <Link ><img src={gmail} className='w-10 h-10 bg-white rounded-full'></img></Link>
                    <Link ><img src={website} className='w-10 h-10 bg-white rounded-full'></img></Link>
                    </ul>
                    <button className='resume-btn rounded lg:text-lg font-bold text-slate-700 p-2 m-2'>Download Resume</button>
                </div>
                <div className='w-1/3 bannder'>
                    <img src={profile} className='header-footer rounded-full p-8'/>
                </div>
            </div>
        </section>
    );
};

export default Banner;