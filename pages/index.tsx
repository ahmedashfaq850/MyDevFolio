import Head from 'next/head'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '@/components/ProjectSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';



export default function Home() {
  return (
    <>
      <Head>
        <title>My DevFolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='relative px-[20px]  md:px-[80px]'>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <TestimonialSection />
        <ContactSection/>
      </main>
    </>
  )
}
