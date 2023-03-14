import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <div className='relative mt-[130px] mb-[100px] flex justify-center'>
      <div className='contactGradient hidden md:block'></div>
      <div className='contactContainer flex flex-col gap-[5px] md:gap-[0px] md:flex-row md:justify-between p-[15px] md:p-[15px] items-start md:items-center'>
        <p className='text-white text-[20px] md:text-[25px] font-[700] w-[100%] md:w-[450px]'>Want me building stuff for you ? Hit me on
          Linkedin</p>
        <Link href="https://www.linkedin.com/in/ahmedashfaq67/"><button className='contactButton flex items-center gap-2'>
          <Image src="/linkdinWhiteIcon.svg" alt="" width="30" height="30" /> My Linkedin
        </button></Link>

      </div>
    </div>
  )
}

export default ContactSection