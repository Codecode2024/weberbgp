import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <figure className="figure">
      <Image
        src="/blogpost.jpg"
        className="figure-img img-fluid rounded"
        alt="blogpost"
        width={900}
        height={400}
      />
    </figure>
  );
};

export default HeroImage;
