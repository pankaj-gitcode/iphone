import React, { useRef } from 'react'
import { VideoCarousel } from './VideoCarousel';

export const Highlights = ()=>{
    const exRef = useRef();
    console.log("exRef: ", exRef)
    return(<div>
        <div ref={el=>console.log('el: ',el)}  className='bg-[#101010] py-28 pl-6 w-full '>
            <h1 className='text-3xl text-gray font-semibold'>Get the highlights.</h1>
        </div>
        <VideoCarousel />
    </div>)
}
