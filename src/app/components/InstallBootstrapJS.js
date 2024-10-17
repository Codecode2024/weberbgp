import React from "react";
import Script from "next/script";

const InstallBootstrapJS = () => {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      strategy="lazyOnload"
    ></Script>
  );
};

export default InstallBootstrapJS;
