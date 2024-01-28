import React, { useRef, useState } from 'react'
import myVideo from '/Maroon_5_-_Sugar.mp4'
import { FaPlay, FaPause  } from "react-icons/fa";
const ReactVideoPlayer = () => {
    const videoPlayer = useRef()
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoPlayer.current.pause();
        } else {
            videoPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <h2 className='text-4xl pb-4 font-semibold'>React Video player</h2>

            <div className="relative group">
          <div className="w-24 h-24 flex justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white/20 rounded-full invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300 z-20 backdrop-blur-sm">
          <button className='p-4 rounded-full h-16 w-16  text-black font-medium text-xl  bg-white/80 flex justify-center items-center' onClick={handlePlayPause}>{isPlaying ? <FaPlay /> : <FaPause />}</button>
          </div>
                <video width="500" height="300" ref={videoPlayer}
                >
                    <source src={myVideo} />
                </video>
            </div>
        </div>
    )
}

export default ReactVideoPlayer
