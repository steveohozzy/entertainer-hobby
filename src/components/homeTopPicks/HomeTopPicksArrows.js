import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Button from "../button/Button";

import { products } from "../../data/products";

const HomeTopPicksArrows = () => {
  const navigate = useNavigate();

  const picksSliderRef = useRef();

  return (
    <div id="top-picks" className='w-full text-center pt-5'>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center mt-5 mb-1 md:mt-12 drop-shadow-md">
                <span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>
                    Top Picks
                </span>
            </h3>
            <div className='pt-2 md:pt-5 rounded-xl'>
                <div className='flex gap-4 justify-center mx-auto px-1 relative'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1.2}
                    autoplay={false}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                    onSwiper={it => (picksSliderRef.current = it)}
                    loop
                    >
                {products.slice(0, 6).map((product) => (
                    <SwiperSlide className="pt-4 pb-6 px-2.5">
                    <div  onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer flex flex-col bg-white shadow-sm mb-5 rounded-lg h-full hover:shadow-lg hover:scale-105 transition-all">
                        <div className="rounded-lg w-full py-1">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-between items-center py-3 md:py-3 px-2">
                            <div>
                                <div className="flex flex-wrap justify-center mb-1">
                                    <div className="inline-flex items-center text-xs text-gray-400">{product.brand}</div>
                                </div>
                                <div className=" text-brandBlue lg:text-lg font-bold leading-[1.2] xl:leading-[1.1] line-clamp-3 mb-2 md:mb-0">{product.name}</div>
                            </div>
                            <div>
                                <div className="price">
                                    <div className="flex items-end justify-center">
                                        <span className="text-brandRed font-bold text-sm">£{product.price}</span>
                                        {product.originalPrice &&
                                            <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                        }
                                    </div>
                                </div>
                                <Button 
                                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2 min-h-[44px]'
                                    onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                                        Details
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className="absolute top-1/2 -translate-y-[calc(50%+24px)] border-[2px] border-brandBlue bottom-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-brandBlue bg-brandLightBlue hover:bg-brandBlue h-9 w-9 rotate-90 rounded-full px-2 shadow-md transition-all hover:scale-[1.3] hover:shadow-lg hover:text-white hover:border-white z-[9999] cursor-pointer opacity-[0.6] hover:opacity-[1] -right-2" onClick={() => picksSliderRef.current?.slideNext()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-5 w-5" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>
                </div>

                <div className="absolute top-1/2 -translate-y-[calc(50%+24px)] border-[2px] border-brandBlue bottom-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-brandBlue bg-brandLightBlue hover:bg-brandBlue h-9 w-9 -rotate-90 rounded-full px-2 shadow-md transition-all hover:scale-[1.3] hover:shadow-lg hover:text-white hover:border-white z-[9999] cursor-pointer opacity-[0.6] hover:opacity-[1] -left-2" onClick={() => picksSliderRef.current?.slidePrev()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-5 w-5" aria-hidden="true"><path d="m18 15-6-6-6 6"></path></svg>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomeTopPicksArrows;
