import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const DeliveryStrip = () => {
  return (
    <div className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 md:px-0 lg:px-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            }
          }}
          loop
        >
          <SwiperSlide>
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 37 29" fill="none">
                  <path d="M18.5547 21.5V12.75H22.0547V26.75C22.0547 27.224 21.8724 27.625 21.5078 27.9531C21.1797 28.3177 20.7786 28.5 20.3047 28.5H6.30469C5.83073 28.5 5.41146 28.3177 5.04688 27.9531C4.71875 27.625 4.55469 27.224 4.55469 26.75V12.75H8.05469V21.5H18.5547ZM35.7812 8.26562C36.1458 8.84896 36.1641 9.45052 35.8359 10.0703C35.5078 10.6901 34.9974 11 34.3047 11H2.80469C2.11198 11 1.60156 10.6901 1.27344 10.0703C0.945312 9.45052 0.981771 8.84896 1.38281 8.26562L6.03125 1.26562C6.35938 0.755208 6.83333 0.5 7.45312 0.5H29.6562C30.276 0.5 30.75 0.755208 31.0781 1.26562L35.7812 8.26562ZM29.0547 27.625V12.75H32.5547V27.625C32.5547 27.8802 32.4635 28.0807 32.2812 28.2266C32.1354 28.4089 31.9349 28.5 31.6797 28.5H29.9297C29.6745 28.5 29.4557 28.4089 29.2734 28.2266C29.1276 28.0807 29.0547 27.8802 29.0547 27.625Z" fill="#00548B"></path>
              </svg>
              <div className="text-textBlue text-xs font-[500] ml-2">
                  <span className="font-bold text-brandBlue">Free</span> Click &amp; Collect
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 35 29" fill="none">
                  <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25H2.625C1.14844 23.25 0 22.1016 0 20.625V3.125C0 1.70312 1.14844 0.5 2.625 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="#00548B"></path>
              </svg>
              <div className="text-textBlue text-xs font-[500] ml-2">
                  <span className="font-bold text-brandBlue">Free delivery</span> on orders over £39.99
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="https://theentertainer.zendesk.com/hc/en-gb/articles/6480509734289-Delivery-information" title="see delivery information" className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 35 29" fill="none">
                  <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25V16.25H11.8125C12.0312 16.25 12.25 16.0859 12.25 15.8125V14.9375C12.25 14.7188 12.0312 14.5 11.8125 14.5H0.4375C0.164062 14.5 0 14.3359 0 14.0625V13.1875C0 12.9688 0.164062 12.75 0.4375 12.75H13.5625C13.7812 12.75 14 12.5859 14 12.3125V11.4375C14 11.2188 13.7812 11 13.5625 11H2.1875C1.91406 11 1.75 10.8359 1.75 10.5625V9.6875C1.75 9.46875 1.91406 9.25 2.1875 9.25H15.3125C15.5312 9.25 15.75 9.08594 15.75 8.8125V7.9375C15.75 7.71875 15.5312 7.5 15.3125 7.5H0.4375C0.164062 7.5 0 7.33594 0 7.0625V6.1875C0 5.96875 0.164062 5.75 0.4375 5.75H3.5V3.125C3.5 1.70312 4.64844 0.5 6.125 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="#00548B"></path>
              </svg>
              <div className="text-textBlue text-xs font-[500] ml-2">
                  <span className="font-bold text-brandBlue">Next Day Delivery</span> if you order by 7pm
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default DeliveryStrip