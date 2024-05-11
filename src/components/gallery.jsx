import React from "react";
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

function Gallery() {
  return (
    <div className="">
      <div className="border-b-2 border-black bg-white">
        <div>
          <div className="align-middle text-center">
            <h1 className="text-5xl font-bold p-10 text-black">Gallery</h1>
          </div>
        </div>
        <div className="mb-20">
          <div className="flex gap-10 ">
            <div className="w-[300px] h-[300px] text-center mx-auto ">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper "
              >
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[300px] h-[300px] text-center mx-auto ">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2700,
                  disableOnInteraction: false,
                }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper "
              >
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[300px] h-[300px] text-center mx-auto ">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2900,
                  disableOnInteraction: false,
                }}
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper "
              >
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-center bg-cover">
                  <img
                    className="block w-[100%]"
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
