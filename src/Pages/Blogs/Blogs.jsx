import React from 'react';
import SectionTitle from '../../Shared/Section Title/SectionTitle';
import html from '../../../public/pencil.png'
import css from '../../../public/profile2.png'
import js from '../../../public/abid.png'

const Blogs = () => {
    return (
        <section>
            <SectionTitle title={'My Bogs About Web Developemet_'}></SectionTitle>
            <div>
            <div className=' lg:max-w-5xl mx-auto p-4 m-4'>
            <div className="overflow-x-auto rounded">
                <table className="table w-full mx-auto bg-transparent border-2 ">
                    {/* head */}
                    <thead className='bg-transparent'>
                    <tr className='header-footer'>
                        <th className='lg:text-lg font-bold text-slate-700 p-2 m-2'>#</th>
                        <th className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Article Picture</th>
                        <th className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Article Name</th>
                        <th className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Action</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr className='bg-transparent'>
                        <td className='bg-transparent'>
                            <span className='lg:text-lg font-bold text-slate-700 p-2 m-2'>1</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={html} alt="image" className='bg-transparent' />
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold text-slate-700 p-2 m-2'>
                         HTML Fundamentals
                        </td>
                        
                        
                        <th className='bg-transparent'>
                        
                        <a href="https://www.jagonews24.com/en/opinion/news/21175" className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Details</a>
                        </th>
                       
                    </tr>
                    <tr className='bg-transparent'>
                        <td className='bg-transparent'>
                            <span className='lg:text-lg font-bold text-slate-700 p-2 m-2'>2</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={css} alt="image" className='bg-transparent' />
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold text-slate-700 p-2 m-2'>
                       CSS Fundamentals
                        </td>
                        
                        
                        <th className='bg-transparent'>
                        
                        <a href="https://www.jagonews24.com/opinion/news/314299" className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Details</a>
                        </th>
                       
                    </tr>
                    <tr className='bg-transparent'>
                        <td className='bg-transparent'>
                            <span className='lg:text-lg font-bold text-slate-700 p-2 m-2'>3</span>
                        </td>
                        <td className='bg-transparent'> 
                            <div className="mask mask-squircle w-12 h-12 bg-tranparent">
                                <img src={js} alt="image" className='bg-transparent' />
                            </div>
                        </td>
                        <td className='lg:text-lg font-bold text-slate-700 p-2 m-2'>
                        JavaScript Fundamentals
                        </td>
                        
                        
                        <th className='bg-transparent'>
                        
                        <a href="https://www.odhikar.news/opinion/47724" className='lg:text-lg font-bold text-slate-700 p-2 m-2'>Details</a>
                        </th>
                       
                    </tr>
                    
                    </tbody>
                    
                </table>
            </div>
            
        </div>
            </div>
        </section>
    );
};

export default Blogs;