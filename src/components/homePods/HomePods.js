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
        <SwiperSlide className="h-auto text-center">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <div onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/pika.png" alt="Action Toy Types" />
            <div className="absolute p-3 lg:p-6 bg-black/10 w-full h-full flex flex-col justify-between items-center">
              <div>
                <div className="relative text-orange-500 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="38" viewBox="0 0 48 28" fill="none">
                    <path d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z" fill="currentColor"/>
                    <path d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z" fill="currentColor"/>
                  </svg>
                  <span className="absolute bottom-2 w-full text-center text-white font-semibold text-xs">
                    Anime
                  </span>
                </div>
                <div className="absolute top-6 md:top-7 right-3 md:right-6">
                  <div className="flex items-center text-sm md:text-base drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path d="M9.53992 9.87H8.18994V11.22H9.53992V9.87Z" fill="white"/>
                      <path d="M8.18982 9.87H6.83984V11.22H8.18982V9.87Z" fill="white"/>
                      <path d="M6.83972 9.87H5.48975V11.22H6.83972V9.87Z" fill="#CCCCCC"/>
                      <path d="M5.47986 9.87H4.12988V11.22H5.47986V9.87Z" fill="#CCCCCC"/>
                      <path d="M8.18982 8.52H6.83984V9.87H8.18982V8.52Z" fill="#CCCCCC"/>
                      <path d="M6.83972 7.17H5.48975V8.52H6.83972V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 8.52H9.53979V9.87H10.8899V8.52Z" fill="#CCCCCC"/>
                      <path d="M12.2499 7.17H10.8999V8.52H12.2499V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 11.23H9.53979V12.58H10.8899V11.23Z" fill="#CCCCCC"/>
                      <path d="M12.2499 12.58H10.8999V13.93H12.2499V12.58Z" fill="#CCCCCC"/>
                      <path d="M8.18982 11.23H6.83984V12.58H8.18982V11.23Z" fill="#CCCCCC"/>
                      <path d="M6.83972 12.58H5.48975V13.93H6.83972V12.58Z" fill="#CCCCCC"/>
                      <path d="M10.8899 9.87H9.53979V11.22H10.8899V9.87Z" fill="white"/>
                      <path d="M12.2499 9.87H10.8999V11.22H12.2499V9.87Z" fill="#CCCCCC"/>
                      <path d="M13.6 9.87H12.25V11.22H13.6V9.87Z" fill="#CCCCCC"/>
                      <path d="M9.53992 8.52H8.18994V9.87H9.53992V8.52Z" fill="white"/>
                      <path d="M9.53992 7.17H8.18994V8.52H9.53992V7.17Z" fill="#CCCCCC"/>
                      <path d="M9.53992 5.82001H8.18994V7.17H9.53992V5.82001Z" fill="#CCCCCC"/>
                      <path d="M9.53992 4.46001H8.18994V5.81H9.53992V4.46001Z" fill="#999999"/>
                      <path d="M5.47986 5.82001H4.12988V7.17H5.47986V5.82001Z" fill="#999999"/>
                      <path d="M13.6 5.82001H12.25V7.17H13.6V5.82001Z" fill="#999999"/>
                      <path d="M4.12976 9.87H2.77979V11.22H4.12976V9.87Z" fill="#999999"/>
                      <path d="M9.53992 15.28H8.18994V16.63H9.53992V15.28Z" fill="#999999"/>
                      <path d="M10.8899 13.93H9.53979V15.28H10.8899V13.93Z" fill="#999999"/>
                      <path d="M8.18982 12.58H6.83984V13.93H8.18982V12.58Z" fill="#999999"/>
                      <path d="M8.18982 13.93H6.83984V15.28H8.18982V13.93Z" fill="#999999"/>
                      <path d="M6.83972 11.23H5.48975V12.58H6.83972V11.23Z" fill="#999999"/>
                      <path d="M5.47986 11.23H4.12988V12.58H5.47986V11.23Z" fill="#999999"/>
                      <path d="M5.47986 8.52H4.12988V9.87H5.47986V8.52Z" fill="#999999"/>
                      <path d="M6.83972 8.52H5.48975V9.87H6.83972V8.52Z" fill="#999999"/>
                      <path d="M8.18982 7.17H6.83984V8.52H8.18982V7.17Z" fill="#999999"/>
                      <path d="M8.18982 5.82001H6.83984V7.17H8.18982V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 5.82001H9.53979V7.17H10.8899V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 7.17H9.53979V8.52H10.8899V7.17Z" fill="#999999"/>
                      <path d="M12.2499 8.52H10.8999V9.87H12.2499V8.52Z" fill="#999999"/>
                      <path d="M13.6 8.52H12.25V9.87H13.6V8.52Z" fill="#999999"/>
                      <path d="M14.9498 9.87H13.5999V11.22H14.9498V9.87Z" fill="#999999"/>
                      <path d="M13.6 13.93H12.25V15.28H13.6V13.93Z" fill="#999999"/>
                      <path d="M5.47986 13.93H4.12988V15.28H5.47986V13.93Z" fill="#999999"/>
                      <path d="M9.53992 3.11H8.18994V4.46001H9.53992V3.11Z" fill="#999999"/>
                      <path d="M9.53992 17.99H8.18994V19.34H9.53992V17.99Z" fill="#999999"/>
                      <path d="M9.53992 20.66H8.18994V22.01H9.53992V20.66Z" fill="#999999"/>
                      <path d="M9.53992 0.399994H8.18994V1.75H9.53992V0.399994Z" fill="#999999"/>
                      <path d="M17.6599 9.87H16.3098V11.22H17.6599V9.87Z" fill="#999999"/>
                      <path d="M1.4198 9.87H0.0698242V11.22H1.4198V9.87Z" fill="#999999"/>
                      <path d="M13.6 11.23H12.25V12.58H13.6V11.23Z" fill="#999999"/>
                      <path d="M12.2499 11.23H10.8999V12.58H12.2499V11.23Z" fill="#999999"/>
                      <path d="M10.8899 12.58H9.53979V13.93H10.8899V12.58Z" fill="#999999"/>
                      <path d="M9.53992 11.23H8.18994V12.58H9.53992V11.23Z" fill="white"/>
                      <path d="M9.53992 12.58H8.18994V13.93H9.53992V12.58Z" fill="#CCCCCC"/>
                      <path d="M9.53992 13.93H8.18994V15.28H9.53992V13.93Z" fill="#CCCCCC"/>
                    </svg>
                    <span className="ml-2 text-gray-300">500 points</span>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6 drop-shadow-md">
                  Pokemon statues - new this week
                </div>
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto text-center">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <div onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/gaming-room.png" alt="Action Toy Types" />
            <div className="absolute p-3 lg:p-6 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div>
                <div className="relative text-pink-500 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="38" viewBox="0 0 48 28" fill="none">
                    <path d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z" fill="currentColor"/>
                    <path d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z" fill="currentColor"/>
                  </svg>
                  <span className="absolute bottom-2 w-full text-center text-white font-semibold text-xs">
                    Gaming
                  </span>
                </div>
                <div className="absolute top-6 md:top-7 right-3 md:right-6">
                  <div className="flex items-center text-sm md:text-base drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path d="M9.53992 9.87H8.18994V11.22H9.53992V9.87Z" fill="white"/>
                      <path d="M8.18982 9.87H6.83984V11.22H8.18982V9.87Z" fill="white"/>
                      <path d="M6.83972 9.87H5.48975V11.22H6.83972V9.87Z" fill="#CCCCCC"/>
                      <path d="M5.47986 9.87H4.12988V11.22H5.47986V9.87Z" fill="#CCCCCC"/>
                      <path d="M8.18982 8.52H6.83984V9.87H8.18982V8.52Z" fill="#CCCCCC"/>
                      <path d="M6.83972 7.17H5.48975V8.52H6.83972V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 8.52H9.53979V9.87H10.8899V8.52Z" fill="#CCCCCC"/>
                      <path d="M12.2499 7.17H10.8999V8.52H12.2499V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 11.23H9.53979V12.58H10.8899V11.23Z" fill="#CCCCCC"/>
                      <path d="M12.2499 12.58H10.8999V13.93H12.2499V12.58Z" fill="#CCCCCC"/>
                      <path d="M8.18982 11.23H6.83984V12.58H8.18982V11.23Z" fill="#CCCCCC"/>
                      <path d="M6.83972 12.58H5.48975V13.93H6.83972V12.58Z" fill="#CCCCCC"/>
                      <path d="M10.8899 9.87H9.53979V11.22H10.8899V9.87Z" fill="white"/>
                      <path d="M12.2499 9.87H10.8999V11.22H12.2499V9.87Z" fill="#CCCCCC"/>
                      <path d="M13.6 9.87H12.25V11.22H13.6V9.87Z" fill="#CCCCCC"/>
                      <path d="M9.53992 8.52H8.18994V9.87H9.53992V8.52Z" fill="white"/>
                      <path d="M9.53992 7.17H8.18994V8.52H9.53992V7.17Z" fill="#CCCCCC"/>
                      <path d="M9.53992 5.82001H8.18994V7.17H9.53992V5.82001Z" fill="#CCCCCC"/>
                      <path d="M9.53992 4.46001H8.18994V5.81H9.53992V4.46001Z" fill="#999999"/>
                      <path d="M5.47986 5.82001H4.12988V7.17H5.47986V5.82001Z" fill="#999999"/>
                      <path d="M13.6 5.82001H12.25V7.17H13.6V5.82001Z" fill="#999999"/>
                      <path d="M4.12976 9.87H2.77979V11.22H4.12976V9.87Z" fill="#999999"/>
                      <path d="M9.53992 15.28H8.18994V16.63H9.53992V15.28Z" fill="#999999"/>
                      <path d="M10.8899 13.93H9.53979V15.28H10.8899V13.93Z" fill="#999999"/>
                      <path d="M8.18982 12.58H6.83984V13.93H8.18982V12.58Z" fill="#999999"/>
                      <path d="M8.18982 13.93H6.83984V15.28H8.18982V13.93Z" fill="#999999"/>
                      <path d="M6.83972 11.23H5.48975V12.58H6.83972V11.23Z" fill="#999999"/>
                      <path d="M5.47986 11.23H4.12988V12.58H5.47986V11.23Z" fill="#999999"/>
                      <path d="M5.47986 8.52H4.12988V9.87H5.47986V8.52Z" fill="#999999"/>
                      <path d="M6.83972 8.52H5.48975V9.87H6.83972V8.52Z" fill="#999999"/>
                      <path d="M8.18982 7.17H6.83984V8.52H8.18982V7.17Z" fill="#999999"/>
                      <path d="M8.18982 5.82001H6.83984V7.17H8.18982V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 5.82001H9.53979V7.17H10.8899V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 7.17H9.53979V8.52H10.8899V7.17Z" fill="#999999"/>
                      <path d="M12.2499 8.52H10.8999V9.87H12.2499V8.52Z" fill="#999999"/>
                      <path d="M13.6 8.52H12.25V9.87H13.6V8.52Z" fill="#999999"/>
                      <path d="M14.9498 9.87H13.5999V11.22H14.9498V9.87Z" fill="#999999"/>
                      <path d="M13.6 13.93H12.25V15.28H13.6V13.93Z" fill="#999999"/>
                      <path d="M5.47986 13.93H4.12988V15.28H5.47986V13.93Z" fill="#999999"/>
                      <path d="M9.53992 3.11H8.18994V4.46001H9.53992V3.11Z" fill="#999999"/>
                      <path d="M9.53992 17.99H8.18994V19.34H9.53992V17.99Z" fill="#999999"/>
                      <path d="M9.53992 20.66H8.18994V22.01H9.53992V20.66Z" fill="#999999"/>
                      <path d="M9.53992 0.399994H8.18994V1.75H9.53992V0.399994Z" fill="#999999"/>
                      <path d="M17.6599 9.87H16.3098V11.22H17.6599V9.87Z" fill="#999999"/>
                      <path d="M1.4198 9.87H0.0698242V11.22H1.4198V9.87Z" fill="#999999"/>
                      <path d="M13.6 11.23H12.25V12.58H13.6V11.23Z" fill="#999999"/>
                      <path d="M12.2499 11.23H10.8999V12.58H12.2499V11.23Z" fill="#999999"/>
                      <path d="M10.8899 12.58H9.53979V13.93H10.8899V12.58Z" fill="#999999"/>
                      <path d="M9.53992 11.23H8.18994V12.58H9.53992V11.23Z" fill="white"/>
                      <path d="M9.53992 12.58H8.18994V13.93H9.53992V12.58Z" fill="#CCCCCC"/>
                      <path d="M9.53992 13.93H8.18994V15.28H9.53992V13.93Z" fill="#CCCCCC"/>
                    </svg>
                    <span className="ml-2 text-gray-300">500 points</span>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6 drop-shadow-md">
                  Design your gaming room - delivered to your door
                </div>
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto text-center">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <div onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/scooter.png" alt="Action Toy Types" />
            <div className="absolute p-3 lg:p-6 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div>
                <div className="relative text-green-400 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="38" viewBox="0 0 48 28" fill="none">
                    <path d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z" fill="currentColor"/>
                    <path d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z" fill="currentColor"/>
                  </svg>
                  <span className="absolute bottom-2 w-full text-center text-white font-semibold text-xs">
                    Sports
                  </span>
                </div>
                <div className="absolute top-6 md:top-7 right-3 md:right-6">
                  <div className="flex items-center text-sm md:text-base drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path d="M9.53992 9.87H8.18994V11.22H9.53992V9.87Z" fill="white"/>
                      <path d="M8.18982 9.87H6.83984V11.22H8.18982V9.87Z" fill="white"/>
                      <path d="M6.83972 9.87H5.48975V11.22H6.83972V9.87Z" fill="#CCCCCC"/>
                      <path d="M5.47986 9.87H4.12988V11.22H5.47986V9.87Z" fill="#CCCCCC"/>
                      <path d="M8.18982 8.52H6.83984V9.87H8.18982V8.52Z" fill="#CCCCCC"/>
                      <path d="M6.83972 7.17H5.48975V8.52H6.83972V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 8.52H9.53979V9.87H10.8899V8.52Z" fill="#CCCCCC"/>
                      <path d="M12.2499 7.17H10.8999V8.52H12.2499V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 11.23H9.53979V12.58H10.8899V11.23Z" fill="#CCCCCC"/>
                      <path d="M12.2499 12.58H10.8999V13.93H12.2499V12.58Z" fill="#CCCCCC"/>
                      <path d="M8.18982 11.23H6.83984V12.58H8.18982V11.23Z" fill="#CCCCCC"/>
                      <path d="M6.83972 12.58H5.48975V13.93H6.83972V12.58Z" fill="#CCCCCC"/>
                      <path d="M10.8899 9.87H9.53979V11.22H10.8899V9.87Z" fill="white"/>
                      <path d="M12.2499 9.87H10.8999V11.22H12.2499V9.87Z" fill="#CCCCCC"/>
                      <path d="M13.6 9.87H12.25V11.22H13.6V9.87Z" fill="#CCCCCC"/>
                      <path d="M9.53992 8.52H8.18994V9.87H9.53992V8.52Z" fill="white"/>
                      <path d="M9.53992 7.17H8.18994V8.52H9.53992V7.17Z" fill="#CCCCCC"/>
                      <path d="M9.53992 5.82001H8.18994V7.17H9.53992V5.82001Z" fill="#CCCCCC"/>
                      <path d="M9.53992 4.46001H8.18994V5.81H9.53992V4.46001Z" fill="#999999"/>
                      <path d="M5.47986 5.82001H4.12988V7.17H5.47986V5.82001Z" fill="#999999"/>
                      <path d="M13.6 5.82001H12.25V7.17H13.6V5.82001Z" fill="#999999"/>
                      <path d="M4.12976 9.87H2.77979V11.22H4.12976V9.87Z" fill="#999999"/>
                      <path d="M9.53992 15.28H8.18994V16.63H9.53992V15.28Z" fill="#999999"/>
                      <path d="M10.8899 13.93H9.53979V15.28H10.8899V13.93Z" fill="#999999"/>
                      <path d="M8.18982 12.58H6.83984V13.93H8.18982V12.58Z" fill="#999999"/>
                      <path d="M8.18982 13.93H6.83984V15.28H8.18982V13.93Z" fill="#999999"/>
                      <path d="M6.83972 11.23H5.48975V12.58H6.83972V11.23Z" fill="#999999"/>
                      <path d="M5.47986 11.23H4.12988V12.58H5.47986V11.23Z" fill="#999999"/>
                      <path d="M5.47986 8.52H4.12988V9.87H5.47986V8.52Z" fill="#999999"/>
                      <path d="M6.83972 8.52H5.48975V9.87H6.83972V8.52Z" fill="#999999"/>
                      <path d="M8.18982 7.17H6.83984V8.52H8.18982V7.17Z" fill="#999999"/>
                      <path d="M8.18982 5.82001H6.83984V7.17H8.18982V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 5.82001H9.53979V7.17H10.8899V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 7.17H9.53979V8.52H10.8899V7.17Z" fill="#999999"/>
                      <path d="M12.2499 8.52H10.8999V9.87H12.2499V8.52Z" fill="#999999"/>
                      <path d="M13.6 8.52H12.25V9.87H13.6V8.52Z" fill="#999999"/>
                      <path d="M14.9498 9.87H13.5999V11.22H14.9498V9.87Z" fill="#999999"/>
                      <path d="M13.6 13.93H12.25V15.28H13.6V13.93Z" fill="#999999"/>
                      <path d="M5.47986 13.93H4.12988V15.28H5.47986V13.93Z" fill="#999999"/>
                      <path d="M9.53992 3.11H8.18994V4.46001H9.53992V3.11Z" fill="#999999"/>
                      <path d="M9.53992 17.99H8.18994V19.34H9.53992V17.99Z" fill="#999999"/>
                      <path d="M9.53992 20.66H8.18994V22.01H9.53992V20.66Z" fill="#999999"/>
                      <path d="M9.53992 0.399994H8.18994V1.75H9.53992V0.399994Z" fill="#999999"/>
                      <path d="M17.6599 9.87H16.3098V11.22H17.6599V9.87Z" fill="#999999"/>
                      <path d="M1.4198 9.87H0.0698242V11.22H1.4198V9.87Z" fill="#999999"/>
                      <path d="M13.6 11.23H12.25V12.58H13.6V11.23Z" fill="#999999"/>
                      <path d="M12.2499 11.23H10.8999V12.58H12.2499V11.23Z" fill="#999999"/>
                      <path d="M10.8899 12.58H9.53979V13.93H10.8899V12.58Z" fill="#999999"/>
                      <path d="M9.53992 11.23H8.18994V12.58H9.53992V11.23Z" fill="white"/>
                      <path d="M9.53992 12.58H8.18994V13.93H9.53992V12.58Z" fill="#CCCCCC"/>
                      <path d="M9.53992 13.93H8.18994V15.28H9.53992V13.93Z" fill="#CCCCCC"/>
                    </svg>
                    <span className="ml-2 text-gray-300">500 points</span>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6 drop-shadow-md">
                  E-scooters for city or offroad
                </div>
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto text-center">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <div onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/pika.png" alt="Action Toy Types" />
            <div className="absolute p-3 lg:p-6 bg-black/10 w-full h-full flex flex-col justify-between items-center">
              <div>
                <div className="relative text-orange-500 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="38" viewBox="0 0 48 28" fill="none">
                    <path d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z" fill="currentColor"/>
                    <path d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z" fill="currentColor"/>
                  </svg>
                  <span className="absolute bottom-2 w-full text-center text-white font-semibold text-xs">
                    Anime
                  </span>
                </div>
                <div className="absolute top-6 md:top-7 right-3 md:right-6">
                  <div className="flex items-center text-sm md:text-base drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path d="M9.53992 9.87H8.18994V11.22H9.53992V9.87Z" fill="white"/>
                      <path d="M8.18982 9.87H6.83984V11.22H8.18982V9.87Z" fill="white"/>
                      <path d="M6.83972 9.87H5.48975V11.22H6.83972V9.87Z" fill="#CCCCCC"/>
                      <path d="M5.47986 9.87H4.12988V11.22H5.47986V9.87Z" fill="#CCCCCC"/>
                      <path d="M8.18982 8.52H6.83984V9.87H8.18982V8.52Z" fill="#CCCCCC"/>
                      <path d="M6.83972 7.17H5.48975V8.52H6.83972V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 8.52H9.53979V9.87H10.8899V8.52Z" fill="#CCCCCC"/>
                      <path d="M12.2499 7.17H10.8999V8.52H12.2499V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 11.23H9.53979V12.58H10.8899V11.23Z" fill="#CCCCCC"/>
                      <path d="M12.2499 12.58H10.8999V13.93H12.2499V12.58Z" fill="#CCCCCC"/>
                      <path d="M8.18982 11.23H6.83984V12.58H8.18982V11.23Z" fill="#CCCCCC"/>
                      <path d="M6.83972 12.58H5.48975V13.93H6.83972V12.58Z" fill="#CCCCCC"/>
                      <path d="M10.8899 9.87H9.53979V11.22H10.8899V9.87Z" fill="white"/>
                      <path d="M12.2499 9.87H10.8999V11.22H12.2499V9.87Z" fill="#CCCCCC"/>
                      <path d="M13.6 9.87H12.25V11.22H13.6V9.87Z" fill="#CCCCCC"/>
                      <path d="M9.53992 8.52H8.18994V9.87H9.53992V8.52Z" fill="white"/>
                      <path d="M9.53992 7.17H8.18994V8.52H9.53992V7.17Z" fill="#CCCCCC"/>
                      <path d="M9.53992 5.82001H8.18994V7.17H9.53992V5.82001Z" fill="#CCCCCC"/>
                      <path d="M9.53992 4.46001H8.18994V5.81H9.53992V4.46001Z" fill="#999999"/>
                      <path d="M5.47986 5.82001H4.12988V7.17H5.47986V5.82001Z" fill="#999999"/>
                      <path d="M13.6 5.82001H12.25V7.17H13.6V5.82001Z" fill="#999999"/>
                      <path d="M4.12976 9.87H2.77979V11.22H4.12976V9.87Z" fill="#999999"/>
                      <path d="M9.53992 15.28H8.18994V16.63H9.53992V15.28Z" fill="#999999"/>
                      <path d="M10.8899 13.93H9.53979V15.28H10.8899V13.93Z" fill="#999999"/>
                      <path d="M8.18982 12.58H6.83984V13.93H8.18982V12.58Z" fill="#999999"/>
                      <path d="M8.18982 13.93H6.83984V15.28H8.18982V13.93Z" fill="#999999"/>
                      <path d="M6.83972 11.23H5.48975V12.58H6.83972V11.23Z" fill="#999999"/>
                      <path d="M5.47986 11.23H4.12988V12.58H5.47986V11.23Z" fill="#999999"/>
                      <path d="M5.47986 8.52H4.12988V9.87H5.47986V8.52Z" fill="#999999"/>
                      <path d="M6.83972 8.52H5.48975V9.87H6.83972V8.52Z" fill="#999999"/>
                      <path d="M8.18982 7.17H6.83984V8.52H8.18982V7.17Z" fill="#999999"/>
                      <path d="M8.18982 5.82001H6.83984V7.17H8.18982V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 5.82001H9.53979V7.17H10.8899V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 7.17H9.53979V8.52H10.8899V7.17Z" fill="#999999"/>
                      <path d="M12.2499 8.52H10.8999V9.87H12.2499V8.52Z" fill="#999999"/>
                      <path d="M13.6 8.52H12.25V9.87H13.6V8.52Z" fill="#999999"/>
                      <path d="M14.9498 9.87H13.5999V11.22H14.9498V9.87Z" fill="#999999"/>
                      <path d="M13.6 13.93H12.25V15.28H13.6V13.93Z" fill="#999999"/>
                      <path d="M5.47986 13.93H4.12988V15.28H5.47986V13.93Z" fill="#999999"/>
                      <path d="M9.53992 3.11H8.18994V4.46001H9.53992V3.11Z" fill="#999999"/>
                      <path d="M9.53992 17.99H8.18994V19.34H9.53992V17.99Z" fill="#999999"/>
                      <path d="M9.53992 20.66H8.18994V22.01H9.53992V20.66Z" fill="#999999"/>
                      <path d="M9.53992 0.399994H8.18994V1.75H9.53992V0.399994Z" fill="#999999"/>
                      <path d="M17.6599 9.87H16.3098V11.22H17.6599V9.87Z" fill="#999999"/>
                      <path d="M1.4198 9.87H0.0698242V11.22H1.4198V9.87Z" fill="#999999"/>
                      <path d="M13.6 11.23H12.25V12.58H13.6V11.23Z" fill="#999999"/>
                      <path d="M12.2499 11.23H10.8999V12.58H12.2499V11.23Z" fill="#999999"/>
                      <path d="M10.8899 12.58H9.53979V13.93H10.8899V12.58Z" fill="#999999"/>
                      <path d="M9.53992 11.23H8.18994V12.58H9.53992V11.23Z" fill="white"/>
                      <path d="M9.53992 12.58H8.18994V13.93H9.53992V12.58Z" fill="#CCCCCC"/>
                      <path d="M9.53992 13.93H8.18994V15.28H9.53992V13.93Z" fill="#CCCCCC"/>
                    </svg>
                    <span className="ml-2 text-gray-300">500 points</span>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6 drop-shadow-md">
                  Pokemon statues - new this week
                </div>
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto text-center">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <div onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/gaming-room.png" alt="Action Toy Types" />
            <div className="absolute p-3 lg:p-6 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div>
                <div className="relative text-pink-500 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="38" viewBox="0 0 48 28" fill="none">
                    <path d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z" fill="currentColor"/>
                    <path d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z" fill="currentColor"/>
                  </svg>
                  <span className="absolute bottom-2 w-full text-center text-white font-semibold text-xs">
                    Gaming
                  </span>
                </div>
                <div className="absolute top-6 md:top-7 right-3 md:right-6">
                  <div className="flex items-center text-sm md:text-base drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path d="M9.53992 9.87H8.18994V11.22H9.53992V9.87Z" fill="white"/>
                      <path d="M8.18982 9.87H6.83984V11.22H8.18982V9.87Z" fill="white"/>
                      <path d="M6.83972 9.87H5.48975V11.22H6.83972V9.87Z" fill="#CCCCCC"/>
                      <path d="M5.47986 9.87H4.12988V11.22H5.47986V9.87Z" fill="#CCCCCC"/>
                      <path d="M8.18982 8.52H6.83984V9.87H8.18982V8.52Z" fill="#CCCCCC"/>
                      <path d="M6.83972 7.17H5.48975V8.52H6.83972V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 8.52H9.53979V9.87H10.8899V8.52Z" fill="#CCCCCC"/>
                      <path d="M12.2499 7.17H10.8999V8.52H12.2499V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 11.23H9.53979V12.58H10.8899V11.23Z" fill="#CCCCCC"/>
                      <path d="M12.2499 12.58H10.8999V13.93H12.2499V12.58Z" fill="#CCCCCC"/>
                      <path d="M8.18982 11.23H6.83984V12.58H8.18982V11.23Z" fill="#CCCCCC"/>
                      <path d="M6.83972 12.58H5.48975V13.93H6.83972V12.58Z" fill="#CCCCCC"/>
                      <path d="M10.8899 9.87H9.53979V11.22H10.8899V9.87Z" fill="white"/>
                      <path d="M12.2499 9.87H10.8999V11.22H12.2499V9.87Z" fill="#CCCCCC"/>
                      <path d="M13.6 9.87H12.25V11.22H13.6V9.87Z" fill="#CCCCCC"/>
                      <path d="M9.53992 8.52H8.18994V9.87H9.53992V8.52Z" fill="white"/>
                      <path d="M9.53992 7.17H8.18994V8.52H9.53992V7.17Z" fill="#CCCCCC"/>
                      <path d="M9.53992 5.82001H8.18994V7.17H9.53992V5.82001Z" fill="#CCCCCC"/>
                      <path d="M9.53992 4.46001H8.18994V5.81H9.53992V4.46001Z" fill="#999999"/>
                      <path d="M5.47986 5.82001H4.12988V7.17H5.47986V5.82001Z" fill="#999999"/>
                      <path d="M13.6 5.82001H12.25V7.17H13.6V5.82001Z" fill="#999999"/>
                      <path d="M4.12976 9.87H2.77979V11.22H4.12976V9.87Z" fill="#999999"/>
                      <path d="M9.53992 15.28H8.18994V16.63H9.53992V15.28Z" fill="#999999"/>
                      <path d="M10.8899 13.93H9.53979V15.28H10.8899V13.93Z" fill="#999999"/>
                      <path d="M8.18982 12.58H6.83984V13.93H8.18982V12.58Z" fill="#999999"/>
                      <path d="M8.18982 13.93H6.83984V15.28H8.18982V13.93Z" fill="#999999"/>
                      <path d="M6.83972 11.23H5.48975V12.58H6.83972V11.23Z" fill="#999999"/>
                      <path d="M5.47986 11.23H4.12988V12.58H5.47986V11.23Z" fill="#999999"/>
                      <path d="M5.47986 8.52H4.12988V9.87H5.47986V8.52Z" fill="#999999"/>
                      <path d="M6.83972 8.52H5.48975V9.87H6.83972V8.52Z" fill="#999999"/>
                      <path d="M8.18982 7.17H6.83984V8.52H8.18982V7.17Z" fill="#999999"/>
                      <path d="M8.18982 5.82001H6.83984V7.17H8.18982V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 5.82001H9.53979V7.17H10.8899V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 7.17H9.53979V8.52H10.8899V7.17Z" fill="#999999"/>
                      <path d="M12.2499 8.52H10.8999V9.87H12.2499V8.52Z" fill="#999999"/>
                      <path d="M13.6 8.52H12.25V9.87H13.6V8.52Z" fill="#999999"/>
                      <path d="M14.9498 9.87H13.5999V11.22H14.9498V9.87Z" fill="#999999"/>
                      <path d="M13.6 13.93H12.25V15.28H13.6V13.93Z" fill="#999999"/>
                      <path d="M5.47986 13.93H4.12988V15.28H5.47986V13.93Z" fill="#999999"/>
                      <path d="M9.53992 3.11H8.18994V4.46001H9.53992V3.11Z" fill="#999999"/>
                      <path d="M9.53992 17.99H8.18994V19.34H9.53992V17.99Z" fill="#999999"/>
                      <path d="M9.53992 20.66H8.18994V22.01H9.53992V20.66Z" fill="#999999"/>
                      <path d="M9.53992 0.399994H8.18994V1.75H9.53992V0.399994Z" fill="#999999"/>
                      <path d="M17.6599 9.87H16.3098V11.22H17.6599V9.87Z" fill="#999999"/>
                      <path d="M1.4198 9.87H0.0698242V11.22H1.4198V9.87Z" fill="#999999"/>
                      <path d="M13.6 11.23H12.25V12.58H13.6V11.23Z" fill="#999999"/>
                      <path d="M12.2499 11.23H10.8999V12.58H12.2499V11.23Z" fill="#999999"/>
                      <path d="M10.8899 12.58H9.53979V13.93H10.8899V12.58Z" fill="#999999"/>
                      <path d="M9.53992 11.23H8.18994V12.58H9.53992V11.23Z" fill="white"/>
                      <path d="M9.53992 12.58H8.18994V13.93H9.53992V12.58Z" fill="#CCCCCC"/>
                      <path d="M9.53992 13.93H8.18994V15.28H9.53992V13.93Z" fill="#CCCCCC"/>
                    </svg>
                    <span className="ml-2 text-gray-300">500 points</span>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6 drop-shadow-md">
                  Design your gaming room - delivered to your door
                </div>
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto text-center">
          <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black after:to-gray-100 hover:after:animate-borderGradient after:z-0">
          <div onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-[calc(1.5rem)] cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden">
            <img className="w-full" src="/scooter.png" alt="Action Toy Types" />
            <div className="absolute p-3 lg:p-6 bg-black/40 w-full h-full flex flex-col justify-between items-center">
              <div>
                <div className="relative text-green-400 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="38" viewBox="0 0 48 28" fill="none">
                    <path d="M23.6899 20.55C29.2128 20.55 33.6899 16.0729 33.6899 10.55C33.6899 5.02716 29.2128 0.550003 23.6899 0.550003C18.1671 0.550003 13.6899 5.02716 13.6899 10.55C13.6899 16.0729 18.1671 20.55 23.6899 20.55Z" fill="currentColor"/>
                    <path d="M10.1899 7.07001H37.1899C42.7099 7.07001 47.1899 11.55 47.1899 17.07C47.1899 22.59 42.7099 27.07 37.1899 27.07H10.1899C4.66994 27.07 0.189941 22.59 0.189941 17.07C0.189941 11.55 4.66994 7.07001 10.1899 7.07001Z" fill="currentColor"/>
                  </svg>
                  <span className="absolute bottom-2 w-full text-center text-white font-semibold text-xs">
                    Sports
                  </span>
                </div>
                <div className="absolute top-6 md:top-7 right-3 md:right-6">
                  <div className="flex items-center text-sm md:text-base drop-shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                      <path d="M9.53992 9.87H8.18994V11.22H9.53992V9.87Z" fill="white"/>
                      <path d="M8.18982 9.87H6.83984V11.22H8.18982V9.87Z" fill="white"/>
                      <path d="M6.83972 9.87H5.48975V11.22H6.83972V9.87Z" fill="#CCCCCC"/>
                      <path d="M5.47986 9.87H4.12988V11.22H5.47986V9.87Z" fill="#CCCCCC"/>
                      <path d="M8.18982 8.52H6.83984V9.87H8.18982V8.52Z" fill="#CCCCCC"/>
                      <path d="M6.83972 7.17H5.48975V8.52H6.83972V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 8.52H9.53979V9.87H10.8899V8.52Z" fill="#CCCCCC"/>
                      <path d="M12.2499 7.17H10.8999V8.52H12.2499V7.17Z" fill="#CCCCCC"/>
                      <path d="M10.8899 11.23H9.53979V12.58H10.8899V11.23Z" fill="#CCCCCC"/>
                      <path d="M12.2499 12.58H10.8999V13.93H12.2499V12.58Z" fill="#CCCCCC"/>
                      <path d="M8.18982 11.23H6.83984V12.58H8.18982V11.23Z" fill="#CCCCCC"/>
                      <path d="M6.83972 12.58H5.48975V13.93H6.83972V12.58Z" fill="#CCCCCC"/>
                      <path d="M10.8899 9.87H9.53979V11.22H10.8899V9.87Z" fill="white"/>
                      <path d="M12.2499 9.87H10.8999V11.22H12.2499V9.87Z" fill="#CCCCCC"/>
                      <path d="M13.6 9.87H12.25V11.22H13.6V9.87Z" fill="#CCCCCC"/>
                      <path d="M9.53992 8.52H8.18994V9.87H9.53992V8.52Z" fill="white"/>
                      <path d="M9.53992 7.17H8.18994V8.52H9.53992V7.17Z" fill="#CCCCCC"/>
                      <path d="M9.53992 5.82001H8.18994V7.17H9.53992V5.82001Z" fill="#CCCCCC"/>
                      <path d="M9.53992 4.46001H8.18994V5.81H9.53992V4.46001Z" fill="#999999"/>
                      <path d="M5.47986 5.82001H4.12988V7.17H5.47986V5.82001Z" fill="#999999"/>
                      <path d="M13.6 5.82001H12.25V7.17H13.6V5.82001Z" fill="#999999"/>
                      <path d="M4.12976 9.87H2.77979V11.22H4.12976V9.87Z" fill="#999999"/>
                      <path d="M9.53992 15.28H8.18994V16.63H9.53992V15.28Z" fill="#999999"/>
                      <path d="M10.8899 13.93H9.53979V15.28H10.8899V13.93Z" fill="#999999"/>
                      <path d="M8.18982 12.58H6.83984V13.93H8.18982V12.58Z" fill="#999999"/>
                      <path d="M8.18982 13.93H6.83984V15.28H8.18982V13.93Z" fill="#999999"/>
                      <path d="M6.83972 11.23H5.48975V12.58H6.83972V11.23Z" fill="#999999"/>
                      <path d="M5.47986 11.23H4.12988V12.58H5.47986V11.23Z" fill="#999999"/>
                      <path d="M5.47986 8.52H4.12988V9.87H5.47986V8.52Z" fill="#999999"/>
                      <path d="M6.83972 8.52H5.48975V9.87H6.83972V8.52Z" fill="#999999"/>
                      <path d="M8.18982 7.17H6.83984V8.52H8.18982V7.17Z" fill="#999999"/>
                      <path d="M8.18982 5.82001H6.83984V7.17H8.18982V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 5.82001H9.53979V7.17H10.8899V5.82001Z" fill="#999999"/>
                      <path d="M10.8899 7.17H9.53979V8.52H10.8899V7.17Z" fill="#999999"/>
                      <path d="M12.2499 8.52H10.8999V9.87H12.2499V8.52Z" fill="#999999"/>
                      <path d="M13.6 8.52H12.25V9.87H13.6V8.52Z" fill="#999999"/>
                      <path d="M14.9498 9.87H13.5999V11.22H14.9498V9.87Z" fill="#999999"/>
                      <path d="M13.6 13.93H12.25V15.28H13.6V13.93Z" fill="#999999"/>
                      <path d="M5.47986 13.93H4.12988V15.28H5.47986V13.93Z" fill="#999999"/>
                      <path d="M9.53992 3.11H8.18994V4.46001H9.53992V3.11Z" fill="#999999"/>
                      <path d="M9.53992 17.99H8.18994V19.34H9.53992V17.99Z" fill="#999999"/>
                      <path d="M9.53992 20.66H8.18994V22.01H9.53992V20.66Z" fill="#999999"/>
                      <path d="M9.53992 0.399994H8.18994V1.75H9.53992V0.399994Z" fill="#999999"/>
                      <path d="M17.6599 9.87H16.3098V11.22H17.6599V9.87Z" fill="#999999"/>
                      <path d="M1.4198 9.87H0.0698242V11.22H1.4198V9.87Z" fill="#999999"/>
                      <path d="M13.6 11.23H12.25V12.58H13.6V11.23Z" fill="#999999"/>
                      <path d="M12.2499 11.23H10.8999V12.58H12.2499V11.23Z" fill="#999999"/>
                      <path d="M10.8899 12.58H9.53979V13.93H10.8899V12.58Z" fill="#999999"/>
                      <path d="M9.53992 11.23H8.18994V12.58H9.53992V11.23Z" fill="white"/>
                      <path d="M9.53992 12.58H8.18994V13.93H9.53992V12.58Z" fill="#CCCCCC"/>
                      <path d="M9.53992 13.93H8.18994V15.28H9.53992V13.93Z" fill="#CCCCCC"/>
                    </svg>
                    <span className="ml-2 text-gray-300">500 points</span>
                  </div>
                </div>
                <div className="text-white font-semibold text-lg leading-[1.2] md:text-xl lg:text-3xl lg:px-6 drop-shadow-md">
                  E-scooters for city or offroad
                </div>
              </div>
              <Button
                onClick={goToLinkHandler}
              >
                Shop Now
              </Button>
          </div>
          </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HomePods;
