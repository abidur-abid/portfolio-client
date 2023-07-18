import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <section className='p-4 m-4 max-w-5xl mx-auto'>
            <h1 className='text-5xl font-bold text text-center'>{title}</h1>
        </section>
    );
};

export default SectionTitle;