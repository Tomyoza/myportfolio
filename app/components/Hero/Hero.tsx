import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return <section className='relative flex flex-row items-center z-20 mx-auto
  md:gap-[37px] md:mx-10'>
    <div className='flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px]
    md:items-start'>
        <h1 className='text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline'>
        <span className='-ml-3'>👋</span> Hello I'm Tomoki Yoza, I'm a {' '}
        <span className='block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0'>Software Engineer
        </span>
        </h1>
        <p className='text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0'>
          I'm driven by curiosity and constantly improving my engineering skills.
        </p>
        <div className='flex flex-col gap-3 md:gap-4'>
            <a href='mailto:tomoki.yoza@gmail.com' className='self-center bg-primary text-white
            p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6'>
                Let's Connect{' '} <img src='/Arrow Right Icon.svg'
            alt='Arrow right icon'/>
            </a>
            <a href='/TOMOKI YOZA - RESUME_25.pdf' download className='self-center bg-primary text-white
            p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6'>
                Check My Resume{' '} <img src='/Arrow Right Icon.svg'
            alt='Arrow right icon'/>
            </a>
        </div>
    </div>
    <div>
        <Image src='/profile_light_purple.png' alt='Light purple rectangle' width={372} height={430}
        className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'/>
        <Image src='/profile_dark_purple.png' alt='Dark purple rectangle' width={372} height={430}
        className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'/>
        <Image src='/Depop Profile Picture.png' alt='Profile picture' width={357} height={417}
        className='hidden md:block min-w-[400px] h-[417px] z-10 ml-[20px] my-[6.5px]'/>
    </div>
  </section>
}

export default Hero