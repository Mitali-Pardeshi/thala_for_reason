import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <div className="w-full h-[42vh] bg-gradient-to-b from-transparent from-50% to-popover to-96% absolute top-0 left-0 -z-[8]"></div>
      <video
        poster="/poster.jpg"
        autoPlay
        muted
        loop
        src="/video.mp4"
        className="w-full absolute top-0 left-0 h-[42vh] object-cover -z-10 brightness-[40%]"
      ></video>
    </div>
  );
};

export default VideoPlayer;
