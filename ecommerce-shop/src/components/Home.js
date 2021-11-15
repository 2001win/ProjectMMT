import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CarouselItem from "./CarouselItem";
import mobileData from "../mobile-data";
import BestSeller from "./BestSeller";
import CountdownTime from "./CountdownTime";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import SwiperShow from "./SwiperShow";
const Home = () => {
  const handleDragStart = e => e.preventDefault();
  const responsiveOption = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };
  const items = mobileData.map(item => (
    <CarouselItem
      src={item.img}
      title={item.title}
      price={item.price}
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <SwiperShow />

      <div className="d-flex flex-wrap flex-row mt-6 py-2 px-4 w-70 justify-content-center mx-auto">
        <div data-aos="fade-up" className="box px-4 position-relative">
          <img src="/img/product-1.jpg" alt="Phone" className="rounded"></img>
          <h3 className=" box-text">IPhone</h3>
        </div>
        <div data-aos="fade-up" className="box px-4 position-relative">
          <img src="/img/phone-pk.jpg" className="rounded" alt="Phone"></img>
          <h3 className=" box-text">Accessories</h3>
        </div>
        <div data-aos="fade-up" className="box px-4 position-relative">
          <img src="/img/phone-table.jpg" className="rounded" alt="Phone"></img>
          <h3 className="box-text">Tablet</h3>
        </div>

      </div>
      {/* animation fade-up */}
      <div data-aos="fade-up" className="mt-5">
        <h1 className="text-center ">
          <span className="text-primary">T</span>op Device
        </h1>
        <div className="arrival-text mx-auto mb-5 "></div>
        <div className="px-3 py-2">
          {/* React alice carsousell */}
          <AliceCarousel
            className="py-5"
            mouseTracking
            disableButtonsControls
            animationDuration={800}
            infinite={true}
            items={items}
            keyboardNavigation={true}
            autoPlayInterval={1000}
            autoPlay={true}
            responsive={responsiveOption}
          />
        </div>
      </div>
{/* Export countdowntime reaact countdown */}
      <CountdownTime /> 
      <BestSeller data-aos="fade-up" />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
