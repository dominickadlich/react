import { useRef, useState } from 'react';


export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null)

    function handleClick() {
        setIsPlaying(!isPlaying);
        if (videoRef.current === null) {
            throw new Error('videoRed is null')
        }
        isPlaying 
            ? videoRef.current.pause()
            : videoRef.current.play()
    }

    

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video 
                width={250}
                ref={videoRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source 
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    )
}