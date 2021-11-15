import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import mobileData from "../mobile-data";
const BestSeller = () => {
  const mobileArray = mobileData.filter(item => item.type === "mobile");
  console.log(mobileArray);
  const [productArr, setProductArr] = useState(mobileArray);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const productArrHandler = typeFilter => {
    let product = [];
    mobileData.forEach(item => {
      if (typeFilter === "all") {
        product.push(item);
      } else {
        if (typeFilter === item.type) {
          product.push(item);
        }
      }
    });
    setProductArr(product);
  };
  const itemList = list => {
    return list.map(item => (
      <div
        key={item.id}
        className=" sell-animation d-flex flex-column justify-content-center sell-box col-sm-3 align-items-center "
      >
        <img src={item.img} alt={item.title} className="sell-img" />
        <p className="text-center mt-2 sell-price">${item.price}</p>
        <button className="sell-button-item">Get now</button>
      </div>
    ));
  };

  return (
    <div data-aos="fade-up" className="mt-6">
      <h1 className="text-center ">
        <span className="text-primary">B</span>est Sellers
      </h1>
      <div className="arrival-text mx-auto mb-5 "></div>
      <div className="d-flex justify-content-center">
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("mobile");
          }}
        >
          Phone
        </div>
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("tablet");
          }}
        >
          Tablet
        </div>
        <div
          className="sell-button"
          onClick={() => {
            productArrHandler("accesory");
          }}
        >
          Acessory
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center sell-list  mt-5">
        {itemList(productArr)}
      </div>
    </div>
  );
};

export default BestSeller;
