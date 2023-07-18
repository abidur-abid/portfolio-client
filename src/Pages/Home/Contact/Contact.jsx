import React from 'react';
import contact from '../../../../public/contact.gif'

const Contact = () => {
    return (
        <section>
            <div className='flex justify-between items-center lg:max-w-5xl mx-auto p-4 m-4'>
                <div className='w-2/3'>
                <form className="card-body">
                                <div className="form-control">
                                <input type="text" placeholder="Type Your Name" name='from_name' className="input border-slate-700 input-bordered border-4  font-bold" />
                                </div>
                                <div className="form-control">
                            
                                <input type="email" placeholder="Enter Your Email Address" name='email' className="input input-bordered border-slate-700  border-4  font-bold" />
                                
                                </div>
                                <div className="form-control">
                            
                                <textarea placeholder="Type Your Message" name='message' className="textarea textarea-bordered textarea-lg border-slate-700 w-full  border-4 font-bold" ></textarea>
                                
                                </div>
                                <div className="form-control mt-6">
                                <input type="submit" value="Submit" className="btn button font-bold" />
                                </div>
                            </form>
                </div>
                <div className='w-1/3'>
                    <img src={contact} className='float-right w-full' alt="" srcset="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;