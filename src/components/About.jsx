import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

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

            <div className='mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
                Endure a broken world where every choice could be your last.
            </div>

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