import React from 'react'
import Image from 'next/image'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section id='contact' className='card relative items-center mx-6 flex flex-col px-[33px]
    py-[27px] z-30 gap-[54px] md:gap-[35px] mb-[67px] md:mb-[42px]'>
        <div className='flex flex-col md:flex-row gap-5 md:justify-between md:w-full'>
            <h2 className='font-semibold text-[22px] md:text-[40px] md:max-w-[600px] md:pr-8'>
                Interested in working together? I'd be honored to contribute!
            </h2>
            <div className='flex flex-col gap-5 items-center md:items-end'>
                <a href='mailto:tomoki.yoza@gmail.com' className='self-center md:self-start bg-primary text-white
                p-2.5 rounded flex gap-2.5 items-center text-lg md:text-xl/l font-normal'>Let's get in touch
                <img src='/mail_icon.svg' alt='Mail icon'/>
                </a>
                <div className='flex flex-row gap-1'>
                  <a href='https://github.com/Tomyoza?tab=repositories' className= 'contact-button'>
                  <Image src='/GitHub_Logo_Dark.svg' alt='Github icon' width={17} height={16} className='hidden dark:block'/>
                  <Image src='/GitHub_Logo.svg' alt='Github icon' width={17} height={16} className='dark:hidden'/>
                  </a>
                  <a href='https://www.linkedin.com/in/tom-yoza-b84027250/' className= 'contact-button'>
                  <Image src='/linkedin.svg' alt='Linkedin icon' width={17} height={16} className='hidden dark:block'/>
                  <Image src='/linkedin.svg' alt='Linkedin icon' width={17} height={16} className='dark:hidden'/>
                  </a>
                </div>
            </div>
        </div>
        <small>Copyright &copy; Tomoki Yoza 2025</small>
    </section>
  )
}

export default Contact