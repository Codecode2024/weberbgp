import React from "react";
import styles from "./VideoSection.module.css";
const VideoSection = () => {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          muted
          loop
          autoPlay
          src="/images/mainpage/video-section.mp4"
          type="video/mp4"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>美亞廚房 · 極緻煮意</p>
      </div>
    </div>
  );
};

export default VideoSection;
