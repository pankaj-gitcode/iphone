import React, { useRef } from 'react'
import { VideoCarousel } from './VideoCarousel';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import { playImg, rightImg, watchImg } from '../utils';

export const Highlights = ()=>{
    
    useGSAP(()=>{
        gsap.to('#title', {
            opacity: 1,
            y:0,
            duration:1
        })
        gsap.to('.watchFilm', {
            opacity:1,
            y:0,
            duration:1.8
        })
        gsap.to('.watchEvent', {
            opacity:1,
            y:0,
            delay:0.3,
            duration: 2
        })
    }, [])

    return(<div>
        
        <section id='highlights' className='w-screen bg-zinc overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div>
                    <h1 id='title' className='section-heading'>
                        Get the highlights.</h1>
                </div>
                <div className='flex gap-2 text-xl'>
                    <h2 className='text-blue hover:underline hover:cursor-pointer opacity-0 translate-y-20 watchFilm'>Watch the film</h2>
                    <img src={watchImg} alt="watching_img" className='watchFilm opacity-0 translate-y-20'/>

                    <h2 className='text-blue pl-6 hover:underline hover:cursor-pointer opacity-0 translate-y-20 watchEvent'>Watch the event </h2>
                    <img src={rightImg} alt="rightDir_img" className='watchEvent opacity-0 translate-y-20'/>
                </div>
            </div>
        </section>


    </div>)
}
