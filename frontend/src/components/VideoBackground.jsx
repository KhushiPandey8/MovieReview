import React from "react";

function VideoBackground() {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/9KxxI9niey8?autoplay=1&mute=1"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;