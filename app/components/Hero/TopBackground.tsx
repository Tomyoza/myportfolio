import React from 'react'
import Image from 'next/image'


const TopBackground = () => {
  return <>
  <div className='absolute w-full max-w-[360px] md:max-w-screen-lg 
  h-[285px] md:h-[656px] top-[188] md:top-11 left-1/2-translate-x-1/2
  md:overflow-x-hidden z-10'>
    </div>
    <img src='/Top Highlight.svg' alt='Top dark mode background highlight' width={809} 
    height={877} className='absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2' />
    <img src='/Top Highlight Mobile.svg' alt='Top dark mode background highlight for mobile' width={429} 
    height={465} className='absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2' />
    <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top-bg-light.svg')] bg-[auto_auto]
    hidden dark:hidden md:block" />
    <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top-bg-mobile-light.svg')] bg-[auto_auto]
    dark:hidden md:hidden" />
    <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[url('/top-bg-dark.svg')] bg-[auto_auto]
    hidden md:dark:block" />
    <div className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[url('/top-bg-mobile-dark.svg')] bg-[auto_auto]
    hidden dark:block dark:md:hidden" />
  </>
}

export default TopBackground