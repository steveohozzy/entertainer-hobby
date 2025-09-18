import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { preload } from 'react-dom';
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useRef } from "react";

const HomeCarouselArrows = () => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate("/category/?brand=lego");
      window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  };

  const sliderRef = useRef();

  return (
    <div className="relative mt-12">
    <Swiper
      className="rounded-xl overflow-hidden [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-3 [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2]"
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoPlay={false}
      onTransitionEnd={() => {
        const slides = document.querySelectorAll(".swiper-slide");

        slides.forEach((slide) => {
          if (slide.classList.contains("swiper-slide-active")) {
            const video = slide.querySelector("video");
            if (video) {
              video.play();
            }
          } else {
            const video = slide.querySelector("video");
            if (video) {
              video.pause();
            }
          }
        });
      } }
      onSwiper={it => (sliderRef.current = it)}
      loop
    >
      <SwiperSlide className="h-auto shadow-lg rounded-xl overflow-hidden">
        <div className="rounded-xl bg-yellow-300 flex flex-wrap flex-row-reverse md:flex-row h-full">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12">
            <div className="mb-5 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
              >
                <g clipPath="url(#clip0_2087_234)">
                  <path
                    d="M0.615417 0.602844V89.3971H89.4097V0.602844H0.615417Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.615417 89.3971V0.602844H89.4097V89.3971H0.615417ZM81.6983 46.0299C82.477 43.7315 83.3561 40.2777 83.5069 37.5147C83.6199 35.4298 83.331 32.5035 81.3718 30.4312C79.8019 28.7734 77.403 27.9319 74.2381 27.9319C70.2442 27.9319 67.029 29.3385 64.6679 32.1267L64.0525 32.8551L63.638 31.9886C63.2989 31.2852 63.0603 30.9964 62.6961 30.5819C61.0885 28.7608 58.3882 27.844 54.6707 27.844C51.2671 27.844 48.1901 28.8613 46.0173 30.7201L45.4647 31.1848L45.0879 30.5694C44.0581 28.899 41.496 27.8189 38.5571 27.8189C34.3246 27.8189 30.067 28.3966 27.4923 32.5412L26.4248 34.2492L26.3369 32.2272C26.2741 30.6698 26.1234 30.0167 25.4075 29.2506C24.6037 28.4092 23.2724 27.9947 21.3006 27.9947C18.412 27.9947 16.2518 29.2506 14.6693 31.8378C12.2453 35.7187 6.38014 48.4664 6.50573 54.52C6.59365 58.451 9.21854 60.8624 13.5264 60.9629C17.0807 61.0508 19.9065 60.134 21.7025 58.3254L22.1546 57.8607L22.5942 58.338C24.2018 60.0837 26.6634 61.0508 29.5018 61.0508C33.1189 61.0508 36.2085 59.933 37.9919 57.9612L38.4817 57.4212L38.9339 57.9863C40.5917 60.0335 43.1663 61.101 46.369 61.0885C50.5387 61.0759 54.432 59.1543 57.0569 55.8387L57.7477 54.9721L58.137 56.0145C59.7572 60.4103 64.1278 61.0634 66.602 61.0634C74.9791 61.0634 78.6087 55.3112 81.7234 46.0299H81.6983Z"
                    fill="#FFED00"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.615417 89.3971V0.602844H89.4097V89.3971H0.615417ZM82.2509 52.523C83.4064 50.1368 85.5917 44.146 85.9936 40.9182V40.8805C86.496 36.9369 86.9607 33.2068 84.2981 29.4893C82.4016 26.8518 79.1739 25.0809 74.2758 25.0809C70.5708 25.0809 67.2551 26.0857 64.6051 28.2836C62.3319 26.0354 59.079 25.0181 54.7084 25.0181C51.2797 25.0181 48.4036 25.7968 45.9043 27.3039C44.0832 25.8596 41.9481 24.9553 38.5571 24.9553C35.4801 24.9553 31.1471 25.1186 27.8817 27.8817C27.1281 26.3369 25.5959 25.1312 21.3634 25.1312C17.47 25.1312 14.2799 26.9774 12.1951 30.3935C9.40693 34.8395 3.50406 47.6877 3.65477 54.6958C3.7678 59.9832 7.72399 63.6129 13.4636 63.751C16.9048 63.8264 19.8437 63.098 22.0918 61.6034C24.1139 63.0603 26.7011 63.8515 29.5772 63.8515C33.0184 63.8515 36.1206 62.9473 38.4315 61.3271C40.5163 62.9849 43.2543 63.8766 46.3564 63.8766C50.3754 63.8766 54.1055 62.4951 57.1197 59.8451C59.1795 62.47 62.6961 63.8264 66.9788 63.8264C74.9916 63.8264 79.1488 58.9032 82.2635 52.4853L82.2509 52.523Z"
                    fill="#E3000B"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 90V0H90V89.9874H0V90ZM88.7566 88.7566V1.24337H1.24337V88.7566H88.7566Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M83.8083 27.1532C83.8083 25.9601 84.7628 24.993 85.9559 24.993C87.149 24.993 88.1161 25.9475 88.1161 27.1407C88.1161 28.3338 87.1616 29.3009 85.9685 29.3009C84.7753 29.3009 83.8208 28.3464 83.8083 27.1532ZM85.9685 25.42C86.923 25.42 87.7017 26.1987 87.7017 27.1532C87.7017 28.1077 86.923 28.8864 85.9685 28.8864C85.014 28.8864 84.2353 28.1077 84.2478 27.1532C84.2478 26.1987 85.014 25.42 85.9685 25.42ZM86.8099 27.8189L87.0737 28.271H86.5211L86.3453 27.9068C86.2699 27.7435 86.1569 27.6054 86.0438 27.4672C85.9559 27.3793 85.8806 27.3542 85.6796 27.3542H85.5917V28.271H85.127V26.0354H86.2448C86.722 26.0354 86.9481 26.2992 86.9481 26.6509C86.9481 26.99 86.722 27.2286 86.3453 27.2788C86.5336 27.3542 86.5964 27.417 86.8225 27.8189H86.8099ZM85.5791 26.3871V27.0025H86.0438C86.3578 27.0025 86.4583 26.8518 86.4583 26.6885C86.4583 26.4876 86.3076 26.3871 85.9936 26.3871H85.5791ZM64.1906 31.7248C66.3634 29.1502 69.5786 27.3039 74.2381 27.3039C82.2886 27.3039 84.3986 32.5663 84.1348 37.5398C83.9841 40.5289 83.017 44.0957 82.3011 46.2183C79.1111 55.688 75.2931 61.6662 66.5895 61.6662C62.6207 61.6662 58.9785 60.1214 57.5468 56.2155C54.9344 59.5311 50.928 61.6913 46.369 61.7039C42.89 61.7164 40.1772 60.4856 38.4566 58.3757C36.4094 60.6363 32.9556 61.6662 29.5144 61.6662C26.4248 61.6662 23.8501 60.5861 22.1546 58.7525C20.2707 60.6615 17.3067 61.6662 13.5264 61.5783C8.69105 61.4653 5.9908 58.5641 5.90288 54.5325C5.76473 48.2905 11.7053 35.4173 14.1543 31.5113C15.8499 28.7357 18.1859 27.3793 21.3132 27.3793C23.0212 27.3793 24.7795 27.6807 25.8722 28.8236C26.7639 29.7656 26.9146 30.607 26.9774 32.2021C29.7153 27.7812 34.3372 27.1909 38.5696 27.1909C41.8099 27.1909 44.4976 28.4092 45.628 30.2428C47.8007 28.3966 50.928 27.2286 54.6832 27.2286C58.5264 27.2286 61.3899 28.1705 63.1733 30.18C63.5627 30.6196 63.8515 30.9587 64.2158 31.7248H64.1906ZM21.803 53.4524C21.9411 51.9453 20.8108 50.3126 16.3145 51.1038C16.7667 50.0991 17.4323 48.7301 18.1859 47.1728C20.6098 42.1742 23.9506 35.2665 24.0134 32.5663C24.0511 31.235 23.511 30.1172 21.3508 30.1298C19.065 30.1298 17.6333 31.0843 16.4653 33.0059C13.9157 37.0625 8.51522 49.3204 8.62825 54.6204C8.69105 57.6472 11.0396 58.8404 13.652 58.9032C17.2439 58.9911 21.3885 57.9738 21.8155 53.465L21.803 53.4524ZM30.9713 46.9341C30.6698 47.7379 30.1047 49.4334 29.6525 51.2169C31.1345 50.8526 32.2397 50.5889 34.1362 50.6391C36.2964 50.6894 37.6905 51.5936 37.6905 53.3771C37.6905 57.71 32.8928 58.9911 29.5772 58.9911C25.9224 58.9911 22.7198 56.9188 22.7198 52.9249C22.7198 48.2403 25.2568 41.1443 27.643 36.4094C30.5694 30.607 33.5585 29.8284 38.7078 29.8284C40.9685 29.8284 43.5808 30.7954 43.5808 32.9305C43.5808 35.8945 41.0815 37.0248 38.5948 37.163C37.5272 37.2258 35.8945 37.2886 34.9149 37.2132C34.9149 37.2132 34.086 38.4817 33.2068 40.7173C37.8161 40.0642 39.7628 41.1192 38.9841 43.7818C37.9291 47.3863 34.8144 47.6123 30.9964 46.9341H30.9713ZM50.9531 37.3765C51.556 36.5225 52.3723 35.7312 53.6157 35.7312C55.1479 35.7312 54.9972 36.535 54.633 37.5775C53.6031 40.5163 56.7178 40.5917 57.4714 40.5289C60.1842 40.3154 61.6788 38.5696 62.043 35.5805C62.5454 31.5113 59.1167 29.954 54.7712 29.954C47.537 29.954 44.686 34.3874 41.9732 40.7173C40.7047 43.6938 39.0971 48.7678 39.0971 52.0081C39.0971 56.5546 41.8602 59.0162 46.3187 59.0162C52.8245 59.0162 57.4212 53.8292 58.7399 47.3612C59.1418 45.3768 59.6442 41.6341 54.5828 41.8476C52.0207 41.9481 50.4633 42.5258 49.6469 45.1382C48.8055 47.8384 51.8574 47.9138 51.8574 47.9138C51.242 50.7019 49.446 52.3974 47.851 52.3974C46.8588 52.3974 45.942 51.9704 46.2434 49.8479C46.6955 46.7583 49.5842 39.2478 50.9154 37.3765H50.9531ZM80.9573 41.0815C80.1912 44.887 78.4706 49.3958 76.5992 52.7617C73.5473 58.2375 69.8549 59.0162 66.6146 58.966C63.3868 58.9283 59.7321 57.7351 59.707 52.7491C59.6818 49.1697 61.2266 44.1083 62.5454 40.8052C64.8312 34.8019 67.1672 29.9037 74.5521 29.9916C83.1552 30.0921 81.6229 37.7533 80.9573 41.0815ZM70.1563 50.8526C71.3494 48.8306 74.7279 39.6246 74.8158 37.3263C74.8409 36.6606 74.7279 35.8819 73.6478 35.8694C72.9068 35.8694 72.2663 36.0075 71.6885 36.8993C70.3824 38.5948 66.5769 48.9939 66.6397 51.0662C66.6648 51.8072 67.0793 52.4602 67.9961 52.4602C69.0511 52.4602 69.6414 51.7318 70.1563 50.8526Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2087_234">
                    <rect width="90" height="90" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="mb-4">
              <h2 className="text-lg lg:text-xl text-brandBlue font-bold text-center">
                <button onClick={goToLinkHandler}>
                  This is your girl's world. She Built It.
                </button>
              </h2>
            </div>
            <div className="text-brandBlue mb-5 text-center hidden md:block">
              <button onClick={goToLinkHandler}>
                ...and that's the way it is. Unleash her creative potential
                with LEGO sets
              </button>
            </div>
            <Button
              className='shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-textBlue hover:scale-105'
              iconpath={<svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
              </svg>}
              onClick={goToLinkHandler}>
              Shop Now
            </Button>
          </div>
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <video
              className="object-cover w-full h-[calc(100%+1px)] rounded-xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://www.thetoyshop.com/medias/lego-test-video.mp4?context=bWFzdGVyfHJvb3R8MTg0NTg0MXx2aWRlby9tcDR8YUdVd0wyZ3laUzh4TWpVeU1qWTVNVFE1TXpreE9DOXNaV2R2TFhSbGMzUXRkbWxrWlc4dWJYQTB8MzE5MWY1M2FiYmQ4ODA4NDc4NmYzMDUwOWU5MmZiMzIyNTQxNDYwZTBhMzI3NmUyODNmMDIzYjA1YWMzZTRiYQ"
                type="video/mp4" />
            </video>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="shadow-lg rounded-xl overflow-hidden">
        {preload("https://www.thetoyshop.com/medias/ELC-BOGOHP-2025-Addo-ELC-Digital-Assets-v2-ELC-BOGOHP-selected-toys-2025-HP-hero-DT-1800x560.jpg?context=bWFzdGVyfHJvb3R8MTA4MDU3OXxpbWFnZS9qcGVnfGFEZGxMMmd5WlM4eE1qVTRNakV5TnpVMk5qZzNPQzlGVEVOZlFrOUhUMGhRWHpJd01qVmZRV1JrYnlCRlRFTmZSR2xuYVhSaGJDQkJjM05sZEhNZ2RqSmZSVXhEWDBKUFIwOUlVQ0J6Wld4bFkzUmxaQ0IwYjNselh6SXdNalZmU0ZBZ2FHVnlieUJFVkNBeE9EQXdlRFUyTUM1cWNHY3xjNzAzNzU5MmY2NjVmZTRjOTBiNjE0YWRjMjVlMzhhYWY2YjIxYTdkMTgzZjM1YjNlMDhlZDRlNzJkMTY3Mzk0", { as: "image" })}
        {preload("https://www.thetoyshop.com/medias/TE-BOGOHP-2025-Addo-ELC-Digital-Assets-v2-TE-BOGOHP-selected-toys-2025-HP-450x480px.jpg?context=bWFzdGVyfHJvb3R8MjczNTU2fGltYWdlL2pwZWd8YUdNd0wyZzBPUzh4TWpVM01UTTJNREF6TkRnME5pOVVSVjlDVDBkUFNGQmZNakF5TlY5QlpHUnZJRVZNUTE5RWFXZHBkR0ZzSUVGemMyVjBjeUIyTWw5VVJWOUNUMGRQU0ZBZ2MyVnNaV04wWldRZ2RHOTVjMTh5TURJMVgwaFFJRFExTUhnME9EQndlQzVxY0djfDZlYmQ0OTBjNGNlMTI0MDZjMTk4YzVhN2FiYjBkMGVjMTA4ZjBjYjE4OTU2NjgzMWRjMjk1NDRkZDNkZTVhZTI", { as: "image" })}
        <img className="hidden md:block" src="https://www.thetoyshop.com/medias/ELC-BOGOHP-2025-Addo-ELC-Digital-Assets-v2-ELC-BOGOHP-selected-toys-2025-HP-hero-DT-1800x560.jpg?context=bWFzdGVyfHJvb3R8MTA4MDU3OXxpbWFnZS9qcGVnfGFEZGxMMmd5WlM4eE1qVTRNakV5TnpVMk5qZzNPQzlGVEVOZlFrOUhUMGhRWHpJd01qVmZRV1JrYnlCRlRFTmZSR2xuYVhSaGJDQkJjM05sZEhNZ2RqSmZSVXhEWDBKUFIwOUlVQ0J6Wld4bFkzUmxaQ0IwYjNselh6SXdNalZmU0ZBZ2FHVnlieUJFVkNBeE9EQXdlRFUyTUM1cWNHY3xjNzAzNzU5MmY2NjVmZTRjOTBiNjE0YWRjMjVlMzhhYWY2YjIxYTdkMTgzZjM1YjNlMDhlZDRlNzJkMTY3Mzk0" alt="promo" />
        <img className="md:hidden" src="https://www.thetoyshop.com/medias/TE-BOGOHP-2025-Addo-ELC-Digital-Assets-v2-TE-BOGOHP-selected-toys-2025-HP-450x480px.jpg?context=bWFzdGVyfHJvb3R8MjczNTU2fGltYWdlL2pwZWd8YUdNd0wyZzBPUzh4TWpVM01UTTJNREF6TkRnME5pOVVSVjlDVDBkUFNGQmZNakF5TlY5QlpHUnZJRVZNUTE5RWFXZHBkR0ZzSUVGemMyVjBjeUIyTWw5VVJWOUNUMGRQU0ZBZ2MyVnNaV04wWldRZ2RHOTVjMTh5TURJMVgwaFFJRFExTUhnME9EQndlQzVxY0djfDZlYmQ0OTBjNGNlMTI0MDZjMTk4YzVhN2FiYjBkMGVjMTA4ZjBjYjE4OTU2NjgzMWRjMjk1NDRkZDNkZTVhZTI" alt="promo" />
      </SwiperSlide>
    </Swiper>
    <div className="absolute top-1/2 -translate-y-[calc(50%+24px)] border-[2px] border-brandBlue bottom-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-brandBlue bg-brandLightBlue hover:bg-brandBlue h-9 w-9 rotate-90 rounded-full px-2 shadow-md transition-all hover:scale-[1.3] hover:shadow-lg hover:text-white hover:border-white z-[9999] cursor-pointer opacity-[0.6] hover:opacity-[1] right-2" onClick={() => sliderRef.current?.slideNext()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-5 w-5" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>
      </div>

      <div className="absolute top-1/2 -translate-y-[calc(50%+24px)] border-[2px] border-brandBlue bottom-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-brandBlue bg-brandLightBlue hover:bg-brandBlue h-9 w-9 -rotate-90 rounded-full px-2 shadow-md transition-all hover:scale-[1.3] hover:shadow-lg hover:text-white hover:border-white z-[9999] cursor-pointer opacity-[0.6] hover:opacity-[1] left-2" onClick={() => sliderRef.current?.slidePrev()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-5 w-5" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>
      </div>
    </div>
  );
};

export default HomeCarouselArrows;
