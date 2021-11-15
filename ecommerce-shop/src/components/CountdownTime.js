import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Countdown from "react-countdown";
const CountdownTime = props => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    } else {
      // Render a countdown
      return (
        <div className="d-flex flex-column mt-5 mx-2">
          <h2 className="countdown-heading text-center">Deal Of The Week</h2>
          <div className="countdown-text mx-auto  "></div>
          <div className="d-flex flex-row mt-5 mx-auto">
            <div className="countdown-time position-relative">
              <span className="position-absolute top-50 start-50 translate-middle">
                {days}
                <p>Day</p>
              </span>{" "}
            </div>
            <div className="countdown-time position-relative">
              <span className="position-absolute top-50 start-50 translate-middle">
                {hours}
                <p>Hrs</p>
              </span>
            </div>
            <div className="countdown-time position-relative">
              <span className="position-absolute top-50 start-50 translate-middle">
                {" "}
                {minutes}
                <p>Min</p>
              </span>{" "}
            </div>
            <div className="countdown-time position-relative">
              <span className="position-absolute top-50 start-50 translate-middle">
                {seconds}
                <p>Sec</p>
              </span>
            </div>
          </div>
          <button className="countdown-button mt-5">Shop now</button>
        </div>
      );
    }
  };
  return (
    <div
      data-aos="fade-right"
      className="d-flex flex-row justify-content-center mt-6 countdown-box"
    >
      <div className="countdown-img">
        <img src="/img/model.png" alt="model" />
      </div>
      <Countdown
        date={Date.now() + 100000000}
        renderer={renderer}
        autoStart={true}
      />
    </div>
  );
};

export default CountdownTime;
