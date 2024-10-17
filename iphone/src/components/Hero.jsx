import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'



export const Hero = ()=>{
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 720? smallHeroVideo:heroVideo
    )

    // function to adjust video a/c to window innerWidth
    const handleVideoSrc = ()=>
        window.innerWidth<720? setVideoSrc(smallHeroVideo):setVideoSrc(heroVideo)

    // with screen size the video will change
    useEffect(()=>{
        // add resize event to window
        window.addEventListener('resize', handleVideoSrc)
        // prevent memory leak: remove eventListener if not needed
        return ()=>
            window.removeEventListener('resize', handleVideoSrc)
    }, [])

    // using GSAP to animate text
    useGSAP(()=>{
        gsap.to('.iphone15Text', {
            opacity:1,
            delay:1,
            duration:2
        })
    }, [])

    // GSAP on button and subscription
    useGSAP(()=>{
        gsap.fromTo('#btnSub',{
            opacity:0,
            y:180
        },{
            opacity:1,
            y:0,
            duration:1
        })
    }, [])

    return(<>
        <section className='w-full  relative h-[calc(100vh-60px)]'>

            <div className='h-5/6 flex flex-col items-center justify-center'>
                    {/* ------------ IPHONE TITLE ------------ */}
                <h1 className='iphone15Text opacity-0 text-3xl text-gray font-semibold'>iPhone 15 Pro</h1>

                {/* ------------- VIDEO ----------- */}
                <div className='w-9/12 md:w-10/12 pt-10'>
                    <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>

            {/* -------------- BUTTON & SUBCRIPTION FEE -------------- */}
            <div id='btnSub' className='flex flex-col items-center justify-center gap-5 opacity-0'>
                <button className='bg-blue py-2 px-5 rounded-2xl '>Buy</button>
                <h1 className='font-semibold text-xl lg:text-lg'>From $199/month or $999</h1>
            </div>

        </section>
    </>)
}