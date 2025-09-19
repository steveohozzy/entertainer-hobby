import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const HomePods= () => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate("/category");
      window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  };

  return (
    <div className="pb-5 fade-out-right mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        autoplay={true}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        loop
      >
        <SwiperSlide className="h-auto">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/pika.png" alt="Action Toy Types" />
            <div className="absolute p-4 lg:p-8 bg-black/10 w-full h-full flex flex-col justify-between items-center">
              <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6">
                Pokemon statues - new this week
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/gaming-room.png" alt="Action Toy Types" />
            <div className="absolute p-4 lg:p-8 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6">
                Design your gaming room - delivered to your door
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/scooter.png" alt="Action Toy Types" />
            <div className="absolute p-4 lg:p-8 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6">
                E-scooters for city or offroad
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/pika.png" alt="Action Toy Types" />
            <div className="absolute p-4 lg:p-8 bg-black/10 w-full h-full flex flex-col justify-between items-center">
              <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6">
                Pokemon statues - new this week
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/gaming-room.png" alt="Action Toy Types" />
            <div className="absolute p-4 lg:p-8 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6">
                Design your gaming room - delivered to your door
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/scooter.png" alt="Action Toy Types" />
            <div className="absolute p-4 lg:p-8 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6">
                E-scooters for city or offroad
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </button>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HomePods;
