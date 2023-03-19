import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center sticky top-0 left-0 bg-[#0E1624] h-[90px] px-[13px] md:px-[80px] border-b-[1px] border-[#AFB7C5] border-opacity-20	'>
      <Link href="/">
        <div>
          <h1 className='text-[22px] md:text-[30px] text-[#AFB7C5] font-black'><code>&lt;/&gt;</code>Dev<span className='underline'>Folio</span></h1>
        </div>
      </Link>
      <div>
        <nav>
          <ul className='flex gap-3 md:gap-10 text-[#AFB7C5] text-[20px] md:text-[20px] font-medium'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/myprojects'><li>Projects</li></Link>
            <Link href='/aboutme'><li>About</li></Link>
          </ul>
        </nav>
      </div>
      <div className='gap-3 cursor-pointer hidden md:flex'>
        <Link href="https://github.com/ahmedashfaq850" target="_blank"><Image src="/githubLogo.svg" width={25} height={25} alt="" /></Link>
        <Link href="https://www.linkedin.com/in/ahmedashfaq67/" target="_blank"><Image src="/lindedinLogo.svg" width={25} height={25} alt="" /></Link>
        <Image src="/mailLogo.svg" width={25} height={25} alt="" />
      </div>
    </header>
  )
}

export default Header