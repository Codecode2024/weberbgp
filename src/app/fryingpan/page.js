"use client";
import Image from "next/image";
import styles from "./fryingpan.module.css";
import React, { useEffect, useState, useRef } from "react";

const FryingPan = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("A.jpg");

  const selectedImageRef = useRef(null);
  useEffect(() => {
    fetch("/api/fryingpan_data.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.images);
        setSelectedImage(data.images[0].src);
      });
  }, []);
  const handleImageClick = (image) => {
    setSelectedImage(image.src);

    selectedImageRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h1
              className={`display-6 fw-normal text-body-emphasis ${styles.section}`}
            >
              煎鍋
            </h1>
            <div className="container overflow-hidden">
              <div className="row gy-5">
                <div
                  className="text-center py-3 py-md-5 mb-4"
                  ref={selectedImageRef}
                >
                  <Image
                    src={`/images/fryingpan/${selectedImage}`}
                    alt={"Selected"}
                    width={360}
                    height={260}
                    className="img-fluid rounded"
                    style={{ maxHeight: "500px", objectFit: "contain" }}
                  />
                </div>

                <div className="row mb-4">
                  {images.map((image) => (
                    <div className="col-12 col-md-4 mb-3" key={image.src}>
                      <div
                        className="card"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleImageClick(image)}
                      >
                        <Image
                          src={`/images/fryingpan/${image.src}`}
                          className="card-img-top"
                          alt={image.description}
                          width={160}
                          height={60}
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{image.title}</h5>
                          <p className="text-center">{image.description}</p>
                          <p className="text-center text-danger">
                            {image.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FryingPan;
