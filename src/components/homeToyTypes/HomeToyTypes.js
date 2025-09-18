import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";

const HomeToyTypes = () => {
  const navigate = useNavigate();

  const goToLinkHandler = () => {
      navigate("/category");
      window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  };

  return (
    <div className="pb-5 fade-out-right">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
        autoplay={false}
        breakpoints={{
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        loop
      >
        <SwiperSlide className="h-auto pt-3">
          <button onClick={() => {
            navigate("/category?type=action-figures");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="https://www.thetoyshop.com/medias/300Wx300H-573193-Primary?context=bWFzdGVyfGltYWdlc3w0MTkxN3xpbWFnZS9qcGVnfGFERTFMMmd5TlM4eE1qVXlNVEUwTlRrNU1URTVPQzh6TURCWGVETXdNRWhmTlRjek1Ua3pYMUJ5YVcxaGNua3xiMjYwOTU4ZDk0OWQ0YmNmNjY2ODIzMDNmMDc2Yjk3ZWIzMzRjNTljOWY1MzJkMTYyNWQ2OTUyM2YwYTExYWI5" alt="Action Toy Types" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Action Toys
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto pt-3">
          <button onClick={() => {
            navigate("/category?type=pre-school-toys");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="https://www.thetoyshop.com/medias/300Wx300H-570341-Primary?context=bWFzdGVyfGltYWdlc3wxMDQzMTZ8aW1hZ2UvanBlZ3xhR1ZpTDJoaVppOHhNak01TVRJM05ESXhOelV3TWk4ek1EQlhlRE13TUVoZk5UY3dNelF4WDFCeWFXMWhjbmt8NWI3NDU5MjJmNDIwNzc0ODAxYjA5MmM3YTE0Y2MyYjdkMzdlMTFjNjFjMTIyYjZhODMwMWI2YjA5ZWU3OTEyYw" alt="Pre-School Toy Types" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Pre-School Toys
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto pt-3">
          <button onClick={() => {
            navigate("/category?type=arts-and-crafts");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="https://www.thetoyshop.com/medias/300Wx300H-540775-540775-2.jpg?context=bWFzdGVyfGltYWdlc3w2MzgwOXxpbWFnZS9qcGVnfGFHRm1MMmhqT1M4eE1qUXpNemN6T1RRME9ETTFNQzh6TURCWGVETXdNRWhmTlRRd056YzFYelUwTURjM05TMHlMbXB3Wnd8NTgwNjdlMzE3MWEwY2UwMDc4M2IyNDUwMDUzNjc0NDA0Y2U5ODQ4MjEwNTBjMmNmYmJiNjcyYjgwNGJhY2IzMg" alt="Arts &amp; Crafts Toy Types" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Arts &amp; Crafts
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto pt-3">
          <button onClick={() => {
            navigate("/category?type=games-and-puzzles");
            window.scrollTo({top: 0,left: 0,behavior: "smooth",});
          }} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="https://www.thetoyshop.com/medias/300Wx300H-530024-530024-2.jpg?context=bWFzdGVyfGltYWdlc3wxMTM4OTB8aW1hZ2UvanBlZ3xhRFE0TDJoaFlTOHhNak0xTVRFNU16TTRNamswTWk4ek1EQlhlRE13TUVoZk5UTXdNREkwWHpVek1EQXlOQzB5TG1wd1p3fDI2YzZkMjcxMzY2ZWQzOGM0ZjIyZWVkNDk4YjE2MjA5MmE3MTIwM2NjZjU3NzI2NmQ0NzcyMGM2MGJmNzgzMjY" alt="Games &amp; Puzzles" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Games &amp; Puzzles
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto pt-3">
          <button onClick={goToLinkHandler} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="/construction-panel.jpg" alt="Construction Toy Types" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Construction Toys
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto pt-3">
          <button onClick={goToLinkHandler} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="https://www.thetoyshop.com/medias/300Wx300H-577630-577630-6.jpg?context=bWFzdGVyfGltYWdlc3w0MjAyM3xpbWFnZS9qcGVnfGFETm1MMmc0WlM4eE1qVTBNek01TURZM09UQTNNQzh6TURCWGVETXdNRWhmTlRjM05qTXdYelUzTnpZek1DMDJMbXB3Wnd8NWEzODVhMzA3YTIxZGY0NDI4ZDM3MDg4MzNhNzhmYmRiNDcyYzIyZTJkMmU4YmNhZjIwM2EyYTI5MWQwMjM2NQ" alt="Electronic Toy Types" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Electronic Toys
            </div>
          </button>
        </SwiperSlide>
        <SwiperSlide className="h-auto pt-3">
          <button onClick={goToLinkHandler} className="transition-all rounded-xl bg-white px-2 py-2.5 md:py-4 mb-2 flex flex-col items-center shadow-md justify-center hover:-translate-y-3 hover:shadow-lg">
            <div className="mb-2">
              <img className="px-3 md:px-6" src="https://www.thetoyshop.com/medias/300Wx300H-564426-Primary?context=bWFzdGVyfGltYWdlc3wzNTAxOXxpbWFnZS9qcGVnfGFHSmtMMmhoTWk4eE1qQTROVGMwTlRZeE5EZzNPQzh6TURCWGVETXdNRWhmTlRZME5ESTJYMUJ5YVcxaGNua3xlNTliZmI5ZGE0MTMwNjI1YjNiNDg0NzU4OWM1NjBlY2U2Y2JhMWFmNjNkNDY5NjM3N2U5YmNlMTViZDhmNzlh" alt="Dolls Toy Types" />
            </div>
            <div className="font-bold text-brandBlue text-sm md:text-lg">
              Dolls
            </div>
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeToyTypes;
