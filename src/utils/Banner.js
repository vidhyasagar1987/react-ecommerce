import React from "react";

const Banner = ({ children }) => {
  return (
    <section className="common-banner">
      <div className="common-banner-content">{children}</div>
    </section>
  );
};

export default Banner;
