import React from 'react';
import SectionTitle from '../../Shared/Section Title/SectionTitle';
import SingleProjects from './Single Projects/SingleProjects';

const Projects = () => {
    return (
        <section>
            <SectionTitle title={'My Latest Projects_'}></SectionTitle>
            <SingleProjects></SingleProjects>
        </section>
    );
};

export default Projects;