import { useParams, useNavigate } from "react-router-dom";
import { preload } from 'react-dom';
import { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cartReducer";

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";

import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../store/wishlist/wishlistReducer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { products } from "../../data/products";
import { Star, Heart } from "lucide-react";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import { setIsCartOpen } from "../../store/cart/cartReducer";
import BundlesProductCard from "../../components/bundlesProductCard/BundlesProductCard";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));
  const swiperRef = useRef(null);
  const [klarnaOpen, setKlarnaOpen] = useState(false);
  const [bundleExpanded, setBundleExpanded] = useState(false);
  const [bundleItemsCount, setBundleItemsCount] = useState(3);

  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setKlarnaOpen(false);
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

  const addToBag = useRef();

  const AddVisible = useIsVisible(addToBag);

  const searchTerm = product.brand;

  const searchResults = products.filter((product) => {
    return (
      product.brand.includes(searchTerm)
    )
  })

  const [bundleTotalPrice, setBundleTotalPrice] = useState('£'+searchResults.slice(0,3).reduce((sum, item) => sum + item.price, 0).toFixed(2))

  const changeBundleHandler = (e) => {
    const bundlePrices = [];
    const bundleItem = e.target.closest(".bundleContainer");
    const bundleItems = e.target.closest("#bundle").querySelectorAll("input:checked");
    bundleItems.forEach((item) => {
      bundlePrices.push(item.closest(".flex.items-center.relative").querySelector(".pricevalue").textContent);
    })

    setBundleItemsCount(bundleItems.length);

    const result  = bundlePrices.map((x) => +x);

    const bundleTotalPriceInit = result.reduce((a, b) => a + b,  0);

    setBundleTotalPrice('£'+bundleTotalPriceInit.toFixed(2));

    bundleItem.classList.toggle('grayscale');
    bundleItem.classList.toggle('opacity-50');
  }

  const changeBundleHandlerClick = (e) => {
    e.target.closest(".bundleContainer").querySelector("input").checked = ! e.target.closest(".bundleContainer").querySelector("input").checked;
    const bundlePrices = [];
    const bundleItem = e.target.closest(".bundleContainer");
    const bundleItems = e.target.closest("#bundle").querySelectorAll("input:checked");
    bundleItems.forEach((item) => {
      bundlePrices.push(item.closest(".flex.items-center.relative").querySelector(".pricevalue").textContent);
    })

    setBundleItemsCount(bundleItems.length);

    const result  = bundlePrices.map((x) => +x);

    const bundleTotalPriceInit = result.reduce((a, b) => a + b,  0);

    setBundleTotalPrice('£'+bundleTotalPriceInit.toFixed(2));

    bundleItem.classList.toggle('grayscale');
    bundleItem.classList.toggle('opacity-50');
  }

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    dispatch(setIsCartOpen(true));
    document.body.classList.add("body-noscroll");
    window.scrollBy(0, -2);
  };

  const addBundleToCart = (e) => {
    const bundleItems = e.target.closest("#bundle").querySelectorAll("input");
    bundleItems.forEach((item) => {
      if (item.checked) {
        item
          .closest(".flex.items-center.relative")
          .querySelector(".add-to-basket")
          .click();
      }
    });
    setTimeout(() => {
      dispatch(setIsCartOpen(true));
      document.body.classList.add("body-noscroll");
      window.scrollBy(0, -2);
    }, 100);
    };

    const checkAllBundle = () => {
      const checkboxes = document.querySelector("#bundle").querySelectorAll("input");
      checkboxes.forEach(function(box){
        box.checked = true;
        setTimeout(() => {
          const bundlePrices = [];
          const bundleItems = box.closest("#bundle").querySelectorAll("input:checked");
          bundleItems.forEach((item) => {
            bundlePrices.push(item.closest(".flex.items-center.relative").querySelector(".pricevalue").textContent);
          })

          const result  = bundlePrices.map((x) => +x);

          const bundleTotalPriceInit = result.reduce((a, b) => a + b,  0);

          setBundleTotalPrice('£'+bundleTotalPriceInit.toFixed(2));
        }, 750);
      });
    }

  // Add to favourites
  const addProductToWishlist = () => {
    dispatch(addItemToWishlist(product));
  };

  // Remove from favourites
  const removeProductFromWishlist = () => {
    dispatch(removeItemFromWishlist(product));
  };

  const wishlistItems = useSelector(selectWishlistItems);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // slide out tab
  const [tabOpen, setTabOpen] = useState(false);

  // swap colours
  const [swatchColor, setSwatchColor] = useState("blue");

  //show stores
  const [storesOpen, setStoresOpen] = useState(false);

  //show offer
  const [offerOpen, setOfferOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-6">
        <div className="rounded-xl flex flex-wrap bg-gradient-to-br from-black via-gray-900 to-black items-start shadow-sm shadow-text-blue">
          <div className="relative w-full md:w-2/5 rounded-xl overflow-hidden [&_.swiper-pagination]:relative [&_.swiper-pagination]:mt-2 [&_.swiper-pagination-bullet]:size-3 [&_.swiper-slide-zoomed]:cursor-move [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2]">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Pagination, Zoom]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={false}
              zoom={true}
              onTransitionEnd={() => {
                const slides = document.querySelectorAll(".swiper-slide");

                slides.forEach((slide) => {
                  if (slide.classList.contains("swiper-slide-active")) {
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
                    playsInline
                    loop
                    muted
                  >
                    <source src={product.video} type="video/mp4" />
                  </video>
                </SwiperSlide>
              )}
              {product.images.map((image) => (
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    {preload(image, {as: "image"})}
                    <img
                      className="object-cover w-full h-full"
                      src={image}
                      alt={product.name}
                      fetchPriority="high"
                    />
                  </div>
                  {swatchColor === "orange" && (
                    <span className="absolute top-1/2 left-1/2 -rotate-45 text-orange-600 font-bold text-[100px] -translate-y-1/2 -translate-x-1/2">
                      ORANGE
                    </span>
                  )}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-gray-100">double click to zoom</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-2 left-2 flex gap-1 flex flex-col items-center z-20">
              {product.isNew && (
                <div className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs md:text-sm w-12 h-12 md:w-14 md:h-14 text-center !leading-[1.1] font-bold text-black aspect-square">
                  <span className="shadow-text-green">NEW TOYS</span>
                </div>
              )}
              {product.isBestseller && (
                <div className="inline-flex items-center rounded-lg px-2 py-0.5 text-xs md:text-sm w-12 h-12 md:w-14 md:h-14 text-center !leading-[1.1] font-bold text-black aspect-square">
                  <span className="shadow-text-red -mt-1.5"><span className="text-base md:text-lg">33</span>% OFF</span>
                </div>
              )}
            </div>

            {/* <div className={`absolute top-2 left-1/2 -translate-x-1/2 z-[10] ${offerOpen && 'w-full p-4 !z-[602]'}`}>
              <button onClick={() => {setOfferOpen(true)}} className={`shadow-md hover:shadow-lg group inline-flex items-center justify-center font-semibold text-lg rounded-[30px] bg-brandPinkDark text-white px-6 pr-0 border-[3px] border-white transition-all hover:bg-brandPink hover:scale-105 overflow-hidden ${offerOpen ? 'hidden' : 'inline-flex'}`}>
                <span className="flex items-center gap-2">
                  offer
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M0.597641 8.51416L0.59764 2.13916C0.59764 1.72249 0.743473 1.36833 1.03514 1.07666C1.32681 0.784994 1.68097 0.63916 2.09764 0.63916L8.47264 0.63916C8.88931 0.63916 9.24347 0.784993 9.53514 1.07666L16.1601 7.70166C16.4518 7.99333 16.5976 8.34749 16.5976 8.76416C16.5976 9.18083 16.4518 9.53499 16.1601 9.82666L9.78514 16.2017C9.49347 16.4933 9.13931 16.6392 8.72264 16.6392C8.30597 16.6392 7.95181 16.4933 7.66014 16.2017L1.03514 9.57666C0.743474 9.28499 0.597641 8.93083 0.597641 8.51416ZM5.16014 3.07666C4.86847 2.78499 4.51431 2.63916 4.09764 2.63916C3.68097 2.63916 3.32681 2.78499 3.03514 3.07666C2.74347 3.36833 2.59764 3.72249 2.59764 4.13916C2.59764 4.55583 2.74347 4.90999 3.03514 5.20166C3.32681 5.49333 3.68097 5.63916 4.09764 5.63916C4.51431 5.63916 4.86847 5.49333 5.16014 5.20166C5.45181 4.90999 5.59764 4.55583 5.59764 4.13916C5.59764 3.72249 5.45181 3.36833 5.16014 3.07666Z" fill="white"/>
                  </svg>
                </span>
                <img src="/peeking-face.svg" alt="Ray Offer" className="ml-2 h-full block mb-[-1px]" />
              </button>
               <div className={`shadow-md overflow-hidden transition-transform transition-opacity relative ${offerOpen ? 'scale-1 w-full opacity-1' : 'scale-0 w-0 opacity-0'}`}>
                <button
                    onClick={() => {setOfferOpen(!offerOpen)}}
                    className="absolute right-2 top-2 text-white rounded-full border-[3px] border-white bg-brandPinkDark p-2 z-[2] transition-all shadow-sm hover:scale-105 hover:shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x h-5 w-5 pointer-events-none"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <span className="sr-only">Close</span>
                  </button>
                  <img src="/offer-graphic.png" alt="buy 1 get 1 free" className="w-full h-auto" />
               </div>
            </div> */}
            <div className="absolute top-3 right-3 z-[1]">
              <button
                onClick={
                  wishlistItems.some((item) => product.id === item.id)
                    ? removeProductFromWishlist
                    : addProductToWishlist
                }
                name="Add to favourites"
                className={`relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-lg  h-10  transition-all hover:scale-105 hover:text-brandPink`}
              >
                <Heart
                  className={`h-10 w-10 ${
                    wishlistItems.some((item) => product.id === item.id)
                      ? "text-brandPink animate-bigheart"
                      : "text-gray-100"
                  }`}
                  fill={
                    wishlistItems.some((item) => product.id === item.id)
                      ? "#FF7BAC"
                      : "transparent"
                  }
                />
                <Heart
                  className={`absolute bottom-0 left-[-6px] 0 h-[10px] w-[10px] opacity-0 text-transparent ${
                    wishlistItems.some((item) => product.id === item.id)
                      ? "animate-miniheartleft text-brandPink"
                      : "text-gray-100"
                  }`}
                  fill={
                    wishlistItems.some((item) => product.id === item.id)
                      ? "#FF7BAC"
                      : "transparent"
                  }
                />
                <Heart
                  className={`absolute bottom-0 right-[-4px] h-[10px] w-[10px] opacity-0 text-transparent ${
                    wishlistItems.some((item) => product.id === item.id)
                      ? "animate-miniheartright text-brandPink"
                      : "text-gray-100"
                  }`}
                  fill={
                    wishlistItems.some((item) => product.id === item.id)
                      ? "#FF7BAC"
                      : "transparent"
                  }
                />
                <span className="sr-only">Add to favourites</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/5 p-4 px-6">
            <div className="text-center text-gray-400">{product.brand}</div>
            <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-br from-gray-500 via-gray-100 to-gray-500 bg-clip-text text-transparent text-center mb-4 md:mb-10 ">
              {product.name}
              {swatchColor === "orange" && (
                <span className="text-orange-600">ORANGE</span>
              )}
            </h1>
            <button
              className="w-full bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all"
              ref={addToBag}
              onClick={addProductToCart}
            >
              Add to Basket
            </button>
            <div className="flex flex-wrap items-end justify-between py-6 xl:py-8 border-b-[3px] border-gray-300">
              <div className="flex flex-wrap items-end w-1/2 xl:w-auto justify-between">
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
                <div className="rating mt-2 w-full xl:w-auto xl:mt-0 md:mb-1 xl:ml-8">
                  <button
                    onClick={() =>
                      document
                        .getElementById("reviews")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-end"
                  >
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs ml-1 text-gray-100">(3)</span>
                  </button>
                </div>
              </div>
              <div className="w-1/2 xl:w-auto">
                <div className="flex flex-wrap items-center notices justify-end font-semibold">
                  <span className="text-center text-brandNeonBlue text-xs md:text-sm border border-brandNeonBlue px-2 py-1 rounded-md mb-2 xl:mb-0 w-full xl:w-auto">
                    3 OTHER STYLES
                  </span>
                  <span className="text-center text-white bg-brandNeonBlue text-xs lg:text-sm border border-brandNeonBlue px-2 py-1 rounded-md xl:ml-2 w-full xl:w-auto">
                    FREE UK DELIVERY
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-end lg:items-center justify-between py-6 lg:py-4 xl:py-6 border-b-[3px] border-gray-300 flex-col-reverse lg:flex-row">
              <div className="flex flex-wrap items-end w-full lg:w-auto justify-between md:order-1">
                <div className="price">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img src="/klarna-logo.svg" alt="Klarna" className="w-14" />
                    <p className="text-sm leading-[1.2] ml-2 text-gray-100">
                      Make 3 payments of <span className="text-gray-100 font-semibold">£{(product.price / 3).toFixed(2)}</span>
                      <br />
                      <span className="text-xs">
                        <button
                          onClick={() => setKlarnaOpen(!klarnaOpen)}
                          className="underline mr-1"
                        >
                          Learn more
                        </button>
                        Interest-free payments.
                      </span>
                    </p>
                    {klarnaOpen && (
                      <div className="fixed inset-0 z-50 bg-brandBlue/60">
                        <div
                          ref={wrapperRef}
                          className="fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg sm:rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
                        >
                          <div className="relative flex flex-col gap-4">
                            <button
                              name="Close Klarna view"
                              onClick={() => setKlarnaOpen(!klarnaOpen)}
                              className="absolute right-[-10px] top-[-15px] text-gray-100 rounded-full border-[2px] border-textBlue z-[2]"
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
                          </div>
                            <h2 className="text-gray-100 text-2xl font-bold text-center mb-4">
                              How to shop with Klarna
                            </h2>
                            <div className="flex items-start gap-4 pb-4">
                              <div className="w-1/3">
                                <div className="w-auto">
                                  <svg
                                    aria-labelledby="osm-klarna-shopping-cart"
                                    viewBox="0 0 50 47"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] mx-auto mb-4"
                                  >
                                    <path
                                      d="M44.0879 34.8453L39.6426 12.4H34C34 6.88631 29.5137 2.39999 24 2.39999C18.4864 2.39999 14 6.88631 14 12.4H8.35745L3.91213 34.8443C3.44337 37.2018 4.04885 39.6188 5.57423 41.4762C7.09964 43.3346 9.35354 44.4 11.7578 44.4H36.2422C38.6465 44.4 40.9004 43.3346 42.4258 41.4762C43.9512 39.6188 44.5567 37.2018 44.0879 34.8453ZM24 6.39999C27.3086 6.39999 30 9.09139 30 12.4H18C18 9.09139 20.6914 6.39999 24 6.39999ZM39.334 38.9381C38.5703 39.8668 37.4434 40.4 36.2422 40.4H11.7579C10.5567 40.4 9.42974 39.8668 8.66606 38.9381C7.90434 38.0094 7.60159 36.8014 7.83401 35.6227L11.6426 16.4H36.3575L40.1661 35.6236C40.3985 36.8014 40.0957 38.0094 39.334 38.9381ZM29.6314 20.4H33.7979C32.8687 24.9586 28.8289 28.4 24 28.4C19.1712 28.4 15.1314 24.9586 14.2022 20.4H18.3687C19.1968 22.723 21.396 24.4 24 24.4C26.604 24.4 28.8033 22.723 29.6314 20.4Z"
                                      fill="#0B051D"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="text-sm md:text-base">
                                  Add item(s) to your cart and head to the
                                  checkout.
                                </p>
                              </div>

                              <div className="w-1/3">
                                <div className="h-[60px] mb-4 text-center">
                                  <svg
                                    part="osm-badge"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="95"
                                    height="40"
                                    viewBox="0 0 71.25 30"
                                    aria-label="Klarna"
                                    version="2.1"
                                    className="mx-auto"
                                  >
                                    <g clip-path="url(#a)">
                                      <path
                                        fill="#FFA8CD"
                                        d="M62.7688 0H8.48123C3.79718 0 0 3.79718 0 8.48123V21.5188C0 26.2028 3.79718 30 8.48123 30H62.7688c4.684 0 8.4812-3.7972 8.4812-8.4812V8.48123C71.25 3.79718 67.4528 0 62.7688 0Z"
                                      ></path>
                                      <path
                                        fill="#0B051D"
                                        d="M57.412 19.1418c-1.2436 0-2.2134-1.0286-2.2134-2.2776 0-1.2491.9698-2.2776 2.2134-2.2776 1.2441 0 2.2135 1.0285 2.2135 2.2776 0 1.249-.9694 2.2776-2.2135 2.2776Zm-.6215 2.4062c1.0608 0 2.4145-.4041 3.1645-1.9837l.0731.0367c-.329.8633-.329 1.3776-.329 1.5062v.202h2.6704v-8.8901h-2.6704v.2021c0 .1286 0 .6428.329 1.5061l-.0731.0368c-.75-1.5797-2.1037-1.9838-3.1645-1.9838-2.543 0-4.3355 2.0205-4.3355 4.6839 0 2.6633 1.7925 4.6838 4.3355 4.6838Zm-8.9822-9.3677c-1.2073 0-2.1586.4225-2.9268 1.9838l-.0732-.0368c.3292-.8633.3292-1.3775.3292-1.5061v-.2021h-2.6708v8.8901h2.744v-4.6838c0-1.2307.7134-2.0021 1.8659-2.0021 1.1526 0 1.7193.6612 1.7193 1.9837v4.7022H51.54v-5.6573c0-2.0205-1.5731-3.4716-3.7317-3.4716Zm-9.3112 1.9838-.0731-.0368c.3293-.8633.3293-1.3775.3293-1.5061v-.2021h-2.6708v8.8901h2.7439l.0183-4.2797c0-1.249.6586-2.0021 1.7379-2.0021.2926 0 .5305.0367.8048.1102v-2.7185c-1.2073-.2571-2.2866.2021-2.8903 1.745Zm-8.7257 4.9777c-1.244 0-2.2135-1.0286-2.2135-2.2776 0-1.2491.9695-2.2776 2.2135-2.2776 1.2439 0 2.2134 1.0285 2.2134 2.2776 0 1.249-.9695 2.2776-2.2134 2.2776Zm-.622 2.4062c1.061 0 2.4147-.4041 3.1647-1.9837l.0732.0367c-.3293.8633-.3293 1.3776-.3293 1.5062v.202h2.6708v-8.8901H32.058v.2021c0 .1286 0 .6428.3293 1.5061l-.0732.0368c-.75-1.5797-2.1037-1.9838-3.1647-1.9838-2.5428 0-4.3355 2.0205-4.3355 4.6839 0 2.6633 1.7927 4.6838 4.3355 4.6838Zm-8.1588-.2388h2.744V8.45166h-2.744V21.3092ZM18.9784 8.45166h-2.7988c0 2.29594-1.4086 4.35314-3.5489 5.82264l-.8415.5878V8.45166H8.88062V21.3092h2.90858v-6.3736l4.8111 6.3736h3.5489L15.521 15.211c2.1037-1.5245 3.4757-3.894 3.4574-6.75934Z"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="a">
                                        <path
                                          fill="#fff"
                                          d="M0 0h71.25v30H0z"
                                        ></path>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <p className="text-sm md:text-base">
                                  Select Klarna at the checkout to pay as you
                                  like for your purchase.
                                </p>
                              </div>

                              <div className="w-1/3">
                                <div className="w-auto">
                                  <svg
                                    aria-hidden="true"
                                    viewBox="0 0 50 47"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[60px] mx-auto mb-4"
                                  >
                                    <path
                                      d="M21.9922 37C21.9922 35.281 22.7111 34.3475 23.988 34.3475C25.2649 34.3475 25.9922 35.281 25.9922 37C25.9922 38.719 25.2649 39.6525 23.988 39.6525C22.7111 39.6525 21.9922 38.719 21.9922 37ZM31.9922 46H15.9922C11.5801 46 7.99219 42.4121 7.99219 38V9.99999C7.99219 5.58789 11.5801 1.99998 15.9922 1.99998H31.9922C36.4043 1.99998 39.9922 5.58789 39.9922 9.99999V38C39.9922 42.4121 36.4043 46 31.9922 46ZM15.9922 5.99999C13.7871 5.99999 11.9922 7.79491 11.9922 9.99999V38C11.9922 40.2051 13.7871 42 15.9922 42H31.9922C34.1973 42 35.9922 40.2051 35.9922 38V9.99999C35.9922 7.79491 34.1973 5.99999 31.9922 5.99999H15.9922Z"
                                      fill="#0B051D"
                                    ></path>
                                  </svg>
                                </div>
                                <p className="text-sm md:text-base">
                                  Manage your orders and payments in the Klarna
                                  app.
                                </p>
                              </div>
                            </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-auto mb-4 lg:mb-0 order-1 lg:order-2">
                <div className="flex flex-wrap items-center notices xl:justify-end">
                  <span className="flex items-center justify-between text-brandNeonBlue border-[2px] border-brandNeonBlue p-2 rounded-md mb-2 xl:mb-0 w-full lg:w-auto font-bold">
                    <span className="font-semibold">Other styles</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => setSwatchColor("blue")}
                        className={`transition-all rounded-full bg-brandNeonBlue w-[20px] md:w-[24px] h-[20px] md:h-[24px] border-[3px] ml-3 hover:border-brandBlue ${
                          swatchColor === "blue"
                            ? "border-brandBlue"
                            : "border-brandNeonBlue"
                        }`}
                      >
                        <span className="sr-only">Blue</span>
                      </button>
                      <button
                        onClick={() => setSwatchColor("orange")}
                        className={`rounded-full bg-orange-300 w-[20px] md:w-[24px] h-[20px] md:h-[24px] border-[3px]  ml-3 transition-all hover:border-orange-500 ${
                          swatchColor === "orange"
                            ? "border-orange-500"
                            : "border-orange-300"
                        }`}
                      >
                        <span className="sr-only">Orange</span>
                      </button>
                      <button
                        onClick={() => setSwatchColor("black")}
                        className={`rounded-full bg-black w-[20px] md:w-[24px] h-[20px] md:h-[24px] border-[3px] ml-3 transition-all hover:border-gray-500 ${
                          swatchColor === "black"
                            ? "border-gray-500"
                            : "border-black"
                        }`}
                      >
                        <span className="sr-only">Black</span>
                      </button>
                      <button
                        onClick={() => setSwatchColor("red")}
                        className={`rounded-full bg-red-500 w-[20px] md:w-[24px] h-[20px] md:h-[24px] border-[3px] ml-3 transition-all hover:border-red-700 ${
                          swatchColor === "red"
                            ? "border-red-700"
                            : "border-red-500"
                        }`}
                      >
                        <span className="sr-only">red</span>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-start w-full lg:order-3">
                <div className="w-full py-4 pt-0 xl flex flex-col md:flex-col-reverse lg:w-1/2">
                  <div className="flex items-center flex-wrap md:mt-4">
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
                    <button
                      onClick={() => setStoresOpen(!storesOpen)}
                      className="text-xs text-gray-400 underline ml-3"
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
                      <div className="w-full md:w-1/2 overflow-hidden">
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
                  <div className="flex items-center text-gray-100 font-semibold text-sm mt-4">
                    <span className="w-4 h-4 mr-2 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        version="1.1"
                        className="si-glyph si-glyph-birthday-cake"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g fill="currentColor">
                            <path
                              d="M2.002,13.062 L2.002,14.169 C2.002,15.474 1.895,15.944 3.484,15.944 L12.394,15.944 C13.982,15.944 13.874,15.473 13.874,14.169 L13.874,13.062 L2.002,13.062 L2.002,13.062 Z"
                              className="si-glyph-fill"
                            ></path>

                            <rect
                              x="4"
                              y="3"
                              width="0.935"
                              height="3.072"
                              className="si-glyph-fill"
                            ></rect>

                            <rect
                              x="7"
                              y="3"
                              width="1"
                              height="2.969"
                              className="si-glyph-fill"
                            ></rect>

                            <rect
                              x="11"
                              y="3"
                              width="0.99"
                              height="2.851"
                              className="si-glyph-fill"
                            ></rect>

                            <path
                              d="M4.965,0.975 C5.065,1.381 4.907,1.848 4.528,1.89 C4.174,1.93 3.903,1.473 4.175,1.02 C4.454,0.56 4.528,0.06 4.528,0.06 C4.528,0.06 4.848,0.487 4.965,0.975 L4.965,0.975 Z"
                              className="si-glyph-fill"
                            ></path>

                            <path
                              d="M7.938,1.021 C8.043,1.447 7.877,1.939 7.469,1.983 C7.088,2.025 6.797,1.544 7.091,1.069 C7.391,0.584 7.469,0.059 7.469,0.059 C7.469,0.059 7.811,0.509 7.938,1.021 L7.938,1.021 Z"
                              className="si-glyph-fill"
                            ></path>

                            <path
                              d="M11.974,1.023 C12.086,1.449 11.908,1.939 11.476,1.983 C11.072,2.025 10.762,1.545 11.075,1.07 C11.394,0.587 11.476,0.062 11.476,0.062 C11.476,0.062 11.839,0.512 11.974,1.023 L11.974,1.023 Z"
                              className="si-glyph-fill"
                            ></path>

                            <g transform="translate(2.000000, 6.000000)">
                              <path
                                d="M1.146,2.437 C1.561,2.437 2.162,2.043 2.339,1.905 C2.344,1.899 3.066,1.221 3.941,1.221 C4.812,1.221 5.564,1.893 5.595,1.922 C5.757,2.062 6.293,2.437 6.769,2.437 C7.331,2.437 7.877,1.932 7.877,1.932 C7.917,1.894 8.664,1.221 9.565,1.221 C10.47,1.221 11.191,1.899 11.221,1.928 C11.382,2.066 11.685,2.269 11.958,2.37 C11.927,1.069 11.329,0.03 9.782,0.03 L2.259,0.03 C0.868,0.03 0.241,0.867 0.105,1.979 C0.33,2.146 0.793,2.437 1.146,2.437 L1.146,2.437 Z"
                                className="si-glyph-fill"
                              ></path>

                              <path
                                d="M10.717,3.469 C10.699,3.453 10.16,2.95 9.566,2.95 C8.967,2.95 8.401,3.457 8.394,3.463 C8.368,3.486 7.643,4.163 6.77,4.163 C5.905,4.163 5.129,3.496 5.096,3.467 C4.933,3.321 4.414,2.95 3.942,2.95 C3.38,2.95 2.838,3.453 2.831,3.457 C2.716,3.549 1.899,4.163 1.147,4.163 C0.761,4.163 0.375,4.004 0.077,3.838 L0.077,5.945 L11.966,5.945 L11.966,4.131 C11.355,4.004 10.789,3.53 10.717,3.469 L10.717,3.469 Z"
                                className="si-glyph-fill"
                              ></path>
                            </g>

                            <rect
                              x="0"
                              y="14"
                              width="15.851"
                              height="1.935"
                              className="si-glyph-fill"
                            ></rect>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <span>
                      Age suitability: 16 and over
                    </span>
                  </div>
                </div>

                <div
                  id="bundle"
                  className={`lg:w-1/2 lg:mt-4 mb-4 lg:mb-0 grid ${bundleExpanded ? 'grid-cols-2 gap-4 p-6 -ml-6 -mr-6 md:mr-0 md:ml-0' : 'grid-cols-4'} border-[3px] border-brandNeonBlue rounded-xl relative transition-all`}
                >
                  {bundleExpanded &&
                    <button onClick={() => {setBundleExpanded(false)}} className={`absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 shadow-md hover:shadow-lg group items-center justify-center font-bold rounded-full bg-textBlue text-white transition-all hover:bg-brandBlue hover:scale-105 w-7 h-7 flex justify-cener items-center p-1`}>
                      <span
                        className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-white transition-all rotate-180`}
                        ></span>
                    </button>
                  }
                  {searchResults.slice(0, 3).map((product, i) => (
                    <div className="flex items-center relative" key={i}>
                      <div className="relative w-full bundleContainer">
                        <BundlesProductCard product={product} changeBundleHandlerClick={changeBundleHandlerClick} />
                        <label className={`${bundleExpanded ? '' : 'hidden'} flex items-center space-x-3 cursor-pointer mb-6 absolute z-20 top-2 left-2`}>
                          <input
                            type="checkbox"
                            className="relative size-[24px] block appearance-none rounded-md border-[3px] border-brandLightGreen bg-white outline-none transition-all"
                            defaultChecked
                            onChange={changeBundleHandler}
                          />
                          <span className="absolute top-0 left-[-11px] text-brandGreen">
                            <svg
                              viewBox="0 0 24 24"
                              width="20px"
                              height="20px"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[22px] h-[22px]"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </label>
                      </div>
                      {i < 2 && !bundleExpanded && (
                        <span className="text-2xl text-white font-semibold rounded-full bg-textBlue absolute right-[-10px] top-[30%] z-10 w-6 h-6 block text-center leading-[0.8] shadow-sm">
                          +
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="flex flex-col items-center justify-center rounded-lg border-[3px] border-gray-200 bg-white shadow-sm relative">
                    <div>
                      {bundleExpanded && (
                        <div className="text-lg font-semibold text-brandBlue text-center mt-2 lg:mt-0 mb-1 leading-[1]">
                          <div className={`absolute top-2 right-2 ${bundleItemsCount === 0 && 'opacity-30'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18" viewBox="0 0 30 18" fill="none">
                              <g clip-path="url(#clip0_2353_894)">
                              <g opacity="0.5">
                              <path d="M28.3784 1.92622L29.8114 2.70233C29.9434 2.76778 30.0094 2.87064 30 3.02025C29.9906 3.16986 29.9246 3.27272 29.7926 3.32882L28.3029 3.99272L28.0107 5.59168C27.9824 5.73194 27.8975 5.81609 27.7561 5.86285C27.6147 5.9096 27.5016 5.86285 27.4073 5.75999L26.3042 4.57246L24.6826 4.77817C24.5412 4.79687 24.428 4.75012 24.3526 4.62856C24.2677 4.507 24.2677 4.38544 24.3337 4.26389L25.1445 2.85194L24.4374 1.39324C24.3715 1.26233 24.3903 1.14077 24.4752 1.01921C24.56 0.907003 24.6826 0.86025 24.824 0.897652L26.4268 1.21557L27.5958 0.102847C27.6995 -9.89516e-06 27.8221 -0.0280618 27.9635 0.028042C28.105 0.0747953 28.1804 0.177652 28.1992 0.317912L28.3784 1.91687V1.92622Z" fill="#407EC9"/>
                              </g>
                              <g opacity="0.5">
                              <path d="M20.6474 8.46231C21.9296 8.92984 22.8535 9.78075 23.4286 11.0337C23.9943 12.2867 24.032 13.5491 23.5418 14.8114C23.0515 16.0737 22.1841 16.9901 20.9491 17.5511C19.714 18.1122 18.4601 18.1496 17.1873 17.6633C15.9334 17.1865 15.0188 16.3262 14.4437 15.1013C13.8686 13.8763 13.8026 12.6327 14.2646 11.3797C14.7548 10.0332 15.6694 9.0888 16.9987 8.52776L16.7724 7.46179L11.8133 11.3423C11.5493 11.548 11.257 11.5854 10.9365 11.4732L9.05089 10.7906C8.40978 11.707 7.56126 12.3335 6.48646 12.6795C5.41167 13.0254 4.3463 13.0067 3.28093 12.6233C1.99872 12.1558 1.06534 11.3143 0.490234 10.0893C-0.0848764 8.86439 -0.141445 7.5927 0.339385 6.30231C0.801359 5.04932 1.64988 4.14231 2.90381 3.57192C4.15774 3.00153 5.41167 2.94543 6.6656 3.40361C7.22185 3.59997 7.71211 3.88984 8.11751 4.25452L9.84284 2.91737L8.06094 2.27218C7.81581 2.18802 7.64611 2.02906 7.53297 1.7953C7.42927 1.57088 7.41984 1.32776 7.50469 1.094C7.58954 0.850881 7.74982 0.68257 7.98552 0.570362C8.21179 0.467505 8.46635 0.458154 8.73033 0.55166L11.8887 1.69244C12.0584 1.75789 12.181 1.86075 12.247 2.00101C12.313 2.15062 12.3224 2.30958 12.2564 2.47789L12.049 3.05763L16.1879 4.55374L15.9616 3.48776L14.1043 2.81452C13.9346 2.74906 13.812 2.64621 13.746 2.50595C13.6801 2.35634 13.6706 2.19737 13.7366 2.02906L13.944 1.44932C14.01 1.28101 14.1137 1.15945 14.2552 1.094C14.406 1.02854 14.5663 1.01919 14.736 1.08465L17.0647 1.92621C17.3758 2.03841 17.5738 2.26283 17.6493 2.58075L18.8278 8.10699C19.4312 8.10699 20.0345 8.21919 20.6379 8.43426L20.6474 8.46231ZM3.90318 10.9122C4.48772 11.1179 5.07226 11.1553 5.67565 11.0244C6.27905 10.8841 6.77873 10.5943 7.19356 10.1454L4.25202 9.07945C3.91261 8.95789 3.71462 8.71478 3.65805 8.3501C3.60148 7.98543 3.71462 7.69556 4.01632 7.48049L6.61845 5.44205C6.43932 5.32049 6.24133 5.22698 6.02449 5.14283C5.22311 4.85296 4.44058 4.89036 3.65805 5.24569C2.88495 5.60101 2.34756 6.18075 2.05529 6.97556C1.76302 7.77036 1.80073 8.54647 2.159 9.32257C2.51726 10.0893 3.1018 10.6223 3.90318 10.9122ZM7.81581 6.854L6.43932 7.91062L8.00438 8.47166C8.09866 7.91062 8.04209 7.36828 7.81581 6.854ZM11.0968 9.58439L15.3771 6.2275L10.7291 4.54439L9.3243 5.67582C9.91827 6.76049 10.0691 7.90127 9.7957 9.1075L11.1062 9.58439H11.0968ZM17.7153 15.8867C18.5166 16.2327 19.3369 16.2233 20.1477 15.868C20.9679 15.5127 21.5242 14.9236 21.8259 14.1101C22.1181 13.3153 22.0804 12.5392 21.7222 11.7631C21.3639 10.9963 20.7794 10.4633 19.978 10.1735C19.7328 10.0893 19.4877 10.0239 19.2237 9.98647L19.9026 13.175C19.9214 13.3433 19.8837 13.5023 19.7894 13.6426C19.6951 13.7828 19.5631 13.867 19.3934 13.8857L18.7995 14.0353C18.6298 14.054 18.4695 14.0166 18.3281 13.9231C18.1867 13.8296 18.1018 13.6987 18.0829 13.5304L17.3853 10.3792C16.6876 10.7813 16.2162 11.361 15.9711 12.1091C15.7259 12.8665 15.7636 13.5958 16.1031 14.3252C16.4425 15.0452 16.9799 15.5688 17.7153 15.8867Z" fill="#407EC9"/>
                              </g>
                              </g>
                              <defs>
                              <clipPath id="clip0_2353_894">
                              <rect width="30" height="18" fill="white"/>
                              </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className={`absolute top-2 left-2 ${bundleItemsCount === 0 && 'opacity-30'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="23" viewBox="0 0 32 23" fill="none">
                              <g clip-path="url(#clip0_2353_889)">
                              <g opacity="0.5">
                              <path d="M4.74978 1.66112L6.87122 1.22193C7.05896 1.17419 7.21854 1.22193 7.33118 1.38424C7.44382 1.54655 7.47199 1.70885 7.3875 1.89026L6.43942 3.87614L7.51892 5.7952C7.61279 5.96705 7.6034 6.12936 7.49076 6.29167C7.37812 6.45398 7.23731 6.52081 7.04957 6.49217L4.89997 6.20574L3.43561 7.82882C3.31358 7.97203 3.154 8.01022 2.96627 7.96249C2.77853 7.9052 2.66588 7.79063 2.63772 7.59968L2.25286 5.42284L0.272221 4.51583C0.0938692 4.4299 0.00938692 4.29623 0 4.09574C0 3.89524 0.0750953 3.75203 0.253447 3.6661L2.15899 2.61587L2.39366 0.429485C2.41244 0.228987 2.51569 0.0953214 2.70343 0.0284887C2.89117 -0.038344 3.05075 -0.000153879 3.19155 0.133512L4.74978 1.65157V1.66112Z" fill="#407EC9"/>
                              </g>
                              <g opacity="0.5">
                              <path d="M7.75356 13.3188L8.9457 12.9942L10.8606 20.2599L9.66849 20.5845C9.34934 20.6704 9.03957 20.6322 8.73919 20.4508C8.43881 20.279 8.25107 20.0212 8.1572 19.6966L6.88058 14.856C6.7961 14.5314 6.83365 14.2163 7.012 13.9108C7.18096 13.6052 7.43441 13.4143 7.75356 13.3188ZM26.3115 6.31093L29.0243 16.6032C29.1933 17.2619 29.1088 17.8921 28.7615 18.4936C28.4142 19.1046 27.926 19.4961 27.2784 19.6679L15.3757 22.9141C14.728 23.0859 14.1085 23 13.5171 22.6467C12.9164 22.2935 12.5315 21.797 12.3625 21.1382L9.64972 10.846C9.43382 10.0154 9.53708 9.22292 9.95949 8.46867C10.3819 7.71441 11.0108 7.22749 11.8275 7.0079L15.9953 5.87174L15.357 3.44667C15.2725 3.12205 15.31 2.80698 15.4884 2.50146C15.6573 2.19594 15.9108 2.00499 16.23 1.90952C16.5491 1.82359 16.8589 1.86178 17.1593 2.04318C17.4596 2.21504 17.6474 2.47282 17.7412 2.79744L18.3796 5.22251L22.5473 4.08635C23.364 3.86676 24.1431 3.97178 24.8847 4.40142C25.6263 4.83106 26.105 5.47074 26.3209 6.30138L26.3115 6.31093ZM16.5491 13.3666C16.7556 13.0037 16.8026 12.6027 16.6899 12.1731C16.5773 11.7435 16.3426 11.4284 15.9765 11.2088C15.6104 10.9988 15.2255 10.951 14.8031 11.0656C14.3807 11.1802 14.0616 11.4189 13.8551 11.7912C13.6485 12.1636 13.6016 12.555 13.7143 12.9847C13.8269 13.4143 14.0616 13.7389 14.4277 13.949C14.7844 14.159 15.1786 14.2067 15.601 14.0922C16.0234 13.9776 16.3332 13.7389 16.5491 13.3666ZM17.6661 17.0901L15.2819 17.7393L15.601 18.9519L17.9853 18.3026L17.6661 17.0901ZM21.2332 16.1162L18.8489 16.7655L19.1681 17.978L21.5523 17.3288L21.2332 16.1162ZM23.6832 11.4189C23.8897 11.056 23.9366 10.6551 23.824 10.2254C23.7113 9.79578 23.4767 9.48071 23.1106 9.26111C22.7445 9.05107 22.3596 9.00333 21.9372 9.1179C21.5148 9.23247 21.1956 9.47116 20.9891 9.84351C20.7826 10.2159 20.7357 10.6073 20.8483 11.037C20.961 11.4666 21.1956 11.7912 21.5617 12.0013C21.9184 12.2113 22.3127 12.259 22.7351 12.1445C23.1575 12.0299 23.4673 11.7912 23.6832 11.4189ZM24.8002 15.1424L22.4159 15.7916L22.7351 17.0042L25.1194 16.3549L24.8002 15.1424ZM30.667 8.3541L31.9436 13.1947C32.0281 13.5193 31.9906 13.8344 31.8122 14.1399C31.6433 14.4454 31.3898 14.6364 31.0707 14.7318L29.8785 15.0565L27.9636 7.79079L29.1557 7.46618C29.4749 7.38025 29.7847 7.41844 30.085 7.59984C30.3854 7.7717 30.5732 8.02948 30.6576 8.3541H30.667Z" fill="#407EC9"/>
                              </g>
                              </g>
                              <defs>
                              <clipPath id="clip0_2353_889">
                              <rect width="32" height="23" fill="white"/>
                              </clipPath>
                              </defs>
                            </svg>
                          </div>
                          {bundleItemsCount > 1 &&
                            <span><span className="text-xl font-semibold block leading-[1]">Buy</span>this bundle</span>
                          }
                          {bundleItemsCount === 1 &&
                            <span><span className="text-xl font-semibold block leading-[1]">Buy</span>this item</span>
                          }
                          {bundleItemsCount === 0 &&
                            <span><span className="text-xl font-semibold block leading-[1]">Pick</span>Items</span>
                          }
                        </div>
                      )}
                      <div className={`text-lg ${bundleItemsCount === 0 ? 'text-gray-400' : 'text-brandRed'} font-bold text-center mb-2`}>{bundleTotalPrice}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => {setBundleExpanded(true)}} className={`shadow-md hover:shadow-lg group items-center justify-center font-bold rounded-full bg-textBlue text-white transition-all hover:bg-brandBlue hover:scale-105 w-7 h-7 flex justify-cener items-center p-1 ${bundleExpanded && 'hidden'}`}>
                        <span className="sr-only">expand bundle</span>
                        <span
                          className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-white transition-all`}
                          ></span>
                      </button>
                      <button
                        className={`bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all ${!bundleExpanded ? 'w-8 h-8' : 'px-4'} flex justify-cener items-center p-1.5 ${bundleItemsCount === 0 && 'pointer-events-none bg-gray-400'}`}
                        onClick={addBundleToCart}
                      >
                        <svg
                          className={`text-white ${bundleExpanded && 'hidden'}`}
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                          </svg>
                        <span className="sr-only">add to basket</span>
                        {bundleExpanded && 'Add'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <Dropdown
              arrowAgainstWord={true}
              title="Description"
              className="text-gray-100 font-bold flex items-center justify-center w-full pt-6"
              answer={
                <div className="py-3 text-gray-100">
                  <p className="mb-3">
                    The Hot Wheels Monster Trucks Big Rigs haul big
                    personalities on six wheels for epic adventures.
                  </p>

                  <p className="mb-3">
                    Each die-cast truck captures the style and personality of a
                    fan-favourite Monster Truck character or creature in 1:64
                    scale. Add in the six massive wheels and this rig can also
                    transport an additional Hot Wheels Monster Truck (sold
                    separately) with either a tow hook or on the flatbed!
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
        </div>

        {/* <div className="w-full text-center mt-16">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold md:!leading-[1.2] text-transparent text-center mt-5 mb-3 md:mt-12 md:mb-3.5 drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Frequently Bought Together</span></div>
          <div className="bg-white pt-10 pb-8 px-6 md:px-8 rounded-xl mt-[-27px] shadow-sm">
            <div
              id="bundle"
              className="grid grid-cols-3 md:grid-cols-4 md:gap-4"
            >
              {searchResults.slice(0, 3).map((product, i) => (
                <div className="flex items-center relative" key={i}>
                  <div className="w-[calc(100%-10px)] md:w-[calc(100%-20px)] relative">
                    <BundlesProductCard product={product} swiperRef={swiperRef} setSwatchColor={setSwatchColor} checkAllBundle={checkAllBundle} />
                    <label className="flex items-center space-x-3 cursor-pointer mb-6 absolute z-20 top-2 right-2">
                      <input
                        type="checkbox"
                        className="relative size-[20px] block md:size-[30px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                        defaultChecked
                        onChange={changeBundleHandler}
                      />
                      <span className="absolute top-0 left-[-11px] md:left-[-12px]">
                        <svg
                          viewBox="0 0 24 24"
                          width="20px"
                          height="20px"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[18px] h-[18px] md:w-[30px] md:h-[30px]"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                              stroke="#ffffff"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </label>
                  </div>
                  {i < 2 && (
                    <span className="text-xl md:text-3xl text-gray-400 font-bold absolute right-0 md:right-[-4px] top-[35%]">
                      +
                    </span>
                  )}
                </div>
              ))}
              <div className="flex flex-col justify-between col-span-3 md:col-span-1">
                <div>
                  <div className="text-xl font-bold text-gray-100 mt-2 md:mt-0 mb-2">
                    Buy selected bundle for
                  </div>
                  <div className="text-xl text-brandRed font-bold mb-2">{bundleTotalPrice}</div>
                </div>
                <Button
                  className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
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
                  onClick={addBundleToCart}
                >
                  Add all to Basket
                </Button>
              </div>
            </div>
          </div>
        </div> */}

        {(offerOpen) && (
          <div
            onClick={() => {setOfferOpen(false)}}
            className="fixed inset-0 z-[601] top-0 left-0 bg-brandBlue/60 w-screen h-screen"
          ></div>
        )}

        <div className="w-full text-center mt-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:!leading-[1.2] text-transparent text-center mt-5 mb-1 md:mt-12">
            <span className='text-black title-purple'>
                Top Picks
            </span>
          </h3>
          <div className="py-6 rounded-xl shadow-sm">
            <div className="flex gap-4 justify-center mx-auto [&_.swiper-pagination]:relative [&_.swiper-pagination]:top-[-20px!important] [&_.swiper-pagination]:mt-3 [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2]">
              <Swiper
                className="!pb-5 !px-2.5"
                modules={[Autoplay, Pagination]}
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

        <button
          onClick={() => setTabOpen(!tabOpen)}
          className={`fixed z-[600] top-1/2 -translate-y-1/2 transition-all -rotate-90 bg-gradient-to-br from-black via-gray-900 to-black py-2 px-6 text-lg rounded-tr-xl rounded-tl-xl font-bold text-black shadow-text-blue ${
            tabOpen ? "right-[128px]" : "right-[-62px]"
          }`}
        >
          <span className="title-purple">you may like</span>
        </button>
        {(tabOpen) && (
          <div
            onClick={() => {setTabOpen(false)}}
            className="fixed inset-0 z-[500] top-0 left-0 bg-brandBlue/60 w-screen h-screen"
          ></div>
        )}
        <div
          className={`fixed top-0 z-[9999] max-w-[190px] transition-all ${
            tabOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          <div className="w-full text-center">
            <div className="bg-gradient-to-br from-black via-gray-900 p-5 rounded-tl-lg rounded-bl-lg max-h-screen overflow-auto no-scrollbar">
              <div className="flex flex-col gap-4 justify-start">
                {products.slice(0, 6).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      navigate(`/product-details/${product.id}`);
                      swiperRef.current.swiper.slideTo(0);
                      setSwatchColor("blue");
                      checkAllBundle();
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                      setTabOpen(false);
                    }}
                    className="cursor-pointer flex flex-col w-full border-[2px] border-brandLightBlue rounded-xl hover:shadow-lg hover:scale-105 hover:border-brandBlue transition-all"
                  >
                    <div className="w-full">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full object-cover transition-transform duration-300 rounded-xl"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-between items-center p-2">
                      <div className="flex flex-wrap justify-center mb-1">
                          <div className="inline-flex items-center text-xs text-gray-400">{product.brand}</div>
                      </div>
                      <div className="line-clamp-2 text-xs lg:text-sm text-gray-100 font-bold leading-[1.2] mb-2 md:mb-0">
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
                          onClick={() => {
                            navigate(`/product-details/${product.id}`);
                            setTabOpen(false);
                          }}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="reviews" className="w-full text-center mt-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:!leading-[1.2] text-transparent text-center mt-5 mb-1 md:mt-12">
            <span className='text-black title-purple'>
                Reviews
            </span>
          </h3>
          <div className="bg-gradient-to-br from-black via-gray-900 to-black py-8 px-8 rounded-xl shadow-sm">
            <div className="flex justify-between flex-wrap">
              <div className="w-[260px]">
                <div className="rating mb-4">
                  <div className="flex items-end">
                    <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                    <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                    <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                    <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                    <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg ml-2 text-gray-100">
                      <span className="font-bold">5</span> out of 5
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-gray-100 w-full items-center text-xs">
                    <span className="w-[37px] text-left">5 stars</span>
                    <div className="h-[5px] bg-brandBlue rounded-lg grow mx-2">
                      &nbsp;
                    </div>
                    <span className="w-[5%]">0</span>
                  </div>
                  <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                    <span className="w-[37px] text-left">4 stars</span>
                    <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">
                      &nbsp;
                    </div>
                    <span className="w-[5%]"></span>
                  </div>
                  <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                    <span className="w-[37px] text-left">3 stars</span>
                    <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">
                      &nbsp;
                    </div>
                    <span className="w-[5%]"></span>
                  </div>
                  <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                    <span className="w-[37px] text-left">2 stars</span>
                    <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">
                      &nbsp;
                    </div>
                    <span className="w-[5%]"></span>
                  </div>
                  <div className="flex text-gray-300 w-full items-center text-xs mt-2">
                    <span className="w-[37px] text-left">1 star</span>
                    <div className="h-[5px] bg-gray-300 rounded-lg grow mx-2">
                      &nbsp;
                    </div>
                    <span className="w-[5%]"></span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex md:flex-col justify-between h-full items-end mt-3 md:mt-0">
                  <Button
                    className="shadow-md hover:shadow-lg group inline-flex items-center justify-center text-md rounded-[30px] bg-brandRed text-white py-2 px-6 transition-all hover:bg-brandLightRed hover:scale-105 font-semibold"
                    removeIcons={true}
                    iconpath={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <path
                          d="M9.66017 3.57666L13.6602 7.57666L4.97267 16.2642L1.41017 16.6392C0.941421 16.7017 0.535171 16.2954 0.597671 15.8267L0.972671 12.2642L9.66017 3.57666ZM16.1289 2.98291C16.7227 3.54541 16.7227 4.51416 16.1289 5.10791L14.3789 6.85791L10.3789 2.85791L12.1289 1.10791C12.7227 0.51416 13.6914 0.51416 14.2539 1.10791L16.1289 2.98291Z"
                          fill="white"
                        />
                      </svg>
                    }
                    onClick={addProductToCart}
                  >
                    Write a review
                  </Button>
                  <img
                    src="/authentic-reviews-logo.svg"
                    alt="Authentic Reviews Logo"
                    width="70px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed bottom-0 left-0 bg-gradient-to-br from-black via-gray-900 to-black w-full py-3 px-4 z-40 rounded-tr-xl rounded-tl-xl shadow-[rgba(0,0,15,0.1)_0_-5px_4px_0px] shadow-text-blue transition-all ${AddVisible ? 'translate-y-[calc(100vh+10px)]' : 'translate-y-0'}`}>
        <div className="max-w-3xl m-auto flex flex-col items-center justify-center">
          <div className="flex items-center">
            <div className="text-sm md:text-base font-bold text-gray-100 mr-2 md:mr-5">
              {product.name}
            </div>
            <div className="price">
              <div className="flex items-end">
                <span className="text-brandRed font-bold text-sm md:text-base md:!leading-[1.3]">
                  £{product.price}
                </span>
                {product.originalPrice && (
                  <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">
                    £{product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button
            className="mt-2 shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
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
            onClick={addProductToCart}
          >
            Add to Basket
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;