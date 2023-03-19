import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-[#131c2d] text-white aboutContainer opacity-[80%] w-[500px] h-[600px] '>
                <Image src="/myAvatar.png" alt="myimage" width={200} height={200} />
                <div className='text-center'>
                    <h1 className='text-[25px] md:text-[40px] font-black mb-[5px]'>Ahmed Ashfaq</h1>
                    <h4 className='text-[15px] md:text-[20px] underline font-[500]'>Full Stack - Software Engineer</h4>
                </div>
                <p className='text-center leading-5 text-[10px] md:text-[15px] mt-[10px]'>
                    <p>Hello! I&apos;m Ahmed Ashfaq, a Full Stack Software Engineer with extensive experience in Node Js, Next Js, React JavaScript, Typescript, and MnogoDB. I&apos;m also currently learning about the exciting world of web 3.0 and blockchain technology, and have a keen interest in developing decentralized web applications.</p>

                </p>
            </div>
        </div>
    )
}

export default About