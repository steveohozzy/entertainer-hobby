"use client";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products, ageGroups, features } from "../../data/products";

import ProductCard from "../../components/productCard/productCard";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const PresentFinder = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [step, setStep] = useState(1);

  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        const filtersBar = document.getElementById("filters-bar");

        if (filtersBar) {
          filtersBar.style.top = "0px";
        }
      } else {
        // Scrolling up or at top
        const headerHeight =
          document.getElementById("site-header").offsetHeight;
        const filtersBar = document.getElementById("filters-bar");

        if (filtersBar) {
          filtersBar.style.top = headerHeight + "px";
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          document.body.classList.remove("body-noscroll");
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

  const toggleAgeGroup = (ageGroup) => {
    setSelectedAgeGroups((prev) =>
      prev.includes(ageGroup)
        ? prev.filter((a) => a !== ageGroup)
        : [...prev, ageGroup]
    );
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedAgeGroups([]);
    setSelectedFeatures([]);
    setSelectedSizes([]);
    setPriceRange([0, 100]);
    setShowInStockOnly(false);
    setStep(1);
    setShowResults(false);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, filteredProducts.length));
  };

  const filteredProducts = products.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesAgeGroup =
      selectedAgeGroups.length === 0 ||
      selectedAgeGroups.includes(product.ageGroup);
    const matchesFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.some((feature) => product.features.includes(feature));
    const matchesSize =
      selectedSizes.length === 0 || selectedSizes.includes(product.size);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = !showInStockOnly || product.inStock;

    return (
      matchesBrand &&
      matchesAgeGroup &&
      matchesFeatures &&
      matchesSize &&
      matchesPrice &&
      matchesStock
    );
  });

  const sortProducts = (products, option) => {
    const sortedProducts = [...products];

    switch (option) {
      case "price-low":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "price-high":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      case "newest":
        // Assuming newer products have higher IDs or using isNew flag
        return sortedProducts.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return b.id - a.id;
        });
      case "relevance":
        // For relevance, prioritize bestsellers and new items
        return sortedProducts.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
      default:
        return sortedProducts;
    }
  };

  // Apply sorting to filtered products
  const sortedFilteredProducts = sortProducts(filteredProducts);

  // Get the visible subset of filtered products
  const visibleFilteredProducts = sortedFilteredProducts.slice(
    0,
    visibleProducts
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-10">
        {showResults ? (
          <>
            {visibleFilteredProducts.length > 0 ?
              <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {visibleFilteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              :
              <>
              <div className="text-textBlue text-2xl text-center w-full font-bold mt-4">
                Hmm there doesn't seem to be any results for that
              </div>
            </>
            }
            <div className="flex justify-center ">
              <Button
                className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-6 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-8"
                onClick={clearFilters}
              >
                Try our present finder again
              </Button>
            </div>
            {visibleFilteredProducts.length === 0 &&
            <>
              <div className="text-textBlue text-xl text-center w-full font-bold mt-6">
              Or try these instead
            </div>
            <div className='pt-5 rounded-xl my-4'>
                <div className='flex gap-4 justify-center mx-auto'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    autoplay={true}
                    breakpoints={{
                      768: {
                        slidesPerView: 2.5,
                      },
                      1024: {
                        slidesPerView: 3.5,
                      },
                    }}
                    loop
                    >
                {products.slice(0, 6).map((product) => (
                    <SwiperSlide>
                    <div  onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer flex flex-wrap bg-white shadow-lg mb-5 rounded-lg">
                        <div className="border-[3px] border-brandBlue rounded-lg w-1/2">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col justify-between items-center py-1 md:py-3 px-2">
                            <div className="text-xs lg:text-sm xl:text-lg text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-2 md:mb-0">{product.name}</div>
                            <div>
                                <div className="price">
                                    <div className="flex items-end justify-center">
                                        <span className="text-brandRed font-bold text-xs md:text-sm">£{product.price}</span>
                                        {product.originalPrice &&
                                            <span className="line-through text-gray-400 text-[10px] md:text-xs ml-1">£{product.originalPrice}</span>
                                        }
                                    </div>
                                </div>
                                <Button 
                                    className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-xs lg:text-sm rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2 min-h-[44px]'
                                    onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
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
            </>
            }
            <div className="max-w-[300px] mx-auto mt-8 flex flex-wrap justify-between items-center">
              {(
                (visibleFilteredProducts.length / filteredProducts.length) *
                100
              ).toFixed() > 99 ? (
                <div
                  className="transition-all"
                  style={{
                    marginLeft: `${(
                      (visibleFilteredProducts.length /
                        filteredProducts.length) *
                        100 -
                      30
                    ).toFixed()}%`,
                  }}
                >
                  <img
                    src="/ship-finish.svg"
                    alt="pirate ship indicator finsihed"
                  />
                </div>
              ) : (
                <div
                  style={{
                    marginLeft: `${(
                      (visibleFilteredProducts.length /
                        filteredProducts.length) *
                        100 -
                      10
                    ).toFixed()}%`,
                  }}
                >
                  <img src="/ship.svg" alt="pirate ship indicator" />
                </div>
              )}
              <span
                className={`transition-all ${
                  (
                    (visibleFilteredProducts.length / filteredProducts.length) *
                    100
                  ).toFixed() > 99
                    ? "text-brandLightGreen"
                    : "text-gray-300 rotate-[10deg]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M3.52997 0.660034H6.14996L3.89996 5.89005H0.599976L3.53998 0.660034H3.52997ZM0.589966 6.94003H3.88998L7.90997 15.18C7.90997 15.18 7.90996 15.26 7.85995 15.29C7.80995 15.32 7.76997 15.32 7.74997 15.27L0.589966 6.94003ZM5.42996 6.94003H14.58L10.1 17.33C10.1 17.33 10.05 17.4 9.99997 17.4C9.94997 17.4 9.91996 17.38 9.89996 17.33L5.41998 6.94003H5.42996ZM12.29 0.660034L14.54 5.89005H5.44998L7.69998 0.660034H12.28H12.29ZM12.09 15.17L16.11 6.93002H19.41L12.25 15.26C12.25 15.26 12.19 15.31 12.14 15.28C12.09 15.25 12.07 15.21 12.09 15.17ZM16.47 0.660034L19.41 5.89005H16.11L13.85 0.660034H16.47Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className="bg-gray-300 w-full h-4 rounded-full">
                <div
                  className="rounded-full h-full bg-brandLightGreen transition-all"
                  style={{
                    width: `${(
                      (visibleFilteredProducts.length /
                        filteredProducts.length) *
                      100
                    ).toFixed()}%`,
                  }}
                ></div>
              </div>
            </div>
            {/* Load More */}
            {visibleFilteredProducts.length < filteredProducts.length && (
              <div className="text-center mt-4">
                <button
                  name="Load more products"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-white font-bold border border-input bg-brandBlue hover:bg-textBlue h-11 rounded-full px-8 transition-all hover:scale-105 hover:shadow-md"
                  onClick={loadMoreProducts}
                >
                  Load More Products ({visibleFilteredProducts.length} of{" "}
                  {filteredProducts.length})
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center drop-shadow-md">
              <span className="bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent capitalize textStroke">
                Present Finder
              </span>
            </h1>
            <p className="my-4 text-textBlue mb-5">
              Searching for the perfect kids’ gift for Christmas, a birthday, or
              another special occasion? Our magical present finder takes the
              stress out of shopping, simply tell us who you’re shopping for and
              how much you’re looking to spend, and we’ll recommend all the best
              presents! Please select at least one step to reveal your results.
            </p>
            <div className="bg-white rounded-2xl shadow-lg py-7 px-5 md:px-12 mt-6 border-[3px] border-textBlue relative">
              <img src="/balloons.svg" alt="balloons" className="absolute text-brandLightBlue h-[200px] md:h-2/3 opacity-40 rotate-[40deg] right-10 bottom-20" />
              <div className="w-[300px] mx-auto mb-1">
                <div className="flex justify-end">
                  <span
                    className={`rotate-[20deg] transition-all duration-500 ${
                      step === 3
                        ? "text-brandLightGreen scale-[1.8] -translate-y-1"
                        : "text-gray-400"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-[300px] bg-gray-300 rounded-full h-5 mx-auto relative mb-5">
                <div
                  className={`bg-brandLightGreen absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                    step === 1 && "w-[33.333%]"
                  } ${step === 2 && "w-[66.666%]"} ${step === 3 && "w-full"}`}
                ></div>
              </div>
              {step === 1 && (
                <>
                  <div className="font-bold text-xl md:text-2xl text-textBlue text-center mb-4">
                    What age range are you buying the gift for?
                  </div>
                  <div className="mt-3 pt-3 grid grid-cols-2 md:grid-cols-3 pl-8 md:pl-20 justify-center max-w-[800px] mx-auto">
                    {ageGroups.map((age) => {
                      return (
                        <label
                          key={age.name}
                          className="relative flex items-center space-x-3 cursor-pointer mb-6"
                        >
                          <input
                            id={age.name}
                            type="checkbox"
                            checked={selectedAgeGroups.includes(age.name)}
                            onChange={() => toggleAgeGroup(age.name)}
                            className="relative mt-1 block size-[30px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                          />
                          <span className="absolute top-[3px] left-[-12px]">
                            <svg
                              viewBox="0 0 24 24"
                              width="30px"
                              height="30px"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                          <span className="text-brandBlue text-sm md:text-lg">
                            {age.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <div className="max-w-[800px] mx-auto mt-4 border-t-[2px] border-t-gray-300 pt-4">
                    <span className="text-sm text-gray-400 text-center w-full block mb-4">{filteredProducts.length} results so far</span>
                    <div className="flex justify-end">
                      <Button
                        className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-6 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                        onClick={() => {
                          setStep(2);
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="font-bold text-xl md:text-2xl text-textBlue text-center mb-4">
                    Is there a particular type of toy you are looking for?
                  </div>
                  <div className="mt-3 pt-3 grid grid-cols-2 md:grid-cols-3 items-center justify-center max-w-[800px] mx-auto md:pl-20">
                    {features.map((feature) => {
                      return (
                        <label
                          key={feature.name}
                          className="relative flex items-center space-x-3 cursor-pointer mb-6"
                        >
                          <input
                            id={feature.name}
                            type="checkbox"
                            checked={selectedFeatures.includes(feature.name)}
                            onChange={() => toggleFeature(feature.name)}
                            className="relative mt-1 block size-[30px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                          />
                          <span className="absolute top-[3px] left-[-12px]">
                            <svg
                              viewBox="0 0 24 24"
                              width="30px"
                              height="30px"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
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
                          <span className="text-sm md:text-lg text-brandBlue">
                            {feature.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  <div className="max-w-[800px] mx-auto mt-4 border-t-[2px] border-t-gray-300 pt-4">
                    <span className="text-sm text-gray-400 text-center w-full block mb-4">{filteredProducts.length} results so far</span>
                    <div className="flex justify-between">
                      <Button
                        className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-gray-500 text-white py-2 px-6 pl-0 transition-all hover:bg-gray-400 hover:scale-105"
                        onClick={() => {
                          setStep(1);
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-6 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                        onClick={() => {
                          setStep(3);
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="font-bold text-xl md:text-2xl text-textBlue text-center mb-4">
                    How much are you prepared to spend on your gift?
                  </div>
                  <div className="pt-3 flex flex-wrap items-center justify-center max-w-[800px] mx-auto">
                    <div className="flex items-center space-x-3 mb-2">
                      <input
                        id="minPrice"
                        type="number"
                        placeholder="Min"
                        min="0"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="flex h-10 rounded-md border-[3px] border-brandBlue bg-background px-3 py-2 placeholder:text-muted-foreground text-brandBlue w-20 text-lg"
                      />
                      <span className="text-brandBlue">-</span>
                      <input
                        id="maxPrice"
                        type="number"
                        min="1"
                        value={priceRange[1]}
                        onChange={(e) => 
                          setPriceRange([priceRange[0], e.target.value])
                        }
                        onBlur={() => {
                          if (priceRange[1] === '0' || priceRange[1] === '') {
                            setPriceRange([priceRange[0],1])
                          } else if (priceRange[1].startsWith('0')) {
                            setPriceRange([priceRange[0], priceRange[1].replace(/^0+(?=\d)/, '')]);
                          }
                        }}
                        className="flex h-10 rounded-md border-[3px] border-brandBlue bg-background px-3 py-2 placeholder:text-muted-foreground text-brandBlue w-20 text-lg"
                      />
                    </div>
                    <div className="text-sm md:text-lg text-brandBlue w-full text-center mt-1 mb-2">
                      £{priceRange[0]} - £{priceRange[1]}
                    </div>
                  </div>
                  <div className="max-w-[800px] mx-auto mt-4 border-t-[2px] border-t-gray-300 pt-4">
                    <span className="text-sm text-gray-400 text-center w-full block mb-4">{filteredProducts.length} results</span>
                    <div className="flex justify-between">
                      <Button
                        className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-gray-500 text-white py-2 px-6 pl-0 transition-all hover:bg-gray-400 hover:scale-105"
                        onClick={() => {
                          setStep(2);
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        className="shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandGreen text-white py-2 px-6 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                        onClick={() => {
                          setShowResults(true);
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        Find Presents
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="max-w-[800px] my-10 mx-auto">
              <h3 className="text-xl text-brandBlue text-center font-bold">Still not sure?</h3>
              <p className="text-brandBlue text-center">Try these popular categories</p>
              <div className="flex justify-center items-center gap-6 mt-6">
                <Link
            onClick={() => {
              window.scrollTo({
                top: 10,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/category/new-toys"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs md:text-sm"
          >
            <span className="transition-all w-12 h-12 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-16 md:h-16 p-1 flex items-center justify-center text-s">
              <Star className="h-7 w-7 md:h-10 md:w-10" fill="currentColor" />
            </span>
            New Toys
          </Link>
          <Link
            onClick={() => {
              window.scrollTo({
                top: 10,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/category"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs md:text-sm"
          >
            <span className="transition-all w-12 h-12 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-16 md:h-16 p-2 md:p-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
                />
                <rect width="24" height="24" fill="none" />
              </svg>
            </span>
            Outdoor
          </Link>
            <Link
              onClick={() => {
                window.scrollTo({
                  top: 10,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              to="/category"
              className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-xs md:text-sm"
            >
              <span className="transition-all w-12 h-12 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-16 md:h-16 p-3 md:p-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.4143 3.29285C21.8048 3.68337 21.8048 4.31653 21.4143 4.70706L4.70718 21.4142C4.31666 21.8047 3.68349 21.8047 3.29297 21.4142L2.58586 20.7071C2.19534 20.3165 2.19534 19.6834 2.58586 19.2928L19.293 2.58574C19.6835 2.19522 20.3167 2.19522 20.7072 2.58574L21.4143 3.29285Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.50009 2.99997C5.5671 2.99997 4.00009 4.56697 4.00009 6.49997C4.00009 8.43297 5.5671 9.99997 7.50009 9.99997C9.43309 9.99997 11.0001 8.43297 11.0001 6.49997C11.0001 4.56697 9.43309 2.99997 7.50009 2.99997Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5001 14C14.5671 14 13.0001 15.567 13.0001 17.5C13.0001 19.433 14.5671 21 16.5001 21C18.4331 21 20.0001 19.433 20.0001 17.5C20.0001 15.567 18.4331 14 16.5001 14Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Clearance
            </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PresentFinder;
