import Image from 'next/image'
import React from 'react'
import { experience } from '../data/ConstantData'

const ExperienceSection = () => {
  return (
    <div className='mt-[50px] mb-[50px]'>
      <h1 className='text-center text-white text-[30px] md:text-[48px] font-bold flex items-center gap-2 justify-center'>My Experience<Image className='inline-flex' src="/experienceLogo.svg" width={50} height={50} alt="" /></h1>
      <div className='flex justify-center mr-[185px] md:mr-[300px] mt-[5px]'><Image src="HEadingStripe.svg" width="63" height="13" alt="" /></div>
      <div className='flex justify-center items-center mt-[80px] text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {experience.map((item, idx) => (
            <div className='experience-container' key={idx}>
              <h1 className='text-[25px] font-[600] mb-[5px]'>{item.title}</h1>
              <h2 className='text-[20px] font-[500] mb-[5px]'>{item.company}</h2>
              <p className='text-[15px] font-[300] mb-[30px]'>{item.date}</p>
              <p className='text-[15px] font-bold mb-[5px]'>Tech Stack</p>
              <div className='flex flex-wrap gap-3 text-[14px]'>
                {item.stack.map((item, idx) => (
                  <div className='tag-container' key={idx}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='experience-gradient'></div>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default ExperienceSection