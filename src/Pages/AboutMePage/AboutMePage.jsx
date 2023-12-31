import React from 'react';
import SectionTitle from '../../Shared/Section Title/SectionTitle';
import education from '../../../public/education.gif'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import AboutMe from '../Home/About Me/AboutMe';

const AboutMePage = () => {
    return (
       <section>
         <SectionTitle title={'My Educational Qualification_'}></SectionTitle>
         <div className='max-w-5xl mx-auto m-2 p-2'>
            <div>
                <img src={education} className='mx-auto'/>
            </div>
            <div>
            <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                          Jatiya Kabi Kazi Nazrul Islam University. (2019-Present)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        I had gotten chance at a renowed public university in Bangladesh in 2019. My department is local government and urban development. It is located at Trishal upzilla in Mymensing city. I am a third running student of this university.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Sylhet Government College. (2017-2019)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        I had completed my college degree in 2019. My college was Sylhet Government College. And I was a of Humanities group. I had completed my degree with A grade.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Jamalgonj Government Model High School. (2011-2017)
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        I had completed my high school degree from my local renowed school. My school was Jamalgonj Government High School. I had completed my high school degree with A+ grade. I passed here almost 6 years.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            </Accordion>
            </div>
            <div>
                <AboutMe></AboutMe>
            </div>
         </div>
       </section>
    );
};

export default AboutMePage;