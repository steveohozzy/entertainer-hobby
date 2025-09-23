"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { X, Search } from "lucide-react";
import {
  products,
  brands,
  ageGroups,
  features,
  sizes,
} from "../../data/products";

import ProductCard from "../../components/productCard/productCard";
import Dropdown from "../../components/dropdown/Dropdown";
import { useLocation } from "react-router-dom";

const Brands = () => {
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
  const [brandSet, setBrandSet] = useState('');
  const PRODUCTS_PER_PAGE = 10

  const wrapperRef = useRef(null);

  const { id } = useParams();

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

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, filteredProducts.length));
  };

  // Filter brands based on search typing
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

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
  const sortedFilteredProducts = sortProducts(filteredProducts, sortOption)

  const totalPages = Math.ceil(sortedFilteredProducts.length / PRODUCTS_PER_PAGE)
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE
  const endIndex = startIndex + PRODUCTS_PER_PAGE
  const currentProducts = sortedFilteredProducts.slice(startIndex, endIndex)

  // Get the visible subset of filtered products
  const visibleFilteredProducts = sortedFilteredProducts.slice(0, visibleProducts);

  const searchResults = products.filter((product) => {
    const searchTerm = brandSet.toLowerCase()
    
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
  });

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-4">
        <div className="text-center mb-4">
          <div className='flex justify-center'>
        <h1 id="offers" className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent capitalize textStroke'>{id.replace('-', ' ')} Toys</span></h1></div>
        </div>
        {/* Filter and Sort Header */}
        <div
          id="filters-bar"
          className={`sticky z-40 bg-brandLightBlue py-2 mb-2 transition-all duration-300 ${showHeader && ''}`}
        >
          <div className="shadow flex items-center gap-3 justify-between shadow-sm flex-wrap bg-brandLightBlue">
            <div className="grid grid-cols-3 gap-2 w-full flex-wrap">
              <form id="sort-by-form" className="bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3">
                <label htmlFor="sort" className="sr-only">
                  Select an option
                </label>
                <select
                  id="sort"
                  className="bg-brandBlue text-white text-sm rounded-tl-full rounded-bl-full block h-full w-full px-3 outline-0 cursor-pointer"
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
              <div ref={wrapperRef} className={`relative z-[2] bg-white border-[3px] border-brandBlue border-b-brandBlue ${showFilters && 'border-b-white'}`}>
                <button
                  name="Show filters"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`relative z-[2] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm py-3 h-full w-full px-4 transition-all group ${showFilters ? 'bg-white text-brandBlue' : 'bg-brandBlue text-white'}`}
                >
                  <span className="transition-all group-hover:scale-110">Refine</span>
                  <span className={`w-4 h-4 ${showFilters ? 'text-brandBlue' : 'text-white'} transition-all group-hover:rotate-[20deg]`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
                  </span>
                </button>
                {/* Sliding Filter Panel */}
                <div ref={wrapperRef}
                  className={`absolute overflow-hidden bg-white shadow-xl z-[1] transition-all ease-in-out w-[calc(100vw-60px)] md:w-[calc(100%+40px)] left-[calc(-100%+5px)] md:left-[-20px] no-scrollbar ${
                    showFilters ? "max-h-[calc(100vh-250px)] overflow-y-auto border border-brandBlue border-[3px] rounded-bl-lg rounded-br-lg top-[calc(100%-3px)]" : "max-h-0 top-full "
                  }`}
                >
                  <div className="p-3 h-full overflow-y-auto]">
                    {hasActiveFilters && (
                      <div className="flex flex-wrap gap-2 items-start">
                        {selectedBrands.map((brand) => (
                          <div
                            key={`brand-${brand}`}
                            variant="secondary"
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
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
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
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
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
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
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                          >
                            {size}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => toggleSize(size)}
                            />
                          </div>
                        ))}
                        {showInStockOnly && (
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1">
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
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
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
                                  className={`inline-flex items-center border-[2px] border-brandLightBlue rounded-full px-2.5 py-0.5 cursor-pointer transition-all hover:scale-105 text-sm hover:bg-brandBlue hover:text-white ${
                                    selectedBrands.includes(brand.name)
                                      ? `bg-brandBlue text-white`
                                      : "hover:bg-brandBlue"
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
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
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
                                <span className="text-sm text-brandBlue">
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
                       className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
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
                              <span className="text-sm text-brandBlue">
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
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
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
                              <span className="text-sm text-brandBlue">
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
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
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
                        <div className="text-sm text-brandBlue">
                          £{priceRange[0]} - £{priceRange[1]}
                        </div>
                      </div>
                      }
                    />

                    {/* Additional Filters */}
                    <Dropdown
                      title="Additional Filters"
                      className="w-full text-brandBlue flex items-center border-b-2 border-b-textBlue py-3"
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
                          <span className="text-sm text-brandBlue">
                            In Stock Only
                          </span>
                        </label>
                      </div>
                      }
                    />
                  </div>
                </div>
              </div>
              <p className="flex items-center justify-center bg-brandBlue text-white text-xs rounded-tr-full rounded-br-full block h-full w-full px-3">
                 {startIndex + 1}-{Math.min(endIndex, sortedFilteredProducts.length)} of{" "}
                  {sortedFilteredProducts.length} <span className="hidden md:block ml-1">products</span>
              </p>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 my-2 w-full">
                <span className="text-sm text-brandBlue font-medium">
                  Active filters:
                </span>
                {selectedBrands.map((brand) => (
                  <div
                    key={`brand-${brand}`}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
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
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
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
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
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
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1"
                  >
                    {size}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => toggleSize(size)}
                    />
                  </div>
                ))}
                {showInStockOnly && (
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors border-transparent bg-brandBlue text-white gap-1">
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
        <div className="flex max-w-screen-w overflow-auto w-full gap-2 mb-5">
          <button onClick={() => setBrandSet('spider-man')} className="bg-textBlue text-white py-2 px-4 whitespace-nowrap rounded-full md:min-w-[calc(33.333%-0.5rem)] transition-all shadow-sm hover:bg-brandBlue hover:shadow-lg">Spider-Man</button>
          <button onClick={() => setBrandSet('iron man')}  className="bg-textBlue text-white py-2 px-4 whitespace-nowrap rounded-full md:min-w-[calc(33.333%-0.5rem)] transition-all shadow-sm hover:bg-brandBlue hover:shadow-lg">Iron Man</button>
          <button onClick={() => setBrandSet('captain america')}  className="bg-textBlue text-white py-2 px-4 whitespace-nowrap rounded-full md:min-w-[calc(33.333%-0.5rem)] transition-all shadow-sm hover:bg-brandBlue hover:shadow-lg">Captain America</button>
        </div>
        {brandSet === '' ? (
          <>
            {location.pathname !== "/category/pagination" ? 
              <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {visibleFilteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
                :
              <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            }
            {location.pathname !== "/category/pagination" ? 
              <>
                <div className="max-w-[300px] mx-auto mt-8 flex flex-wrap justify-between items-center">
                    {(visibleFilteredProducts.length / filteredProducts.length * 100).toFixed() > 99 ?
                      <div className="transition-all" style={{marginLeft: `${(visibleFilteredProducts.length / filteredProducts.length * 100 - 30).toFixed()}%`}}>
                        <img src='/ship-finish.svg' alt='pirate ship indicator finsihed' />
                      </div>
                      :
                      <div style={{marginLeft: `${(visibleFilteredProducts.length / filteredProducts.length * 100 - 10).toFixed()}%`}}>
                        <img src='/ship.svg' alt='pirate ship indicator' />
                      </div>
                    }
                    <span className={`transition-all ${(visibleFilteredProducts.length / filteredProducts.length * 100).toFixed() > 99 ? 'text-brandLightGreen' : 'text-gray-300 rotate-[10deg]' }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                        <path d="M3.52997 0.660034H6.14996L3.89996 5.89005H0.599976L3.53998 0.660034H3.52997ZM0.589966 6.94003H3.88998L7.90997 15.18C7.90997 15.18 7.90996 15.26 7.85995 15.29C7.80995 15.32 7.76997 15.32 7.74997 15.27L0.589966 6.94003ZM5.42996 6.94003H14.58L10.1 17.33C10.1 17.33 10.05 17.4 9.99997 17.4C9.94997 17.4 9.91996 17.38 9.89996 17.33L5.41998 6.94003H5.42996ZM12.29 0.660034L14.54 5.89005H5.44998L7.69998 0.660034H12.28H12.29ZM12.09 15.17L16.11 6.93002H19.41L12.25 15.26C12.25 15.26 12.19 15.31 12.14 15.28C12.09 15.25 12.07 15.21 12.09 15.17ZM16.47 0.660034L19.41 5.89005H16.11L13.85 0.660034H16.47Z" fill="currentColor"/>
                      </svg>
                    </span>
                    <div className="bg-gray-300 w-full h-4 rounded-full">
                      <div className="rounded-full h-full bg-brandLightGreen transition-all" style={{width: `${(visibleFilteredProducts.length / filteredProducts.length * 100).toFixed()}%`}}></div>
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
              :
              <>
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center flex-wrap mt-8 relative">{renderPaginationButtons()}<span className="opacity-[0.3] border-dashed border-brandBlue border-b-[5px] w-full absolute bottom-[15px]"></span></div>
                )}
              </>
            }
           </>
          ) : (
            <div className="grid gap-2 lg:gap-6 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        {/* Info Sections */}
        <p className="font-bold mt-7 text-brandBlue">Explore our range of Marvel toys, from magical Dreamtopia dolls to inspiring career dolls that spark big dreams. You’ll find fashion dolls, playsets, vehicles, and accessories, which are perfect as gifts for kids who love imaginative play. With Marvel and friends, there’s always a new story to create and fun to be had!</p>
        <div className="flex flex-col items-center justify-center my-7">
          <Dropdown
            className="text-brandBlue font-bold flex items-center text-xl"
            title={'What Types of Marvel Dolls and Toys Can I Collect?'}
            expanded={true}
            answer={
              <div className="text-brandBlue text-base">
                <p className="mt-4">Marvel has been empowering imaginations for decades, and with over 200 careers under her belt, there’s no end to the role-play possibilities. From a doctor to a fashion designer or even an astronaut, Marvel Careers dolls let children explore a world of endless opportunities.</p>

                <p className="mt-4">Learn all about the 200 careers that Marvel's had. Do any of them surprise you?</p>

                <p>The Marvel Dreamtopia range opens the door to magical adventures with mermaids, princesses, and fairytale characters. Immerse yourself in the ultimate fashion adventure with the Marvel Fashionistas range or bring the pink screen to life with Marvel Movie dolls.</p>

                <p className="mt-4">Whether you're interested in Marvel's wide range of career dolls or magical Dreamtopia toys, there's something for everyone. Explore the possibilities and discover which Marvel dolls will inspire your child’s next adventure.</p>
              </div>
            }
          />
        </div>
        <div className="flex flex-col items-center justify-center my-7">
          <Dropdown
            className="text-brandBlue font-bold flex items-center text-xl"
            title={'Who Are the Most Popular Marvel Characters?'}
            answer={
              <div className="text-brandBlue text-base">
                <p className="mt-4">Marvel isn’t just about the dolls. Marvel's iconic friends add depth and excitement to her world. Among the Marvel squad, you’ll come across her sister Skipper, best friend Chelsea, and boyfriend Ken, each with their own personalities and stories. From Marvel’s adventurous escapades to her sister’s dreams of stardom, there are endless ways to create your own Marvel stories.</p>

                <p className="mt-4">Dive into Marvel’s world and discover which characters your child will connect with the most. With such a diverse cast, Marvel fans can experience a variety of adventures, whether it's an exciting career path or a fun-filled day at Marvel's Dreamhouse!</p>
              </div>
            }
          />
        </div>
        <div className="flex flex-col items-center justify-center my-7">
          <Dropdown
            className="text-brandBlue font-bold flex items-center text-xl"
            title={'Timeless Marvel Gifts for All'}
            answer={
              <div className="text-brandBlue text-base">
                <p className="mt-4">If you’re looking for the perfect gift for a Marvel lover, we’ve got you covered! From stylish fashion dolls to collectable special edition Marvel dolls, there’s something for every age and interest. With a variety of fashion outfits, doll accessories, and playsets, there's a perfect gift for everyone, whether they're starting their collection or are already well-established fans.</p>

                <p className="mt-4">For those who appreciate the finer details, Marvel’s collectable dolls make a stunning gift for older children and collectors alike. Need help choosing the right gift? Our guide to the best Marvel toys offers advice to make the perfect choice when it comes to gift-giving. No matter the occasion, a Marvel doll is always a gift that inspires creativity and fun!</p>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
