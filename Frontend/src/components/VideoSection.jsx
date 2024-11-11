import VideoCarousel from "./VideoCarousel";
import { useRef, useState } from "react";

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState("https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4");
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video_carousel flex flex-col max-sm:max-w-[350px] max-md:max-w-[400px]">
      <div className=" md:h-[213px] relative bg-gray-100 overflow-hidden">
        <video 
          ref={videoRef}
          src={activeVideo}
          className="w-full h-full object-cover"
          onClick={handlePlayPause}
        //   onEnded={handleVideoEnd}
        />
        {!isPlaying && (
          <button 
            onClick={handlePlayPause}
            className="play_btn rounded-full w-12 h-12 bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#5f6368"
            >
              <path d="M320-200v-560l440 280-440 280Z" />
            </svg>
          </button>
        )}
      </div>
      <div className="videocarousel mt-5 flex justify-center">
        <VideoCarousel setActiveVideo={setActiveVideo} />
      </div>
    </div>
  );
}
