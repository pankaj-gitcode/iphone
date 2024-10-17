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
    }, [window.innerWidth])

    // using GSAP to animate text
    useGSAP(()=>{
        gsap.to('.iphone15Text', {
            opacity:1,
            delay:1,
            duration:2
        })
    }, [])

    // 

    return(<>
        <section className='w-full  relative h-[calc(100vh-60px)]'>

            <div className='h-5/6 flex flex-col items-center justify-center'>
                    {/* ------------ IPHONE TITLE ------------ */}
                <h1 className='iphone15Text opacity-0 text-3xl text-gray'>iPhone 15 Pro</h1>

                {/* ------------- VIDEO ----------- */}
                <div>
                    <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>

        </section>
    </>)
}