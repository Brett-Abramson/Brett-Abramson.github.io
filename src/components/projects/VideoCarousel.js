import { useState } from "react";

const VideoCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const videos = props.project.gif;

  const changeVideo = (newIndex) => {
    setIndex(newIndex);
  };

  return (
    <div className="mt-2">
      <div className="mx-5 flex gap-px px-2">
        {videos.map((video, i) => {
          const isActive = i === index;
          const buttonClasses = `rounded-lg rounded-b-none border border-b-0 border-zinc-950 px-1 text-slate-50 active:bg-zinc-600 ${
            isActive ? "bg-zinc-500 " : "bg-zinc-700"
          } `;
          return (
            <button
              key={i}
              className={buttonClasses}
              onClick={() => changeVideo(i)}
            >
              <p className="text-xs sm:text-sm md:text-base">{video.name}</p>
            </button>
          );
        })}
      </div>
      <div className="mx-4 rounded-sm border border-zinc-100">
        <video key={index} loop autoPlay>
          <source src={videos[index].video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoCarousel;

//  creates tabs that a user can click on to view the different videos
