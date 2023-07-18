import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../../public/home.png'
import pencil from '../../../public/pencil.png'
import management from '../../../public/management.png'
import blog from '../../../public/blog.png'
import support from '../../../public/support.png'
import logo from '../../../public/logo.png'
import about from '../../../public/about.png'


const Header = () => {
    return (
        <header className='header-footer m-0 sticky'>
           <div className='lg:flex lg:justify-between lg:max-w-5xl lg:mx-auto lg:p-4'>
            <div className='my-auto w-1/3'>
                <Link className='lg:text-4xl font-bold text-slate-700'><img src={logo} className='w-auto h-auto'></img></Link>
            </div>
            <div className='w-2/3'>
                <ul className='lg:flex lg:justify-between my-auto py-3'>
                    <div className='flex gap-1 justify-center items-center'>
                    <img src={home} className='w-5 h-5'></img>
                    <Link className='lg:text-lg font-bold text-slate-700'> Home</Link>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                    <img src={about} className='w-5 h-5'></img>
                    <Link to='/about' className='lg:text-lg font-bold text-slate-700'> About Me</Link>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                    <img src={pencil} className='w-5 h-5'></img>
                    <Link to='/skills' className='lg:text-lg font-bold text-slate-700'> Skills</Link>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                    <img src={management} className='w-5 h-5'></img>
                    <Link to='/projects' className='lg:text-lg font-bold text-slate-700'> Projects</Link>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                    <img src={blog} className='w-5 h-5'></img>
                    <Link to='/blogs' className='lg:text-lg font-bold text-slate-700'> Blogs</Link>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                    <img src={support} className='w-5 h-5'></img>
                    <Link to='/contact' className='lg:text-lg font-bold text-slate-700'> Contact</Link>
                    </div>
                </ul>
            </div>
           </div>
        </header>
    );
};

export default Header;