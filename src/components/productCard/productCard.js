import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Heart, Eye} from "lucide-react";
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';

import { setIsCartOpen, addItemToCart } from '../../store/cart/cartReducer';

import { addItemToWishlist, removeItemFromWishlist } from "../../store/wishlist/wishlistReducer";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Button from "../button/Button";
import Dropdown from "../../components/dropdown/Dropdown";

const ProductCard = ({ product }) => {
  const {
    brand,
    name,
    price,
    image,
    originalPrice,
    isNew,
    isBestseller,
    alternateImage,
  } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // swap colours
  const [swatchColor, setSwatchColor] = useState('blue');
  //show stores
  const [storesOpen, setStoresOpen] = useState(false);

  const wrapperRef = useRef(null);

  const goToLinkHandler = () => {
    navigate("/product-details/" + product.id);
    setTimeout(() => {
      window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    }, 250)
  };

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    closeQuickView();
    dispatch(setIsCartOpen(true));
    document.body.classList.add('body-noscroll');
    window.scrollBy(0 , -2)
  }

  const addProductToWishlist = () => {
    dispatch(addItemToWishlist(product));
  }

  const removeProductFromWishlist = () => {
    dispatch(removeItemFromWishlist(product));
  }

  // Quick view modal state
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Reset modal state when opening
  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  // Add to favourites
  const wishlistItems = useSelector(selectWishlistItems);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
         closeQuickView();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <>
      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[700] bg-black/60">
          <div ref={wrapperRef} className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 shadow-text-blue bg-gradient-to-br from-black via-gray-900 to-black p-6 sm:rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative flex flex-col gap-4">
              {quickViewProduct && (
                <>
                  <button
                    name="Close quick view"
                    onClick={closeQuickView}
                    className="absolute right-[-10px] top-[-15px] text-purple-500 rounded-full border-[2px] border-purple-500 z-[2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x h-5 w-5"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Product Images */}
                    <div className="max-w-[calc(100vw-50px)]">
                      <div className="relative">
                        <Swiper
                          modules={[Autoplay, Pagination]}
                          spaceBetween={20}
                          slidesPerView={1}
                          pagination={{ clickable: true }}
                          autoplay={false}
                          onTransitionEnd={() => {
                            const slides =
                              document.querySelectorAll(".swiper-slide");

                            slides.forEach((slide) => {
                              if (
                                slide.classList.contains("swiper-slide-active")
                              ) {
                                const video = slide.querySelector("video");
                                if (video) {
                                  video.play();
                                }
                              } else {
                                const video = slide.querySelector("video");
                                if (video) {
                                  video.pause();
                                }
                              }
                            });
                          }}
                          loop
                        >
                          {product.video && (
                            <SwiperSlide className="h-auto">
                              <video
                                className="object-cover w-full h-full"
                                autoplay=""
                                loop
                                muted
                                playsInline
                              >
                                <source src={product.video} type="video/mp4" />
                              </video>
                            </SwiperSlide>
                          )}
                          {product.images.map((image) => (
                            <SwiperSlide>
                              <img
                                className="object-cover w-full h-full"
                                src={image}
                                alt={product.name}
                              />
                              {swatchColor === 'orange' && <span className="absolute top-1/2 left-1/2 -rotate-45 text-orange-600 font-bold text-[100px] -translate-y-1/2 -translate-x-1/2">ORANGE</span>}
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className="absolute top-3 right-3 z-[1]">
                          <button
                            onClick={wishlistItems.some(item => product.id === item.id) ? removeProductFromWishlist : addProductToWishlist}
                            name="Add to favourites"
                            className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg  h-10  transition-all hover:scale-105 hover:text-brandPink`}
                          >
                            <Heart
                              className={`h-6 md:h-10 w-6 md:w-10 ${
                                wishlistItems.some(item => product.id === item.id)
                                  ? "text-brandPink animate-bigheart"
                                  : "text-gray-100"
                              }`}
                              fill={
                                wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"
                              }
                            />
                            <Heart
                              className={`absolute bottom-0 left-[-6px] 0 h-[5px] md:h-[10px] w-[5px] md:w-[10px] opacity-0 text-transparent ${
                                wishlistItems.some(item => product.id === item.id)
                                  ? "animate-miniheartleft text-brandPink"
                                  : "text-gray-100"
                              }`}
                              fill={
                                wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"
                              }
                            />
                            <Heart
                              className={`absolute bottom-0 right-[-4px] h-[5px] md:h-[10px] w-[5px] md:w-[10px] opacity-0 text-transparent ${
                                wishlistItems.some(item => product.id === item.id)
                                  ? "animate-miniheartright text-brandPink"
                                  : "text-gray-100"
                              }`}
                              fill={
                                wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"
                              }
                            />
                            <span className="sr-only">Add to favourites</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-3 md:space-y-6">
                      <div>
                        <h2 className="bg-gradient-to-br from-gray-500 via-gray-100 to-gray-500 bg-clip-text text-transparent text-xl md:text-3xl font-semibold text-left">
                          {product.name} {swatchColor === 'orange' && <span className="text-orange-600">ORANGE</span>}
                        </h2>
                        <button className="text-gray-400 text-xs underline mt-0" onClick={() => {goToLinkHandler(product); window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });}}>View full product</button>
                      </div>
                      <div className="flex flex-wrap items-start justify-between mt-0">
                        <div className="flex flex-col items-start w-1/2 md:w-auto justify-between">
                          <div className="rating mb-2">
                            <div className="flex items-end">
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs ml-1 text-gray-100">
                                (3)
                              </span>
                            </div>
                          </div>
                          <div className="price">
                            <div className="flex items-end">
                              <span className="text-brandRed font-bold text-xl md:text-2xl">
                                £{product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="line-through text-gray-400 text-md md:text-lg ml-1">
                                  £{product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-center text-white bg-brandNeonBlue text-xs md:text-sm border border-brandNeonBlue px-2 py-1 rounded-md md:ml-2 :w-auto">
                          FREE UK DELIVERY
                        </span>
                      </div>
                      <div className="flex flex-wrap items-end justify-between pb-6 border-b-[3px] border-gray-300 md:flex-row">
                        <div className="w-full md:w-auto mb-0">
                          <div className="flex flex-wrap items-center notices justify-end">
                            <span className="flex items-center justify-between text-brandNeonBlue border-[2px] border-brandNeonBlue p-2 rounded-md mb-2 md:mb-0 w-full md:w-auto font-bold">
                              <span className="font-semibold">Other styles</span>
                              <div className="flex items-center">
                                <button onClick={() => setSwatchColor('blue')} className={`transition-all rounded-full bg-brandNeonBlue w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 hover:border-gray-100 ${swatchColor === 'blue' ? 'border-gray-100' : 'border-brandNeonBlue'}`}><span className="sr-only">Blue</span></button>
                                <button onClick={() => setSwatchColor('orange')} className={`rounded-full bg-orange-300 w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px]  ml-3 transition-all hover:border-orange-500 ${swatchColor === 'orange' ? 'border-orange-500' : 'border-orange-300'}`}><span className="sr-only">Orange</span></button>
                                <button onClick={() => setSwatchColor('black')}  className={`rounded-full bg-black w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 transition-all hover:border-gray-500 ${swatchColor === 'black' ? 'border-gray-500' : 'border-black'}`}><span className="sr-only">Black</span></button>
                                <button onClick={() => setSwatchColor('red')}  className={`rounded-full bg-red-500 w-[20px] md:w-[25px] h-[20px] md:h-[25px] border-[3px] ml-3 transition-all hover:border-red-700 ${swatchColor === 'red' ? 'border-red-700' : 'border-red-500'}`}><span className="sr-only">red</span></button>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="w-full py-4 pt-0 md:pt-4">
                          <div className="flex items-center flex-wrap">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M6.61 0.639062C10.1216 0.639062 13.0134 3.53094 13.0134 7.0425C13.0134 10.5799 10.1216 13.4459 6.61 13.4459C3.07262 13.4459 0.206563 10.5799 0.206563 7.0425C0.206563 3.53094 3.07262 0.639062 6.61 0.639062ZM6.61 1.87844C3.74395 1.87844 1.44594 4.20227 1.44594 7.0425C1.44594 9.90855 3.74395 12.2066 6.61 12.2066C9.45023 12.2066 11.7741 9.90855 11.7741 7.0425C11.7741 4.20227 9.45023 1.87844 6.61 1.87844ZM10.2248 5.2609C10.3281 5.36418 10.3281 5.57074 10.2248 5.69984L5.75793 10.1151C5.62883 10.2442 5.44809 10.2442 5.31898 10.1151L2.96934 7.73965C2.86605 7.63637 2.86605 7.4298 2.96934 7.3007L3.5632 6.73266C3.6923 6.60355 3.87305 6.60355 4.00215 6.73266L5.55137 8.28187L9.19203 4.66703C9.32113 4.53793 9.5277 4.53793 9.63098 4.66703L10.2248 5.2609Z"
                                fill="#328320"
                              />
                            </svg>
                            <span className="font-bold ml-3 text-sm md:text-md text-brandGreen">
                              3 in stock in Amersham
                            </span>
                            <button className="text-xs text-gray-400 underline ml-3"
                              onClick={() => setStoresOpen(!storesOpen)}
                            >
                              Select another store
                            </button>
                            <div
                              className={`grid overflow-hidden transition-all duration-300 ease-in-out w-full ${
                                storesOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0"
                              }`}
                            >
                              <div className="w-full overflow-hidden">
                                <div className="mt-4">
                                  <form id="pickup-form" className="flex">
                                    <label className="text-sm text-gray-100 mr-6 font-semibold">
                                      <input
                                        type="radio"
                                        name="option"
                                        id="option1"
                                        className="accent-brandGreen mr-2"
                                        defaultChecked
                                      />
                                      Entertainer stores
                                    </label>
                                    <label className="text-sm text-gray-100 font-semibold">
                                      <input
                                        type="radio"
                                        name="option"
                                        id="option1"
                                        className="accent-brandGreen mr-2"
                                      />
                                      Tesco stores
                                    </label>
                                  </form>
                                  <div className="flex justify-between py-3 border-b-[3px] border-gray-300">
                                    <div>
                                      <button className="text-sm text-gray-400 mr-3 font-semibold">
                                        List view
                                      </button>
                                      <button className="text-sm text-gray-400 font-semibold">
                                        map view
                                      </button>
                                    </div>
                                    <span className="text-sm text-gray-400">Results</span>
                                  </div>
                                  <div className="text-sm text-gray-100 py-4">
                                    <span className="font-semibold">The Entertainer Amersham</span>
                                    <br />2 Sycamore Road, Amersham HP6 5DR
                                    <div className="text-gray-400 mt-2">
                                      Collect within 30 minutes for FREE
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Dropdown
                          arrowAgainstWord={true}
                          title="More Details"
                          swapActiveTitle={true}
                          activeTitle={'Less Details'}
                          className="text-gray-100 font-semibold text-base flex items-center justify-center border-[3px] border-purple-500 rounded-full w-full py-2 [&_.border-r-transparent]:hidden hover:shadow-text-purple transition-all"
                          answer={
                            <div className="py-3 text-gray-100">
                              <p className="mb-3">
                                The Hot Wheels Monster Trucks Big Rigs haul big
                                personalities on six wheels for epic adventures.
                              </p>

                              <p className="mb-3">
                                Each die-cast truck captures the style and
                                personality of a fan-favourite Monster Truck
                                character or creature in 1:64 scale. Add in the
                                six massive wheels and this rig can also transport
                                an additional Hot Wheels Monster Truck (sold
                                separately) with either a tow hook or on the
                                flatbed!
                              </p>

                              <p className="mb-2 font-semibold text-lg">Product features:</p>
                              <ul className="list-none">
                                <li className="flex items-start mb-3 before:aspect-square before:mt-1.5 before:mr-2 before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-purple-500">
                                  Includes: 1x Hot Wheels Monster Trucks Big Rigs Vehicle
                                  (styles vary) Get the adventures movin' with a Hot Wheels
                                  Monster Trucks Big Rig!
                                </li>
                                <li className="flex items-start mb-3 before:aspect-square before:mt-1.5 before:mr-2 before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-purple-500">
                                  These Big Rigs feature six wheels to go even bigger on the
                                  Monster Truck action
                                </li>
                                <li className="flex items-start mb-3 before:aspect-square before:mt-1.5 before:mr-2 before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-purple-500">
                                  Each 1:64 scale die-cast vehicle captures the personality
                                  of fan-favourite Monster Truck creatures and characters
                                  with the eye-catching designs that fans love
                                </li>
                                <li className="flex items-start mb-3 before:aspect-square before:mt-1.5 before:mr-2 before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-purple-500">
                                  Kids can haul additional 1:64 scale vehicles on the
                                  flatbed or with a tow hook on the Big Rig (sold
                                  separately)
                                </li>
                                <li className="flex items-start mb-3 before:aspect-square before:mt-1.5 before:mr-2 before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-purple-500">
                                  Suitable for ages 3 years +
                                </li>
                              </ul>
                              <p className="text-lg font-bold mt-4">Specifications</p>
                              <p className="mb-1">
                                Manufacturer: <span className="font-bold">MATTEL TOYS</span>
                              </p>
                              <p className="mb-1">
                                Manufacturer Number:
                                <span className="font-bold">HWN86</span>
                              </p>
                              <p className="mb-1">
                                Our Product Number:
                                <span className="font-bold">566798</span>
                              </p>
                              <p>
                                Safety Information:
                              </p>
                              <p>
                                <span className="font-bold">
                                  WARNING. Not suitable for children under 36 months. Small
                                  Parts. Choking Hazard.
                                </span>
                              </p>
                            </div>
                          }
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        {/* <div className="flex items-center gap-4">
                          <div className="flex items-center border-[3px] border-gray-300 rounded-full">
                            <button
                                name="Reduce quanitity"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 text-gray-100"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Reduce quantity</span>
                            </button>
                            <span className="px-3 md:px-4 py-1 md:py-2 min-w-[3rem] text-center text-gray-100 text-lg font-bold">{quantity}</span>
                            <button
                                name="Increase quantity"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 text-gray-100"
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={quantity >= 10}
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase quanitity</span>
                            </button>
                          </div>
                        </div> */}
                        <button
                          className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all w-full"
                          onClick={addProductToCart}
                        >
                          Add to Basket
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="rounded-3xl p-[2px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-br after:from-gray-100 after:via-black  after:to-gray-100  hover:after:animate-borderGradient after:z-0">
        <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black p-2 rounded-[calc(1.5rem-1px)] cursor-pointer flex flex-wrap transition-all z-[1] relative flex flex-col">
          <div className="relative group">
            <button onClick={goToLinkHandler}>
              <img
                src={image || "/placeholder.svg"}
                alt={name}
                className="w-full object-cover transition-transform duration-300"
              />

              {/* Alternate image on hover */}
              <img
                src={alternateImage || "/placeholder-alt.svg"}
                alt={`${name} - alternate view`}
                className="absolute top-0 inset-0 w-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
            </button>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex w-full gap-1 flex justify-center drop-shadow-md">
              {isNew && (
                <div className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs md:text-sm font-bold text-black">
                  <span className="shadow-text-green">NEW TOYS</span>
                </div>
              )}
              {isBestseller && (
                <div className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs md:text-sm font-bold text-black">
                  <span className="shadow-text-red ">33% OFF</span>
                </div>
              )}
            </div>
            <div className="absolute top-2 right-[-5px] md:top-3 md:right-1 flex flex-col md:gap-2 opacity-0 group-hover:opacity-100 opacity-100 md:opacity-0 transition-opacity">
              <button
                onClick={wishlistItems.some(item => product.id === item.id) ? removeProductFromWishlist : addProductToWishlist}
                name="Add to favourites"
                className={`relative inline-flex items-center justify-center md:gap-2 whitespace-nowrap text-lg h-4 md:h-9  transition-all hover:scale-105 hover:text-brandPink`}
              >
                <Heart
                  className={`h-5 md:h-8 w-5 md:w-8 ${
                    wishlistItems.some(item => product.id === item.id)
                      ? "text-brandPink animate-bigheart"
                      : "text-gray-100"
                  }`}
                  fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"}
                />
                <Heart
                  className={`absolute bottom-0 left-1 h-2 w-2 opacity-0 text-transparent ${
                    wishlistItems.some(item => product.id === item.id)
                      ? "animate-miniheartleft text-brandPink"
                      : "text-gray-100"
                  }`}
                  fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"}
                />
                <Heart
                  className={`absolute bottom-0 right-2 h-2 w-2 opacity-0 text-transparent ${
                    wishlistItems.some(item => product.id === item.id)
                      ? "animate-miniheartright text-brandPink"
                      : "text-gray-100"
                  }`}
                  fill={wishlistItems.some(item => product.id === item.id) ? "#FF7BAC" : "transparent"}
                />
                <span className="sr-only">Add to favourites</span>
              </button>
              <button
                name="quick view"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 rounded-md px-3 transition-all hover:scale-105"
                onClick={() => openQuickView(product)}
              >
                <Eye className="h-5 md:h-8 w-5 md:w-8 text-purple-500 hover:text-purple-800 transition-all" />
                <span className="sr-only">Open quick view</span>
              </button>
            </div>
          </div>
          <div className="p-2 px-0 flex flex-col grow">
            <div className="flex flex-wrap justify-center mb-1">
              <div className="inline-flex items-center text-xs text-gray-400">{brand}</div>
            </div>
            <button className="flex flex-col h-full flex-flex-col" onClick={goToLinkHandler}>
              <h2 className="bg-gradient-to-br from-gray-500 via-gray-100 to-gray-500 bg-clip-text md:!leading-[1.2] text-transparent lg:text-lg font-semibold leading-[1.2] xl:leading-[1.1] line-clamp-3 mb-2">
                {name}
              </h2>
              <div className="flex items-center justify-center gap-2 grow">
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-100 ml-1">(3)</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1 my-2">
                <span className="text-base font-bold text-brandRed">
                  £{price}
                </span>
                {originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    £{originalPrice}
                  </span>
                )}
              </div>
            </button>
            <div className="flex items-center justify-center">
              <button
                className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all"
                onClick={addProductToCart}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
