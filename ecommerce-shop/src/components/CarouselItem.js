import React from "react";

const CarouselItem = props => {
  return (
    <div className="carousel-box my-2">
      <img src={props.src} alt={props.src} className="carousel-img" />
      <h5 className="carousel-product"> {props.title}</h5>
      <p className="carousel-price">${props.price}</p>
      <button className="carousel-button">Buy now</button>
    </div>
  );
};

export default CarouselItem;
