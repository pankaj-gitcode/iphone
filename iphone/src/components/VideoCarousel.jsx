import React from 'react'
import { hightlightsSlides } from '../constants'

export const VideoCarousel = () => {
  return (<>
    <div>
        {
            hightlightsSlides.map((list,i)=>
            <div id='slider' key={list.id}>
                <div className='video-carousel_container'>
                    <div></div>
                </div>
            </div>
            )
        }
    </div>
  </> )
}
