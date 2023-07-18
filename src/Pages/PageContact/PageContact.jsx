import React from 'react';
import contact from '../../../public/contact.png'
import { Link } from 'react-router-dom';
import facebook from '../../../public/facebook.png'
import github from '../../../public/github.png'
import linkedin from '../../../public/linkedin.png'
import gmail from '../../../public/gmail.png'
import website from '../../../public/website.png'
import Contact from '../Home/Contact/Contact';

const PageContact = () => {
    return (
        <section>
            <div className='max-w-5xl mx-auto p-4 m-4'>
                <div className='w-full'>
                    <img src={contact} className='mx-auto' />
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-4 m-4 p-4'>
                        <Link ><img src={facebook} className='w-10 h-10 bg-white rounded-full'></img></Link>
                        <Link ><img src={github} className='w-10 h-10 bg-white rounded-full'></img></Link>
                        <Link ><img src={linkedin} className='w-10 h-10 bg-white rounded-full'></img></Link>
                        <Link ><img src={gmail} className='w-10 h-10 bg-white rounded-full'></img></Link>
                        <Link ><img src={website} className='w-10 h-10 bg-white rounded-full'></img></Link>
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-4 m-2 p-2'>
                        <Link >Email: webmaker.abid@gmail.com</Link>
                        <Link >Mobile: 01568441078</Link>
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-4 m-2 p-2'>
                        <Link >Location: Sunamgonj, Bangladesh</Link>  
                    </ul>
                </div>
                <Contact></Contact>
            </div>
        </section>
    );
};

export default PageContact;