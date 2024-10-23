import React from 'react'
import { hightlightsSlides } from '../constants'

export const VideoCarousel = () => {
  return (<>
    <div className='flex items-center'>
        {
            hightlightsSlides.map((list,i)=>(
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]'>


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
                    </div>

                </div>
            ))
        }
        
    </div>
  </> )
}
