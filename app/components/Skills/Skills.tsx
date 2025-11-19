import React from 'react'
import Image from 'next/image'
import skills from "@/Data/skills.json";
import SectionContainer from '../Section/SectionContainer';
import SectionHeader from '../Section/SectionHeader';
import Skill from './Skill';

const Skills = () => {
  return (
    <SectionContainer id='skills'>
      <div className='section-contents mx-[22px] md:mx-[116px]'>
        <SectionHeader plainText='This is my' highlightText='Teck Stack'/>
        <div className='card w-full px-[33px] py-[27px] flex flex-wrap flex-col
        md:flex-row justify-center items-center gap-[19px] md:gap-[33px]'>
          {skills.map((skill, index) => (
            <Skill key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <>
      <Image src="/teck_stack_grid_dark.svg" alt="Background grid decoration"
      width={569} height={373} className="hidden dark:md:block -z-10 absolute 
      -left-[135px] -top-[39px]"  
      />
      <Image src="/teck_stack_grid.svg" alt="Background grid decoration"
      width={569} height={373} className="hidden dark:hidden md:block -z-10 absolute 
      -left-[125px] -top-[39px]"  
      />
      </>
    </SectionContainer>
  )
}

export default Skills