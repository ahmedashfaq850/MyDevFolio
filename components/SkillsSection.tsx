import Image from 'next/image'
import React from 'react'
import { skills } from '../data/ConstantData'

const SkillsSection = () => {
  return (
    <div className='mt-[50px] mb-[50px] relative'>
      <h1 className='text-center text-white text-[30px] md:text-[48px] font-bold flex items-center gap-2 justify-center'>My Tech  Weapons <Image className='inline-flex' src="/weaponIcon.svg" width={50} height={50} alt="" /></h1>
      <div className='flex justify-center mr-[225px] md:mr-[360px] mt-[5px]'><Image src="HEadingStripe.svg" width="63" height="13" alt="" /></div>
      {/* Skills Display Area */}
      <div className='flex justify-center items-center mt-[60px]'>
        <div className='skill-gradient md:left-[100px] md:top-[300px]'></div>
        <div className='grid grid-cols-2 md:grid-cols-4	gap-12'>
          {skills.map((item, idx) => (
            <div key={idx} className='w-[130px] h-[110px] skill-box flex flex-col gap-3 justify-center items-center py-[10px] cursor-pointer'>
              <Image src={item.image} alt="" width={50} height={45} />
              <p className='font-medium	 text-white'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default SkillsSection



