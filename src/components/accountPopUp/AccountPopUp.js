import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectIsAccountOpen } from "../../store/account/accountSelector";
import { setIsAccountOpen } from "../../store/account/accountReducer";

import { selectIsSignedIn } from "../../store/account/accountSelector";
import { setIsSignedIn } from "../../store/account/accountReducer";

import { Heart, Star } from "lucide-react";

const AccountPopUp = () => {
  const isAccountOpen = useSelector(selectIsAccountOpen);
  const isSignedIn = useSelector(selectIsSignedIn);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wrapperRef = useRef(null);

  const handleAccountPopUp = () => {
    dispatch(setIsAccountOpen(!isAccountOpen));
  };

  const handleSignIn = () => {
    dispatch(setIsSignedIn(true));
  };

  const closeAccountPopUp = () => {
    dispatch(setIsAccountOpen(false));
  };

  const handleFindOutMore = () => {
    dispatch(setIsAccountOpen(!isAccountOpen));
    navigate('/account')
  }

  const handleGoToAccount = () => {
    navigate('/account');
    dispatch(setIsAccountOpen(false));
  }

  const handleEmailChange = (e) => {
    setEmail(!e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(!e.target.value);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
         closeAccountPopUp()
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
      {!isSignedIn ? (
        <button
          onClick={handleAccountPopUp}
          className="transition-all hover:text-brandLightBlue md:flex items-center ml-3 text-sm group md:w-[122px] flex"
        >
          
          <span className="mr-1 transition-all transition-duration-500 group-hover:rotate-[20deg]">
            <span className="sr-only">Register/Sign in</span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.37 2.37C3.95 0.79 5.86 0 8.11 0C10.36 0 12.27 0.79 13.85 2.37C15.43 3.95 16.22 5.86 16.22 8.11C16.22 10.36 15.43 12.27 13.85 13.85C12.27 15.43 10.36 16.22 8.11 16.22C5.86 16.22 3.95 15.43 2.37 13.85C0.79 12.27 0 10.36 0 8.11C0 5.86 0.79 3.95 2.37 2.37ZM8.11 14.38C10.05 14.38 11.64 13.64 12.88 12.16C12.57 11.57 12.14 11.1 11.57 10.74C11 10.38 10.37 10.2 9.67 10.2C9.61 10.2 9.53 10.21 9.44 10.23C8.98 10.38 8.54 10.46 8.1 10.46C7.66 10.46 7.22 10.38 6.76 10.23C6.67 10.21 6.6 10.2 6.53 10.2C5.83 10.2 5.2 10.38 4.63 10.74C4.06 11.1 3.63 11.57 3.32 12.16C4.56 13.64 6.15 14.38 8.09 14.38H8.11ZM10.14 3.99C9.57 3.42 8.9 3.14 8.11 3.14C7.32 3.14 6.65 3.42 6.08 3.99C5.51 4.56 5.23 5.23 5.23 6.02C5.23 6.81 5.51 7.48 6.08 8.05C6.65 8.62 7.32 8.9 8.11 8.9C8.9 8.9 9.57 8.62 10.14 8.05C10.71 7.48 10.99 6.81 10.99 6.02C10.99 5.23 10.71 4.56 10.14 3.99Z" />
            </svg>
          </span>
          <span className="hidden md:block">Register/Sign in</span>
        </button>
      ) : (
        <button
          className="transition-all hover:text-brandLightBlue md:flex items-center ml-2 text-sm group md:w-[122px] group flex"
          onClick={handleGoToAccount}
        >
          <span className="sr-only">Hi Jack!</span>
          <span className="hidden md:block">Hi Jack!</span>
          <span className="transition-all text-gray-100 md:text-brandLightBlue rotate-[20deg] group-hover:animate-wave">
            <svg
              className="animate-wave translate-x-[2px] translate-y-[-3px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="20"
              height="20"
              viewBox="-32 0 512 512"
            >
              <path d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z" />
            </svg>
          </span>
        </button>
      )}
      {isAccountOpen && (
        <div className="fixed h-screen top-0 left-0 inset-0 z-[99999] bg-black/60">
          <div ref={wrapperRef} className="absolute left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-3 border bg-gradient-to-br from-black via-gray-900 to-black shadow-text-blue p-3 pb-6 shadow-lg sm:rounded-lg max-w-[320px] max-h-[90vh] overflow-y-auto">
            {!isSignedIn ? (
              <>
                <div className="relative flex flex-col gap-2">
                  <button
                    name="Close quick view"
                    onClick={handleAccountPopUp}
                    className="absolute right-0 top-0 text-gray-100 rounded-full border-[2px] border-textBlue z-[2]"
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
                  <div className="text-gray-100 font-semibold text-lg mb-2">
                    Existing Customer?
                  </div>
                  <form id="sign-in-form">
                    <div
                      className={`flex h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${
                        email && "border-red-600"
                      }`}
                    >
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        onBlur={handleEmailChange}
                        className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none"
                      />
                      <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">
                        Email
                      </label>
                      <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          className="w-full h-auto"
                        >
                          <path
                            d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group ${
                        password && "border-red-600"
                      }`}
                    >
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordChange}
                        className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none pr-[70px]"
                      />
                      <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">
                        Password
                      </label>
                      <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          className="w-full h-auto"
                        >
                          <path
                            d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <button
                        className="text-gray-400 white absolute right-10 top-2.5 text-xs border-l-[3px] pl-1"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <button
                      className="text-gray-100 text-sm mt-2"
                      onClick={(e) => e.preventDefault()}
                    >
                      Forgot password?
                    </button>
                  </form>
                  <button
                  className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all"
                    onClick={handleSignIn}
                  >
                    Login
                  </button>
                </div>
                <div className="relative flex justify-center text-gray-400 text-sm after:block after:content[''] after:w-full after:h-[2px] after:absolute after:bg-gray-300 after:top-1/2">
                  <span className="block bg-black mt-2 px-3 z-20">Or</span>
                </div>
                <div className="text-gray-100 font-semibold text-lg">
                  New to The Entertainer?
                </div>
                <p className="text-sm text-gray-100">
                  Register to gain perks when shopping with us
                </p>
                <button
                  className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all"
                  onClick={handleFindOutMore}
                >
                  Find out more
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-between pr-8">
                  <button
                    name="Close quick view"
                    onClick={handleAccountPopUp}
                    className="absolute right-2 top-2 text-gray-100 rounded-full border-[2px] border-textBlue z-[2]"
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
                  <div>
                    <div className="text-lg text-gray-100">Hello Jack!</div>
                    <div className="text-lg text-gray-100">
                      Welcome to your Account
                    </div>
                  </div>
                  <div className="text-gray-100 opacity-75 rotate-[20deg] flex items-start">
                    <svg
                      className="animate-wave translate-x-[2px] translate-y-[-3px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="22"
                      height="22"
                      viewBox="-32 0 512 512"
                    >
                      <path d="M408.781 128.007C386.356 127.578 368 146.36 368 168.79V256h-8V79.79c0-22.43-18.356-41.212-40.781-40.783C297.488 39.423 280 57.169 280 79v177h-8V40.79C272 18.36 253.644-.422 231.219.007 209.488.423 192 18.169 192 40v216h-8V80.79c0-22.43-18.356-41.212-40.781-40.783C121.488 40.423 104 58.169 104 80v235.992l-31.648-43.519c-12.993-17.866-38.009-21.817-55.877-8.823-17.865 12.994-21.815 38.01-8.822 55.877l125.601 172.705A48 48 0 0 0 172.073 512h197.59c22.274 0 41.622-15.324 46.724-37.006l26.508-112.66a192.011 192.011 0 0 0 5.104-43.975V168c.001-21.831-17.487-39.577-39.218-39.993z" />
                    </svg>
                    <Star className="w-2 h-2" fill="currentColor" />
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4 py-3">
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 rotate-[-20deg] group-hover:rotate-[20deg] group-hover:shadow-lg bg-brandBlue text-brandLightblue rounded-full  p-2 flex items-center justify-center mb-1">
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="#e5e7eb"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z" />
                      </svg>
                    </span>
                    Track
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center mb-1">
                      <svg
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path d="M0 0h48v48H0z" fill="none"></path>{" "}
                          <g id="Shopicon">
                            {" "}
                            <path d="M33.843,26.914L24,36l-9.843-9.086C8.674,30.421,5,36.749,5,44h38C43,36.749,39.326,30.421,33.843,26.914z"></path>{" "}
                            <path d="M24,28c3.55,0,6.729-1.55,8.926-4C34.831,21.876,36,19.078,36,16c0-6.627-5.373-12-12-12S12,9.373,12,16 c0,3.078,1.169,5.876,3.074,8C17.271,26.45,20.45,28,24,28z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </span>
                    Details
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 p-2 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-1 flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z"
                          fill="currentColor"
                        />
                        <path
                          d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Email
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 496.23 496.229"
                      >
                        <g>
                          <path d="M427.695,266.539c-1.674-2.137-10.978-12.967-29.608-20.072c-7.6-2.353-26.017-4.704-45.496-8.589l-29.357-7.366   c-9.773-3.174-18.396-7.029-24.319-11.813c5.585-5.728,10.696-12.536,15.281-20.392c14.741-25.263,19.994-54.778,19.994-73.975   c0-0.273-0.143-28.449-0.606-32.165c-0.34-2.714-0.826-5.382-1.435-8.001c12.738-0.199,23.007-10.569,23.007-23.355   c0-12.91-10.464-23.375-23.375-23.375h-7.382C313.675,15.282,290.982,0,264.718,0h-33.206c-26.264,0-48.958,15.282-59.68,37.436   h-7.382c-12.91,0-23.374,10.465-23.374,23.375c0,12.792,10.276,23.167,23.023,23.356c-0.42,1.799-0.797,3.608-1.088,5.439   c-0.761,4.772-0.97,34.439-0.97,34.727c0,19.196,5.253,48.711,19.993,73.975c4.585,7.856,9.696,14.664,15.281,20.392   c-5.925,4.784-14.546,8.638-24.319,11.813l-29.357,7.366c-19.482,3.886-37.897,6.237-45.496,8.589   c-18.633,7.105-27.936,17.935-29.608,20.072C34.271,317.406,30.39,431.531,30.359,432.666c0.305,15.188,4.818,20.376,6.375,21.015   c76.27,33.934,166.047,42.549,210.088,42.549c0.418,0,0.867-0.006,1.293-0.009c0.426,0.003,0.875,0.009,1.293,0.009   c44.041,0,133.818-8.615,210.088-42.549c1.557-0.639,6.069-5.827,6.375-21.015C465.84,431.53,461.958,317.405,427.695,266.539z    M209.508,88.209c-14.05,0-26.634,4.948-35.158,12.76c0.126-4.659,0.277-8.428,0.443-9.489c0.393-2.481,0.943-4.91,1.61-7.296   h143.451c0.849,3.071,1.487,6.226,1.892,9.456c0.093,0.816,0.178,3.709,0.252,7.437c-8.524-7.874-21.16-12.867-35.275-12.867   h-77.214V88.209z M237.371,125.077c0,7.578-19.815,20.632-40.098,20.632c-14.119,0-20.416-6.364-20.416-20.632   c0-11.184,13.855-20.631,30.258-20.631C223.514,104.446,237.371,113.893,237.371,125.077z M289.116,104.446   c16.401,0,30.257,9.447,30.257,20.631c0,14.268-6.297,20.632-20.416,20.632c-20.283,0-40.098-13.054-40.098-20.632   C258.859,113.893,272.716,104.446,289.116,104.446z M192.338,192.296c-6.71-11.5-11.274-23.957-14.178-35.747   c5.517,3.422,12.632,5.396,21.508,5.396c17.657,0,37.131-9.956,48.939-9.956c11.808,0,30.297,9.956,47.955,9.956   c8.876,0,15.991-1.973,21.508-5.396c-2.903,11.79-7.468,24.248-14.178,35.747c-9.744,16.697-27.33,36.602-55.777,36.602   S202.082,208.993,192.338,192.296z" />
                        </g>
                      </svg>
                    </span>
                    Password
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 0C2.67157 0 2 0.671573 2 1.5V4H1V5H2V10H1V11H2V13.5C2 14.3284 2.67157 15 3.5 15H12.5C13.3284 15 14 14.3284 14 13.5V1.5C14 0.671573 13.3284 0 12.5 0H3.5ZM6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5ZM5 10.9999C5 9.343 6.34318 8 8 8C9.65685 8 11 9.34315 11 11V12H5V10.9999Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Address
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        version="1.1"
                      >
                        <path d="M0 26.016q0 0.832 0.576 1.408t1.44 0.576h28q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-28q-0.832 0-1.44 0.608t-0.576 1.408v20zM2.016 26.016v-14.016h28v14.016h-28zM2.016 8v-1.984h28v1.984h-28zM4 24h4v-1.984h-4v1.984zM4 20h6.016v-5.984h-6.016v5.984zM10.016 24h4v-1.984h-4v1.984zM16 24h4v-1.984h-4v1.984zM22.016 24h1.984v-1.984h-1.984v1.984zM26.016 24h1.984v-1.984h-1.984v1.984z" />
                      </svg>
                    </span>
                    Payment
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2 flex items-center justify-center mb-1">
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
                    Baskets
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center mb-1">
                      <Heart fill="currentColor" />
                    </span>
                    Wishlist
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center mb-1">
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
                    Birthday
                  </button>
                  <button
                    onClick={handleGoToAccount}
                    className="transition-all text-gray-100 flex flex-col items-center hover:scale-110 group text-xs "
                  >
                    <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full  p-2  flex items-center justify-center mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 -32 576 576"
                      >
                        <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" />
                      </svg>
                    </span>
                    Interests
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountPopUp;
