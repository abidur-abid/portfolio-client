import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import mern from '../../../public/mern.png'


const Skill = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'Out Of ', value: 100 },
        { name: 'HTML', value: 90 },
        { name: 'CSS', value: 85 },
        { name: 'JS', value: 70 },
        { name: 'BootStrap', value: 80 },
        { name: 'Tailwind', value: 75 },
        { name: 'React JS', value: 82 },
        { name: 'Firebase', value: 60 },
        { name: 'Node JS', value: 50 },
        { name: 'Express JS', value: 65 },
        { name: 'MongoDB', value: 55 },
        { name: 'WordPress', value: 35 },
        { name: 'Tools', value: 77 },
       
      ];
      
    return (
        <section>
            <div className='lg:max-w-5xl mx-auto'>
                <div className='flex justify-center items-center'>
                <div className='w-1/2'>
                <PieChart width={400} height={400}>
                <Pie
                    data={data01}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    outerRadius={60}
                    fill="#FECE2F"
                />
                <Pie
                    data={data02}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    innerRadius={100}
                    outerRadius={130}
                    fill="#FECE2F"
                    label
                />
                </PieChart>
                </div>
                <div className='w-1/2'>
                    <img src={mern} alt="" srcset="" />
                </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;