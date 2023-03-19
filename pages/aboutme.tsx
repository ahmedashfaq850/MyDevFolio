import React from 'react'
import Image from 'next/image'

const aboutme = () => {
    return (
        <div className='flex justify-center'>
            <div className='bg-[#131c2d] text-white aboutContainer opacity-[80%] w-[500px] h-[600px] mt-[80px]'>
                <Image src="/myAvatar.png" alt="myimage" width={200} height={200} />
                <div className='text-center'>
                    <h1 className='text-[25px] md:text-[40px] font-black mb-[5px]'>Ahmed Ashfaq</h1>
                    <h4 className='text-[15px] md:text-[20px] underline font-[500]'>Full Stack - Software Engineer</h4>
                </div>
                <p className='text-center leading-7 text-[10px] md:text-[15px] mt-[10px]'>
                    Hello! I'm Ahmed Ashfaq a Full Stack Software Engineer with
                    extensive experience in Node JS, Next.js, React, JavaScript,
                    TypeScript, and MongoDB. I'm also currently learning about
                    the exciting world of Web 3.0 and blockchain technology,
                    and have a keen interest in developing decentralized web
                    applications.
                </p>
            </div>
        </div>
    )
}

export default aboutme