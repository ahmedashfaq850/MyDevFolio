import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className='footerline'></div>
      <div className='flex flex-col gap-5 items-center p-[20px]'>
        <p className='text-white font-[600] text-[18px]'>© 2023 Ahmed Ashfaq All Rights Reserved</p>
        <div className='flex gap-5'>
          <Link href="https://github.com/ahmedashfaq850" target="_blank"><Image src="/githubLogo.svg" width={25} height={25} alt="" /></Link>
          <Link href="https://www.linkedin.com/in/ahmedashfaq67/" target="_blank"><Image src="/lindedinLogo.svg" width={25} height={25} alt="" /></Link>
          <Image src="/mailLogo.svg" width={25} height={25} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer