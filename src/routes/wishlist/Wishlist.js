import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import WishlistProductTile from "../../components/wishlistProductTile/WishlistProductTile";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import { selectWishlistTotal } from "../../store/wishlist/wishlistSelector";

import { products } from "../../data/products";
import { useState } from "react";

const Wishlist = () => {
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);
  const wishlistTotal = useSelector(selectWishlistTotal);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const addAllToBasket = () => {
    const addBtns = document.querySelectorAll('.addToBasket');

    addBtns.forEach((item) => (
      item.click()
    ));
  }

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap py-6">
            <div className="w-full md:w-[66.6666666%] px-1 md:px-3">
              <div className="flex items-end">
                <h1 className="text-base md:text-xl font-bold text-textBlue mr-1 md:mr-2">
                  Wish List
                </h1>
                {wishlistItems.length && (
                  <>
                    <span className="text-gray-500">{wishlistItems.length} Items</span>
                  </>
                )}
              </div>
              {wishlistItems.length ? (
                wishlistItems.map((item) => (
                  <WishlistProductTile key={item.id} product={item} />
                ))
              ) : (
                <div>Your wish list is empty</div>
              )}
            </div>
            {wishlistItems.length ? (
              <div className="w-full md:w-[33.333333%] px-1 md:px-4">
                <div className="border-[3px] border-brandLightBlue rounded-xl p-6">
                  <div className="text-textBlue text-lg font-bold mb-4 text-center">Send Your Wishlist</div>
                  <form className="flex flex-wrap">
                    <div className="w-full">
                      <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                        <input id="name" type="text" placeholder="Name" onChange={handleNameChange} onBlur={handleNameChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                        <label for="name" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-brandBlue motion-reduce:transition-none">Name*</label>
                        <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                            <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                            </svg>
                          </span>
                      </div>

                      <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                        <input id="emailAddress" type="email" placeholder="Email Address*" onChange={handleEmailChange} onBlur={handleEmailChange} className="peer text-base m-0 block h-[38px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                        <label for="emailAddress" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-brandBlue motion-reduce:transition-none">Email Address*</label>
                        <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                            <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                            </svg>
                          </span>
                      </div>

                      <a href={`mailto:${email}?subject=Sharing my wish list&body=Hi ${name}! %0D%0AHere are my desired products: %0D%0A${window.location}`} target="blank" className="mt-4 shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandRed text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightRed hover:scale-105">
                          <span className="flex items-center justify-end w-[25px] mr-1">
                              <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fillOpacity="0.5"/>
                              </svg>
                              <span className="transition-all w-0 mt-[3px] ml-[-2px] group-hover:w-[7px] h-[3px] rotate-[15deg] bg-white bg-opacity-70"></span>
                          </span>
                        Send

                          <span className="transition-all group-hover:rotate-[20deg] ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path
                                d="M18.9028 4.35492C19.4873 4.15932 20.0692 4.72983 19.8174 5.31534L14.818 18.0558C14.6532 18.532 14.0752 18.697 13.686 18.4229L10.2385 15.9994L7.77668 17.9694C7.23857 18.3984 6.44087 17.9419 6.59633 17.2082L7.121 14.7319L16.356 7.32912C16.5477 7.17808 16.3485 6.91226 16.1633 7.03273L5.7505 12.9082L2.77086 10.8394C2.26592 10.5088 2.37319 9.70103 2.98825 9.51191L18.9028 4.35492Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span className="scale-75 mt-2 group-hover:scale-100">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.23539 2.16758C4.31585 1.75612 4.83196 1.6292 5.09362 1.92958L6.64272 3.65653L8.92869 3.36308C9.33686 3.31475 9.62105 3.7548 9.41431 4.12022L8.26344 6.1095L9.24532 8.18833C9.41411 8.56311 9.07604 8.98116 8.67962 8.89652L6.43413 8.40043L4.74982 9.98635C4.45362 10.2631 3.94852 10.0788 3.90018 9.67067L3.67114 7.38306L1.6601 6.27065C1.29468 6.06391 1.31163 5.54034 1.6864 5.37155L3.81205 4.44154L4.23539 2.16758Z" fillOpacity="0.5"/>
                            </svg>
                          </span>
                      </a>
                    </div>
                  </form>
                </div>
                <div className="mt-6 text-textBlue font-bold text-lg text-center">
                  Wish List Total: <span className="text-brandRed">£{wishlistTotal.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full mt-4 shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-sm lg:text-lg min-h-[44px] rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 addToBasket"
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
                  onClick={addAllToBasket}
              >
                  Add all to basket
              </Button>
              </div>
            ):''}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
