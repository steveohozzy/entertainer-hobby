import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

import { products } from "../../data/products";
import Button from "../../components/button/Button";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-xl bg-white shadow-sm p-8">
          <h1 className="text-2xl text-textBlue font-bold">Thanks for your order!</h1>
          <div className="text-lg text-textBlue mt-6">
            Your Order Number is <span className="font-bold text-brandBlue">00587456</span>
          </div>
          <div className="text-lg text-textBlue mt-6">
            A copy of your order details has been sent to <span className="font-bold text-brandBlue">steve.hoskins@theentertainer.com</span>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-sm p-8 mt-6">
          <h2 className="text-2xl text-textBlue font-bold mb-8">Order Summary</h2>
            <div className="flex items-end flex-wrap">
              <div className="w-full">
                {products.slice(0,3).map((item) => (
                  <div className={`flex items-start flex-wrap relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:md:w-[50%] last:after:hidden pb-6 mb-6`}>
                    <div className={`w-[30%] md:w-[15%] border-[4px] border-brandLightBlue rounded-lg`}>
                      <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full block"
                      />
                    </div>
                    <div className={`w-[70%] md:w-[80%]`}>
                        <div className="flex flex-wrap py-1">
                            <div className={`w-full md:w-[70%] text-textBlue font-bold px-4 text-lg`}>
                                <div className="flex flex-wrap">
                              <div className="inline-flex items-center text-xs text-gray-400">{item.brand}</div>
                          </div>
                                    <div>{item.name}</div>
                                    <span className={`text-textBlue w-full text-xs mt-3`}>Product #{item.sku}</span>
                            </div>
                            <div className={`w-full md:w-[30%] px-4 md:px-0`}>
                                <div className="flex flex-wrap justify-between items-start">
                                    <div className={`flex justify-start my-2 md:my-0 w-full md:w-[30%] md:w-full text-right md:flex-col`}>
                                        <span className="text-brandRed font-bold">£{item.price}</span>
                                        {item.originalPrice &&
                                          <span className={`line-through text-gray-400 ml-1 md:ml-0`}>£{item.originalPrice}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
              }
            </div>
            <div className="w-full border-t-[2px] pt-4 text-right pr-2 md:pr-8">
              <div className="flex text-lg font-bold mb-3 gap-3 justify-end">
                <span className="text-textBlue">Delivery</span>
                <span className="text-lg text-brandRed font-bold w-[80px]">£3.99</span>
              </div>
              <div className="flex text-xl font-bold gap-3 justify-end">
                <span className="text-textBlue">Total</span>
                <span className="text-brandRed font-bold w-[80px]">£56.78</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white shadow-sm p-8 mt-6">
          <div className="grid md:grid-cols-2">
            <div>
              <h2 className="text-xl text-textBlue font-bold">Shipping Information</h2>
              <div className="text-lg text-textBlue mt-6">
                <span className="font-bold">Shipping To:</span>
              </div>
              <div className="text-lg text-textBlue mt-6">
                42 Lomond Road,<br />
                Hemel Hempstead,<br />
                Herts,<br />
                HP2 6PA
              </div>
            </div>
            <div>
              <h2 className="text-xl text-textBlue font-bold mt-12 md:mt-0">Billing Information</h2>
              <div className="text-lg text-textBlue mt-6">
                <span className="font-bold">VISA **** **** **** 1234</span>
              </div>
              <div className="text-lg text-textBlue mt-6">
                42 Lomond Road,<br />
                Hemel Hempstead,<br />
                Herts,<br />
                HP2 6PA
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-12">
          <div className='flex justify-center'>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold md:!leading-[1.2] text-transparent text-center mb-3 drop-shadow-md">
              <span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Your Next Purchase?</span>
            </div>
          </div>
          <div className="bg-white pt-8 pb-6 px-3 rounded-xl mt-[-27px] shadow-sm">
            <div className="flex gap-4 justify-center mx-auto [&_.swiper-pagination]:relative [&_.swiper-pagination]:top-[-10px!important] [&_.swiper-pagination]:mt-2 [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2]">
              <Swiper
                className="!pb-5 !px-2.5"
                modules={[Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={3}
                pagination={{ clickable: true }}
                autoplay={true}
                loop
              >
                {products.slice(0, 6).map((product) => (
                  <SwiperSlide>
                    <div
                      onClick={() => {
                        navigate(`/product-details/${product.id}`);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="cursor-pointer flex flex-col md:flex-row h-[calc(100%-20px)] transition-all hover:scale-105 pt-2"
                    >
                      <div className="border-[3px] border-brandLightBlue rounded-lg w-full md:w-1/2 mb-3 md:mb-0 shrink flex items-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        />
                      </div>
                      <div
                        className=" md:py-2 cursor-pointer w-full md:w-1/2 flex flex-col justify-between items-center px-2 grow"
                      >
                        <div className="flex flex-wrap justify-center">
                              <div className="inline-flex items-center text-xs text-gray-400">{product.brand}</div>
                          </div>
                        <div className="text-xs lg:text-sm text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0 line-clamp-2">
                          {product.name}
                        </div>
                        <div>
                          <div className="price">
                            <div className="flex items-end justify-center">
                              <span className="text-brandRed font-bold text-xs md:text-sm">
                                £{product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">
                                  £{product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          <Button
                            className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2 min-h-[44px]"
                          >
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
