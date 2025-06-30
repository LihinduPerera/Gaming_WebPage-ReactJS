import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(()=>{
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })
    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height:'100vh',
      borderRadius: 0
    })
  })

  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[15px] '>
                Welcome to FRACTURED : What breaks you can also shape you.
            </h2>

            <AnimatedTitle 
            title="Endure a broken world where <br/> every choice could be your last."
            containerClass="mt-5 !text-black text-center"
            />

            

            <div className='about-subtext'>
              <p>In a world undone by collapse, survival means more than fighting—it's about who you become when there's nothing left</p>
              <p>Crafted with Unity HDRP</p>
            </div>
        </div>

        <div id='clip' className='h-dvh w-screen'>
          <div className='mask-clip-path about-image'>
            <img
              src='img/about.webp'
              alt='Bqckground'
              className='absolute left-0 top-0 size-full object-cover'
            />
          </div>
        </div>
    </div>
  )
}

export default About