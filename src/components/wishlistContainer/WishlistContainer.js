import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import Button from "../button/Button";
import WishlistItemsList from "../wishlistItems/WishlistItems";
import WishlistAccountProductCard from "../wishlistAccountProductTile/WishlistAccountProductCard";

const WishlistContainer = () => {
  const [dateType, setDateType] = useState("text");
  const [isChecked, setIsChecked] = useState(true);
  const [wishlistName, setWishlistName] = useState('jack');

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const addAllToBasket = () => {
    const addBtns = document.querySelectorAll('.add-to-basket');

    addBtns.forEach((item) => (
      item.click()
    ));
  }

  return (
    <>
      {wishlistName !== 'mum' &&
        <div className="border-[3px] border-purple-500 p-3 md:p-5 rounded-xl">
          <div className="flex items-end justify-between">
            <div className="text-xl font-bold text-purple-500 flex items-center">
              <input id="wishlistOwner" className="outline-0 bg-transparent" type="text" size={wishlistName.length > 4 ? wishlistName.length-1 : 4} value={wishlistName} onChange={(e) => setWishlistName(e.target.value)} />
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z" fill="currentColor"/>
                  <path d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z" fill="currentColor"/>
                  </svg>
              </span>
            </div>
            <div className="flex text-xs items-start">
              <span className="text-brandGreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 35 29" fill="none">
                  <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25V16.25H11.8125C12.0312 16.25 12.25 16.0859 12.25 15.8125V14.9375C12.25 14.7188 12.0312 14.5 11.8125 14.5H0.4375C0.164062 14.5 0 14.3359 0 14.0625V13.1875C0 12.9688 0.164062 12.75 0.4375 12.75H13.5625C13.7812 12.75 14 12.5859 14 12.3125V11.4375C14 11.2188 13.7812 11 13.5625 11H2.1875C1.91406 11 1.75 10.8359 1.75 10.5625V9.6875C1.75 9.46875 1.91406 9.25 2.1875 9.25H15.3125C15.5312 9.25 15.75 9.08594 15.75 8.8125V7.9375C15.75 7.71875 15.5312 7.5 15.3125 7.5H0.4375C0.164062 7.5 0 7.33594 0 7.0625V6.1875C0 5.96875 0.164062 5.75 0.4375 5.75H3.5V3.125C3.5 1.70312 4.64844 0.5 6.125 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-gray-400 ml-3">
                +3 more for FREE<br />
                Express Delivery
              </span>
            </div>
          </div>
          <WishlistItemsList />
          <div className="flex gap-4 justify-center mt-4">
            <div className="w-2/3 md:w-1/2">
              <button 
                className='w-full bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all'
                onClick={addAllToBasket}
              >
                    Buy this list
              </button>
            </div>
              <button className="transition-all border-[3px] border-purple-500 rounded-full w-9 h-9 md:w-12 md:h-12 p-2 flex items-center justify-center hover:rotate-[45deg]">
                <span className="flex items-center w-9 h-9 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
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
              </button>
              <button className="transition-all border-[3px] border-purple-500 rounded-full w-9 h-9 md:w-12 md:h-12 p-2 flex items-center justify-center hover:rotate-[45deg]">
                <span className="flex items-center w-9 h-9 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                    height="24" fill="none">
                    <path d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
            </button>
          </div>
        </div>
      }
      {wishlistName === 'mum' &&
        <div className="border-[3px] border-purple-500 p-3 md:p-5 rounded-xl">
          <div className="flex items-end justify-between">
            <div className="text-xl font-bold text-purple-500 flex items-center">
              <input className="outline-0" type="text" size={wishlistName.length > 4 ? wishlistName.length-1 : 4} value={wishlistName} onChange={(e) => setWishlistName(e.target.value)} />
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z" fill="currentColor"/>
                  <path d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z" fill="currentColor"/>
                  </svg>
              </span>
            </div>
            <div className="flex text-xs items-start">
              <span className="text-brandGreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 35 29" fill="none">
                  <path d="M34.125 19.75C34.5625 19.75 35 20.1875 35 20.625V22.375C35 22.8672 34.5625 23.25 34.125 23.25H31.5C31.5 26.1484 29.1484 28.5 26.25 28.5C23.3516 28.5 21 26.1484 21 23.25H14C14 26.1484 11.6484 28.5 8.75 28.5C5.85156 28.5 3.5 26.1484 3.5 23.25V16.25H11.8125C12.0312 16.25 12.25 16.0859 12.25 15.8125V14.9375C12.25 14.7188 12.0312 14.5 11.8125 14.5H0.4375C0.164062 14.5 0 14.3359 0 14.0625V13.1875C0 12.9688 0.164062 12.75 0.4375 12.75H13.5625C13.7812 12.75 14 12.5859 14 12.3125V11.4375C14 11.2188 13.7812 11 13.5625 11H2.1875C1.91406 11 1.75 10.8359 1.75 10.5625V9.6875C1.75 9.46875 1.91406 9.25 2.1875 9.25H15.3125C15.5312 9.25 15.75 9.08594 15.75 8.8125V7.9375C15.75 7.71875 15.5312 7.5 15.3125 7.5H0.4375C0.164062 7.5 0 7.33594 0 7.0625V6.1875C0 5.96875 0.164062 5.75 0.4375 5.75H3.5V3.125C3.5 1.70312 4.64844 0.5 6.125 0.5H20.125C21.5469 0.5 22.75 1.70312 22.75 3.125V5.75H25.1562C25.8125 5.75 26.5234 6.07812 27.0156 6.57031L32.4297 11.9844C32.9219 12.4766 33.25 13.1875 33.25 13.8438V19.75H34.125ZM8.75 25.875C10.1719 25.875 11.375 24.7266 11.375 23.25C11.375 21.8281 10.1719 20.625 8.75 20.625C7.27344 20.625 6.125 21.8281 6.125 23.25C6.125 24.7266 7.27344 25.875 8.75 25.875ZM26.25 25.875C27.6719 25.875 28.875 24.7266 28.875 23.25C28.875 21.8281 27.6719 20.625 26.25 20.625C24.7734 20.625 23.625 21.8281 23.625 23.25C23.625 24.7266 24.7734 25.875 26.25 25.875ZM30.625 14.5V13.8438L25.1562 8.375H22.75V14.5H30.625Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-gray-400 ml-3">
                +3 more for FREE<br />
                Express Delivery
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-6 mt-6">
      {products && (
        <>
          {products.slice(0,4).map((product) => (
            <>
            <WishlistAccountProductCard product={product} />
            </>
          ))}
        </>
      )}

      {[...Array(4)].map((e, i) => 
        <div key={i} className="flex flex-col">
          <div className="border-[3px] border-gray-200 rounded-lg">
            <img
                src="/placeholder.svg"
                alt="alt"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-between items-center py-3">
            <div className="price">
              <div className="flex items-end justify-center">
                  <span className="text-gray-400 font-bold text-xs md:text-sm">£0.00</span>
              </div>
            </div>
            <button
              className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-gray-400 text-white h-[33px] lg:h-[36px] px-4 transition-all hover:bg-gray-500 hover:scale-105 mt-2'
              onClick={() => {navigate('/category')}}>
                +
            </button>
          </div>
        </div>
      )}
    </div>
          <div className="flex gap-4 justify-center mt-4">
            <div className="w-2/3 md:w-1/2">
              <Button 
                className='shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-2 transition-all hover:bg-brandLightGreen hover:scale-105'
                onClick={addAllToBasket}
                iconpath={
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                    </svg>
                }
              >
                    Buy this list
              </Button>
            </div>
              <button className="transition-all border-[3px] border-purple-500 rounded-full w-9 h-9 md:w-12 md:h-12 p-2 flex items-center justify-center hover:rotate-[45deg]">
                <span className="flex items-center w-9 h-9 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
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
              </button>
              <button className="transition-all border-[3px] border-purple-500 rounded-full w-9 h-9 md:w-12 md:h-12 p-2 flex items-center justify-center hover:rotate-[45deg]">
                <span className="flex items-center w-9 h-9 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                    height="24" fill="none">
                    <path d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
            </button>
          </div>
        </div>
      }
      <div className="flex items-stretch mt-4">
        <div className="w-1/2 md:w-1/3">
          <input
            placeholder="Date needed for"
            className="outline-0 border-[3px] border-gray-300 text-brandBlue focus:border-brandBlue rounded-md w-full px-2 py-1 h-[44px]"
            type={dateType}
            onFocus={() => setDateType('date')}
            onBlur={() => setDateType('text')}
            id="date" />
          <div className="flex mt-2">
            <div className="w-full flex items-center">
              <span className="text-textBlue text-xs md:text-sm mr-2"
              >
                Reminder
              </span>
              <label className='flex cursor-pointer select-none items-center'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                  />
                  <div
                    className={`box block h-6 w-[55px] md:w-[80px] rounded-full text-white px-3 flex items-center transition-all text-xs ${
                      isChecked ? 'bg-brandGreen' : 'bg-brandBlue justify-end'
                    }`}
                  >{isChecked ? 'On' : 'Off'}</div>
                  <div
                    className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition ${
                      isChecked ? 'translate-x-[30px] md:translate-x-[55px] bg-brandLightGreen' : 'bg-brandLightBlue'
                    }`}
                  ></div>
                </div>
              </label>
              <span className={`transition-all ml-1 ${isChecked ? 'text-brandGreen rotate-[20deg]' : 'text-brandBlue rotate-[-10deg]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" version="1.1" id="_x32_" viewBox="0 0 512 512" fill="currentColor">
                  <g>
                    <path d="M193.499,459.298c5.237,30.54,31.518,52.702,62.49,52.702c30.98,0,57.269-22.162,62.506-52.702l0.32-1.86   H193.179L193.499,459.298z"/>
                    <path d="M469.782,371.98c-5.126-5.128-10.349-9.464-15.402-13.661c-21.252-17.648-39.608-32.888-39.608-96.168v-50.194   c0-73.808-51.858-138.572-123.61-154.81c2.876-5.64,4.334-11.568,4.334-17.655C295.496,17.718,277.777,0,255.995,0   c-21.776,0-39.492,17.718-39.492,39.492c0,6.091,1.456,12.018,4.334,17.655c-71.755,16.238-123.61,81.002-123.61,154.81v50.194   c0,63.28-18.356,78.521-39.608,96.168c-5.052,4.196-10.276,8.533-15.402,13.661l-0.466,0.466v49.798h428.496v-49.798   L469.782,371.98z"/>
                  </g>
                  </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-2/3 pl-4 md:pl-6">
          <div className="flex h-full gap-2 md:gap-3 flex-nowrap overflow-auto">
            <button onClick={() => {setWishlistName('jack');  window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="bg-red-700 bg-opacity-80 rounded-xl flex items-center justify-center text-white p-3 w-[55px] flex-shrink-0 transition-all hover:bg-opacity-100">
              Jack
            </button>
            <button onClick={() => {setWishlistName('mum');  window.scrollTo({top: 0,left: 0,behavior: "smooth",});}} className="bg-red-700 bg-opacity-80 rounded-xl flex items-center justify-center text-white p-3 w-[55px] flex-shrink-0 transition-all hover:bg-opacity-100">
              Mum
            </button>
            <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-brandBlue text-xl transition-all hover:bg-gray-400">
              +
            </button>
            <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-brandBlue text-xl transition-all hover:bg-gray-400">
              +
            </button>
            <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-brandBlue text-xl transition-all hover:bg-gray-400">
              +
            </button>
            <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-brandBlue text-xl transition-all hover:bg-gray-400">
              +
            </button>
            <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-brandBlue text-xl transition-all hover:bg-gray-400">
              +
            </button>
            <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-brandBlue text-xl transition-all hover:bg-gray-400">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WishlistContainer