
import { SkillBar } from 'react-skillbars';
import SectionTitle from '../../Shared/Section Title/SectionTitle';
import Skill from './Skill';
import Marquee from "react-fast-marquee";
import html from '../../../public/html-5.png'
import css from '../../../public/css-3.png'
import js from '../../../public/js.png'
import bootstrap from '../../../public/bootstrap.png'
import tailwind from '../../../public/tailwind.png'
import react from '../../../public/react.png'
import router from '../../../public/react-router.png'
import query from '../../../public/react-query.jpg'
import firebase from '../../../public/firebase.png'
import jwt from '../../../public/jwt.png'
import node from '../../../public/node-js.png'
import express from '../../../public/express.png'
import wordpress from '../../../public/wordpress.png'
import canva from '../../../public/canva.jpg'
import mongodb from '../../../public/mongodb.png'




const Skills = () => {

   const skills = [
      { type: 'Out Of ', level: 100 },
      { type: 'HTML', level: 90 },
      { type: 'CSS', level: 85 },
      { type: 'JS', level: 70 },
      { type: 'BootStrap', level: 80 },
      { type: 'Tailwind', level: 75 },
      { type: 'React JS', level: 82 },
      { type: 'Firebase', level: 60 },
      { type: 'Node JS', level: 50 },
      { type: 'Express JS', level: 65 },
      { type: 'MongoDB', level: 55 },
      { type: 'WordPress', level: 35 },
      { type: 'Tools', level: 77 },
    ];
    const colors = {
      bar: "#334155",
      
      title: {
        text: "#334155",
        background: "#FECE2F"
      }
    };
    
    return (
       <section>
          <SectionTitle title={'My Skills_'}></SectionTitle>  
          <Skill></Skill>
          <div className='max-w-5xl mx-auto m-4 p-4'>
          <Marquee>
            <img src={html} className='w-auto h-20 mx-4' />
            <img src={css} className='w-auto h-20 mx-4' />
            <img src={js} className='w-auto h-20 mx-4' />
            <img src={bootstrap} className='w-auto h-20 mx-4' />
            <img src={tailwind} className='w-auto h-20 mx-4' />
            <img src={react} className='w-auto h-20 mx-4' />
            <img src={router} className='w-auto h-20 mx-4' />
            <img src={query} className='w-auto h-20 mx-4' />
            <img src={firebase} className='w-auto h-20 mx-4' />
            <img src={jwt} className='w-auto h-20 mx-4' />
            <img src={node} className='w-auto h-20 mx-4' />
            <img src={express} className='w-auto h-20 mx-4' />
            <img src={mongodb} className='w-auto h-20 mx-4' />
            <img src={wordpress} className='w-auto h-20 mx-4' />
            <img src={canva} className='w-auto h-20 mx-4' />
         </Marquee>
          </div>
          <div className='max-w-5xl mx-auto skill-border m-4 p-4'>
          <SkillBar skills={skills} colors={colors} />
          </div>
       </section>
    );
};

export default Skills;