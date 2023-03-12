import Image from 'next/image'
import React from 'react'

const SkillsSection = () => {
  return (
    <div className='mt-[50px] mb-[50px] relative'>
      <h1 className='text-center text-white text-[30px] md:text-[48px] font-bold flex items-center gap-2 justify-center'>My Tech  Weapons <Image className='inline-flex' src="/weaponIcon.svg" width={50} height={50} alt="" /></h1>
      <div className='flex justify-center mr-[225px] md:mr-[360px] mt-[5px]'><Image src="HEadingStripe.svg" width="63" height="13" alt="" /></div>
    </div>
  )
}

export default SkillsSection