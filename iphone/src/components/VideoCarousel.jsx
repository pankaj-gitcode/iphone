import React, { useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'

export const VideoCarousel = () => {
    // useRefs
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    // initial video setups
    const [video, setVideo] = useState({
        videoId:0,startPlay:false, isPlaying:false, isEnd:false, 
        isLastVideo:false
    })
  return (<>
    <div className='flex items-center'>
        {
            hightlightsSlides.map((list,i)=>(
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]'>

                            {/* ------- VIDEO DIV ------- */}
                        <div className='w-full h-full flex items-center justify-center bg-black rounded-3xl '>
                            <video 
                            autoPlay 
                            muted 
                            playsInline={true} 
                            preload='auto'
                            >
                                <source src={list.video} type='video/mp4'/>
                            </video>
                        </div>
                        {/* -------- TEXT ON VIDEO ---------- */}
                        <div className='absolute top-12 left-10 text-xl md:text-2xl sm:text-xl font-medium z-10'>
                            {list.textLists.map((elem, i)=>(
                                <p key={i}>{elem}</p>
                            ))}
                        </div>
                    </div>

                </div>
            ))
        }
        
    </div>
  </> )
}
