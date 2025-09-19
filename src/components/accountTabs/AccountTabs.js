import { Heart } from "lucide-react";
import { useState } from "react";

import WishlistContainer from "../wishlistContainer/WishlistContainer";
import MeAccountSection from "../meAccountSection/MeAccountSection";
import BankAccountSection from "../bankAccountSection/BankAccountSection";
import OrdersAccountSection from "../ordersAccountSection/OrdersAccountSection";
import PeeksAccountSection from "../peeksAccountSection/PeeksAccountSection";

const AccountTabs = () => {
  const [tabSelected, setTabSelected] = useState("wishlist");

  return (
    <>
      <div className="grid grid-cols-5">
        <button
          onClick={() => setTabSelected("wishlist")}
          className={`transition duration-300 ease-in-out transition duration-300 ease-in-out px-1 py-2 w-full rounded-tr-xl rounded-tl-xl text-textBlue flex flex-col items-center group ${
            tabSelected === "wishlist" ? "bg-white font-bold" : "font-semibold"
          }`}
        >
          <span className="text-brandRed transition-all group-hover:rotate-[25deg] group-hover:scale-110">
            <Heart className="w-12 h-12 rotate-[10deg]" fill="currentColor" />
          </span>
          <span>Wishlist</span>
        </button>
        <button
          onClick={() => setTabSelected("me")}
          className={`transition duration-300 ease-in-out px-1 py-2 w-full rounded-tr-xl rounded-tl-xl text-textBlue flex flex-col items-center group ${
            tabSelected === "me" ? "bg-white font-bold" : "font-semibold"
          }`}
        >
          <span className="transition-all group-hover:rotate-[25deg] group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512.003 512.003"
            >
              <circle
                style={{ fill: "#FDDF6D" }}
                cx="256.001"
                cy="256.001"
                r="256.001"
              />
              <path
                style={{ fill: "#FCC56B" }}
                d="M310.859,474.208c-141.385,0-256-114.615-256-256c0-75.537,32.722-143.422,84.757-190.281  C56.738,70.303,0,156.525,0,256c0,141.385,114.615,256,256,256c65.849,0,125.883-24.87,171.243-65.718  C392.325,464.135,352.77,474.208,310.859,474.208z"
              />
              <g>
                <path
                  style={{ fill: "#7F184C" }}
                  d="M293.248,427.894L293.248,427.894c-57.23,0-103.624-46.394-103.624-103.624l0,0h207.248l0,0   C396.872,381.5,350.477,427.894,293.248,427.894z"
                />
                <path
                  style={{ fill: "#7F184C" }}
                  d="M245.899,187.173c-5.752,0-10.414-4.663-10.414-10.414c0-13.433-10.928-24.362-24.362-24.362   c-13.433,0-24.362,10.93-24.362,24.362c0,5.752-4.663,10.414-10.414,10.414c-5.752,0-10.414-4.663-10.414-10.414   c0-24.918,20.273-45.19,45.19-45.19s45.19,20.272,45.19,45.19C256.314,182.51,251.651,187.173,245.899,187.173z"
                />
                <path
                  style={{ fill: "#7F184C" }}
                  d="M421.798,187.173c-5.752,0-10.414-4.663-10.414-10.414c0-13.433-10.928-24.362-24.362-24.362   s-24.362,10.93-24.362,24.362c0,5.752-4.663,10.414-10.414,10.414s-10.414-4.663-10.414-10.414c0-24.918,20.273-45.19,45.19-45.19   s45.19,20.272,45.19,45.19C432.213,182.51,427.55,187.173,421.798,187.173z"
                />
              </g>
              <g>
                <path
                  style={{ fill: "#F9A880" }}
                  d="M145.987,240.152c-19.011,0-34.423,15.412-34.423,34.423h68.848   C180.41,255.564,164.998,240.152,145.987,240.152z"
                />
                <path
                  style={{ fill: "#F9A880" }}
                  d="M446.251,235.539c-19.011,0-34.423,15.412-34.423,34.423h68.848   C480.676,250.951,465.264,235.539,446.251,235.539z"
                />
              </g>
              <path
                style={{ fill: "#F2F2F2" }}
                d="M214.907,324.27v16.176c0,6.821,5.529,12.349,12.349,12.349h131.982  c6.821,0,12.349-5.529,12.349-12.349V324.27H214.907z"
              />
              <path
                style={{ fill: "#FC4C59" }}
                d="M295.422,384.903c-28.011-13.014-59.094-11.123-84.3,2.374c18.94,24.686,48.726,40.616,82.245,40.616  l0,0c14.772,0,28.809-3.112,41.526-8.682C325.564,404.777,312.187,392.692,295.422,384.903z"
              />
              <ellipse
                transform="matrix(0.2723 -0.9622 0.9622 0.2723 151.7762 343.0422)"
                style={{ fill: "#FCEB88" }}
                cx="302.685"
                cy="71.177"
                rx="29.854"
                ry="53.46"
              />
            </svg>
          </span>
          Me
        </button>
        <button
          onClick={() => setTabSelected("bank")}
          className={`transition duration-300 ease-in-out px-1 py-2 w-full rounded-tr-xl rounded-tl-xl text-textBlue flex flex-col items-center group ${
            tabSelected === "bank" ? "bg-white font-bold" : "font-semibold"
          }`}
        >
          <span className="transition-all group-hover:rotate-[25deg] group-hover:scale-110">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              id="Layer_1"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
            >
              <g>
                <rect x="2" y="20" fill="#506C7F" width="60" height="8" />
                <g>
                  <path
                    fill="#B4CCB9"
                    d="M2,52c0,1.104,0.896,2,2,2h56c1.104,0,2-0.896,2-2V30H2V52z"
                  />
                  <path
                    fill="#B4CCB9"
                    d="M60,10H4c-1.104,0-2,0.895-2,2v6h60v-6C62,10.895,61.104,10,60,10z"
                  />
                </g>
                <path
                  fill="#394240"
                  d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z    M62,52c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V30h60V52z M62,28H2v-8h60V28z M62,18H2v-6c0-1.105,0.896-2,2-2h56   c1.104,0,2,0.895,2,2V18z"
                />
                <path
                  fill="#394240"
                  d="M11,40h14c0.553,0,1-0.447,1-1s-0.447-1-1-1H11c-0.553,0-1,0.447-1,1S10.447,40,11,40z"
                />
                <path
                  fill="#394240"
                  d="M29,40h6c0.553,0,1-0.447,1-1s-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1S28.447,40,29,40z"
                />
                <path
                  fill="#394240"
                  d="M11,46h10c0.553,0,1-0.447,1-1s-0.447-1-1-1H11c-0.553,0-1,0.447-1,1S10.447,46,11,46z"
                />
                <path
                  fill="#394240"
                  d="M45,46h8c0.553,0,1-0.447,1-1v-6c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v6C44,45.553,44.447,46,45,46 z M46,40h6v4h-6V40z"
                />
                <rect x="46" y="40" fill="#F9EBB2" width="6" height="4" />
              </g>
            </svg>
          </span>
          Bank
        </button>
        <button
          onClick={() => setTabSelected("orders")}
          className={`transition duration-300 ease-in-out px-1 py-2 w-full rounded-tr-xl rounded-tl-xl text-textBlue flex flex-col items-center group ${
            tabSelected === "orders" ? "bg-white font-bold" : "font-semibold"
          }`}
        >
          <span className="transition-all group-hover:rotate-[25deg] group-hover:scale-110 text-brandBlue">
            <svg
              className="w-12 h-12"
              viewBox="0 0 23 21"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.2166 15.5378C20.4612 15.5897 20.654 15.8861 20.6021 16.1306L20.3949 17.1089C20.3366 17.384 20.0467 17.5462 19.8021 17.4944L18.3347 17.1835C17.9914 18.8038 16.3983 19.8398 14.778 19.4965C13.1577 19.1532 12.1217 17.5601 12.465 15.9398L8.55185 15.1107C8.20854 16.731 6.61544 17.767 4.99516 17.4237C3.37488 17.0804 2.33885 15.4873 2.68216 13.867L2.19302 13.7634C1.36759 13.5885 0.86162 12.8105 1.03651 11.985L3.1093 2.20222C3.27772 1.40737 4.06222 0.870826 4.88764 1.04572L14.6705 3.11851C15.4653 3.28692 15.9954 4.102 15.827 4.89685L15.516 6.36427L16.8612 6.64928C17.228 6.72701 17.5866 6.99465 17.8034 7.32809L20.1887 10.9959C20.4056 11.3294 20.5048 11.7656 20.4271 12.1325L19.7275 15.4342L20.2166 15.5378ZM5.30608 15.9563C6.10094 16.1247 6.90953 15.6252 7.08442 14.7998C7.25284 14.0049 6.72277 13.1899 5.92792 13.0214C5.1025 12.8465 4.31799 13.3831 4.14958 14.1779C3.97469 15.0034 4.48066 15.7814 5.30608 15.9563ZM15.0889 18.0291C15.8838 18.1975 16.6924 17.698 16.8672 16.8726C17.0357 16.0777 16.5056 15.2626 15.7107 15.0942C14.8853 14.9193 14.1008 15.4559 13.9324 16.2507C13.7575 17.0762 14.2635 17.8542 15.0889 18.0291ZM18.8819 12.1884L18.9596 11.8216L16.5503 8.11671L15.2051 7.8317L14.4797 11.2557L18.8819 12.1884Z" />
            </svg>
          </span>
          Orders
        </button>
        <button
          onClick={() => setTabSelected("peeks")}
          className={`transition duration-300 ease-in-out px-1 py-2 w-full rounded-tr-xl rounded-tl-xl text-textBlue flex flex-col items-center group ${
            tabSelected === "peeks" ? "bg-white font-bold" : "font-semibold"
          }`}
        >
          <span className="group-hover:scale-[1.2] group-hover:-scale-x-100 ">
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M34.16 106.51C18.73 106.51 6.19 87.44 6.19 64c0-23.44 12.55-42.51 27.97-42.51c15.42 0 27.97 19.07 27.97 42.51c0 23.44-12.55 42.51-27.97 42.51z"
                fill="#fafafa"
              ></path>

              <path
                d="M34.16 23.49c6.63 0 12.98 4 17.87 11.27c5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27C11.06 85.49 8.19 75.1 8.19 64s2.88-21.49 8.1-29.24c4.89-7.27 11.23-11.27 17.87-11.27m0-4C17.61 19.49 4.19 39.42 4.19 64s13.42 44.51 29.97 44.51S64.13 88.58 64.13 64S50.71 19.49 34.16 19.49z"
                fill="#b0bec5"
              ></path>

              <linearGradient
                id="IconifyId17ecdb2904d178eab7946"
                gradientUnits="userSpaceOnUse"
                x1="22.523"
                y1="46.676"
                x2="22.523"
                y2="82.083"
              >
                <stop offset="0" stopColor="#424242"></stop>

                <stop offset="1" stopColor="#212121"></stop>
              </linearGradient>

              <path
                d="M25.63 59.84c-2.7-2.54-2.1-7.58 1.36-11.26c.18-.19.36-.37.55-.54c-1.54-.87-3.23-1.36-5.01-1.36c-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7s13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05c-3.24 2.33-7.11 2.64-9.38.51z"
                fill="url(#IconifyId17ecdb2904d178eab7946)"
              ></path>

              <g>
                <ellipse
                  cx="93.84"
                  cy="64"
                  rx="29.97"
                  ry="44.51"
                  fill="#eee"
                ></ellipse>

                <path
                  d="M93.84 106.51c-15.42 0-27.97-19.07-27.97-42.51c0-23.44 12.55-42.51 27.97-42.51c15.42 0 27.97 19.07 27.97 42.51c0 23.44-12.54 42.51-27.97 42.51z"
                  fill="#fafafa"
                ></path>

                <path
                  d="M93.84 23.49c6.63 0 12.98 4 17.87 11.27c5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27c-5.22-7.75-8.1-18.14-8.1-29.24s2.88-21.49 8.1-29.24c4.89-7.27 11.24-11.27 17.87-11.27m0-4c-16.55 0-29.97 19.93-29.97 44.51s13.42 44.51 29.97 44.51S123.81 88.58 123.81 64s-13.42-44.51-29.97-44.51z"
                  fill="#b0bec5"
                ></path>

                <linearGradient
                  id="IconifyId17ecdb2904d178eab7947"
                  gradientUnits="userSpaceOnUse"
                  x1="82.209"
                  y1="46.676"
                  x2="82.209"
                  y2="82.083"
                >
                  <stop offset="0" stopColor="#424242"></stop>

                  <stop offset="1" stopColor="#212121"></stop>
                </linearGradient>

                <path
                  d="M85.31 59.84c-2.7-2.54-2.1-7.58 1.36-11.26c.18-.19.36-.37.55-.54c-1.54-.87-3.23-1.36-5.01-1.36c-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7c7.19 0 13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05c-3.23 2.33-7.11 2.64-9.38.51z"
                  fill="url(#IconifyId17ecdb2904d178eab7947)"
                ></path>
              </g>
            </svg>
          </span>
          Peeks
        </button>
      </div>
      <div className={`transition duration-300 ease-in-out bg-white opacity-0 max-h-0 rounded-tr-xl rounded-br-xl rounded-bl-xl ${tabSelected === 'wishlist' ? 'opacity-100 p-6 max-h-none' : 'overflow-hidden '}`}>
        <WishlistContainer />
      </div>
      <div className={`transition duration-300 ease-in-out bg-white opacity-0 max-h-0 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl ${tabSelected === 'me' ? 'opacity-100 p-6 max-h-none' : 'overflow-hidden'}`}>
        <MeAccountSection />
      </div>
      <div className={`transition duration-300 ease-in-out bg-white opacity-0 max-h-0 overflow-hidden rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl ${tabSelected === 'bank' ? 'opacity-100 p-6 max-h-none' : ''}`}>
        <BankAccountSection />
      </div>
      <div className={`transition duration-300 ease-in-out bg-white opacity-0 max-h-0 overflow-hidden rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl ${tabSelected === 'orders' ? 'opacity-100 p-6 max-h-none' : ''}`}>
        <OrdersAccountSection />
      </div>
      <div className={`transition duration-300 ease-in-out bg-white opacity-0 max-h-0 overflow-hidden rounded-tl-xl rounded-br-xl rounded-bl-xl ${tabSelected === 'peeks' ? 'opacity-100 p-6 max-h-none' : ''}`}>
        <PeeksAccountSection />
      </div>
    </>
  );
};

export default AccountTabs;
