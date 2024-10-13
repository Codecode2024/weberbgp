"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data.json");
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <div className="container my-5">
      <div className="container">
        <div className="p-3 pb-md-4 mx-auto text-center">
          <h1
            className={`display-6 fw-normal text-body-emphasis ${styles.section}`}
          >
            關於美亞
          </h1>
        </div>

        {data.map((item, index) => (
          <div key={item.id} className="row mb-4">
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6">
                  <Image
                    src={item.image}
                    className={`img-fluid object-fit-cover ${styles.imageConfig}`}
                    alt={item.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title fs-2 pb-3">{item.title}</h5>
                      <p className="card-text lh-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title fs-2 pb-3">{item.title}</h5>
                      <p className="card-text lh-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <Image
                    src={item.image}
                    className={`img-fluid object-fit-cover ${styles.imageConfig}`}
                    alt={item.title}
                    width={400}
                    height={300}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
