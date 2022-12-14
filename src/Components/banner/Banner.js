import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-wrapper">
      <section className="banner">
        <div className="mix-header">
          <h1 className="mix">Mixcellence</h1>
          <p>Excellence in glass</p>
          <div className="contact">
            <button className="learn-btn">Learn more</button>
            <button className="purple-btn">Contact us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
