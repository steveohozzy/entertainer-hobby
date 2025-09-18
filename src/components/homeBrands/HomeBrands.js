import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";

const HomeBrands = () => {
  const navigate = useNavigate();
  return (
    <div className="fade-out-right">
       <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
        autoplay={{delay: 5000}}
        autoplayDelay={10000}
        breakpoints={{
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.8,
          },
        }}
        loop
      >
        <SwiperSlide className="h-auto">
          <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg aspect-square"
            onClick={() => {
              navigate("/brands/marvel");
              window.scrollTo({top: 0,left: 0,behavior: "smooth",});
            }}
          >
            <img src="/marvel-tile.jfif" alt="Marvel" className="w-full h-full object-cover" />
          </button>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg"
            onClick={() => {
              navigate("/brands/barbie");
              window.scrollTo({top: 0,left: 0,behavior: "smooth",});
            }}
          >
            <img src="https://www.thetoyshop.com/medias/TE-Homepage-pod-350x350px-Barbie.jpg?context=bWFzdGVyfHJvb3R8NTk4OTh8aW1hZ2UvanBlZ3xhR1V3TDJneU55OHhNak00TlRFMU56QTROekkyTWk5VVJTMUliMjFsY0dGblpTMXdiMlJmTXpVd2VETTFNSEI0WDBKaGNtSnBaUzVxY0djfDBhOTM3YzkwZmEzNGFlOWFiOGIxMTcyMjdkZWY5M2U1Nzc2N2U4ZGI5ZGNmZTg0OGUzMTBjMDAyNmYyMmQ1NmI" alt="Barbie" />
          </button>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg"
            onClick={() => {
              navigate("/brands/polly-pocket");
              window.scrollTo({top: 0,left: 0,behavior: "smooth",});
            }}
          >
            <img src="https://www.thetoyshop.com/medias/Polly.jpg?context=bWFzdGVyfHJvb3R8NzA0ODF8aW1hZ2UvanBlZ3xhRGxpTDJoaU5pOHhNalUxTmpJM05UVXhOVFF5TWk5UWIyeHNlUzVxY0djfDcyZGE4NzMwMzdiMmFkYTZlZGU2ZDNkMzg3N2I4ZmFkODRmZmZhZTI4Y2MxZDJmZmZmZDY5OGQ5ODA4MmQ0MDY" alt="Polly Pocket" />
          </button>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg"
            onClick={() => {
              navigate("/brands/paw-patrol");
              window.scrollTo({top: 0,left: 0,behavior: "smooth",});
            }}
          >
            <img src="https://www.thetoyshop.com/medias/PAW-UK-Entertainer-Digital-Banners-DEL7-350x350.jpg?context=bWFzdGVyfHJvb3R8MTI1NDc2fGltYWdlL2pwZWd8YUdVeUwyZzJZeTh4TWpJeE5UTTBOemt3TkRVME1pOVFRVmRmVlV0ZlJXNTBaWEowWVdsdVpYSmZSR2xuYVhSaGJGOUNZVzV1WlhKelgwUkZURGRmTXpVd2VETTFNQzVxY0djfDViNTU2YWExNGQ4YzczZWJmMDNkOGJkMmQ2ZDk4YjllYmRhMzMwMmE4OThkNGM3MGFlY2JkMGU5M2NjMzk4MjM" alt="Paw Patrol" />
          </button>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg"
            onClick={() => {
              navigate("/brands/hot-wheels");
              window.scrollTo({top: 0,left: 0,behavior: "smooth",});
            }}
          >
            <img src="https://www.thetoyshop.com/medias/2025-p9-hot-wheels-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8OTA2MzF8aW1hZ2UvanBlZ3xhR0UzTDJobU9DOHhNalUyT1RZME16azBNVGt4T0M4eU1ESTFMWEE1TFdodmRDMTNhR1ZsYkhNdGNHOWtMVE0xTUhnek5UQXVhbkJufDY5NDg4YzQ3M2NmY2M3NjFiYTYxMWJkNTA1ZTg1MDIxMTQ2ODMwOWE2ZWJhM2ViMDdhZmQ4NzFiYzY2MjdlMjY" alt="Hot Wheels" />
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <button className=" rounded-xl overflow-hidden transition-all hover:scale-90 shadow-md hover:shadow-lg"
            onClick={() => {
              navigate("/brands/minecraft");
              window.scrollTo({top: 0,left: 0,behavior: "smooth",});
            }}
          >
            <img src="https://www.thetoyshop.com/medias/TE-Homepage-Pod-Minecraft.jpg?context=bWFzdGVyfHJvb3R8MTI2NTg5fGltYWdlL2pwZWd8YUdaakwyZ3hNeTh4TWpRM01qWXpPREUzTnpNeE1DOVVSU0JJYjIxbGNHRm5aU0JRYjJSZlRXbHVaV055WVdaMExtcHdad3w2MTExNDM5NjFhNTFmZmViNGEyNDg1OTYyMTliZjFkYTYwODQ3NzJmYzU3YzVmYTAzNTJkZWRiMWU3NDQ5NGMz" alt="Minecraft" />
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeBrands