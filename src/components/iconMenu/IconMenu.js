import { useSelector, useDispatch } from "react-redux";

import { selectIsAccountOpen } from "../../store/account/accountSelector";
import { setIsAccountOpen } from "../../store/account/accountReducer";

import { Star } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const IconMenu = ({setShowMenu}) => {
  const isAccountOpen = useSelector(selectIsAccountOpen);
  const dispatch = useDispatch();

  const handleAccountPopUp = () => {
    dispatch(setIsAccountOpen(!isAccountOpen));
    setShowMenu(false);
  };

  return (
    <div className="overflow-hidden">
      <div className="bg-brandLightBlue">
        <nav className="max-w-7xl mx-auto text-brandBlue grid grid-cols-6 py-5 lg:grid-cols-12 gap-1 md:gap-2 justify-center px-1 md:px-6">
          <Link
            onClick={handleAccountPopUp}
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg bg-brandBlue text-brandLightblue rounded-full md:w-12 md:h-12 p-2 flex items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#deeeee"
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
            Login
          </Link>
          <Link
            onClick={() => {
              setShowMenu(false);
              window.scrollTo({
                top: 10,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/category/new-toys"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-1 flex items-center justify-center text-s">
              <Star className="h-7 w-7" fill="currentColor" />
            </span>
            New Toys
          </Link>
          <Link
            onClick={() => {
              setShowMenu(false);
              window.scrollTo({
                top: 10,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/category"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 flex items-center justify-center">
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
              setShowMenu(false);
              window.scrollTo({
                top: 10,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/category"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 22"
                height=" 22"
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
          <Link
            onClick={() => window.scrollTo({
              top: 10,
              left: 0,
              behavior: "smooth",
            })}
            to="/present-finder"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 md:p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
            Present Finder
          </Link>
          <a
            href="https://theentertainer.zendesk.com/hc/en-gb"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 22"
                height=" 22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.03429 5.96305L6.49114 8.49856C6.02369 8.9646 5.59488 9.3921 5.25624 9.77856C5.03877 10.0267 4.82145 10.2984 4.63737 10.5985L4.61259 10.5738C4.56555 10.5269 4.54201 10.5034 4.51839 10.4805C4.07636 10.0516 3.55641 9.71062 2.98636 9.47575C2.9559 9.4632 2.92498 9.45095 2.86314 9.42645L2.48449 9.27641C1.97153 9.07315 1.83482 8.41279 2.22514 8.02365C3.34535 6.90684 4.69032 5.56594 5.33941 5.29662C5.91185 5.05911 6.53023 4.98008 7.12664 5.06822C7.67311 5.14898 8.19006 5.42968 9.03429 5.96305Z"
                  fill="currentColor"
                />
                <path
                  d="M13.3767 19.3132C13.5816 19.5212 13.7177 19.6681 13.8408 19.8251C14.0031 20.0322 14.1483 20.2523 14.2748 20.4829C14.4172 20.7426 14.5278 21.02 14.749 21.5748C14.929 22.0265 15.5272 22.1459 15.8746 21.7995L15.9586 21.7157C17.0788 20.5988 18.4237 19.2579 18.6938 18.6108C18.9321 18.04 19.0113 17.4235 18.9229 16.8289C18.8419 16.2841 18.5605 15.7688 18.0256 14.9273L15.474 17.4713C14.9959 17.9479 14.5576 18.385 14.1612 18.7273C13.9236 18.9325 13.6637 19.1376 13.3767 19.3132Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.4467 16.3769L20.2935 10.5476C21.1356 9.70811 21.5566 9.28836 21.7783 8.75458C22.0001 8.22081 22.0001 7.62719 22.0001 6.43996V5.87277C22.0001 4.04713 22.0001 3.13431 21.4312 2.56715C20.8624 2 19.9468 2 18.1157 2H17.5468C16.356 2 15.7606 2 15.2252 2.2211C14.6898 2.4422 14.2688 2.86195 13.4268 3.70146L7.57991 9.53078C6.59599 10.5117 5.98591 11.12 5.74966 11.7075C5.67502 11.8931 5.6377 12.0767 5.6377 12.2692C5.6377 13.0713 6.2851 13.7168 7.57991 15.0077L7.75393 15.1812L9.79245 13.1123C10.0832 12.8172 10.558 12.8137 10.8531 13.1044C11.1481 13.3951 11.1516 13.87 10.8609 14.1651L8.8162 16.2403L8.95326 16.3769C10.2481 17.6679 10.8955 18.3133 11.7 18.3133C11.8777 18.3133 12.0478 18.2818 12.2189 18.2188C12.8222 17.9966 13.438 17.3826 14.4467 16.3769ZM17.1935 9.5312C16.435 10.2874 15.2053 10.2874 14.4468 9.5312C13.6883 8.775 13.6883 7.54895 14.4468 6.79274C15.2053 6.03653 16.435 6.03653 17.1935 6.79274C17.952 7.54895 17.952 8.775 17.1935 9.5312Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Discover
          </a>
          <HashLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="/#toy-types"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="50"
                viewBox="0 0 37 50"
                fill="none"
              >
                <path
                  d="M18.5547 32.5V23.75H22.0547V37.75C22.0547 38.224 21.8724 38.625 21.5078 38.9531C21.1797 39.3177 20.7786 39.5 20.3047 39.5H6.30469C5.83073 39.5 5.41146 39.3177 5.04688 38.9531C4.71875 38.625 4.55469 38.224 4.55469 37.75V23.75H8.05469V32.5H18.5547ZM35.7812 19.2656C36.1458 19.849 36.1641 20.4505 35.8359 21.0703C35.5078 21.6901 34.9974 22 34.3047 22H2.80469C2.11198 22 1.60156 21.6901 1.27344 21.0703C0.945312 20.4505 0.981771 19.849 1.38281 19.2656L6.03125 12.2656C6.35938 11.7552 6.83333 11.5 7.45312 11.5H29.6562C30.276 11.5 30.75 11.7552 31.0781 12.2656L35.7812 19.2656ZM29.0547 38.625V23.75H32.5547V38.625C32.5547 38.8802 32.4635 39.0807 32.2812 39.2266C32.1354 39.4089 31.9349 39.5 31.6797 39.5H29.9297C29.6745 39.5 29.4557 39.4089 29.2734 39.2266C29.1276 39.0807 29.0547 38.8802 29.0547 38.625Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Toy Types
          </HashLink>
          <HashLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="/#age"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 md:p-3 flex items-center justify-center">
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
            Age
          </HashLink>
          <HashLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="/#brands"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 md:p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=" 22"
                height=" 22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.94971 4.44987C1.94969 3.06915 3.06898 1.94985 4.4497 1.94984L12.0209 1.94983C12.8165 1.94983 13.5796 2.2659 14.1422 2.82851L22.0417 10.728C23.6038 12.2901 23.6038 14.8228 22.0417 16.3849L16.3848 22.0417C14.8227 23.6038 12.2901 23.6038 10.728 22.0417L2.82846 14.1422C2.26586 13.5796 1.94979 12.8166 1.94978 12.0209L1.94971 4.44987ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Brands
          </HashLink>
          <HashLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="/#top-picks"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 md:p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                id="Layer_1"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M60,4H48c0-2.215-1.789-4-4-4H20c-2.211,0-4,1.785-4,4H4C1.789,4,0,5.785,0,8v8c0,8.836,7.164,16,16,16  c0.188,0,0.363-0.051,0.547-0.059C17.984,37.57,22.379,41.973,28,43.43V56h-8c-2.211,0-4,1.785-4,4v4h32v-4c0-2.215-1.789-4-4-4h-8  V43.43c5.621-1.457,10.016-5.859,11.453-11.488C47.637,31.949,47.812,32,48,32c8.836,0,16-7.164,16-16V8C64,5.785,62.211,4,60,4z   M8,16v-4h8v12C11.582,24,8,20.414,8,16z M56,16c0,4.414-3.582,8-8,8V12h8V16z"
                />
              </svg>
            </span>
            Top Picks
          </HashLink>
          <HashLink
            onClick={() => {
              setShowMenu(false);
            }}
            to="/#blogs"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.08816 3.46611C5.94062 1.9095 8.06936 1.23556 10.4744 1.44428C12.8794 1.653 14.8485 2.68258 16.3818 4.53301C17.9404 6.36212 18.6154 8.47919 18.4067 10.8842C18.1979 13.2892 17.1673 15.27 15.3149 16.8266C13.4878 18.3619 11.3718 19.0252 8.96673 18.8165C6.56171 18.6078 4.57989 17.5888 3.02126 15.7597C1.488 13.9093 0.825738 11.7816 1.03446 9.37656C1.24318 6.97153 2.26108 5.00138 4.08816 3.46611ZM13.7105 11.3236C14.0048 11.1844 14.1662 10.9514 14.1946 10.6245C14.223 10.2976 14.1041 10.0403 13.8381 9.85254L7.99903 5.56993C7.73302 5.38217 7.45283 5.35785 7.15844 5.49698C6.86406 5.63611 6.70269 5.86912 6.67432 6.19602L6.04208 13.4811C6.01371 13.808 6.13253 14.0654 6.39854 14.2531C6.66455 14.4409 6.94475 14.4652 7.23913 14.3261L13.7105 11.3236Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Content
          </HashLink>
          <HashLink 
            onClick={() => {
              setShowMenu(false);
            }}
            to="/#delivery"
            className="transition-all text-brandBlue flex flex-col items-center hover:scale-110 group text-[9px] md:text-sm"
          >
            <span className="transition-all w-9 h-9 transition-duration-500 group-hover:rotate-[20deg] group-hover:shadow-lg text-brandLightBlue bg-brandBlue rounded-full md:w-12 md:h-12 p-2 md:p-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 19"
                fill="none"
              >
                <path
                  d="M9.71009 17.2836C10.158 16.4579 10.6727 15.525 11.254 14.4851C11.8134 13.4474 12.2155 12.7155 12.4603 12.2894C12.7051 11.8632 12.9848 11.3444 13.2993 10.7329C13.6115 10.0994 13.821 9.65468 13.9278 9.39871C14.0126 9.14505 14.1126 8.82304 14.2276 8.43268C14.3206 8.04462 14.3753 7.7162 14.3918 7.44741C14.3839 7.15891 14.3605 6.82752 14.3214 6.45326C14.1375 4.692 13.3648 3.25928 12.0032 2.15511C10.6416 1.05094 9.08017 0.590787 7.31891 0.774659C5.55765 0.958532 4.12493 1.73127 3.02076 3.09286C1.91659 4.45445 1.45644 6.01588 1.64031 7.77714C1.67939 8.15141 1.73588 8.47935 1.80979 8.76096C1.85939 9.02285 1.98078 9.33288 2.17396 9.69106C2.34513 10.0515 2.5094 10.346 2.66678 10.5744C2.80214 10.805 3.08798 11.1981 3.52431 11.7534C3.95833 12.2867 4.33913 12.7366 4.66671 13.103C4.99429 13.4694 5.54988 14.1013 6.3335 14.9988C7.09511 15.8985 7.78032 16.7061 8.38914 17.4215C8.56624 17.6256 8.79789 17.7126 9.08409 17.6828C9.3703 17.6529 9.57896 17.5198 9.71009 17.2836ZM10.0597 8.80103C9.5842 9.36256 8.98318 9.68124 8.25666 9.75709C7.53014 9.83294 6.88727 9.64411 6.32804 9.19061C5.7445 8.7174 5.41481 8.11753 5.33896 7.39101C5.26311 6.66449 5.46295 6.02047 5.93846 5.45894C6.38966 4.8777 6.97852 4.54916 7.70504 4.47331C8.43156 4.39746 9.08659 4.59614 9.67013 5.06936C10.2294 5.52286 10.5469 6.11287 10.6227 6.83939C10.6986 7.56591 10.5109 8.21979 10.0597 8.80103Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Stores
          </HashLink>
        </nav>
      </div>
    </div>
  );
};

export default IconMenu;
