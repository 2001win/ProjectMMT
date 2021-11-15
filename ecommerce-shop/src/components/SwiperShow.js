import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import hoverEffect from "hover-effect";
import SwiperCore, {
  EffectFade,
  Pagination,
  Parallax,
  Autoplay,
  Navigation,
} from "swiper";
// swiper show thu vien
const SwiperShow = () => {
  SwiperCore.use([EffectFade, Pagination, Autoplay, Navigation, Parallax]);
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  const containerHuawei = useRef();
  const containerIphone = useRef();
  const containerSamsung = useRef();
// Hover effect thu vien
  useEffect(() => {
    console.log(containerHuawei.current);

    new hoverEffect({
      parent: containerHuawei.current,
      intensity: 0.3,
      image1: "img/huawei-1-rm.png",
      image2: "img/huawei-2-rm.png",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [containerHuawei]);
  useEffect(() => {
    console.log(containerSamsung.current);

    new hoverEffect({
      parent: containerSamsung.current,
      intensity: 0.3,
      image1: "img/galaxy-20-1-rm.png",
      image2: "img/galaxy-20-2-rm.png",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [containerSamsung]);
  useEffect(() => {
    console.log(containerIphone.current);

    new hoverEffect({
      parent: containerIphone.current,
      intensity: 0.3,
      image1: "img/iphone-12-1-rm.png",
      image2: "img/iphone-12-2-rm.png",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [containerHuawei]);
  return (
    <div data-aos="fade-up">
      <Swiper
        // effect={"fade"}
        spaceBetween={30}
        grabCursor={true}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="d-flex justify-content-center py-5 swiper-box huawei">
            <div
              className="swiper-img me-5"
              ref={containerHuawei}
              data-swiper-parallax="-400"
            />
            <div className="swiper-text mt-6">
              <h2 data-swiper-parallax="-400">Huawei Mate 30 Pro</h2>
              <p data-swiper-parallax="-400">
                First of all, the Mate 30 Pro is a premium phone from the
                perfection of the device. The seamlessness to touch as well as
                to look, and the device owns the screen. The back is made very
                good looking with a very pleasant color scheme.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center py-5 swiper-box samsung">
            <div
              className="swiper-img me-5"
              ref={containerSamsung}
              data-swiper-parallax="-400"
            />
            <div className="swiper-text mt-6">
              <h2 data-swiper-parallax="-400"> Samsung Galaxy A20</h2>
              <p data-swiper-parallax="-400">
                Experience the power of the Exynos 7884 Octa-core Processor by
                bringing home this Samsung smartphone. Featuring 3 GB of RAM and
                a storage capacity of 32 GB (expandable up to 512 GB), this
                handset takes smartphone performance to a new high.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-center py-5 swiper-box iphone">
            <div className="swiper-img me-5" ref={containerIphone} />
            <div className="swiper-text mt-6">
              <h2 data-swiper-parallax="-400">Iphone 12 Pacific</h2>
              <p data-swiper-parallax="-400">
                At first glance, the iPhone 12 Pro looks like a phone that's
                caught between two stools. With the same dimensions and chipset
                as the iPhone 12, it’s easy to wonder whether the Pro is worth
                the extra cash – especially when the iPhone 12 Pro Max is out
                there with a better camera sensor and longer battery life.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperShow;
