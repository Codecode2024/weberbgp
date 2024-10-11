import Link from "next/link";
import React from "react";

const Heading = () => {
  return (
    <>
      <h1 className="fw-bold mb-1">熟悉廚具與善用空間技巧</h1>
      <div className="text-light fst-italic my-2">發佈於 2024年 10月 8號</div>
      <Link
        className="badge bg-secondary mb-3 me-1 text-decoration-none link-light"
        href="#"
      >
        部落格
      </Link>
      <Link
        className="badge bg-secondary mb-3 text-decoration-none link-light"
        href="#"
      >
        廚具小百科
      </Link>
    </>
  );
};

export default Heading;
