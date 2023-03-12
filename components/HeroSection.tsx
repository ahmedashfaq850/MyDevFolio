import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='h-[80vh] md:h-[80vh] m-2 flex justify-center items-center overflow-hidden'>
      <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="herodiv">
        <p className="hero-text mt-[30px] md:mt-0">Hi, MY NAME IS</p>
        <div className="heroHeading text-[28px] md:text-[48px]">
          <h1>Ahmed Ashfaq.</h1>
          <h1 className='mt-[-30px] md:mt-0'>I am a full-stack dev.</h1>
        </div>
        <p className="heroDescription text-[10px] md:text-[20px] mb-[20px] md:mb-5 leading-[20px] md:leading-[40px]">
          I like to build amazing UI/UX experiences for humans <Image className='inline-flex' src="/rocketicon.svg" width={30} height={30} alt="" />.<br />
          Currently, I’ m focusing on expanding my knowledge of web 3.0 and <br />
          the metaverse as I believe they are the future of technology <Image className='inline-flex' src="/laptopicon.svg" width={40} height={40} alt="" />.
        </p>
        <button className='button-gradient  w-[300px] h-[45px] p-3 rounded-full flex items-center justify-center text-center gap-2 text-[18px] font-bold text-white bg-red-300'>Download My Resume <Image className='inline-flex' src="/downloadIcon.svg" width={30} height={30} alt="" /></button>
        <button className='button-gradient  w-[300px] h-[45px] p-3 rounded-full flex items-center justify-center mt-5 text-center gap-2 text-[18px] font-bold text-white bg-red-300'>Do You Want to Work With Me ?</button>
      </div>
    </div>
  )
}

export default HeroSection