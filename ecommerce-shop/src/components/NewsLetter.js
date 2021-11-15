import React, { useEffect } from "react";

const NewsLetter = () => {
  return (
    <div className="d-flex justify-content-around flex-wrap letter-box mt-6">
      <div className="letter-text">
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter and get 20% off your first purchase</p>
      </div>
      <div className="d-flex flex-row letter-input">
        <input type="email" placeholder="Your email...." />
        <button>SUBCRIBE</button>
      </div>
    </div>
  );
};

export default NewsLetter;
