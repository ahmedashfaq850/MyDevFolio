import Image from 'next/image'
import React from 'react'
import { projects } from '../data/ConstantData'
import Link from 'next/link'

const ProjectSection = () => {
  return (
    <div className='mt-[50px] mb-[50px] relative'>
      <h1 className='text-center text-white text-[30px] md:text-[48px] font-bold flex items-center gap-2 justify-center'>My Projects<Image className='inline-flex' src="/projectIcon.svg" width={50} height={50} alt="" /></h1>
      <div className='flex justify-center mr-[145px] md:mr-[230px] mt-[5px]'><Image src="/newstripe.png" width="63" height="13" alt="" /></div>
      {/* Project Display Area */}
      <div className='mt-[50px] flex flex-col items-center md:items-center gap-8 w-[100%]'>
        {projects.slice(0, 3).map((item, idx) => (
          <div key={idx} className='flex flex-col items-center md:items-start md:flex-row'>
            <Image className='ml-[25px] md:ml-0' src={item.image} width={400} height={410} alt="" />
            <div className='flex flex-col gap-4 px-[33px] md:px[0px] mt-[-10px] md:mt-[10px]  md:w-[500px]'>
              <h1 className='text-[20px] md:text-[30px] font-bold text-white'>{item.title}</h1>
              <p className='text-[15px] md:text-[20px] text-white'>{item.description}</p>
              <div className='flex flex-col gap-5 md:gap-8 mt-[15px]'>
                <div className='flex gap-2 items-center'>
                  <Image src="/linkIcon.svg" width="30" height="30" alt="" />
                  <Link href={item.Githublink} target="_blank"><p className='text-[#C2BEBE] font-[700]'>GitHub Repo</p></Link>
                </div>
                <div className='flex gap-6 flex-wrap'>
                  {item.tags.map((tag, idx) => (
                    <div key={idx} className='flex items-center gap-1'>
                      <Image src="/newtickIcon.png" width="25" height="25" alt="" />
                      <p className='text-[15px] md:text-[17px] text-white'>{tag}</p>
                    </div>
                  ))}
                </div>
                <Link href={item.Websitelink} target="_blank"><button className=' px-[25px] py-[7px] rounded-full border-[1px] border-[#237BA5] text-[#237BA5]'>View Demo</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='line'></div>
    </div>
  )
}

export default ProjectSection