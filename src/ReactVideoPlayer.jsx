import React, { useRef } from 'react'
import myVideo from '/Maroon_5_-_Sugar.mp4'

const ReactVideoPlayer = () => {
    const videoPlayer = useRef()

    const handlePlay = () => {
        videoPlayer.current.play()
    }
    const handlePause = () => {
        videoPlayer.current.pause()
    }

    return (
        <div>
            <h1>React Video player</h1>
          


            <div className="">
            <button onClick={handlePlay}>play</button>
            <button onClick={handlePause}>pause</button>
                <video width="500" height="300" ref={videoPlayer}
                //  controls={['Time', 'Volume', 'Fullscreen']}
                >
                    <source src={myVideo} />
                </video>
            </div>
        </div>
    )
}

export default ReactVideoPlayer
