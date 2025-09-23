import { useState } from "react"

const MeAccountSection = () => {
  const [termsOpen, setTermsOpen] = useState();
  const [defaultAddress, setDefaultAddress] = useState('1')
  return (
    <>
    <div className="flex gap-6 flex-wrap md:flex-nowrap items-start">
      <div className="flex items-center justify-between w-full flex-wrap md:w-2/3">
        <div className="flex flex-col w-[100px] md:w-[150px]">
          <div className="text-lg font-semibold md:text-xl text-gray-100">
            Account
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="w-full bg-brandLightGreen rounded-full h-2 w-3/4"></div>
          </div>
          <div className="text-xs text-gray-100">75%</div>
        </div>
        <div className="flex items-center gap-2 w-[200px]">
          <button className="group relative">
            <img src="/account-icon-1.png" alt="account1" />
            <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-gray-100 border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-semibold">Kool Kid</span>
                  <span className="text-[10px]">Buy hot or trending toys</span>
                </span>
              </div>
            </div>
          </button>
          <button className="group relative">
            <img src="/account-icon-2.png" alt="account2" />
             <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-gray-100 border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-semibold">Dreamer</span>
                  <span className="text-[10px]">Make 3 wishlists</span>
                </span>
              </div>
            </div>
          </button>
          <button className="group relative">
            <img src="/account-icon-3.png" alt="account3" />
             <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-gray-100 border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-semibold">Jacks Pack</span>
                  <span className="text-[10px]">Buy a full wishlist</span>
                </span>
              </div>
            </div>
          </button>
          <button className="group relative">
            <img src="/account-icon-4.png" alt="account4" />
            <div className="absolute bg-gray-500 bg-opacity-65 w-full h-full top-0 left-0 rounded-full"></div>
             <div className="transition-all absolute top-[-70px] left-0 opacity-0 group-hover:opacity-100 z-[999] pointer-events-none">
              <div className="relative bg-white border-[2px] w-[80px] p-3 text-xs text-gray-100 border-brandLightBlue rounded-full before:content-[''] before:absolute before:top-[calc(100%-1px)] before:left-[23px] after:content-[''] after:absolute before:border-[12px] before:border-transparent after:border-[10px] after:border-transparent after:border-[10px] after:top-[calc(100%-1px)] after:left-[25px] after:border-t-white rotate-[10deg] before:!border-t-brandLightBlue">
                <span className="block rotate-[-10deg] flex flex-col leading-[1.2]">
                  <span className="font-semibold">Santa Squad</span>
                  <span className="text-[10px]">Share an Xmas list</span>
                </span>
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-col w-full mt-6">
          <div className={`flex h-[44px] px-3 rounded-lg border border-[3px] border-brandBlue relative`}>
            <span
              className="absolute left-[calc(20%-20px)] md:left-[calc(15%-10px)] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
            <select className='relative w-[20%] appearance-none border-r-[3px] bg-black border-gray-400 pr-4 mr-2 text-gray-100 font-semibold outline-none'>
              <option>Mr</option>
            </select>
            <div className="relative w-full">
              <input type="text" placeholder="First Name" className="peer pr-[20px] text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
              <label className="pointer-events-none font-semibold absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">First Name</label>
              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-0 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>
          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
            <input type="text" placeholder="Last Name" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
            <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Last Name</label>
            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                </svg>
              </span>
          </div>
          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
            <input type="text" placeholder="Email Address" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
            <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Email Address</label>
            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                </svg>
              </span>
          </div>
          <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
            <input type="text" placeholder="Address First Line" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
            <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Address First Line</label>
            <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                </svg>
              </span>
          </div>
          <div className="flex">
            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
              <input type="text" placeholder="Address Second Line" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Address Second Line</label>
              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
            </div>
            <button className="transition-all text-xs md:text-base px-2 mt-5 ml-3 md:ml-5 flex w-1/3 text-purple-500 font-semibold rounded-xl items-center justify-center gap-1 md:gap-3 border-[2px] border-purple-500 hover:shadow-text-purple">
              <span>Saved</span>
              <span>
                <svg className="w-3 h-3 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 56 56"><path d="M .6249 27.8242 C .6249 28.9492 1.5155 29.6289 2.6171 29.6289 C 3.2968 29.6289 3.8358 29.3008 4.3046 28.8320 L 27.1796 7.9961 C 27.4374 7.7383 27.7187 7.6445 28.0233 7.6445 C 28.3046 7.6445 28.5624 7.7383 28.8436 7.9961 L 51.6954 28.8320 C 52.1874 29.3008 52.7264 29.6289 53.3826 29.6289 C 54.4842 29.6289 55.3751 28.9492 55.3751 27.8242 C 55.3751 27.1211 55.1173 26.6758 54.6719 26.2774 L 46.5623 18.8945 L 46.5623 5.0430 C 46.5623 4.0117 45.9061 3.3555 44.8751 3.3555 L 41.8046 3.3555 C 40.7968 3.3555 40.0936 4.0117 40.0936 5.0430 L 40.0936 13.0117 L 30.8124 4.5274 C 29.9921 3.7539 28.9843 3.3789 27.9999 3.3789 C 27.0155 3.3789 26.0312 3.7539 25.1874 4.5274 L 1.3280 26.2774 C .9062 26.6758 .6249 27.1211 .6249 27.8242 Z M 7.3280 47.4883 C 7.3280 50.7461 9.2968 52.6445 12.6015 52.6445 L 22.0936 52.6445 L 22.0936 35.9805 C 22.0936 34.9023 22.8202 34.1992 23.8984 34.1992 L 32.1718 34.1992 C 33.2499 34.1992 33.9531 34.9023 33.9531 35.9805 L 33.9531 52.6445 L 43.4216 52.6445 C 46.7264 52.6445 48.6719 50.7461 48.6719 47.4883 L 48.6719 30.3320 L 28.7734 12.4023 C 28.5155 12.1679 28.2343 12.0508 27.9531 12.0508 C 27.6952 12.0508 27.4374 12.1679 27.1562 12.4258 L 7.3280 30.4492 Z"/></svg>
              </span>
            </button>
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
            <div className={`flex  mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative `}>
              <div className="relative w-full">
                <input type="text" placeholder="Postcode" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                <label className="font-semibold pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Postcode</label>
                <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-0 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
            <div className={`flex mt-2 md:mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative `}>
              <span
                className="absolute left-[calc(20%-20px)] md:left-[calc(25%-10px)] lg:left-[calc(20%-10px)] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
              <select className='relative w-[20%] md:w-[35%] lg:w-[25%] appearance-none border-r-[3px] bg-transparent border-gray-400 pr-4 mr-2 text-gray-100 font-semibold outline-none'>
                <option>+44</option>
              </select>
              <div className="relative w-full">
                <input type="number" placeholder="1234 567890" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                <label className="font-semibold pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Phone Number</label>
                <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-0 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
      <div className="flex items-end gap-3 md:flex-col">
        <div className="bg-brandNeonBlue bg-opacity-30 rounded-xl p-3">
          <div className="text-gray-100 mb-3 font-semibold text-sm md:text-base">
            Send offers, new toys &amp; vouchers
          </div>
          <div className="flex justify-between">
            <label className="relative flex items-center text-gray-100 text-sm md:text-base">
              <input
                type="checkbox"
                name="signup"
                value="signup"
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
              <span className="ml-2 w-[calc(100%-30px)]">
                Email
              </span>
            </label>
            <label className="relative flex items-center text-gray-100 text-sm md-text-base">
              <input
                type="checkbox"
                name="signup"
                value="signup"
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
              <span className="ml-2 w-[calc(100%-30px)]">
                SMS
              </span>
            </label>
            <button
              onClick={() => setTermsOpen(!termsOpen)}
              className="flex items-center"
            >
              <span className={`mr-2 flex text-gray-100 text-sm md:text-base`}>Terms</span>
              <span
              className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-gray-100 transition-all ${
                  termsOpen && "rotate-180"
              }`}
              ></span>
            </button>
          </div>
           <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm md:text-base w-full ${
              termsOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}>
              <div className="overflow-hidden">
                <div className="my-4 text-gray-100">
                  Throw in some happy little things wherever you want them. Anything that happens here, you can work with it. You want to start in the center and work outward. They all hide here in your fan brush. You decide -- you have to make these big decisions. If there's a secret to anything, it's practice.
                </div>
              </div>
            </div>
        </div>
        <button className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-700 text-white font-semibold py-1 px-8 text-lg rounded-full border-[3px] border-gray-300 shadow-md hover:shadow-text-blue hover:scale-[1.02] transition-all w-full">Save</button>
        </div>
        <div className="text-lg text-gray-100 font-semibold my-4">
          Saved Addresses
        </div>
        <div className="space-y-3">
          <div className="text-gray-100 border-[3px] border-brandLightBlue rounded-xl p-3">
            Mr. steven hoskins {defaultAddress === '1' && <span className="font-semibold text-brandBlue)">(Default)</span>}<br />
            42 Lomond Road<br />
            Hemel Hempstead, Hertfordshire<br />
            United Kingdom HP2 6PA <br />
            07850678115
            <div className={`flex ${defaultAddress === '1' ? 'justify-end' : 'justify-between'} mt-3`}>
              {defaultAddress !== '1' &&
                <button onClick={() => {setDefaultAddress('1')}} className="text-sm underline text-gray-400">
                  Make Default
                </button>
              }
              
              <button onClick={(e) => {e.target.closest('.border-brandLightBlue').remove()}} className="text-sm text-brandRed font-semibold underline">
                remove
              </button>
            </div>
          </div>
          <div className="text-gray-100 border-[3px] border-brandLightBlue rounded-xl p-3">
            Mr. steven hoskins {defaultAddress === '2' && <span className="font-semibold text-brandBlue)">(Default)</span>}<br />
            42 Lomond Road<br />
            Hemel Hempstead, Hertfordshire<br />
            United Kingdom HP2 6PA <br />
            07850678115
            <div className={`flex ${defaultAddress === '2' ? 'justify-end' : 'justify-between'} mt-3`}>
              {defaultAddress !== '2' &&
                <button onClick={() => {setDefaultAddress('2')}} className="text-sm underline text-gray-400">
                  Make Default
                </button>
              }
              
              <button onClick={(e) => {e.target.closest('.border-brandLightBlue').remove()}} className="text-sm text-brandRed font-semibold underline">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MeAccountSection