import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current === null) {
      throw new Error("isPlaying is null");
    }
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause;
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function EffectApp() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
