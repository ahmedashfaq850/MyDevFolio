import React from 'react';
import Image from 'next/image'

const TestimonialSection = () => {
  return (
    <div className='mt-[50px] mb-[50px] relative'>
      <h1 className='text-center text-white text-[30px] md:text-[48px] font-bold flex items-center gap-2 justify-center'>What Client Say about Me<Image className='inline-flex' src="/ClientIcon.svg" width={50} height={50} alt="" /></h1>
      <div className='flex justify-center mr-[325px] md:mr-[525px] mt-[5px]'><Image src="/newstripe.png" width="63" height="13" alt="" /></div>
      <div className='flex flex-col justify-center items-center gap-[25px]'>
        <p className=' m-auto text-[10px] md:text-[18px] text-center w-[90%] md:w-[65%] mt-[30px] text-white leading-8'>I had a fantastic experience working with Ahmed on my front-end project. From the very beginning,
          they were responsive, communicative, and professional. They took the time to  listen  to my needs
          and ensure they understood my project vision. </p>
        <div>
          <Image src="/StarsIcons.svg" width="120" height="34" alt="" />
        </div>
        <div className='flex gap-3 items-center'>
          <Image src="/CLientAvatar.svg" width="70" height="70" alt="" />
          <div className='text-white'>
            <p className='font-[700]'>Maxwell (Zixiang) Luo</p>
            <p className='font-[500]'>Software Engineer @ Google</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection