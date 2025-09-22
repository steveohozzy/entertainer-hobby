import { useState, useEffect, useRef } from "react";
import TopSellersCarousel from "./topSellersCarousel";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";

export const brands = [
  { name: "Marvel"},
  { name: "DC Comics"},
  { name: "Star Wars"},
  { name: "TMNT"},
  { name: "Transformers"},
  { name: "Monster Verse"},
  { name: "The Simpsons"},
  { name: "Collectible Figures"},
  { name: "Pokemon"},
  { name: "Dragon Ball Z"},
  { name: "Naruto"},
  { name: "One Piece"},
  { name: "Spider-man"},
  { name: "Godzilla"},
  { name: "Action figures"},
  { name: "Pikachu"},
  { name: "Goku"},
]

const SearchBar = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [startedSearch, setStartedSearch] = useState(false);
  const wrapperRef = useRef(null);
  const searchInput = useRef(null);

  const navigate = useNavigate();

  const handleFocus = () => {
    setShowSearchBox(true);
    document.body.classList.add('body-noscroll');

    setTimeout(() => {
        const headerHeight = document.getElementById("site-header").offsetHeight;
        const searchBacking = document.getElementById("search-backing");

        if (searchBacking) {
            searchBacking.style.top = headerHeight+"px";
        }
    }, "50");
  }


  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSearchBox(false)
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length === 0) {
      return
    }
    navigate('/search/'+searchQuery.trim());
    setShowSearchBox(false);
    document.body.classList.remove('body-noscroll');
    searchInput.current.blur();
  }

  const handleSelectSearch = (e) => {
    e.preventDefault();
    navigate('/search/'+e.target.textContent.toLowerCase());
    setShowSearchBox(false);
    document.body.classList.remove('body-noscroll');
    searchInput.current.blur();
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    
    if (searchQuery.trim().length-1 > 0) {
      setStartedSearch(true);
    } else {
      setStartedSearch(false);
    }
  }

  const handleKeyCode = (e) => {
    if( e.keyCode === 46 || e.keyCode === 8 ) {
      
      if (searchQuery.trim().length === 3 || searchQuery.trim().length === 2 || searchQuery.trim().length === 1) {
        setTimeout(() => {
          setStartedSearch(false);
        }, 0)
      }
    }
  }

  const filteredSearch = brands.filter((term) => {
      return (
        term.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  );

  const filteredProducts =products.filter((product) => {
    const searchTerm = searchQuery.toLowerCase();
    
    if (startedSearch === true) {
      return (
        product.brand.toLowerCase().includes(searchTerm) ||
        product.name.toLowerCase().includes(searchTerm) ||
        product.features.some((feature) => feature.toLowerCase().includes(searchTerm)) ||
        product.description.toLowerCase().includes(searchTerm) || 
        product.specifications.Material.toLowerCase().includes(searchTerm) ||
        product.size.toLowerCase().includes(searchTerm) ||
        product.ageGroup.toLowerCase().includes(searchTerm) ||
        '£'+product.price.toString() === searchTerm
      )
    } else {
      return {
        product
      }
    }
  });

  return (
    <>
      {showSearchBox &&
        <div id="search-backing" className="fixed inset-0 bg-black/40 h-screen w-screen z-0"></div>
      }
      <div ref={wrapperRef} className="search bg-black pt-5 z-2 relative">
        <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-8 relative">
            <form id="search-form" className="relative" onSubmit={handleSearch}>
                <input ref={searchInput} onFocus={handleFocus} onChange={handleChange} onKeyDown={handleKeyCode} name="search" type="search" placeholder="I'm looking for..." className="relative z-20 outline-0 h-[44px] px-3 rounded-3xl w-full shadow-text-blue text-gray-100 placeholder:text-gray-100 bg-black" />
                <button onClick={handleSearch} className="shadow-md h-full px-4 z-20 group text-white font-semibold bg-brandGreen rounded-full absolute right-0 top-0 transition-all hover:bg-brandBlue hover:scale-105">
                    Search
                </button>
              </form>
              {showSearchBox &&
                <button
                  name="Close search results"
                  onClick={() => {
                    setShowSearchBox(false);
                    document.body.classList.remove('body-noscroll');
                  }}
                  className="absolute md:hidden right-8 sm:right-16 top-12 sm:top-14 text-purple-500 rounded-full border-[2px] border-purple-500 z-50"
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
              }
              <div className={`absolute z-10 top-4 left-0 mx-6 sm:mx-12 lg:mx-8 w-[calc(100%-3rem)] sm:w-[calc(100%-6rem)] lg:w-[calc(100%-4rem)] opacity-0 h-0 transition-all ${showSearchBox ? 'opacity-100 h-auto' : 'overflow-hidden'}`}>
                <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-lg p-4 pt-8 md:pt-11 pb-3 text-gray-100 shadow-text-blue max-h-[calc(100vh-230px)] overflow-y-auto no-scrollbar shadow-md mb-4">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col w-full md:w-2/3 max-w-[400px]">
                    {startedSearch & filteredSearch.length > 0 ? (
                      <>
                        <div className="text-lg font-semibold text-gray-100">
                          Do You Mean?
                        </div>
                        <div className="flex flex-col space-y-1 mt-2">
                          {filteredSearch.slice(0, 3).map((term) => {
                            return (
                              <button onClick={handleSelectSearch} id={term.name} key={term.name} className="text-gray-100 text-sm md:text-base flex items-center justify-between transition-all hover:text-white hover:font-semibold">
                                <span className="flex items-center">
                                  <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                      <g id="Interface / External_Link">
                                      <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </g>
                                    </svg>
                                  </span>
                                  <span>{term.name}</span>
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-lg font-semibold text-gray-100">
                          Top Searches
                        </div>
                        <div className="flex flex-col space-y-1 mt-2">
                          <button onClick={handleSelectSearch} className="text-gray-100 text-sm md:text-base flex items-center justify-between transition-all hover:text-white hover:font-semibold">
                            <span className="flex items-center">
                              <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                  <g id="Interface / External_Link">
                                  <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </g>
                                </svg>
                              </span>
                              <span>Pokemon</span>
                            </span>
                          </button>
                          <button onClick={handleSelectSearch} className="text-gray-100 text-sm md:text-base flex items-center justify-between transition-all hover:text-white hover:font-semibold">
                            <span className="flex items-center">
                              <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                  <g id="Interface / External_Link">
                                  <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </g>
                                </svg>
                              </span>
                              <span>Star War</span>
                            </span>
                            <span className="rounded-lg bg-brandRed px-2 text-white text-[10px] md:text-sm ml-2 font-[400]">
                              <span className="font-semibold">10% off</span> code - SQUISH10
                            </span>
                          </button>
                          <button onClick={handleSelectSearch} className="text-gray-100 text-sm md:text-base flex items-center justify-between transition-all hover:text-white hover:font-semibold">
                            <span className="flex items-center">
                              <span className="w-4 md:w-5 h-4 md:h-5 mr-1 block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                  <g id="Interface / External_Link">
                                  <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </g>
                                </svg>
                              </span>
                              <span>DC comics</span>
                            </span>
                            <span className="rounded-lg bg-orange-400 px-2 text-white text-[10px] md:text-sm ml-2 font-[400]">
                              <span className="font-semibold">HOT TOY</span> code - Trending
                            </span>
                          </button>
                        </div>
                      </>
                    )}
                    </div>
                  </div>
                  <TopSellersCarousel setShowSearchBox={setShowSearchBox} filteredProducts={filteredProducts} startedSearch={startedSearch} />
                </div>
              </div>
        </div>
    </div>
  </>
  )
}

export default SearchBar