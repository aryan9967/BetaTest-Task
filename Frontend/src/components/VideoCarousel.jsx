import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function VideoCarousel({setActiveVideo}) {

  const videos = [
    {
      id: 1,
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "Video 1",
    },
    {
      id: 2,
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Video 2",
    },
    {
      id: 3,
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Video 3",
    },
    {
      id: 4,
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      title: "Video 4",
    },
    {
      id: 5,
      url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "Video 5",
    },
  ];

  function handleVideoClick(id){
    console.log("clicked", videos[id-1].url )
    setActiveVideo(videos[id-1].url)
  }

  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        {videos.map((video) => (
          <CarouselItem key={video.id} className="basis-1/3">
            <div className="video-item relative" onClick={()=>{handleVideoClick(video.id)}}>
              <video src={video.url} title={video.title} className="w-full " />
              <button className="play_btn rounded-full w-5 h-5 bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center opacity-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15px"
                  viewBox="0 -960 960 960"
                  width="15px"
                  fill="#5f6368"
                >
                  <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                </svg>
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
