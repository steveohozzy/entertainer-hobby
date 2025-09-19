import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronUp, Heart } from "lucide-react";
import Menu from "../menu/Menu";

import { useSelector, useDispatch } from "react-redux";

import {
  selectCartCount,
  selectCartTotal,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";

import { setIsCartOpen } from "../../store/cart/cartReducer";

import { selectWishlistItems, selectWishlistCount } from "../../store/wishlist/wishlistSelector";

import { setIsSignedIn } from "../../store/account/accountReducer";

import Footer from "../footer/Footer";
import MiniCart from "../miniCart/miniCart";
import SearchBar from "../searchBar/searchBar";
import AccountPopUp from "../accountPopUp/AccountPopUp";

const Layout = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isCartOpen = useSelector(selectIsCartOpen);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // Handle scroll for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setShowHeader(false);
      } else {
        // Scrolling up or at top
        setShowHeader(true);
      }

      if (currentScrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const wishlistItems = useSelector(selectWishlistItems);
  const wishlistCount = useSelector(selectWishlistCount);

  useEffect(() => {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }, [wishlistItems])

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));

    if (isCartOpen) {
      document.body.classList.remove("body-noscroll");
    } else {
      document.body.classList.add("body-noscroll");
    }
  };

  const goToWishlistHandler = () => {
    dispatch(setIsSignedIn(true));
    navigate('/account');
  }

  return (
    <>
      <header
        id="site-header"
        className={`text-white rounded-b-2xl md:rounded-b-3xl sticky top-0 w-full z-[700] transition-transform duration-300 ${
          showHeader
            ? "translate-y-0"
            : "translate-y-[-100vh] shadow-none md:shadow-none"
        }`}
      >
        <div className="bg-black rounded-b-2xl md:rounded-b-3xl">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex items-stretch md:items-center justify-between">
              <div className="flex items-center">
                <Menu />
                <button onClick={goToWishlistHandler} className="group flex ml-2" name="View your favourites">
                    <Heart className="transition-all h-5 w-5 group-hover:scale-110 group-hover:rotate-[20deg]" fill="white" />
                    <span className="sr-only">View your favourites</span>
                    {wishlistCount > 0 &&
                      <div className="ml-1 text-xs bg-purple-600 w-[20px] h-[20px] flex items-center justify-center rounded-full z-20">
                          <span className="ml-[-1px] w-full text-center">{wishlistCount}</span>
                      </div>
                    }
                </button>
                <AccountPopUp />
              </div>
              <div className="flex items-center pt-2 md:ml-0 group">
                <button onClick={() => {
                  navigate('/');
                   window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }} className="flex items-center w-[130px] md:w-[350px]">
                  <img src="/entertainer-xp-logo.svg" alt="Entertainer XP" />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                    <button
                    onClick={toggleIsCartOpen}
                    name="View cart"
                    className="flex items-center  text-white group"
                    >
                    <span
                        className={`transition-all group-hover:rotate-[25deg] relative z-20 ${
                        isCartOpen ? "text-brandBlue" : "text-white"
                        }`}
                    >
                        <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z" />
                        </svg>
                    </span>

                    <div className="ml-1 text-xs bg-purple-600 w-[24px] h-[24px] flex items-center justify-center rounded-full relative z-20">
                        {cartCount}
                    </div>
                    <span className="sr-only">View your cart</span>
                    <span className="text-sm ml-2 hidden md:block">
                        £{cartTotal.toFixed(2)}
                    </span>
                    {isCartOpen && (
                        <span className="absolute bg-white left-[-5px] bottom-[-30px] lg:bottom-[-40px] h-[calc(100%+40px)] lg:h-[calc(100%+60px)] w-[60px] rounded-tl-lg rounded-tr-lg">
                        &nbsp;
                        </span>
                    )}
                    </button>
                    <MiniCart />
                </div>
                <a
                  href="https://www.elc.co.uk/"
                  rel="noreferrer"
                  target="_blank"
                  className="py-2 h-full md:h-auto flex items-center rounded-md rounded-tr-[0] rounded-br-xl md:rounded-br-2xl md:rounded-tr-md md:rounded-br-md px-2 md:px-3 bg-white hover:bg-grey-100 transition-all hover:scale-105 hover:shadow-md"
                >
                  <img
                    src="/elc-logo-full.svg"
                    alt="visit Early Learning Centre"
                    className="h-7 hidden md:block"
                  />
                  <img
                    src="/elc-logo-small.svg"
                    alt="visit Early Learning Centre"
                    className="h-7 md:hidden"
                  />
                  <span className="sr-only">
                    visit the Early Learning Centre website
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <SearchBar />
      </header>
      <div className="selection:bg-purple-300 selection:text-purple-900">
        <Outlet />
        <Footer />
      </div>
      {showBackToTop && (
        <button
          name="Scroll to to of site"
          onClick={scrollToTop}
          className="fixed border-[2px] border-purple-500 bottom-4 right-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-purple-500 hover:text-brandBlue bg-black h-9 rounded-full px-2 shadow-md transition-all hover:scale-105  hover:border-brandBlue z-[9999]"
        >
          <ChevronUp className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </button>
      )}
    </>
  );
};

export default Layout;
