import React from "react";

const VideoSection = () => {
  return (
    <div className="ratio ratio-16x9 mt-5">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8qcVuklIqWY?si=VMdXGtk2Ben-qUTb"
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoSection;
