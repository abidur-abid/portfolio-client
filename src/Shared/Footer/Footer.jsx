import React from 'react';
import developer from '../../../public/developer.gif'
import { Link } from 'react-router-dom';
import facebook from '../../../public/facebook.png'
import github from '../../../public/github.png'
import linkedin from '../../../public/linkedin.png'
import gmail from '../../../public/gmail.png'
import website from '../../../public/website.png'

const Footer = () => {
    return (
        <footer className='header-footer'>
           <div className='lg:max-w-5xl lg:mx-auto lg:p-4'>
             <img src={developer} className='w-36 h-36 mx-auto p-4 m-4' />
             <p className='lg:text-lg font-bold text-slate-700 text-center'>Copyrights 2023. All Rights Reserved. Designed By Abid</p>
             <ul className='flex justify-center items-center gap-4 m-4 p-4'>
               <Link ><img src={facebook} className='w-10 h-10 bg-white rounded-full'></img></Link>
               <Link ><img src={github} className='w-10 h-10 bg-white rounded-full'></img></Link>
               <Link ><img src={linkedin} className='w-10 h-10 bg-white rounded-full'></img></Link>
               <Link ><img src={gmail} className='w-10 h-10 bg-white rounded-full'></img></Link>
               <Link ><img src={website} className='w-10 h-10 bg-white rounded-full'></img></Link>
             </ul>
           </div>
        </footer>
    );
};

export default Footer;