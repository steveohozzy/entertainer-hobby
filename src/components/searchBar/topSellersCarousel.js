import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

const TopSellersCarousel = ({setShowSearchBox, filteredProducts, startedSearch}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-1">
      <div className="text-lg text-gray-100 font-semibold md:mb-2">
        {startedSearch ? 'Matching Products' : 'Top Picks'}
      </div>
        <Swiper
          modules={[Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          loop
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        >
          {filteredProducts.slice(0, 9).map((product) => (
            <SwiperSlide>
              <div onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",}); setShowSearchBox(false);}} className="cursor-pointer flex flex-col h-full hover:scale-105 transition-all" key={product.id}>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`grid overflow-hidden grow transition-all duration-300 ease-in-out text-slate-600 text-sm "grid-rows-[1fr] opacity-100"
                }`}>
                  <div className="overflow-hidden flex flex-col">
                    <div>
                      <div className="text-[8px] leading-[8px] text-gray-400 mt-1 mb-1">{product.brand}</div>
                      <h3 className="text-[10px] font-semibold text-gray-100 mb-2 grow leading-[1.2] line-clamp-2">{product.name}</h3>
                    </div>
                    <div className="price">
                      <div className="flex items-end">
                        <span className="text-brandRed font-semibold text-[12px]">
                          £{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="line-through text-gray-400 text-[10px] ml-1">
                            £{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default TopSellersCarousel