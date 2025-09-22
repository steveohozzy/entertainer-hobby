import { useRef, useState, useEffect } from "react";
import { ChevronRight, MenuIcon, X, Sparkles, Heart } from "lucide-react";

import menuCategories from "../../data/menuCategories";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsSignedIn } from "../../store/account/accountReducer";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubCategories, setExpandedSubCategories] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navOpen, setNavOpen]=useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      document.body.classList.remove("body-noscroll");
    } else {
      document.body.classList.add("body-noscroll");
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
    // Reset states when menu closes
    setTimeout(() => {
      setExpandedCategories({});
      setExpandedSubCategories({});
      setHoveredItem(null);
    }, 300);
  };

  const menuRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeMenu();
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

  useOutsideAlerter(menuRef);

  const toggleCategory = (categoryId) => {
    document.body.classList.add("body-noscroll");
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleSubCategory = (subCategoryId) => {
    document.body.classList.add("body-noscroll");
    setExpandedSubCategories((prev) => ({
      ...prev,
      [subCategoryId]: !prev[subCategoryId],
    }));
  };

  const goToWishlistHandler = () => {
      dispatch(setIsSignedIn(true));
      navigate('/account');
      closeMenu();
    }

    useEffect(()=>{
      setTimeout(() => {
        setNavOpen(true)
      }, 500);      
    },[])
  return (
    <>
      <div className="rounded-xl p-[3px] relative overflow-hidden after:absolute after:block after:top-0 after:left-0 after:w-[110%] after:h-full after:bg-gradient-to-br after:from-blue-500 after:via-black after:to-blue-500 hover:after:animate-borderGradient after:z-0">
        <button
          name="Activate Menu"
          className="w-full flex flex-col items-center shadow-md justify-center bg-gradient-to-br from-black via-gray-900 to-black rounded-xl cursor-pointer flex flex-wrap transition-all z-[1] relative overflow-hidden p-2 md:p-4"
          onClick={toggleMenu}
        >
          <MenuIcon />
          <span className="sr-only">Activate Menu</span>
        </button>
      </div>
      {/* Hamburger Menu Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/70 z-40 h-screen"
        />
      )}

      {/* Sliding Hamburger Menu */}
      <div
        className={`fixed h-screen top-5 -left-4 p-4 h-full w-80 z-50 transform transition-transform ease-in-out ${
          showMenu ? "translate-x-0 top-5 left-8" : "-translate-x-full"
        }`}
      >
        <div ref={menuRef} className={`bg-gradient-to-br from-black via-gray-900 to-black max-h-[calc(100vh-130px)] lg:max-h-[calc(100vh-80px)] relative rounded-3xl shadow-xl overflow-hidden
          ${navOpen ? 'overflow-y-auto shadow-text-blue' : 'overflow-hidden'}
        `}>
          {/* Animated Menu Categories */}
          <nav className="relative space-y-2 pt-6 pb-4 w-[calc(100%-10px)] drop-shadow-none">
            <div className="h-full w-[40px] bg-brandBlue rounded-full absolute left-0 top-0"></div>
            <div className="w-full flex justify-between absolute -top-[5px] left-[5px]">
              <button
                onClick={() => closeMenu()}
              >
                <X className="h-7 w-7 mt-2" />
                <span className="sr-only">close menu</span>
              </button>
              <div className="flex items-center text-white pr-5">
                <button
                onClick={() => {
                  navigate('/account');
                  closeMenu();
                }}
                className="transition-all group flex"
              >
                <span className="sr-only">account</span>
                <span className="mr-1 transition-all transition-duration-500 group-hover:rotate-[20deg] group-hover:scale-110">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 17 17"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.37 2.37C3.95 0.79 5.86 0 8.11 0C10.36 0 12.27 0.79 13.85 2.37C15.43 3.95 16.22 5.86 16.22 8.11C16.22 10.36 15.43 12.27 13.85 13.85C12.27 15.43 10.36 16.22 8.11 16.22C5.86 16.22 3.95 15.43 2.37 13.85C0.79 12.27 0 10.36 0 8.11C0 5.86 0.79 3.95 2.37 2.37ZM8.11 14.38C10.05 14.38 11.64 13.64 12.88 12.16C12.57 11.57 12.14 11.1 11.57 10.74C11 10.38 10.37 10.2 9.67 10.2C9.61 10.2 9.53 10.21 9.44 10.23C8.98 10.38 8.54 10.46 8.1 10.46C7.66 10.46 7.22 10.38 6.76 10.23C6.67 10.21 6.6 10.2 6.53 10.2C5.83 10.2 5.2 10.38 4.63 10.74C4.06 11.1 3.63 11.57 3.32 12.16C4.56 13.64 6.15 14.38 8.09 14.38H8.11ZM10.14 3.99C9.57 3.42 8.9 3.14 8.11 3.14C7.32 3.14 6.65 3.42 6.08 3.99C5.51 4.56 5.23 5.23 5.23 6.02C5.23 6.81 5.51 7.48 6.08 8.05C6.65 8.62 7.32 8.9 8.11 8.9C8.9 8.9 9.57 8.62 10.14 8.05C10.71 7.48 10.99 6.81 10.99 6.02C10.99 5.23 10.71 4.56 10.14 3.99Z" />
                  </svg>
                </span>
              </button>
              <button onClick={goToWishlistHandler} className="group flex ml-2" name="View your favourites">
                  <Heart className="transition-all h-6 w-6 text-white group-hover:scale-110 group-hover:rotate-[20deg]" />
                  <span className="sr-only">View your favourites</span>
              </button>
              </div>
            </div>
            {menuCategories.map((category, categoryIndex) => (
              <div
                key={category.id}
                className={`transform transition-all duration-300 ${
                  showMenu ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transitionDelay: `${categoryIndex * 75}ms` }}
              >
                {category.hasSubmenu ? (
                  <>
                    {/* Category Header with Icon Bar */}
                    <div className="flex items-stretch rounded-xl overflow-hidden">
                      {/* Icon Bar */}
                      <div
                        className={`w-[40px] flex items-center justify-center relative ${
                          expandedCategories[category.id] ? "shadow-inner" : ""
                        }`}
                      >
                        <span className="text-2xl text-white max-w-6 [&_svg]:w-full">
                          {category.icon}
                        </span>
                        <span
                          className={`w-0 h-0 border-l-[8px] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-brandBlue transition-all absolute ${
                            expandedCategories[category.id] ?
                            "rotate-180 !border-black !border-b-transparent !border-t-transparent left-[calc(100%-8px)] z-50" : "left-full"
                          }`}
                        ></span>
                      </div>

                      {/* Category Button */}
                      <button
                        onClick={() => toggleCategory(category.id)}
                        onMouseEnter={() => setHoveredItem(category.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`flex-1 flex items-center justify-between p-4 text-left transition-all duration-300 group hover:shadow-lg text-white`}
                      >
                        <span className="font-semibold text-lg">
                          {category.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {hoveredItem === category.id && (
                            <Sparkles className="h-4 w-4 animate-spin" />
                          )}
                        </div>
                      </button>
                    </div>

                    {/* Submenu Items */}
                    {expandedCategories[category.id] && (
                      <div className="animate-fadeIn relative">
                        <div
                          className={`w-[40px] absolute top-0 left-0 justify-center bg-purple-500 rounded-full h-full`}
                        ></div>
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            {/* Second Level Item */}
                            <div className="flex items-stretch overflow-hidden">
                              {/* Icon Bar for Second Level */}
                              <div
                                className={`w-[40px] flex items-center justify-center relative`}
                              >
                                {item.hasSubItems && (
                                  <span
                                    className={`w-0 h-0 border-l-[8px] border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-purple-500 transition-all absolute ${
                                      expandedSubCategories[
                                        `${category.id}-${itemIndex}`
                                      ] ?
                                      "rotate-180 !border-black !border-b-transparent !border-t-transparent left-[calc(100%-8px)] z-50" : "left-full"
                                    }`}
                                  ></span>
                                )}
                              </div>

                              {/* Item Content */}
                              {item.hasSubItems ? (
                                <button
                                  onClick={() =>
                                    toggleSubCategory(
                                      `${category.id}-${itemIndex}`
                                    )
                                  }
                                  className={`flex-1 p-3 text-left transition-all duration-300 group`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="flex items-center gap-2 justify-between mb-1p">
                                        <span
                                          className={`font-semibold text-white text-left text-base`}
                                        >
                                          {item.name}
                                        </span>
                                      </div>
                                    </div>
                                    {expandedSubCategories[
                                        `${category.id}-${itemIndex}`
                                      ] && (
                                      <span className="text-white">
                                                <Sparkles className="h-4 w-4 animate-spin" />
                                      </span>
                                    )}
                                    
                                  </div>
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    navigate(item.href);
                                    closeMenu();
                                  }}
                                  className={`flex-1 p-3 transition-all duration-300 group`}
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className={`font-semibold text-white text-left text-base`}>
                                      {item.name}
                                    </span>
                                    {item.color && (
                                      <div
                                        className={`w-3 h-3 rounded-full ${item.color} animate-pulse`}
                                      ></div>
                                    )}
                                    <ChevronRight className="h-4 w-4 transition-transform duration-300 text-white" />
                                  </div>
                                </button>
                              )}
                            </div>

                            {/* Third Level Items */}
                            {item.hasSubItems &&
                              expandedSubCategories[
                                `${category.id}-${itemIndex}`
                              ] && (
                                <div className="ml-8 space-y-1 animate-fadeIn">
                                  {item.subItems.map((subItem, subIndex) => (
                                    <div
                                      key={subIndex}
                                      className="flex items-stretch rounded-md overflow-hidden shadow-sm"
                                    >
                                      {/* Icon Bar for Third Level */}
                                      <div className="w-4 flex"></div>

                                      {/* Third Level Content */}
                                      <button
                                        onClick={() => {
                                          navigate(subItem.href);
                                          closeMenu();
                                        }}
                                        className="flex-1 p-2 transition-all duration-300 group"
                                      >
                                        <div className="flex items-center gap-2 mb-1">
                                          <span className="flex font-semibold items-center text-sm text-white opacity-75 group-hover:opacity-100">
                                            {subItem.name}
                                            <ChevronRight className="w-4 h-4 ml-2" />
                                          </span>
                                        </div>
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Simple Menu Item with Icon Bar */
                  <div className="flex items-stretch rounded-xl overflow-hidden">
                    {/* Icon Bar */}
                    <div
                      className={`w-[40px] flex items-center justify-center`}
                    >
                      <span className="text-2xl">
                        {category.icon}
                      </span>
                    </div>

                    {/* Category Content */}
                    <button
                      onClick={() => {
                        navigate(category.href);
                        closeMenu();
                      }}
                      className={`flex-1 p-4 transition-all duration-300 group ${category.bgColor}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold text-lg ${category.color ? category.color : 'text-white'}`}>
                          {category.name}
                        </span>
                        <ChevronRight className={`${category.color ? category.color : 'text-white'}`} />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
