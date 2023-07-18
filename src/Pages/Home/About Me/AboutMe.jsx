import React from 'react';
import aboutme from '../../../../public/about-me.gif'

const AboutMe = () => {
    return (
        <section>
            <div className='flex justify-between items-center lg:max-w-5xl mx-auto p-4 m-4'>
                <div className='w-1/3'>
                    <img src={aboutme} alt="" srcset="" />
                </div>
                <div className='w-2/3 text-justify'>
                    <p className='lg:text-lg  text-slate-700 p-1 m-1'>
                    I am seeking an opportunity to contribute skill, enthusiasm, and passion for technology. I am an adaptable and quick learner, continueously expanding my skill set and staying up to date with the latest progtamming languages, frameworks and industry best practices.
                    </p>
                    <p className='lg:text-lg font-semibold text-slate-700 p-1 m-1'><span className='text'>Email: </span>webmaker.abid@gmai.com</p>
                    <p className='lg:text-lg font-semibold text-slate-700 p-1 m-1'><span className='text'>Location: </span>Sunamgonj, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;