import React from "react";
import styles from "./page.module.css";
import Heading from "./components/Heading";
import Overview from "./components/Overview";
import HeroImage from "./components/HeroImage";
import MainContent from "./components/MainContent";
import VideoSection from "./components/VideoSection";

const Blogpost = () => {
  return (
    <div className={styles.section}>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-lg-8">
            <article className="mb-4">
              <Heading />
              <Overview />
              <HeroImage />
              <MainContent />
              <VideoSection />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
