import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

import { products } from "../../data/products";

const HomeTopPicks = () => {
  const navigate = useNavigate();

  return (
    <div id="top-picks" className='w-full text-center pt-5'>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center mt-5 mb-1 md:mt-12 drop-shadow-md">
                <span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>
                    Top Picks
                </span>
            </h3>
            <div className='pt-2 md:pt-5 rounded-xl'>
                <div className='flex gap-4 justify-center mx-auto fade-out-right'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    autoplay={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 2.2,
                      },
                      1024: {
                        slidesPerView: 2.8,
                      },
                    }}
                    loop
                    >
                {products.slice(0, 6).map((product) => (
                    <SwiperSlide className="pt-2 pb-6">
                        <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black  after:to-gray-100  hover:after:animate-borderGradient after:z-0">
                            <div onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}
                            className="bg-gradient-to-br from-black via-gray-900 to-black p-5 rounded-[calc(1.5rem-1px)]
                            cursor-pointer flex flex-wrap transition-all z-[1] relative">
                            <div className="rounded-lg w-1/2 py-1">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col justify-between items-center py-3 md:py-3 px-2">
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
                    </div>
                    
                    </SwiperSlide>
                ))}
                </Swiper>
                </div>
            </div>
        </div>
  );
};

export default HomeTopPicks;
