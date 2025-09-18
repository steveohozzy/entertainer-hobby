import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import CartProductTile from "../../components/cartProductTile/CartProductTile";
import Dropdown from "../../components/dropdown/Dropdown";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { selectCartItems } from "../../store/cart/cartSelector";

import { selectCartTotal } from "../../store/cart/cartSelector";

import { products } from "../../data/products";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      // Create an IntersectionObserver to observe the ref's visibility
      const observer = new IntersectionObserver(([entry]) => 
        setIntersecting(entry.isIntersecting)
      );

      // Start observing the element
      observer.observe(ref.current);

      // Cleanup the observer when the component unmounts or ref changes
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }

  const continueCheckout = useRef();
  const AddVisible = useIsVisible(continueCheckout);

  return (
    <>
      <div className="bg-white">
        <div className="text-sm text-gray-500 flex items-center justify-center pt-6">
          <span className="font-bold">Basket</span>
          <img src="/stars-icon.svg" alt="stars" className="mx-4" />
          <span>Delivery</span>
          <img src="/rocket-icon.svg" alt="stars" className="mx-4" />
          <span>Payment</span>
        </div>
        <div className="mx-auto max-w-[335px] mt-4">
          <img src="train-icon.svg" alt="train" />
          <div className="flex items-center mt-4 max-w-[335px]">
            <div className="w-[30%] border-b-4 border-dashed border-brandLightGreen"></div>
            <div className="w-[69%] ml-[1%] border-b-4 border-dashed border-gray-200"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap py-6">
            <div className="w-full md:w-[66.6666666%] px-1 md:px-3">
              <div className="flex items-end">
                <h1 className="text-base md:text-xl font-bold text-textBlue mr-1 md:mr-2">
                  Basket
                </h1>
                {cartItems.length && (
                  <>
                    <span className="text-gray-500">Delivery | </span>
                    <span className="text-textBlue ml-1">
                      1 of 1{" "}
                      <span className="text-sm">
                        <span className="text-xs">({"<"}</span> 3 working days)
                      </span>
                    </span>
                  </>
                )}
              </div>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <CartProductTile key={item.id} product={item} />
                ))
              ) : (
                <div>Your cart is empty</div>
              )}
            </div>
            <div className="w-full md:w-[33.3333333%] md:px-3">
              <div className="bg-white w-full hidden md:block">
                <Button
                  ref={continueCheckout}
                  className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs sm:text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                  iconpath={
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                    </svg>
                  }
                  link="/checkout"
                >
                  Checkout Securely £{cartTotal.toFixed(2)}
                </Button>
              </div>

              <div className="mt-6 bg-gray-200 border-4 border-gray-400 p-6 px-4 rounded-md">
                <Dropdown
                  title="Use a promo code"
                  className="text-brandBlue font-bold flex items-center justify-center w-full"
                  answer={
                    <form
                      id="promo-form"
                      className="flex items-center py-4 px-2"
                    >
                      <input
                        type="search"
                        placeholder="Add a promo code"
                        className="bg-white outline-0 font-semibold h-[44px] px-3 rounded-3xl w-full border border-[3px] border-brandBlue text-textBlue placeholder:text-gray-400 mr-2"
                      />
                      <button className="group text-white font-bold bg-brandBlue rounded-[50px] px-5 h-[44px] transition-all hover:bg-blue-500 hover:scale-105">
                        <span className="block transition-all group-hover:rotate-[10deg]">
                          Apply
                        </span>
                      </button>
                    </form>
                  }
                />
              </div>
              {/* <div className='flex items-start mt-6 text-center text-brandBlue'>
                          <div className='w-[50%]'>
                            <Button
                              className='shadow-sm hover:shadow-md mr-2 text-sm w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-white text-brandBlue border-[3px] border-brandBlue py-2 px-3 pl-2 transition-all hover:bg-brandBlue hover:text-white hover:scale-105'
                              iconpath={
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z"/>
                                </svg>
                              }
                              link='/checkout'
                            >
                                Home Delivery
                            </Button>

                            <p className='mt-2'>Free delivery on orders over £40</p>
                          </div>
                          <div className='w-[50%]'>
                            <Button
                              className='shadow-sm hover:shadow-md ml-2 text-sm w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-white text-brandBlue border-[3px] border-brandBlue py-2 px-3 pl-2 transition-all hover:bg-brandBlue hover:text-white hover:scale-105'
                              iconpath={
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.8971 13.691L11.8687 9.10528L13.703 9.49393L12.1484 16.831C12.0391 17.3469 11.5241 17.6571 11.0369 17.5539L3.69979 15.9993C3.1839 15.89 2.86767 15.4037 2.97697 14.8878L4.53157 7.55069L6.36585 7.93933L5.39422 12.525L10.8971 13.691ZM21.36 8.69058C21.6337 9.37747 21.0338 10.0889 20.3173 9.93706L3.80875 6.43922C3.06358 6.28133 2.8037 5.38775 3.33247 4.87089L6.54592 1.71851C6.77254 1.497 7.09558 1.38576 7.41085 1.45256L19.0184 3.91198C19.3337 3.97878 19.5838 4.21147 19.7011 4.50585L21.36 8.69058ZM15.7198 18.0669L17.3715 10.2712L19.2058 10.6599L17.554 18.4556C17.4994 18.7135 17.2276 18.8655 16.9983 18.817L16.0812 18.6226C15.8232 18.568 15.6651 18.3249 15.7198 18.0669Z"/>
                                </svg>

                              }
                              link='/checkout'
                            >
                                Click & Collect
                            </Button>
                            <p className='mt-2'>Collect from our stores or other locations</p>
                          </div>
                        </div> */}
              <div className="mt-6 bg-brandBeige text-brandBlue bg-opacity-30 font-bold text-center p-6 rounded-2xl">
                Your order qualifies for FREE express delivery
                <span className="block font-normal">Exclusions apply</span>
              </div>
            </div>
            <div className="w-full text-center mt-12">
              <div className='flex justify-center'>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold md:!leading-[1.2] text-transparent text-center mb-3 drop-shadow-md">
                  <span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>You May Also Like</span>
                </div>
              </div>
              <div className="bg-brandLightBlue pt-10 pb-8 px-1 md:px-5 rounded-xl mt-[-27px] [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-2 [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2]">
                <Swiper
                className="!px-3"
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={2.25}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  pagination={{ clickable: true }}
                  autoplay={true}
                  loop
                >
                  {products.slice(0, 6).map((product) => (
                    
                    <SwiperSlide className="h-auto pt-2 pb-6">
                      <div
                        onClick={() => {
                          navigate(`/product-details/${product.id}`);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                        className="cursor-pointer flex flex-wrap bg-white rounded-xl shadow-md h-full hover:shadow-lg hover:scale-105 transition-all"
                      >
                        <div className="border-[3px] border-brandBlue rounded-lg w-full md:w-1/2 mb-3 md:mb-0">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                          />
                        </div>
                        <div
                          onClick={() => {
                            navigate(`/product-details/${product.id}`);
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                          className="cursor-pointer w-full md:w-1/2 flex flex-col justify-between items-center px-2 pb-2 md:py-2"
                        >
                          <div>
                            <div className="flex flex-wrap justify-center">
                                <div className="inline-flex items-center text-xs text-gray-400">{product.brand}</div>
                            </div>
                            <div className="text-sms lg:text-base text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0 line-clamp-2">
                              {product.name}
                            </div>
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
                              onClick={() => {
                                navigate(`/product-details/${product.id}`);
                                window.scrollTo({
                                  top: 0,
                                  left: 0,
                                  behavior: "smooth",
                                });
                              }}
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
            <div className={`bg-white p-4 px-0 md:px-4 w-full sticky bottom-0 left-0 transition-all md:fixed md:translate-y-full ${AddVisible ? '' : 'md:translate-y-0'} z-20`}>
              <div className="max-w-3xl m-auto flex flex-col items-center justify-center">
                <Button
                  className="h-[44px] shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                  iconpath={
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                    </svg>
                  }
                  link="/checkout"
                >
                  Checkout Securely £{cartTotal.toFixed(2)}
                </Button>
                <Button
                  removeIcons={true}
                  className="shadow-md hover:shadow-lg w-full h-[44px] group inline-flex items-center justify-center font-bold text-sm md:text-lg rounded-[30px] bg-white text-brandBlue py-1 px-4 pl-0 transition-all border-[3px] mt-4 border-brandBlue hover:bg-brandBlue hover:text-white hover:scale-105"
                  link="/"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
