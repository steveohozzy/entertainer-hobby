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
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:!leading-[1.2] text-transparent text-center mt-5 mb-1 md:mt-12">
                <span className='text-black title-purple'>
                    Top Picks
                </span>
            </h3>
            <div className='pt-2 md:pt-5 rounded-xl'>
                <div className='flex gap-4 justify-center mx-auto fade-out-right'>
                <Swiper
                className="!pb-5 !px-2.5"
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1.7}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  }
                }}
                pagination={{ clickable: true }}
                autoplay={true}
                loop
              >
                {products.slice(0, 6).map((product) => (
                  <SwiperSlide className="py-2">
                        <div className="rounded-3xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black h-full after:to-gray-100  hover:after:animate-borderGradient after:z-0">
                            <div onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}
                            className="bg-gradient-to-br from-black via-gray-900 to-black p-5 rounded-[calc(1.5rem-1px)]
                            cursor-pointer flex flex-col md:flex-row transition-all z-[1] relative h-full">
                            <div className="rounded-lg w-full md:w-1/2 py-1">
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2  flex flex-col justify-between items-center py-3 md:py-3 px-2">
                                <div>
                                    <div className="flex flex-wrap justify-center mb-1">
                                        <div className="inline-flex items-center text-xs text-gray-400">{product.brand}</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-500 via-gray-100 to-gray-500 bg-clip-text md:!leading-[1.2] text-transparent lg:text-lg font-semibold leading-[1.2] xl:leading-[1.1] line-clamp-3 mb-2 md:mb-0">{product.name}</div>
                                </div>
                                <div>
                                    <div className="price mb-4">
                                        <div className="flex items-end justify-center">
                                            <span className="text-brandRed font-semibold text-sm">£{product.price}</span>
                                            {product.originalPrice &&
                                                <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                            }
                                        </div>
                                    </div>
                                    <Button
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
