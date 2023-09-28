import { useEffect, useState } from "react";

const VideoCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const videos = props.project.gif;

  const changeVideo = (newIndex) => {
    setIndex(newIndex);
  };

  // useEffect(() => {
  //   console.log(`Changing video to: ${videos[index].name}`);
  // }, [index, videos]);
  return (
    <div className="mt-2">
      <div className="flex justify-evenly px-2">
        {videos.map((video, i) => {
          return (
            <button
              key={i}
              className="rounded-lg border border-zinc-950 px-1 text-slate-50"
              onClick={() => changeVideo(i)}
            >
              {video.name}
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