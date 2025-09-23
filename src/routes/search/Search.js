"use client";

import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import {
  products,
  brands,
  ageGroups,
  features,
  sizes,
} from "../../data/products";

import ProductCard from "../../components/productCard/productCard";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";


import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sortOption, setSortOption] = useState("sortby")
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 10;

  const navigate = useNavigate();

  const wrapperRef = useRef(null);

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setShowHeader(false);
        const filtersBar = document.getElementById("filters-bar");

        if (filtersBar) {
            filtersBar.style.top = "0px";
        }
      } else {
        // Scrolling up or at top
        setShowHeader(true);
        const headerHeight = document.getElementById("site-header").offsetHeight;
        const filtersBar = document.getElementById("filters-bar");

        if (filtersBar) {
            filtersBar.style.top = headerHeight+"px";
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(1)
  }, [selectedBrands, selectedAgeGroups, selectedFeatures, selectedSizes, priceRange, showInStockOnly])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowFilters(false)
          document.body.classList.remove('body-noscroll');
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

  const toggleBrand = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

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

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedAgeGroups([]);
    setSelectedFeatures([]);
    setSelectedSizes([]);
    setPriceRange([0, 100]);
    setShowInStockOnly(false);
    setBrandSearch("");
  };

  const { id } = useParams();
  const searchResults = products.filter((product) => {
      const searchTerm = id.toLowerCase()
      
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.features.some((feature) => feature.toLowerCase().includes(searchTerm)) ||
        product.description.toLowerCase().includes(searchTerm) || 
        product.specifications.Material.toLowerCase().includes(searchTerm) ||
        product.size.toLowerCase().includes(searchTerm) ||
        product.ageGroup.toLowerCase().includes(searchTerm) ||
        '£'+product.price.toString() === searchTerm
      )
    })

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, filteredProducts.length));
  };

  // Filter brands based on search typing
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const filteredProducts = searchResults.filter((product) => {
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

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedAgeGroups.length > 0 ||
    selectedFeatures.length > 0 ||
    selectedSizes.length > 0 ||
    showInStockOnly;

  const goToPage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxVisiblePages = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    buttons.push(
      <button
        key="prev"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1"
      >
        <img src="/flag.svg" alt="previous page" className="h-[60px] w-auto mt-[25px] mr-2 relative z-[2]" />
      </button>,
    )

    // First page
    if (startPage > 1) {
      if (startPage > 2) {
        buttons.push(
          <span key="ellipsis2" className="px-2 text-brandBlue text-2xl font-bold">
            ...
          </span>,
        )
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button className={`relative px-[2px] md:px-[5px] md:px-[10px] text-white ${currentPage === i ? 'font-bold' : ''}`} key={i} onClick={() => goToPage(i)}>
          {i === endPage ?
            <img src="/train-front.svg" alt="pagination-step" className={`h-[60px] w-auto ${currentPage === startPage ? 'mt-[-25px]' : 'mt-[-23px]'} relative z-[2]`} />
            :
            <img src="/train-cart.svg" alt="pagination-step" className="h-10 w-10 z-[2]" />
          }
          <span className={`absolute z-[2] ${currentPage === i ? '' : 'opacity-[0.6]'} ${i === endPage ? 'left-[28px] md:left-[30px] top-[3px]' : 'left-[16px] md:left-[21px] top-[7px]'}`}>{i}</span>
          <span className={`h-[3px] left-0 z-[1] absolute block bg-brandBlue bottom-[16px] ${i === endPage ? 'w-[calc(100%-15px)] bottom-[14px]' : 'w-full'}`}>&nbsp;</span>
        </button>,
      )
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-2 text-brandBlue text-2xl font-bold">
            ...
          </span>,
        )
      }
      // buttons.push(
      //   <button
      //     key={totalPages}
      //     onClick={() => goToPage(totalPages)}
      //   >
      //     {totalPages}
      //   </button>,
      // )
    }

    // Next button
    buttons.push(
      <button
        key="next"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 relative ml-2"
      >
        <img src="/flag.svg" alt="previous page" className="h-[60px] scale-x-[-1] w-auto mt-[25px] relative z-[2]" />
      </button>,
    )

    return buttons
  }

  const location = useLocation();

  // Calculate dynamic counts for each filter option
  const getBrandCount = (brandName) => {
    return products.filter((product) => {
      const matchesBrand = product.brand === brandName
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const getAgeGroupCount = (ageGroup) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = product.ageGroup === ageGroup
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const getFeatureCount = (featureName) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures = product.features.includes(featureName)
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const getSizeCount = (sizeName) => {
    return products.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      const matchesAgeGroup = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup)
      const matchesFeatures =
        selectedFeatures.length === 0 || selectedFeatures.some((feature) => product.features.includes(feature))
      const matchesSize = product.size === sizeName
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesStock = !showInStockOnly || product.inStock

      return (
        matchesBrand &&
        matchesAgeGroup &&
        matchesFeatures &&
        matchesSize &&
        matchesPrice &&
        matchesStock 
      )
    }).length
  }

  const sortProducts = (products, option) => {
    const sortedProducts = [...products]

    switch (option) {
      case "price-low":
        return sortedProducts.sort((a, b) => a.price - b.price)
      case "price-high":
        return sortedProducts.sort((a, b) => b.price - a.price)
      case "rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating)
      case "newest":
        // Assuming newer products have higher IDs or using isNew flag
        return sortedProducts.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          return b.id - a.id
        })
      case "relevance":
         // For relevance, prioritize bestsellers and new items
        return sortedProducts.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1
          if (!a.isBestseller && b.isBestseller) return 1
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          return 0
        })
      default:
        return sortedProducts;
    }
  }

    // Apply sorting to filtered products
  const sortedFilteredProducts = sortProducts(searchResults, sortOption)

  const totalPages = Math.ceil(sortedFilteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = sortedFilteredProducts.slice(startIndex, endIndex)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-4">
        {/* Hero Section 
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl !leading-[1.2] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Action Figures Collection
          </h1>
          <p className="text-sm md:text-base text-brandBlue max-w-3xl mx-auto">
            Discover the best action figures for kids, featuring popular characters from Marvel, Star Wars,
            Transformers, DC Comics, and more! Bring your favorite heroes and villains to life.
          </p>
        </div>*/}

        {/* Filter and Sort Header */}
        <div
          id="filters-bar"
          className={`sticky z-40 bg-black py-2 mb-4 transition-all  ${showHeader && ''} ml-[calc(51%-50vw)] mr-[calc(51%-50vw)] pl-[calc(50%-49vw)] pr-[calc(50%-49vw)] shadow-sm`}
        >
          <div className="flex items-center gap-3 justify-between flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-2 w-full flex-wrap">
              <form id="sort-by-form" className="bg-black border-[3px] border-purple-500 text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3">
                <label htmlFor="sort" className="sr-only">
                  Select an option
                </label>
                <select
                  id="sort"
                  className="bg-black text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3 outline-0 cursor-pointer"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="Sort">Sort</option>
                  <option value="relevance">Relevance</option>
                  <option value="price-low">
                    Price (lowest first)
                  </option>
                  <option value="price-high">
                    Price (highest first)
                  </option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </form>
              <div ref={wrapperRef} className={`relative z-[2] bg-black border-[3px] border-purple-500 border-b-purple-500 ${showFilters && 'border-b-black'}`}>
                <button
                  name="Show filters"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`relative z-[2] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm py-3 h-full w-full px-4 transition-all group bg-black text-white`}
                >
                  <span className="transition-all group-hover:scale-110">Refine</span>
                  <span className={`w-4 h-4 text-white transition-all group-hover:rotate-[20deg]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
                  </span>
                </button>
                {/* Sliding Filter Panel */}
                <div ref={wrapperRef}
                  className={`absolute overflow-hidden bg-black shadow-xl z-[1] transition-all ease-in-out w-[calc(100vw-60px)] md:w-[calc(100%+40px)] left-[calc(-100%+5px)] md:left-[-20px] no-scrollbar ${
                    showFilters ? "max-h-[calc(100vh-250px)] overflow-y-auto border border-purple-500 border-[3px] rounded-bl-lg rounded-br-lg top-[calc(100%-3px)]" : "max-h-0 top-full "
                  }`}
                >
                  <div className="p-3 h-full overflow-y-auto]">
                    {hasActiveFilters && (
                      <div className="flex flex-wrap gap-2 items-start">
                        {selectedBrands.map((brand) => (
                          <div
                            key={`brand-${brand}`}
                            variant="secondary"
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-1"
                          >
                            {brand}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleBrand(brand)}
                            />
                          </div>
                        ))}
                        {selectedAgeGroups.map((age) => (
                          <div
                            key={`age-${age}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-1"
                          >
                            {age}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleAgeGroup(age)}
                            />
                          </div>
                        ))}
                        {selectedFeatures.map((feature) => (
                          <div
                            key={`feature-${feature}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-"
                          >
                            {feature}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleFeature(feature)}
                            />
                          </div>
                        ))}
                        {selectedSizes.map((size) => (
                          <div
                            key={`size-${size}`}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-"
                          >
                            {size}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleSize(size)}
                            />
                          </div>
                        ))}
                        {showInStockOnly && (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-">
                            In Stock Only
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => setShowInStockOnly(false)}
                            />
                          </div>
                        )}
                        <div className="mb-4 mt-2 w-full">
                          <button
                            name="Clear filters"
                            onClick={clearFilters}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-brandGreen hover:bg-brandLightGreen h-9 rounded-full px-3 w-full transition-all hover:scale-105 hover:shadow-md text-white"
                          >
                            Clear all filters
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Brand Filters with Search */}
                    <Dropdown
                      title="Brands"
                      className="w-full text-white flex items-center border-b-2 border-b-purple-500 py-3"
                      answer={
                        <>
                          <div className="relative my-3">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                              id="searchBrands"
                              placeholder="Search brands..."
                              value={brandSearch}
                              onChange={(e) => setBrandSearch(e.target.value)}
                              className="flex h-10 w-full rounded-md border-2 border-brandBlue outline-0 bg-background px-3 py-2 placeholder:text-muted-black text-brandBlue pl-8 text-sm"
                            />
                          </div>
                          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                            {filteredBrands.map((brand) => {
                              const count = getBrandCount(brand.name)
                              return (
                                <div
                                  key={brand.name}
                                  className={`inline-flex items-center rounded-full border-[2px] border-gray-400 px-2.5 py-0.5 cursor-pointer transition-all hover:scale-105 text-sm text-white ${
                                    selectedBrands.includes(brand.name)
                                      ? `bg-black text-white`
                                      : "hover:bg-black"
                                  }`}
                                  onClick={() => toggleBrand(brand.name)}
                                >
                                  {brand.name} ({count})
                                </div>
                              )
                            })}
                          </div>
                        </>
                      }
                    />
                    {/* Age Group Filters */}
                    <Dropdown
                      title="Age Groups"
                      className="w-full text-white flex items-center border-b-2 border-b-purple-500 py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                          {ageGroups.map((age) => {
                            const count = getAgeGroupCount(age.name)
                            return (
                              <label
                                key={age.name}
                                className="relative flex items-center space-x-2 cursor-pointer"
                              >
                                <input
                                  id={age.name}
                                  type="checkbox"
                                  checked={selectedAgeGroups.includes(age.name)}
                                  onChange={() => toggleAgeGroup(age.name)}
                                   className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-transparent outline-none transition-all checked:border-purple-500 peer"
                                />
                                <span className="absolute top-[5px] left-[-6px] text-transparent peer-checked:text-purple-500">
                                  <svg viewBox="0 0 24 24" width="16px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
                                <span className="text-sm text-white">
                                  {age.name} ({count})
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      }
                    />
                    {/* Features Filters */}
                    <Dropdown
                      title="Features"
                       className="w-full text-white flex items-center border-b-2 border-b-purple-500 py-3"
                       answer={
                        <div className="space-y-3 pt-3">
                        {features.map((feature) => {
                          const count = getFeatureCount(feature.name)
                          return (
                            <label
                              key={feature.name}
                              className="relative flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                id={feature.name}
                                type="checkbox"
                                checked={selectedFeatures.includes(feature.name)}
                                onChange={() => toggleFeature(feature.name)}
                                 className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-transparent outline-none transition-all checked:border-purple-500 peer"
                              />
                              <span className="absolute top-[5px] left-[-6px] text-transparent peer-checked:text-purple-500">
                                <svg viewBox="0 0 24 24" width="16px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
                              <span className="text-sm text-white">
                                {feature.name} ({count})
                              </span>
                            </label>
                          )
                       })}
                      </div>
                       }
                      />

                    {/* Size Filters */}
                    <Dropdown
                      title="Size"
                      className="w-full text-white flex items-center border-b-2 border-b-purple-500 py-3"
                      answer={
                        <div className="space-y-3 pt-3">
                        {sizes.map((size) => {
                          const count = getSizeCount(size.name)
                          return (
                            <label
                              key={size.name}
                              className="relative flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                id={size.name}
                                type="checkbox"
                                checked={selectedSizes.includes(size.name)}
                                onChange={() => toggleSize(size.name)}
                                 className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-transparent outline-none transition-all checked:border-purple-500 peer"
                              />
                              <span className="absolute top-[5px] left-[-6px] text-transparent peer-checked:text-purple-500">
                                <svg viewBox="0 0 24 24" width="16px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
                              <span className="text-sm text-white">
                                {size.name} ({count})
                              </span>
                            </label>
                          )
                        })}
                      </div>
                      }
                    />

                    {/* Price Range */}
                    <Dropdown
                      title="Price Range"
                      className="w-full text-white flex items-center border-b-2 border-b-purple-500 py-3"
                      answer={
                        <div className="space-y-3">
                        <div className="flex items-center space-x-2 mt-3">
                          <input
                            id="minPrice"
                            type="number"
                            placeholder="Min"
                            value={priceRange[0]}
                            onChange={(e) =>
                              setPriceRange([
                                Number(e.target.value),
                                priceRange[1],
                              ])
                            }
                            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground text-brandBlue w-20 text-sm"
                          />
                          <span className="text-brandBlue">-</span>
                          <input
                            id="maxPrice"
                            type="number"
                            placeholder="Max"
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([
                                priceRange[0],
                                Number(e.target.value),
                              ])
                            }
                            className="flex h-10 rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-foreground text-brandBlue w-20 text-sm"
                          />
                        </div>
                        <div className="text-sm text-white">
                          £{priceRange[0]} - £{priceRange[1]}
                        </div>
                      </div>
                      }
                    />

                    {/* Additional Filters */}
                    <Dropdown
                      title="Additional Filters"
                      className="w-full text-white flex items-center border-b-2 border-b-purple-500 py-3"
                      answer={
                        <div className="space-y-3">
                        <label className="relative flex items-center space-x-2 cursor-pointer mt-3">
                          <input
                            id="showInStockOnly"
                            type="checkbox"
                            checked={showInStockOnly}
                            onChange={(e) =>
                              setShowInStockOnly(e.target.checked)
                            }
                            className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-transparent outline-none transition-all checked:border-purple-500 peer"
                          />
                          <span className="absolute top-[5px] left-[-6px] text-transparent peer-checked:text-purple-500">
                            <svg viewBox="0 0 24 24" width="16px" height="16px" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
                          <span className="text-sm text-white">
                            In Stock Only
                          </span>
                        </label>
                      </div>
                      }
                    />
                  </div>
                </div>
              </div>
              <p className="flex items-center justify-center bg-black text-white text-xs rounded-tr-full rounded-br-full block h-full w-full px-3 border-[3px] border-purple-500">
                {searchResults.length !== 0 ? (
                  <>
                    {startIndex + 1}-{Math.min(endIndex, searchResults.length)} of{" "}
                    {sortedFilteredProducts.length} products
                  </>
                ) : (
                  <>
                    0 products
                  </>
                )
                }
              </p>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 my-2 w-full">
                <span className="text-sm text-white font-medium">
                  Active filters:
                </span>
                {selectedBrands.map((brand) => (
                  <div
                    key={`brand-${brand}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-"
                  >
                    {brand}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleBrand(brand)}
                    />
                  </div>
                ))}
                {selectedAgeGroups.map((age) => (
                  <div
                    key={`age-${age}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-"
                  >
                    {age}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleAgeGroup(age)}
                    />
                  </div>
                ))}
                {selectedFeatures.map((feature) => (
                  <div
                    key={`feature-${feature}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-"
                  >
                    {feature}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleFeature(feature)}
                    />
                  </div>
                ))}
                {selectedSizes.map((size) => (
                  <div
                    key={`size-${size}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-"
                  >
                    {size}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleSize(size)}
                    />
                  </div>
                ))}
                {showInStockOnly && (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-black text-white gap-">
                    In Stock Only
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setShowInStockOnly(false)}
                    />
                  </div>
                )}

                <button
                  name="Clear all filters"
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm bg-brandGreen hover:bg-brandLightGreen h-7 rounded-full text-white px-3 transition-all hover:scale-105 hover:shadow-md"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
        {searchResults.length === 0 &&
          <>
            <div className="text-textBlue text-2xl text-center w-full font-bold mt-4">
              Hmm there doesn't seem to be any results for that
            </div>
            <div className="text-textBlue text-xl text-center w-full font-bold">
              Try these instead
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
                    <div  onClick={() => { navigate(`/product-details/${product.id}`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="cursor-pointer flex flex-wrap bg-black shadow-lg mb-5 rounded-lg">
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
        {location.pathname !== "/search/pagination" ? 
          <>
            {searchResults.length !== 0 &&
              <div className="text-2xl text-center font-bold w-full my-4">
                  <span className="title-purple">Search results for</span> <span className="text-stroke-blue">{id}</span>
              </div>
            }
            <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
              :
            <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          }

        {location.pathname !== "/search/pagination" && searchResults.length !== 0 ? 
          <>
              <div className="max-w-[300px] mx-auto mt-8 flex flex-wrap justify-between items-center">
                <div className="bg-gray-500 w-full h-4 rounded-full relative">
                  <div className="rounded-full h-full bg-purple-500 transition-all" style={{width: `${(searchResults.length / searchResults.length * 100).toFixed()}%`}}></div>
                  <div className="absolute top-[-5px] ml-[-10px]" style={{left: `${(searchResults.length / searchResults.length * 100).toFixed()}%`}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29" fill="none">
                      <path d="M13.0201 12.66H11.29V14.39H13.0201V12.66Z" fill="white"/>
                      <path d="M11.29 12.66H9.56006V14.39H11.29V12.66Z" fill="white"/>
                      <path d="M9.56006 12.66H7.83008V14.39H9.56006V12.66Z" fill="#BE6CFF"/>
                      <path d="M7.83008 12.66H6.1001V14.39H7.83008V12.66Z" fill="#BE6CFF"/>
                      <path d="M11.29 10.93H9.56006V12.66H11.29V10.93Z" fill="#BE6CFF"/>
                      <path d="M9.56006 9.2H7.83008V10.93H9.56006V9.2Z" fill="#BE6CFF"/>
                      <path d="M14.75 10.93H13.02V12.66H14.75V10.93Z" fill="#BE6CFF"/>
                      <path d="M16.48 9.2H14.75V10.93H16.48V9.2Z" fill="#BE6CFF"/>
                      <path d="M14.75 14.39H13.02V16.12H14.75V14.39Z" fill="#BE6CFF"/>
                      <path d="M16.48 16.12H14.75V17.85H16.48V16.12Z" fill="#BE6CFF"/>
                      <path d="M11.29 14.39H9.56006V16.12H11.29V14.39Z" fill="#BE6CFF"/>
                      <path d="M9.56006 16.12H7.83008V17.85H9.56006V16.12Z" fill="#BE6CFF"/>
                      <path d="M14.75 12.66H13.02V14.39H14.75V12.66Z" fill="white"/>
                      <path d="M16.48 12.66H14.75V14.39H16.48V12.66Z" fill="#BE6CFF"/>
                      <path d="M18.21 12.66H16.48V14.39H18.21V12.66Z" fill="#BE6CFF"/>
                      <path d="M13.0201 10.93H11.29V12.66H13.0201V10.93Z" fill="white"/>
                      <path d="M13.0201 9.2H11.29V10.93H13.0201V9.2Z" fill="#BE6CFF"/>
                      <path d="M13.0201 7.48H11.29V9.21H13.0201V7.48Z" fill="#BE6CFF"/>
                      <path d="M13.0201 5.75H11.29V7.48H13.0201V5.75Z" fill="#8200DA"/>
                      <path d="M7.83008 7.48H6.1001V9.21H7.83008V7.48Z" fill="#8200DA"/>
                      <path d="M18.21 7.48H16.48V9.21H18.21V7.48Z" fill="#8200DA"/>
                      <path d="M6.1001 12.66H4.37012V14.39H6.1001V12.66Z" fill="#8200DA"/>
                      <path d="M13.0201 19.58H11.29V21.31H13.0201V19.58Z" fill="#8200DA"/>
                      <path d="M14.75 17.85H13.02V19.58H14.75V17.85Z" fill="#8200DA"/>
                      <path d="M11.29 16.12H9.56006V17.85H11.29V16.12Z" fill="#8200DA"/>
                      <path d="M11.29 17.85H9.56006V19.58H11.29V17.85Z" fill="#8200DA"/>
                      <path d="M9.56006 14.39H7.83008V16.12H9.56006V14.39Z" fill="#8200DA"/>
                      <path d="M7.83008 14.39H6.1001V16.12H7.83008V14.39Z" fill="#8200DA"/>
                      <path d="M7.83008 10.93H6.1001V12.66H7.83008V10.93Z" fill="#8200DA"/>
                      <path d="M9.56006 10.93H7.83008V12.66H9.56006V10.93Z" fill="#8200DA"/>
                      <path d="M11.29 9.2H9.56006V10.93H11.29V9.2Z" fill="#8200DA"/>
                      <path d="M11.29 7.48H9.56006V9.21H11.29V7.48Z" fill="#8200DA"/>
                      <path d="M14.75 7.48H13.02V9.21H14.75V7.48Z" fill="#8200DA"/>
                      <path d="M14.75 9.2H13.02V10.93H14.75V9.2Z" fill="#8200DA"/>
                      <path d="M16.48 10.93H14.75V12.66H16.48V10.93Z" fill="#8200DA"/>
                      <path d="M18.21 10.93H16.48V12.66H18.21V10.93Z" fill="#8200DA"/>
                      <path d="M19.9302 12.66H18.2002V14.39H19.9302V12.66Z" fill="#8200DA"/>
                      <path d="M18.21 17.85H16.48V19.58H18.21V17.85Z" fill="#8200DA"/>
                      <path d="M7.83008 17.85H6.1001V19.58H7.83008V17.85Z" fill="#8200DA"/>
                      <path d="M13.0201 4.02H11.29V5.75H13.0201V4.02Z" fill="#8200DA"/>
                      <path d="M13.0201 23.03H11.29V24.76H13.0201V23.03Z" fill="#8200DA"/>
                      <path d="M13.0201 26.45H11.29V28.18H13.0201V26.45Z" fill="#8200DA"/>
                      <path d="M13.0201 0.560001H11.29V2.29H13.0201V0.560001Z" fill="#8200DA"/>
                      <path d="M23.3901 12.66H21.6602V14.39H23.3901V12.66Z" fill="#8200DA"/>
                      <path d="M2.64014 12.66H0.910156V14.39H2.64014V12.66Z" fill="#8200DA"/>
                      <path d="M18.21 14.39H16.48V16.12H18.21V14.39Z" fill="#8200DA"/>
                      <path d="M16.48 14.39H14.75V16.12H16.48V14.39Z" fill="#8200DA"/>
                      <path d="M14.75 16.12H13.02V17.85H14.75V16.12Z" fill="#8200DA"/>
                      <path d="M13.0201 14.39H11.29V16.12H13.0201V14.39Z" fill="white"/>
                      <path d="M13.0201 16.12H11.29V17.85H13.0201V16.12Z" fill="#BE6CFF"/>
                      <path d="M13.0201 17.85H11.29V19.58H13.0201V17.85Z" fill="#BE6CFF"/>
                    </svg>
                  </div>
                </div>
              </div>
            {/* Load More */}
            {searchResults.length < visibleProducts.length && (
              <div className="text-center mt-4">
                <button
                  name="Load more products"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-white font-bold border border-input bg-brandBlue hover:bg-textBlue h-11 rounded-full px-8 transition-all hover:scale-105 hover:shadow-md"
                  onClick={loadMoreProducts}
                >
                  Load More Products ({searchResults.length} of{" "}
                  {searchResults.length})
                </button>
              </div>
            )}
          </>
          :
          <>
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center flex-wrap mt-8 relative">{renderPaginationButtons()}<span className="opacity-[0.3] border-dashed border-brandBlue border-b-[5px] w-full absolute bottom-[15px]"></span></div>
            )}
          </>
        }
      </div>
    </>
  );
};

export default SearchResults;
