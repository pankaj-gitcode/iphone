import React from 'react'
import { hightlightsSlides } from '../constants'

export const Highlights = ()=>{
    return(<div>
        <div>
            {
                hightlightsSlides.map(elem=>
                <div key={elem.id}>
                    <p>{elem.video}</p>
                </div>)
            }
        </div>
    </div>)
}
