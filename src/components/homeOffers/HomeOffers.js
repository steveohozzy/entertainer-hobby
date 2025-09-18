import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";

const HomeOffers = () => {
  return (
    <div className="fade-out-right">
       <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3.2}
        pagination={{ clickable: true }}
        autoplay={{delay: 4500}}
        breakpoints={{
          768: {
            slidesPerView: 4.5,
          },
          1024: {
            slidesPerView: 5.5,
          },
        }}
        loop
      >
        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">              
              <img alt="2 for £15"  src="https://www.thetoyshop.com/medias/2025-promo-title-2-for-15-350x90.jpg?context=bWFzdGVyfHJvb3R8Mzg2OTB8aW1hZ2UvanBlZ3xhRFV3TDJnelppOHhNalUyTWpBeE1qQTNPREV4TUM4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFRJdFptOXlMY0tqTVRVdE16VXdlRGt3TG1wd1p3fGUzMTU5YjE3MzI5ZmE4Y2IxNWMxNTFiM2I4Yzk0MmRhNDNmOGI1NGI1OTg2YmRjOGI2NDljODNiOWNhNTI5ZjM" title="2 for £15" />
              
              <img alt="Paw Patrol 2 for £15" src="https://www.thetoyshop.com/medias/PAW-UK-Entertainer-Digital-Banners-DEL7-350x350.jpg?context=bWFzdGVyfHJvb3R8MTI1NDc2fGltYWdlL2pwZWd8YUdVeUwyZzJZeTh4TWpJeE5UTTBOemt3TkRVME1pOVFRVmRmVlV0ZlJXNTBaWEowWVdsdVpYSmZSR2xuYVhSaGJGOUNZVzV1WlhKelgwUkZURGRmTXpVd2VETTFNQzVxY0djfDViNTU2YWExNGQ4YzczZWJmMDNkOGJkMmQ2ZDk4YjllYmRhMzMwMmE4OThkNGM3MGFlY2JkMGU5M2NjMzk4MjM" title="Paw Patrol 2 for £15" />
              
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">              
              <img alt="3 for 2"  src="https://www.thetoyshop.com/medias/2025-promo-title-3-for-2-350x90.jpg?context=bWFzdGVyfHJvb3R8MzcxNTd8aW1hZ2UvanBlZ3xhR0ppTDJnNFlTOHhNalUyTWpBeE1UazBOekF6T0M4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFRNdFptOXlMVEl0TXpVd2VEa3dMbXB3Wnd8YTdmZDdiZTlkODAzM2RlY2UyYjZiMThlYTU3OGJjNDJkZmFkZDIwNzMzMWVjMDliM2E5ZTI5ZGI3MGMxYzU2OQ" title="3 or 2" />
              
              <img alt="Hot Wheels Cars 3 for 2" src="https://www.thetoyshop.com/medias/2A-4-PODTE-Homepage-Pod-350x350-3.jpg?context=bWFzdGVyfHJvb3R8MTUxNTE3fGltYWdlL2pwZWd8YURRNEwyaGtPQzh4TWpRek5UUXpPVFl4TmpBek1DOHlRU0EwSUZCUFJGUkZJRWh2YldWd1lXZGxJRkJ2WkNBek5UQjRNelV3SURNdWFuQm58MjQyYzVjNTE2YjUyMzBhY2VkYzdjZTM4YzY2OWU5Mzc1NGM4Njg3NmVhYjk1MWI5YjI1ZDhjZDdlMjFkZWI3Mw" title="Hot Wheels Cars 3 for 2" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">				 
              <img alt="Buy One Get One Half Price"  src="https://www.thetoyshop.com/medias/2025-promo-title-bogshp-350x90.jpg?context=bWFzdGVyfHJvb3R8NDI4MDF8aW1hZ2UvanBlZ3xhRGd3TDJnek9DOHhNalUyTWpBeE1qSTNORGN4T0M4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFdKdlozTm9jQzB6TlRCNE9UQXVhbkJufDIwMzNhODMyMTkyNmIzMjRiMWU5Zjc3OTg5ZDE0OWRjMzYzYjJlNTg2MjVlNWYyNmVhN2M3MzViNzU3ZWNmZGM" title="Buy One Get One Half Price" />
              
              <img alt="Buy One Get One Half Price" src="https://www.thetoyshop.com/medias/TE-BOGOHP-selected-toys-2025-HP-pod-350x350px.jpg?context=bWFzdGVyfHJvb3R8MTg1MjE1fGltYWdlL2pwZWd8YURZM0wyZ3paUzh4TWpVMk9ERTNPVGsyTlRrNE1pOVVSVjlDVDBkUFNGQWdjMlZzWldOMFpXUWdkRzk1YzE4eU1ESTFYMGhRSUhCdlpDQXpOVEI0TXpVd2NIZ3VhbkJufGVmOGEwMTVjNmFjMjJhODViYzE1NmFjMzhiZjQ3MDQ1NDgyYjNlMjNmOWRjM2UyOGVhMTMxODkzNGQ0OGRhYzU" title="Buy One Get One Half Price" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">				 			 
              <img alt="3 for 2"  src="https://www.thetoyshop.com/medias/2025-promo-title-3-for-2-350x90.jpg?context=bWFzdGVyfHJvb3R8MzcxNTd8aW1hZ2UvanBlZ3xhR0ppTDJnNFlTOHhNalUyTWpBeE1UazBOekF6T0M4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFRNdFptOXlMVEl0TXpVd2VEa3dMbXB3Wnd8YTdmZDdiZTlkODAzM2RlY2UyYjZiMThlYTU3OGJjNDJkZmFkZDIwNzMzMWVjMDliM2E5ZTI5ZGI3MGMxYzU2OQ" title="3 or 2" />
                        
              <img alt="Barbie &amp; Polly Pocket 3 for 2" src="https://www.thetoyshop.com/medias/2025-promo-barbie-polly-pocket-350x350.jpg?context=bWFzdGVyfHJvb3R8NjEyMTJ8aW1hZ2UvanBlZ3xhR1V3TDJnNU5DOHhNalUyTWpBeE1UWTFNakV5Tmk4eU1ESTFMWEJ5YjIxdkxXSmhjbUpwWlMxd2IyeHNlUzF3YjJOclpYUXRNelV3ZURNMU1DNXFjR2N8ZWMxZGQ2NTAxZGIzYjZiYWRhNzk4NzgxYjAxY2E4MGE2MWIxMzJkZTA4ZDBkZTMxYTYwMGQxNTU1Mjc2NjcwZQ" title="Barbie &amp; Polly Pocket 3 for 2" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">				 			 						 
              <img alt="2 for £20"  src="https://www.thetoyshop.com/medias/2025-promo-title-2-for-20-350x90.jpg?context=bWFzdGVyfHJvb3R8MzkxNjF8aW1hZ2UvanBlZ3xhR0k1TDJnNFpDOHhNalUyTWpBeE1UZzRNVFV3TWk4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFRJdFptOXlMY0tqTWpBdE16VXdlRGt3TG1wd1p3fDU2NDlkMWZiMTMwYmY3OTRkZTJiMzg3MTBlYjJmZGIxMDU3NTJiNzY0ZmJiYWY0NzM5ZTg5YzM3ZDM2MDFmZTc" title="2 for £20" />
                                
              <img alt="Minecraft 2 for £20" src="https://www.thetoyshop.com/medias/TE-Homepage-Pod-Minecraft.jpg?context=bWFzdGVyfHJvb3R8MTI2NTg5fGltYWdlL2pwZWd8YUdaakwyZ3hNeTh4TWpRM01qWXpPREUzTnpNeE1DOVVSU0JJYjIxbGNHRm5aU0JRYjJSZlRXbHVaV055WVdaMExtcHdad3w2MTExNDM5NjFhNTFmZmViNGEyNDg1OTYyMTliZjFkYTYwODQ3NzJmYzU3YzVmYTAzNTJkZWRiMWU3NDQ5NGMz" title="Minecraft 2 for £20" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">				 			 						 				 
              <img alt="Incredible Deals"  src="https://www.thetoyshop.com/medias/2025-promo-title-incredible-deals-350x90.jpg?context=bWFzdGVyfHJvb3R8NDQxNjJ8aW1hZ2UvanBlZ3xhREV5TDJnNFlpOHhNalUyTWpBeE1Ua3hOREkzTUM4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFdsdVkzSmxaR2xpYkdVdFpHVmhiSE10TXpVd2VEa3dMbXB3Wnd8NDNkZDdmOWJkMWZiOGZhZWI1ZGExOGI1Njk0OThhZDFkMzFhYzYwY2UwZTQwMjMxYjI4M2UyYzAwNzc5NjVmMw" title="Incredible Deals" />
              
              <img alt="Reduced to Clear" src="https://www.thetoyshop.com/medias/2025-promo-reduced-to-clear-350x350.jpg?context=bWFzdGVyfHJvb3R8NjY3NTB8aW1hZ2UvanBlZ3xhRGRtTDJoaE5TOHhNalUyTWpBeE1URTVNek0zTkM4eU1ESTFMWEJ5YjIxdkxYSmxaSFZqWldRdGRHOHRZMnhsWVhJdE16VXdlRE0xTUM1cWNHY3xjN2E2YjRiNTc0NTQ5MzNmZjdlN2UyOTA0NjQ1ZDRiMDFhODUzMjE0ZDQ4NzUxN2ZkODNkNzBkY2M4YjUxYTZk" title="Reduced to Clear" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">				 			 						 				 							 
              <img alt="Buy 1 Get 2nd Half Price"  src="https://www.thetoyshop.com/medias/2025-promo-title-bogshp-350x90.jpg?context=bWFzdGVyfHJvb3R8NDI4MDF8aW1hZ2UvanBlZ3xhRGd3TDJnek9DOHhNalUyTWpBeE1qSTNORGN4T0M4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFdKdlozTm9jQzB6TlRCNE9UQXVhbkJufDIwMzNhODMyMTkyNmIzMjRiMWU5Zjc3OTg5ZDE0OWRjMzYzYjJlNTg2MjVlNWYyNmVhN2M3MzViNzU3ZWNmZGM" title="Buy 1 Get 2nd Half Price" />
                                  
              <img alt="Back to School Buy 1 Get 2nd Half Price" src="https://www.thetoyshop.com/medias/2025-promo-back-to-school-350x350.jpg?context=bWFzdGVyfHJvb3R8NzUzNTd8aW1hZ2UvanBlZ3xhR0l3TDJnek1TOHhNalUyTWpBeE1qUTNNVE15Tmk4eU1ESTFMWEJ5YjIxdkxXSmhZMnN0ZEc4dGMyTm9iMjlzTFRNMU1IZ3pOVEF1YW5Cbnw3Yzk5NDRmYTJhMDEyNGY4YjZhYzY1MWE2ZjhmY2E1YTc4MTRjM2ViNzMyZmJiNDY0Y2NmMDQ1YzAzYTZhMjQ1" title="Back to School Buy 1 Get 2nd Half Price" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">
              <img alt="2 for £20"  src="https://www.thetoyshop.com/medias/2025-promo-title-2-for-20-350x90.jpg?context=bWFzdGVyfHJvb3R8MzkxNjF8aW1hZ2UvanBlZ3xhR0k1TDJnNFpDOHhNalUyTWpBeE1UZzRNVFV3TWk4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFRJdFptOXlMY0tqTWpBdE16VXdlRGt3TG1wd1p3fDU2NDlkMWZiMTMwYmY3OTRkZTJiMzg3MTBlYjJmZGIxMDU3NTJiNzY0ZmJiYWY0NzM5ZTg5YzM3ZDM2MDFmZTc" title="2 for £20" />
                                  
              <img alt="2 for £20 Selected Remote Control Cars" src="https://www.thetoyshop.com/medias/PNC-RC-CARS-HP-POD-350-x-350px.jpg?context=bWFzdGVyfHJvb3R8MzAyODd8aW1hZ2UvanBlZ3xhREk1TDJnNU1DOHhNalUxT1RZNU1EQXpPVE15Tmk5UVRrTmZVa05mUTBGU1UxOUlVQzFRVDBSZk16VXdMWGd0TXpVd2NIZ3VhbkJufGY2NGEwNDM3MzdhOGMwMzQ2YTFlMTNhMGM0ZGNkNDVjY2VmYWExNzQ4MDY2YjZmMDY3MWJhODMyMjdhNmJhOTk" title="2 for £20 Selected Remote Control Cars" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-auto">
          <div className="transition-all hover:scale-105 group pt-2">
            <Link to="/category" className="block rounded-[20px] lg:rounded-[30px] mb-6 overflow-hidden group-hover:shadow-lg transition-all">		 
              <img alt="Buy 1 get 1 Free on Kweenies"  src="https://www.thetoyshop.com/medias/2025-promo-title-bogof-350x90.jpg?context=bWFzdGVyfHJvb3R8NDE5MDd8aW1hZ2UvanBlZ3xhRE5tTDJnell5OHhNalUyTWpBeE1qRTBNelkwTmk4eU1ESTFMWEJ5YjIxdkxYUnBkR3hsTFdKdloyOW1MVE0xTUhnNU1DNXFjR2N8MTc2YTQxMWI1Njc0ZDgxZTQwMzdmMDkyMzY5YmJlZjAwMDUyZjkzZTk2N2VjZGQ3NGI3YWI3ZmNiNmM2ZDljOA" title="Buy 1 get 1 Free on Kweenies" />
                        
              <img alt="Buy 1 get 1 Free on Kweenies" src="https://www.thetoyshop.com/medias/2025-xox-kweenie-promo-pod-350x350.jpg?context=bWFzdGVyfHJvb3R8MTQ5MzcyfGltYWdlL2pwZWd8YUdGbUwyZzBOaTh4TWpVM01UTTJNREV3TURNNE1pOHlNREkxTFhodmVDMXJkMlZsYm1sbExYQnliMjF2TFhCdlpDMHpOVEI0TXpVd0xtcHdad3w4YWVjNjExYTE2YWViOTEwMGVmMjY1NTQ0ODExOTY2MGUyMDUwNDY0ODUwYTc4ZGQ1ZDc2NWQ4ZTRhOGRmMjAx" title="Buy 1 get 1 Free on Kweenies" />
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeOffers