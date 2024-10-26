import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import gsap from 'gsap';
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';

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
    // loadData array
    const [loadedData, setLoadedData] = useState([]);

    // destructure (extract) all the above video properties
    const {videoId, startPlay, isPlaying, isEnd, isLastVideo} = video;

    // animate the video loaded targeting <video>
    useGSAP(()=>{
        gsap.to('#video', {
            scrollTrigger:{
                trigger: '#video',
                toggleActions: 'restart none none none'
            },
            onComplete: ()=>{
                // set the particular video in start mode
                setVideo(prev=>({
                    ...prev, 
                    startPlay: true, isPlaying: true,
                }))
            }
        } )
    }, [videoId, isEnd])

    // videos performance in the loadedData
    useEffect(()=>{
        // pause the video if we came to end and no longer playing the video
        if(loadedData.length > 3){
            videoRef.current[videoId].pause();
        }
        // if video is playing & startPlay is also true then currently whatever video should play
        else{
            startPlay && videoRef.current[videoId].play();
        }
    }, [videoId, startPlay, isPlaying, loadedData])


    // videoId changes & video start to play
    useEffect(()=>{
        // initial video progress is 0
        const currentProgress = 0;

        //grab the video <span> element
        let span = videoSpanRef.current;

        // animate the progress of video
        let anim = gsap.to(span[videoId], {
            onUpdate: ()=>{},
            onComplete: ()=>{}
        })
    }, [videoId, startPlay])

    // handleProcess: switch for each video case: play, reset, video-end, pause; 'i' is the video id till id=3
    const handleProcess = (type, i)=>{
        switch (type) {
            case 'video-end':
                setVideo(prev=>({
                    ...prev, isEnd:true, videoId: i+1
                }))
                break;
            case 'video-last':
                setVideo(prev=>({
                    ...prev, isLastVideo:true
                }))
                break;

            case 'video-reset':
                setVideo(prev=>({
                    ...prev, videoId:0, isLastVideo:false
                }))
                break;

            case 'play':
                setVideo(prev=>({
                    ...prev, isPlaying: !prev.isPlaying
                }))
            break;
            
            case 'pause':
                setVideo(prev=>({
                    ...prev, isPlaying:!prev.isPlaying
                }))
                break;
            default:
                return video;
        }
    }

    // set loaded data 
    const handleLoadedMetadata = (e,i)=>console.log('event:===>', loadedData);
    console.log(handleLoadedMetadata())

  return (<>
    <div className='flex items-center'>
        {
            hightlightsSlides.map((list,i)=>(
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='relative sm:w-[70vw] w-[88vw] md:h-[90vh] sm:h-[50vh] h-[35vh]'>

                            {/* ------- VIDEO DIV ------- */}
                        <div className='w-full h-full flex items-center justify-center bg-black rounded-3xl '>
                            <video 
                            autoPlay 
                            muted 
                            playsInline={true} 
                            preload='auto'
                            id='video'
                            ref={(el)=>videoRef.current[i] = el}

                            onPlay={()=>setVideo(prev=>({
                                ...prev, isPlaying:true
                            }))}

                            onLoadedMetadata = {(e)=>handleLoadedMetadata(e,i)}
                            >
                                <source src={list.video} type='video/mp4'/>
                            </video>
                        </div>
                        {/* -------- TEXT ON VIDEO ---------- */}
                        <div className='absolute top-12 left-10 text-xl md:text-2xl sm:text-xl font-medium z-10'>
                            {list.textLists.map(text=>(
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))
        }  
    </div>
        {/* ----------- VIDEO PROGRESSION BAR ------------ */}
    <div className='relative flex items-center justify-center mt-10'>
             {/* video progression main conatianer */}
        <div className=' flex items-center justify-center backdrop-blur bg-gray-300 px-7 py-5 rounded-full '>
            {/* return the span element with each video items in videoRef array */}
                        {/*--------progress container for each new video-------- */}
            {
                videoRef.current.map((_,i)=>(
                    <span key={i}
                    ref={(el)=>videoDivRef.current[i] = el}
                    className='relative mx-2 w-3 h-3 rounded-full bg-gray-200 cursor-pointer'
                    >
                     {/* create a progression for each video */}
                     <span
                        className='absolute w-full h-full rounded-full'
                        // grab this span element
                        ref = {el=>videoSpanRef.current[i] = el}
                     />
                    </span>
                ))
            }
        </div>
            <button className='flex items-center justify-center bg-gray-300 backdrop-blur p-4 rounded-full ml-3'>
               <img src={isLastVideo? replayImg: isPlaying? pauseImg:playImg} 
                alt={isLastVideo?'replay':isPlaying?'pause':'play'} 
                onClick={
                    isLastVideo?()=>handleProcess('video-reset'):
                    isPlaying?()=>handleProcess('pause'):()=>handleProcess('play')
                }

                /> 
            </button>
    </div>
  </> )
}
