import { useState } from "react"

const BankAccountSection = () => {
  const [selectedCard, setSelectedCard] = useState('visa');
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setIsCheckedMastercard(!isCheckedMastercard)
  }

  const [isCheckedMastercard, setIsCheckedMastercard] = useState(false)

  const handleCheckboxChangeMastercard = () => {
    setIsCheckedMastercard(!isCheckedMastercard)
    setIsChecked(!isChecked)
  }
  return (
    <div className="flex flex-wrap gap-3 md:gap-6 md:flex-nowrap">
      <div className="w-full md:w-2/3">
        <div className="flex gap-3">
          <button className={`transition-all bg-blue-900 text-white flex flex-col rounded-lg p-3 pb-2 w-20 items-center hover:border-[3px] hover:border-yellow-600 ${selectedCard === 'visa' && 'border-[3px] border-yellow-600'}`}
            onClick={() => setSelectedCard('visa')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.998 8.9349 20.003 6.1301" fill="currentColor" className="h-4">
              <path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" transform="matrix(1, 0, 0, 1, -4.440892098500626e-16, -5.551115123125783e-17)"/>
            </svg>
            <span className="flex items-center gap-2 text-sm mt-1">0000
              {isChecked &&
                <span className="bg-brandGreen w-3 h-3 text-white rounded-full items-center justify-center p-[3px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              }
            </span>
          </button>
          <button className={`transition-all bg-black text-white flex flex-col rounded-lg p-3 pb-2 w-20 items-center hover:border-[3px] hover:border-yellow-600 ${selectedCard === 'mastercard' && 'border-[3px] border-yellow-600'}`}
            onClick={() => setSelectedCard('mastercard')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 24 14" className="h-4">
              <g fill="none" fillRule="evenodd" transform="matrix(1, 0, 0, 1, -4.440892098500626e-16, -4.440892098500626e-16)">
                <circle cx="7" cy="12" r="7" fill="#EA001B"/>
                <circle cx="17" cy="12" r="7" fill="#FFA200" fillOpacity=".8"/>
              </g>
            </svg>
            <span className="flex items-center gap-2 text-sm mt-1">0000
              {isCheckedMastercard &&
                <span className="bg-brandGreen w-3 h-3 text-white rounded-full items-center justify-center p-[3px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              }
            </span>
          </button>
          <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[70px] flex-shrink-0 text-gray-100 text-xl transition-all hover:bg-gray-400">
            +
          </button>
        </div>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              selectedCard === 'visa'
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
          <div className="overflow-hidden">
            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
              <input type="text" placeholder="Name On Card" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Name On Card</label>
              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                <input type="number" placeholder="Long number" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Long Number</label>
                <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-2">
                <div className={`flex w-2/3 mt-5 h-[44px] px-3 rounded-lg border border-[3px] border-brandBlue relative group`}>
                  <input type="number" placeholder="Sort code" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Sort Code</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className={`flex w-1/3 mt-5 h-[44px] px-3 rounded-lg border border-[3px] border-brandBlue relative group`}>
                  <input type="number" placeholder="CVC" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">CVC</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center mt-3">
                <span className="text-gray-100 text-xs md:text-sm mr-2 font-semibold"
                >
                  Default
                </span>
                <label className='font-semibold flex cursor-pointer select-none items-center'>
                  <div className='relative'>
                    <input
                      type='checkbox'
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className='sr-only'
                    />
                    <div
                      className={`box block h-6 w-[70px] md:w-[80px] rounded-full text-white px-3 flex items-center transition-all text-xs ${
                        isChecked ? 'bg-brandGreen' : 'bg-brandBlue justify-end'
                      }`}
                    >{isChecked ? 'Yes' : 'No'}</div>
                    <div
                      className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition ${
                        isChecked ? 'translate-x-[45px] md:translate-x-[55px] bg-brandLightGreen' : 'bg-brandLightBlue'
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
        </div>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              selectedCard === 'mastercard'
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
          <div className="overflow-hidden">
            <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
              <input type="text" placeholder="Name On Card" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
              <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Name On Card</label>
              <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className={`flex mt-5 h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group`}>
                <input type="number" placeholder="Long number" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Long Number</label>
                <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                  <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-2">
                <div className={`flex w-2/3 mt-5 h-[44px] px-3 rounded-lg border border-[3px] border-brandBlue relative group`}>
                  <input type="number" placeholder="Sort code" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">Sort Code</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
                <div className={`flex w-1/3 mt-5 h-[44px] px-3 rounded-lg border border-[3px] border-brandBlue relative group`}>
                  <input type="number" placeholder="CVC" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-gray-100 transition duration-200 ease-linear placeholder:text-transparent focus:outline-none" />
                  <label className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-gray-100 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-gray-100 motion-reduce:transition-none">CVC</label>
                  <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                    <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center mt-3">
                <span className="text-gray-100 text-xs md:text-sm mr-2 font-semibold"
                >
                  Default
                </span>
                <label className='font-semibold flex cursor-pointer select-none items-center'>
                  <div className='relative'>
                    <input
                      type='checkbox'
                      checked={isCheckedMastercard}
                      onChange={handleCheckboxChangeMastercard}
                      className='sr-only'
                    />
                    <div
                      className={`box block h-6 w-[70px] md:w-[80px] rounded-full text-white px-3 flex items-center transition-all text-xs ${
                        isCheckedMastercard ? 'bg-brandGreen' : 'bg-brandBlue justify-end'
                      }`}
                    >{isCheckedMastercard ? 'Yes' : 'No'}</div>
                    <div
                      className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full transition ${
                        isCheckedMastercard ? 'translate-x-[45px] md:translate-x-[55px] bg-brandLightGreen' : 'bg-brandLightBlue'
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 md:pl-4 mt-5 md:mt-0">
        <div className="text-xl font-semibold text-gray-100 mb-3">
          Gift Card
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 flex-grow">
            <div className="flex bg-brandNeonBlue bg-opacity-30 rounded-lg flex-grow">
              <div className="rounded-lg bg-brandBlue px-1 pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="40" viewBox="0 0 29 20" fill="none">
                  <path d="M3.84 6.15986C3.21 6.15986 2.67 6.03986 2.23 5.79986C1.79 5.55986 1.46 5.22986 1.23 4.79986C0.999996 4.36986 0.880005 3.85986 0.880005 3.27986C0.880005 2.82986 0.950002 2.42986 1.08 2.06986C1.21 1.70986 1.41 1.39986 1.67 1.14986C1.93 0.889864 2.24 0.689864 2.61 0.559864C2.98 0.429864 3.4 0.359863 3.87 0.359863C4.16 0.359863 4.45 0.389863 4.73 0.449863C5.02 0.509863 5.3 0.619863 5.56 0.769863C5.67 0.839863 5.74999 0.919863 5.78999 1.01986C5.82999 1.11986 5.84001 1.21986 5.82001 1.32986C5.80001 1.43986 5.76 1.52986 5.69 1.60986C5.62 1.68986 5.53999 1.74986 5.42999 1.76986C5.32999 1.79986 5.21001 1.76986 5.07001 1.70986C4.89001 1.60986 4.70999 1.53986 4.50999 1.48986C4.30999 1.43986 4.09 1.41986 3.87 1.41986C3.49 1.41986 3.18 1.48986 2.92 1.63986C2.67 1.77986 2.48001 1.98986 2.35001 2.26986C2.22001 2.54986 2.16 2.87986 2.16 3.27986C2.16 3.87986 2.31001 4.33986 2.60001 4.64986C2.89001 4.95986 3.32 5.10986 3.89 5.10986C4.08 5.10986 4.27 5.08986 4.48 5.04986C4.69 5.00986 4.89 4.95986 5.08 4.88986L4.85001 5.39986V3.85986H4.13C3.97 3.85986 3.84999 3.81986 3.75999 3.73986C3.67999 3.65986 3.63 3.54986 3.63 3.39986C3.63 3.24986 3.66999 3.14986 3.75999 3.07986C3.84999 2.99986 3.97 2.95986 4.13 2.95986H5.38C5.54 2.95986 5.66 2.99986 5.75 3.08986C5.84 3.17986 5.88 3.29986 5.88 3.44986V5.30986C5.88 5.44986 5.85 5.56986 5.8 5.66986C5.75 5.76986 5.65 5.82986 5.53 5.86986C5.29 5.94986 5.02 6.01986 4.72 6.06986C4.42 6.11986 4.12 6.14986 3.83 6.14986L3.84 6.15986Z" fill="white"/>
                  <path d="M7.87996 1.43997C7.65996 1.43997 7.48996 1.38997 7.37996 1.27997C7.25996 1.16997 7.19995 1.01997 7.19995 0.819969C7.19995 0.619969 7.25996 0.479971 7.37996 0.379971C7.49996 0.279971 7.66996 0.219971 7.87996 0.219971C8.08996 0.219971 8.27995 0.269971 8.39995 0.379971C8.51995 0.479971 8.57996 0.629969 8.57996 0.819969C8.57996 1.00997 8.51995 1.16997 8.39995 1.27997C8.27995 1.38997 8.10996 1.43997 7.87996 1.43997ZM7.87996 6.13997C7.68996 6.13997 7.54996 6.07997 7.43996 5.96997C7.32996 5.85997 7.27995 5.68997 7.27995 5.48997V2.74997C7.27995 2.53997 7.32996 2.36997 7.43996 2.26997C7.54996 2.15997 7.68996 2.10997 7.87996 2.10997C8.07996 2.10997 8.22996 2.15997 8.32996 2.26997C8.42996 2.37997 8.48996 2.53997 8.48996 2.74997V5.48997C8.48996 5.69997 8.43995 5.85997 8.33995 5.96997C8.23995 6.07997 8.08996 6.13997 7.87996 6.13997Z" fill="white"/>
                  <path d="M10.74 6.15008C10.54 6.15008 10.39 6.10008 10.29 5.99008C10.19 5.88008 10.13 5.74008 10.13 5.54008V3.05008H9.84C9.69 3.05008 9.58 3.01008 9.5 2.93008C9.42 2.85008 9.38 2.74008 9.38 2.60008C9.38 2.46008 9.42 2.35008 9.5 2.27008C9.58 2.20008 9.69 2.16008 9.84 2.16008H10.48L10.13 2.48008V2.22008C10.13 1.65008 10.27 1.23008 10.56 0.940076C10.85 0.650076 11.27 0.480075 11.82 0.420075L12.08 0.400079C12.22 0.380079 12.33 0.400076 12.41 0.460076C12.49 0.510076 12.55 0.580075 12.58 0.670075C12.61 0.760075 12.62 0.840077 12.6 0.930077C12.58 1.02008 12.54 1.10008 12.48 1.16008C12.42 1.22008 12.35 1.26008 12.26 1.27008H12.15C11.86 1.30008 11.66 1.37008 11.53 1.48008C11.41 1.59008 11.35 1.77008 11.35 2.00008V2.28008L11.21 2.15008H11.93C12.08 2.15008 12.19 2.19008 12.27 2.26008C12.35 2.34008 12.39 2.44008 12.39 2.59008C12.39 2.74008 12.35 2.84008 12.27 2.92008C12.19 3.00008 12.07 3.04008 11.93 3.04008H11.35V5.53008C11.35 5.94008 11.15 6.14008 10.75 6.14008L10.74 6.15008Z" fill="white"/>
                  <path d="M14.97 6.15993C14.6 6.15993 14.29 6.09993 14.05 5.97993C13.81 5.85993 13.62 5.67993 13.5 5.44993C13.38 5.21993 13.32 4.91993 13.32 4.55993V3.04993H12.97C12.83 3.04993 12.71 3.00993 12.63 2.92993C12.55 2.84993 12.51 2.73993 12.51 2.59993C12.51 2.45993 12.55 2.34993 12.63 2.26993C12.71 2.19993 12.83 2.15993 12.97 2.15993H13.32V1.53993C13.32 1.33993 13.37 1.18993 13.48 1.07993C13.58 0.979933 13.73 0.929932 13.92 0.929932C14.11 0.929932 14.27 0.979933 14.37 1.07993C14.47 1.17993 14.53 1.32993 14.53 1.53993V2.15993H15.27C15.43 2.15993 15.54 2.19993 15.62 2.26993C15.7 2.34993 15.74 2.44993 15.74 2.59993C15.74 2.74993 15.7 2.84993 15.62 2.92993C15.54 3.00993 15.42 3.04993 15.27 3.04993H14.53V4.50993C14.53 4.72993 14.58 4.89993 14.68 5.00993C14.78 5.11993 14.95 5.16993 15.18 5.16993C15.26 5.16993 15.34 5.16993 15.41 5.14993C15.48 5.12993 15.54 5.12993 15.59 5.12993C15.66 5.12993 15.73 5.14993 15.78 5.19993C15.83 5.24993 15.86 5.35993 15.86 5.52993C15.86 5.65993 15.84 5.77993 15.8 5.86993C15.76 5.96993 15.68 6.02993 15.57 6.06993C15.5 6.08993 15.4 6.10993 15.28 6.12993C15.16 6.14993 15.06 6.15993 14.98 6.15993H14.97Z" fill="white"/>
                  <g clipPath="url(#clip0_2337_42)">
                  <path d="M12.3002 18.1563L12.6713 23.8965L18.2322 27.7722L23.8762 24.3242L24.1065 18.1755L21.7837 16.8729L18.2769 15.1426" fill="#F79366"/>
                  <path d="M17.989 15.3916L12.3001 18.1563L9.10059 12.4673L15.1925 10.0474L17.989 15.3916Z" fill="#E12726"/>
                  <path d="M9.10059 12.4673L15.1989 10.009L17.989 15.3916L12.3001 18.1563L9.10059 12.4673Z" fill="url(#paint0_linear_2337_42)"/>
                  <path d="M23.8761 24.3241L18.2321 27.772L18.2257 21.2401L24.1065 18.1753L23.8761 24.3241Z" fill="url(#paint1_linear_2337_42)"/>
                  <path d="M12.3002 18.1565L18.2258 21.2405L18.2322 27.7723L12.6713 23.8966L12.3002 18.1565Z" fill="url(#paint2_linear_2337_42)"/>
                  <path d="M12.5817 18.1947L18.2258 21.119L23.8634 18.1755L21.7517 16.956L18.3026 15.3406L12.5114 18.15" fill="url(#paint3_linear_2337_42)"/>
                  <path d="M14.6295 20.2443C14.6295 20.7679 14.2199 21.0872 13.7144 20.9658C13.2089 20.8445 12.7993 20.3337 12.7993 19.8293C12.7993 19.3249 13.2089 18.9992 13.7144 19.1078C14.2199 19.2163 14.6295 19.7271 14.6295 20.2443Z" fill="url(#paint4_linear_2337_42)"/>
                  <path d="M23.6842 20.57C23.6842 21.4894 22.9291 22.5238 21.9948 22.8813C21.0605 23.2389 20.3054 22.7792 20.3054 21.8534C20.3054 20.9275 21.0605 19.8932 21.9948 19.542C22.9291 19.1908 23.6842 19.6505 23.6842 20.57Z" fill="url(#paint5_linear_2337_42)"/>
                  <path d="M17.6306 11.7456L17.2786 11.8797C17.2211 11.9117 17.1635 11.9372 17.1059 11.9627C16.8307 12.084 16.5619 12.2054 16.2868 12.3267C16.178 12.3778 15.89 12.4863 15.7045 12.5629C15.6085 12.6012 15.5381 12.6268 15.5381 12.6268L15.986 13.7569L16.1588 13.6739V13.6867L16.5619 13.5973C16.7603 13.5526 16.9651 13.5143 17.1635 13.4632L17.4258 13.4121L17.605 12.5118L17.7394 11.7584L17.6434 11.7393L17.6306 11.7456Z" fill="url(#paint6_linear_2337_42)"/>
                  <path d="M24.5609 15.1618L22.5195 13.9359L23.633 12.876L23.6714 12.8249L23.7354 12.71L25.3543 14.038" fill="url(#paint7_linear_2337_42)"/>
                  <path d="M21.6813 19.3121L21.5149 18.7246L22.0908 18.0287L21.8733 17.1922L22.4364 16.4516L22.2188 15.6279L17.4899 14.9255L17.0099 15.6407L17.2403 16.5026L16.6516 17.2114L16.8883 18.1308L16.3444 18.7374L16.5236 19.5355L16.338 20.1485C16.594 20.2762 18.2322 21.1254 18.2322 21.1254C18.2322 21.1254 21.6685 19.3248 21.6813 19.3184V19.3121Z" fill="url(#paint8_linear_2337_42)"/>
                  <path d="M17.0162 15.6343L22.4363 16.4452L21.8732 17.1922L17.2402 16.4963" fill="url(#paint9_linear_2337_42)"/>
                  <path d="M16.6515 17.1985L22.0907 18.0285L21.5148 18.7245L16.8947 18.1243" fill="url(#paint10_linear_2337_42)"/>
                  <path d="M16.3508 18.75L21.4829 19.4204L20.3567 20.0079L16.53 19.5481" fill="url(#paint11_linear_2337_42)"/>
                  <path d="M25.9367 17.339C25.6999 17.2049 25.6231 16.9367 25.5591 16.7132V16.6941C25.4951 16.5025 25.4311 16.2982 25.2968 16.1194C25.2008 15.9853 25.0344 15.7491 24.9448 15.615C24.9448 15.615 24.9448 15.6086 24.9384 15.6022C24.7656 15.6916 24.6249 15.6533 24.5289 15.5958C24.2921 15.449 24.4201 15.168 24.4777 15.034C24.6313 14.6956 24.8808 14.3252 25.156 14.0379C25.284 13.9038 25.4759 13.6995 25.7063 13.8591C25.8279 13.9421 25.8791 14.0443 25.8663 14.172C25.8983 14.172 25.9239 14.1784 25.9559 14.1847C26.0903 14.2039 26.231 14.2167 26.3654 14.2231C26.5446 14.2358 26.7302 14.2103 26.9349 14.1464L26.9861 14.1337C27.1845 14.0762 27.4021 14.006 27.626 14.0826C27.8692 14.1656 28.042 14.4018 28.0292 14.6509C28.0164 14.8552 27.882 14.9765 27.754 15.0403C27.8372 15.0723 27.9268 15.1106 28.01 15.1553C28.2404 15.2766 28.3875 15.4362 28.4387 15.615C28.5027 15.8321 28.4131 16.0556 28.2276 16.1769C28.0676 16.279 27.85 16.2918 27.6004 16.2088C27.5812 16.2088 27.562 16.196 27.5493 16.1896C27.69 16.362 27.754 16.5344 27.7412 16.7004C27.722 16.9112 27.5748 17.0836 27.3765 17.1346C27.1973 17.1793 27.0117 17.1219 26.8198 16.9622C26.775 16.9239 26.7366 16.892 26.6982 16.8537C26.6982 16.9622 26.6854 17.0644 26.6214 17.1666C26.5062 17.3517 26.2758 17.4347 26.0775 17.39C26.0327 17.3773 25.9879 17.3645 25.9431 17.339H25.9367ZM26.551 16.3876C26.551 16.3876 26.5638 16.4004 26.5702 16.4067C26.5766 16.4131 26.583 16.4195 26.5894 16.4323C26.6214 16.4642 26.647 16.4961 26.679 16.5281C26.7686 16.6238 26.8517 16.7196 26.9477 16.7962C27.0885 16.9112 27.2101 16.9559 27.3189 16.9303C27.4277 16.9048 27.5173 16.7962 27.5301 16.6749C27.5429 16.56 27.4917 16.4387 27.3701 16.2982C27.3253 16.2471 27.2741 16.196 27.2229 16.145L27.1909 16.113C27.1909 16.113 27.1461 16.0747 27.1269 16.0556C27.0757 16.0109 27.0245 15.9662 26.9797 15.9087L26.711 15.5511L27.1077 15.7555C27.1077 15.7555 27.1525 15.7746 27.1653 15.7874L27.2229 15.8193C27.3637 15.8959 27.5109 15.9726 27.658 16.0173C27.786 16.0619 27.9716 16.0939 28.106 16.0045C28.2148 15.9342 28.266 15.8002 28.2276 15.6725C28.1892 15.5448 28.0804 15.4362 27.9012 15.3404C27.7604 15.2702 27.6068 15.2127 27.4597 15.1617L27.0757 15.0276L27.4085 14.9446C27.4085 14.9446 27.4597 14.9318 27.4853 14.9254C27.7028 14.8616 27.8052 14.7786 27.8116 14.6445C27.818 14.4912 27.7092 14.338 27.5493 14.2869C27.3893 14.2358 27.2101 14.2869 27.0373 14.3444L26.9861 14.3571C26.7558 14.4274 26.551 14.4529 26.3462 14.4401C26.2054 14.4338 26.0647 14.4146 25.9239 14.3955C25.8535 14.3891 25.7895 14.3763 25.7191 14.3699L25.5783 14.3571L25.6295 14.2294C25.6615 14.1464 25.6679 14.0954 25.5783 14.0379C25.5079 13.9868 25.4375 14.0379 25.2904 14.1911C25.0344 14.4593 24.7912 14.8105 24.6505 15.1297C24.5353 15.3787 24.5865 15.4107 24.6185 15.4298C24.708 15.4809 24.7848 15.4745 24.8808 15.3915L24.964 15.3213L25.028 15.4107C25.028 15.4107 25.06 15.4554 25.092 15.5064C25.1816 15.6341 25.348 15.8768 25.4375 16.0045C25.5847 16.2088 25.6615 16.4323 25.7255 16.643V16.6621C25.7831 16.8537 25.8471 17.0708 26.0071 17.1602C26.1414 17.2368 26.327 17.1857 26.4102 17.058C26.5062 16.9112 26.4358 16.7196 26.3462 16.5089L26.1158 15.9789L26.5126 16.394L26.551 16.3876Z" fill="black"/>
                  <path d="M25.7446 14.2613C25.9494 14.2805 26.1606 14.3124 26.3654 14.3252C26.5765 14.3379 26.7685 14.306 26.9733 14.2485C27.1716 14.1911 27.3892 14.1081 27.6004 14.1783C27.7924 14.2422 27.9395 14.4337 27.9331 14.6444C27.9203 14.8679 27.722 14.9637 27.53 15.0148C27.5044 15.0211 27.4788 15.0275 27.4532 15.0339C27.626 15.0978 27.8052 15.1552 27.9651 15.2382C28.1251 15.3276 28.2915 15.4489 28.3427 15.6341C28.3875 15.8065 28.3235 15.9853 28.1763 16.0811C28.0163 16.1832 27.8116 16.1577 27.6388 16.1066C27.4596 16.0491 27.2932 15.9534 27.1269 15.8703C27.1077 15.8576 27.0885 15.8512 27.0693 15.8384C27.1269 15.915 27.2036 15.9661 27.2676 16.0364C27.3316 16.1002 27.3956 16.1641 27.4532 16.2279C27.562 16.3556 27.658 16.5088 27.6388 16.6812C27.626 16.8409 27.5108 16.9877 27.3508 17.026C27.178 17.0707 27.0117 16.9813 26.8837 16.8728C26.7493 16.7579 26.6341 16.6238 26.5125 16.4961C26.4997 16.4833 26.4869 16.4642 26.4741 16.4514C26.5573 16.6493 26.6597 16.8919 26.5317 17.0963C26.4165 17.2687 26.1734 17.3389 25.9878 17.2367C25.783 17.1218 25.7126 16.86 25.6551 16.6493C25.5911 16.4322 25.5207 16.2279 25.3863 16.0427C25.2519 15.864 24.9895 15.4681 24.9703 15.4489C24.8936 15.5128 24.7528 15.5958 24.5864 15.4936C24.4648 15.417 24.4776 15.2829 24.5736 15.0658C24.7016 14.7785 24.932 14.4146 25.2327 14.1017C25.3607 13.9676 25.4951 13.8271 25.6487 13.9357C25.8022 14.0442 25.7702 14.1655 25.7382 14.2549L25.7446 14.2613Z" fill="url(#paint12_linear_2337_42)"/>
                  <path d="M17.1443 14.0251L22.7947 14.8807L22.2188 15.6214L17.4898 14.9191" fill="url(#paint13_linear_2337_42)"/>
                  <g style={{mixBlendMode: 'multiply'}} opacity="0.56">
                  <path d="M17.7394 12.4673L17.3875 12.6014C17.3299 12.6333 17.2723 12.6588 17.2147 12.6844C16.9395 12.8057 16.6708 12.927 16.3956 13.0483C16.2996 13.093 16.0756 13.1824 15.8965 13.2526C15.8005 13.093 15.6533 12.8632 15.4037 12.9717C15.2694 13.0292 15.1926 13.1186 15.1798 13.2463C15.1478 13.2463 15.1222 13.2463 15.0902 13.2399C14.9558 13.2271 14.815 13.2143 14.6806 13.1952C14.5015 13.1696 14.3287 13.1058 14.1367 13.0036L14.0919 12.9781C13.9127 12.8759 13.7144 12.7674 13.4776 12.7865C13.2216 12.8121 13.0041 13.01 12.9657 13.2526C12.9337 13.457 13.0361 13.5974 13.1512 13.6932C13.0617 13.706 12.9721 13.7251 12.8825 13.7507C12.6265 13.8209 12.4537 13.9422 12.3642 14.1082C12.2554 14.3062 12.2938 14.5488 12.4537 14.702C12.5881 14.8361 12.7993 14.8936 13.0553 14.8681C13.0745 14.8681 13.0937 14.8681 13.1129 14.8617C12.9337 15.0021 12.8377 15.149 12.8185 15.315C12.7929 15.5257 12.9017 15.73 13.0809 15.8194C13.2472 15.9024 13.4392 15.8833 13.6632 15.7683C13.7144 15.7428 13.7592 15.7173 13.804 15.6853C13.7784 15.7875 13.772 15.896 13.8168 16.011C13.8935 16.2153 14.0919 16.343 14.3031 16.343C14.3479 16.343 14.3991 16.3366 14.4439 16.3238C14.7062 16.2472 14.8406 15.9982 14.943 15.7939L14.9558 15.7747C15.0518 15.5959 15.1606 15.4172 15.3269 15.2639C15.4485 15.1554 15.6597 14.9574 15.7749 14.8489C15.7749 14.8489 15.7749 14.8489 15.7813 14.8425C15.9285 14.9702 16.0756 14.9574 16.1844 14.9191C16.4404 14.8297 16.3892 14.5424 16.3572 14.3956L16.6708 14.3253C16.8691 14.2806 17.0739 14.2423 17.2723 14.1912L17.5346 14.1402L17.7138 13.2399L17.8482 12.4864L17.7522 12.4673H17.7394Z" fill="#4D4E4E"/>
                  </g>
                  <path d="M17.1506 14.0316L17.4834 13.5208L22.4171 13.9869L22.6603 14.0188L22.7947 14.8808" fill="black"/>
                  <path d="M14.1879 15.615C13.9767 15.615 13.7783 15.4809 13.7015 15.283C13.6567 15.168 13.6631 15.0595 13.6887 14.9573C13.6439 14.9893 13.5927 15.0148 13.5479 15.0403C13.324 15.1553 13.132 15.1744 12.9656 15.0914C12.7801 15.002 12.6777 14.7977 12.7033 14.587C12.7225 14.421 12.8185 14.2741 12.9976 14.1337C12.9784 14.1337 12.9592 14.1337 12.94 14.1401C12.6841 14.1656 12.4729 14.1081 12.3385 13.974C12.1785 13.8208 12.1465 13.5782 12.2489 13.3802C12.3385 13.2142 12.5113 13.0929 12.7673 13.0227C12.8568 12.9971 12.9464 12.978 13.036 12.9652C12.9208 12.8694 12.8185 12.729 12.8504 12.5246C12.8888 12.282 13.1064 12.0841 13.3624 12.0585C13.5927 12.033 13.7975 12.1479 13.9767 12.2501L14.0215 12.2756C14.2135 12.3778 14.3862 12.4416 14.5654 12.4672C14.6998 12.4863 14.8406 12.4991 14.975 12.5119C15.0069 12.5119 15.0325 12.5119 15.0645 12.5183C15.0773 12.3906 15.1541 12.3012 15.2885 12.2437C15.5509 12.1415 15.6917 12.3778 15.7876 12.5374C15.9924 12.8758 16.1652 13.2908 16.2356 13.6548C16.2676 13.8017 16.3316 14.1017 16.0628 14.1911C15.954 14.2294 15.8068 14.2358 15.6597 14.1145C15.6597 14.1145 15.6597 14.1145 15.6533 14.1209C15.5381 14.2294 15.3269 14.4274 15.2053 14.5359C15.0389 14.6828 14.9302 14.868 14.8342 15.0467L14.8214 15.0659C14.7126 15.2702 14.5782 15.5192 14.3222 15.5958C14.2774 15.6086 14.2327 15.615 14.1815 15.615H14.1879ZM14.4118 14.2167L14.0727 14.6828C13.9383 14.8743 13.8295 15.0403 13.8935 15.2064C13.9511 15.3532 14.1175 15.4362 14.2647 15.3979C14.4438 15.3468 14.5462 15.1425 14.6422 14.9701L14.655 14.951C14.7574 14.7594 14.879 14.5551 15.0709 14.3891C15.1925 14.2805 15.4037 14.0826 15.5189 13.974C15.5637 13.9294 15.6021 13.8974 15.6021 13.891L15.6853 13.8208L15.7556 13.9038C15.8324 13.9996 15.9092 14.0315 16.0052 13.9996C16.0436 13.9868 16.0948 13.9677 16.0372 13.6995C15.9668 13.3611 15.8068 12.9652 15.6149 12.646C15.5061 12.4608 15.4485 12.4033 15.3717 12.4353C15.2757 12.4736 15.2629 12.5246 15.2821 12.614L15.3077 12.7481L15.1669 12.7354C15.0965 12.729 15.0325 12.7226 14.9622 12.7162C14.8278 12.7034 14.6806 12.6907 14.5398 12.6651C14.335 12.6332 14.1431 12.563 13.9319 12.448L13.8871 12.4225C13.7271 12.3331 13.5671 12.2437 13.3944 12.2565C13.2344 12.2756 13.0872 12.4033 13.0616 12.5502C13.0424 12.6779 13.1192 12.78 13.3176 12.8886C13.3432 12.9014 13.3624 12.9141 13.388 12.9269L13.6951 13.0801L13.292 13.1312C13.1384 13.1504 12.972 13.1695 12.8248 13.2142C12.6265 13.2717 12.4985 13.3547 12.4345 13.4696C12.3705 13.5846 12.3897 13.725 12.4857 13.8208C12.6009 13.9357 12.7865 13.9421 12.9208 13.9294C13.0744 13.9166 13.2344 13.8719 13.388 13.8272L13.452 13.808C13.452 13.808 13.4968 13.7953 13.516 13.7889L13.9511 13.674L13.6119 13.9677C13.5543 14.0187 13.4968 14.0507 13.4392 14.0826C13.4136 14.0954 13.388 14.1145 13.3624 14.1273L13.324 14.1528C13.26 14.1911 13.2024 14.2294 13.1448 14.2741C12.9976 14.3891 12.9208 14.4912 12.908 14.6062C12.8952 14.7275 12.9528 14.8488 13.0552 14.8999C13.1576 14.951 13.2856 14.9318 13.4456 14.8488C13.5543 14.7913 13.6567 14.7211 13.7655 14.6445C13.8039 14.6189 13.8359 14.5934 13.8743 14.5679C13.8871 14.5615 13.8935 14.5551 13.8999 14.5487C13.9063 14.5487 13.9127 14.5359 13.9255 14.5295L14.4054 14.2039L14.4118 14.2167Z" fill="black"/>
                  <path d="M15.1734 12.6332C14.9686 12.6077 14.7574 12.5949 14.5526 12.563C14.3479 12.5311 14.1623 12.4608 13.9767 12.3587C13.7975 12.2565 13.5992 12.1352 13.3816 12.1544C13.1832 12.1735 12.9913 12.3331 12.9593 12.5375C12.9209 12.7545 13.1 12.895 13.2728 12.9844C13.2984 12.9972 13.324 13.01 13.3432 13.0227C13.1576 13.0483 12.9785 13.0674 12.7993 13.1121C12.6201 13.1632 12.4345 13.2526 12.3449 13.4186C12.2618 13.5718 12.2874 13.7634 12.4153 13.8911C12.5497 14.0252 12.7545 14.0443 12.9337 14.0252C13.1192 14.006 13.3048 13.9549 13.484 13.9039C13.5032 13.8975 13.5288 13.8911 13.548 13.8847C13.4776 13.9485 13.388 13.9869 13.3112 14.0379C13.2344 14.089 13.1576 14.1337 13.0872 14.1848C12.9529 14.287 12.8313 14.4147 12.8057 14.5871C12.7865 14.7467 12.8633 14.9127 13.0105 14.9829C13.1704 15.0595 13.3496 15.0085 13.4968 14.9318C13.6568 14.8488 13.7912 14.7403 13.9383 14.6445C13.9575 14.6317 13.9703 14.619 13.9895 14.6126C13.8615 14.7914 13.7144 15.0085 13.7975 15.2319C13.8679 15.4299 14.0919 15.5448 14.2967 15.481C14.527 15.4107 14.6422 15.1745 14.7446 14.9829C14.8534 14.785 14.9686 14.5998 15.1414 14.4466C15.3077 14.2997 15.6533 13.9741 15.6725 13.9549C15.7365 14.0316 15.8517 14.1465 16.0372 14.0826C16.1716 14.0379 16.1908 13.9039 16.1396 13.6676C16.0756 13.3611 15.9285 12.9525 15.7045 12.5822C15.6085 12.4225 15.5061 12.2565 15.3333 12.3331C15.1606 12.4098 15.1606 12.5311 15.1798 12.6268L15.1734 12.6332Z" fill="url(#paint14_linear_2337_42)"/>
                  <path style={{mixBlendMode: 'multiply'}} opacity="0.8" d="M23.0059 18.6226L18.2385 21.1255L14.9878 19.4398L23.0059 18.6226Z" fill="url(#paint15_linear_2337_42)"/>
                  <mask id="mask0_2337_42" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="17" y="13" width="6" height="3">
                  <path d="M22.5259 13.342L22.7947 14.8872L22.206 15.6215L17.4962 14.9191L17.2082 14.2168L17.1635 14.038L17.5154 13.4123L22.5259 13.342Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_2337_42)">
                  <g style={{mixBlendMode: 'multiply'}} opacity="0.92">
                  <path d="M17.1635 13.8146C17.1954 14.1657 17.3682 14.4722 17.733 14.5935C18.3985 14.7595 19.0704 14.2615 19.7359 14.5105C20.235 14.6765 20.651 15.0916 21.1565 15.3406C21.4061 15.5066 21.7388 15.5066 22.0716 15.4236C22.5195 15.2959 22.5771 14.7723 22.8459 14.4594L22.7947 13.7954L17.5666 13.5464L17.1635 13.8146Z" fill="#4D4E4E"/>
                  </g>
                  </g>
                  <path d="M21.6685 15.2256C21.5213 15.2256 21.3613 15.1936 21.1886 15.1106C20.9134 14.9766 20.7406 14.8488 20.5806 14.7211C20.4143 14.5934 20.2607 14.4721 19.9983 14.3636C19.4864 14.1401 19.192 14.1848 18.9105 14.2614C18.8913 14.2614 18.8657 14.2742 18.8401 14.2806C18.4945 14.37 17.8546 14.5424 17.5027 14.1337C16.9843 13.5271 17.2339 12.9653 17.5347 12.4481C17.6434 12.2629 17.5347 11.9628 17.3043 11.8351C17.2147 11.784 17.0931 11.7904 16.9523 11.7968C16.7092 11.8096 16.4148 11.8287 16.1716 11.5159C16.0053 11.3052 15.9349 11.0753 15.9669 10.8518C15.9989 10.622 16.1141 10.4815 16.1524 10.4432C16.2292 10.3602 16.3508 10.2836 16.4788 10.1942C16.626 10.0984 16.7988 9.98346 16.8372 9.90045C16.9075 9.74721 16.7796 9.55566 16.6388 9.37688C16.53 9.2428 16.4596 9.05125 16.4468 8.87885C16.4276 8.63622 16.5108 8.41913 16.6964 8.2595C17.1379 7.85725 17.6498 8.07434 17.8674 8.17011C18.1746 8.29781 18.5841 8.68091 18.5969 8.70007C18.8209 8.91077 18.7249 9.31942 18.5777 9.60674C18.5137 9.72806 18.0018 10.788 18.8529 11.7521C19.704 12.7035 20.8686 12.895 21.6493 12.6588C22.5004 12.4034 23.1275 11.7968 23.4026 10.9604C23.6778 10.1303 23.5498 9.54928 23.5498 9.54289C23.5434 9.50458 23.5626 9.47266 23.601 9.45989C23.6522 9.44712 24.7977 9.14702 25.3608 9.61951C25.9175 10.092 25.6615 10.4432 25.508 10.6539L25.4824 10.6858C25.412 10.7816 25.2712 10.9029 25.1176 11.037C24.9512 11.1838 24.7401 11.369 24.7081 11.452C24.6569 11.6053 24.7273 11.7521 24.868 12.0458C24.996 12.3076 25.1816 12.9844 24.9448 13.4122C24.7337 13.7953 24.4969 13.9358 24.017 13.9613C23.889 13.9677 23.7674 13.9613 23.6522 13.9613C23.3707 13.9549 23.1275 13.9422 22.9419 14.0826C22.7819 14.204 22.7051 14.3764 22.6284 14.536C22.5772 14.6445 22.526 14.7595 22.4492 14.8616C22.3148 15.0276 22.0332 15.2383 21.6685 15.2383V15.2256ZM19.32 14.0635C19.5184 14.0635 19.7552 14.1082 20.0559 14.2359C20.3311 14.3572 20.4911 14.4785 20.6638 14.6126C20.8238 14.7339 20.9838 14.8616 21.2461 14.9829C21.7709 15.232 22.1868 14.9638 22.3468 14.7595C22.4108 14.6765 22.462 14.5743 22.5068 14.4657C22.5836 14.2934 22.6732 14.1018 22.8587 13.9613C23.0827 13.7889 23.3579 13.8017 23.6522 13.8081C23.7674 13.8081 23.889 13.8145 24.0106 13.8081C24.4393 13.7826 24.6377 13.6676 24.8233 13.3292C24.932 13.1249 24.9832 12.5886 24.7401 12.0841C24.5993 11.7968 24.5097 11.6053 24.5737 11.3945C24.6121 11.2796 24.7721 11.1328 25.0216 10.9157C25.1624 10.7944 25.3032 10.6667 25.3672 10.5837L25.3928 10.5517C25.54 10.3474 25.7255 10.0984 25.2648 9.70252C24.8297 9.33219 23.9274 9.4982 23.6906 9.55566C23.7162 9.73444 23.7674 10.2644 23.5306 10.9795C23.2363 11.8607 22.5836 12.4928 21.6877 12.7609C20.8686 13.01 19.64 12.812 18.7505 11.816C17.8354 10.788 18.3857 9.64505 18.4561 9.51735C18.5905 9.26195 18.6609 8.92354 18.5073 8.77669C18.5073 8.77669 18.0978 8.39359 17.8162 8.27227C17.4963 8.13819 17.1187 8.03603 16.786 8.34251C16.4148 8.68091 16.6324 9.13425 16.7476 9.28111C16.9139 9.4982 17.0611 9.72806 16.9651 9.94515C16.9139 10.0665 16.7412 10.1814 16.5556 10.2963C16.4404 10.3729 16.3188 10.4496 16.2548 10.5198C16.242 10.539 15.8965 10.9157 16.2868 11.4201C16.4852 11.6755 16.722 11.6627 16.9523 11.65C17.1059 11.6436 17.2531 11.6308 17.3811 11.7074C17.6754 11.8734 17.8098 12.2565 17.6626 12.5055C17.3747 13.0036 17.1571 13.4952 17.6178 14.038C17.9122 14.3827 18.5009 14.2295 18.8145 14.1401C18.8401 14.1337 18.8657 14.1273 18.8849 14.121C19.0257 14.0826 19.1664 14.0571 19.3264 14.0571L19.32 14.0635Z" fill="url(#paint16_linear_2337_42)"/>
                  <path d="M25.2968 9.67705C24.8489 9.29395 23.9466 9.45996 23.6842 9.51742H23.6458V9.5685C23.6778 9.76006 23.7162 10.2772 23.4859 10.9732C23.1979 11.8352 22.5516 12.4609 21.6685 12.7291C20.8622 12.9717 19.6528 12.7802 18.7761 11.7969C17.8802 10.788 18.4242 9.67705 18.4882 9.54935C18.6353 9.26841 18.6993 8.91723 18.5266 8.75122L18.5138 8.73845C18.4434 8.66822 18.085 8.34896 17.8226 8.24042C17.4899 8.09995 17.0995 7.99779 16.7476 8.31704C16.3509 8.6746 16.5812 9.15986 16.7028 9.31949C16.8628 9.52381 16.9972 9.7409 16.914 9.93884C16.8628 10.0474 16.6964 10.1559 16.5236 10.2709C16.402 10.3475 16.2805 10.4305 16.2101 10.5007C16.1973 10.5199 15.8261 10.9285 16.2357 11.4585C16.4468 11.733 16.7092 11.7203 16.9396 11.7011C17.0867 11.6947 17.2275 11.6819 17.3427 11.7522C17.6115 11.9054 17.7395 12.263 17.6051 12.4928C17.3107 13.0036 17.0868 13.5081 17.5603 14.0763C17.8738 14.4467 18.4754 14.2807 18.8017 14.1976C18.8273 14.1913 18.8529 14.1849 18.8721 14.1785C19.0193 14.1402 19.1537 14.1146 19.3072 14.1146C19.5248 14.1146 19.7552 14.1721 20.0239 14.287C20.2927 14.402 20.4527 14.5297 20.6255 14.6574C20.7854 14.7787 20.9518 14.9064 21.2206 15.0341C21.3806 15.1107 21.5277 15.1426 21.6621 15.1426C22.0013 15.1426 22.2572 14.9511 22.3724 14.8042C22.4428 14.7148 22.4876 14.6127 22.5388 14.4977C22.6156 14.3317 22.6988 14.1466 22.878 14.0061C23.0891 13.8465 23.3579 13.8529 23.6458 13.8656C23.761 13.8656 23.8826 13.872 24.0042 13.8656C24.4521 13.8401 24.6633 13.7124 24.8553 13.3612C24.9705 13.1505 25.0217 12.595 24.7721 12.0778C24.6377 11.7969 24.5481 11.6181 24.6121 11.4202C24.6441 11.318 24.8105 11.1648 25.0473 10.9604C25.188 10.8391 25.3352 10.7114 25.3992 10.622L25.4248 10.5901C25.5784 10.3858 25.7832 10.0985 25.2904 9.68344L25.2968 9.67705Z" fill="url(#paint17_linear_2337_42)"/>
                  <g style={{mixBlendMode: 'multiply'}}>
                  <path d="M23.9849 10.3156C23.9849 11.9629 22.6283 13.3038 20.9518 13.3038C19.2752 13.3038 17.9186 11.9693 17.9186 10.3156C17.9186 8.66186 19.2752 7.32739 20.9518 7.32739C22.6283 7.32739 23.9849 8.66186 23.9849 10.3156Z" fill="#58595B"/>
                  </g>
                  <path d="M23.8954 9.97724C23.8954 11.5735 22.5836 12.8633 20.9582 12.8633C19.3328 12.8633 18.021 11.5735 18.021 9.97724C18.021 8.38099 19.448 7.01459 21.067 7.09121C23.1083 7.18698 23.8954 8.38099 23.8954 9.97724Z" fill="white"/>
                  <path d="M23.8954 9.97724C23.8954 11.5735 22.5836 12.8633 20.9582 12.8633C19.3328 12.8633 18.021 11.5735 18.021 9.97724C18.021 8.38099 19.448 7.01459 21.067 7.09121C23.1083 7.18698 23.8954 8.38099 23.8954 9.97724Z" fill="url(#paint18_radial_2337_42)"/>
                  <path d="M20.4719 9.44725C20.4271 9.8495 20.1583 10.156 19.8703 10.1304C19.5824 10.0985 19.384 9.74734 19.4288 9.34509C19.4736 8.94283 19.7424 8.63635 20.0303 8.66189C20.3183 8.68743 20.5166 9.04499 20.4719 9.44725Z" fill="black"/>
                  <path d="M20.4334 9.44719C20.4078 9.83029 20.171 10.124 19.9023 10.1049C19.6335 10.0921 19.4351 9.76644 19.4607 9.38973C19.4863 9.01301 19.7231 8.71291 19.9982 8.73207C20.267 8.74484 20.4654 9.07048 20.4398 9.44719H20.4334Z" fill="white"/>
                  <path d="M20.2927 9.76024C20.2671 9.98372 20.0943 10.1433 19.9024 10.1242C19.7104 10.105 19.576 9.9071 19.5952 9.68362C19.6208 9.46014 19.7936 9.30052 19.9856 9.31967C20.1775 9.33883 20.3119 9.53676 20.2927 9.76024Z" fill="black"/>
                  <path d="M19.1408 10.7498C19.1408 10.7498 19.1856 10.7753 19.1984 10.7881C19.2112 10.8072 19.2176 10.8328 19.2304 10.8519C19.256 10.8966 19.2752 10.9349 19.3072 10.9796C19.6016 11.3691 19.9279 11.7394 20.4271 11.8224C20.8942 11.8991 21.4509 11.8097 22.0268 11.3436C22.0588 11.318 22.1356 11.2733 22.1676 11.2989C22.2252 11.3436 22.1676 11.3883 22.0908 11.4457C21.7389 11.733 21.1822 12.1928 20.3567 12.0523C19.8064 11.9565 19.512 11.4968 19.3968 11.3563C19.3648 11.3116 19.3264 11.2669 19.2944 11.2286C19.192 11.1009 19.0833 10.8711 19.0833 10.8136C19.0833 10.7881 19.0961 10.7625 19.128 10.7561H19.1408V10.7498Z" fill="black"/>
                  <path d="M22.366 9.90695C22.2444 10.2964 21.9245 10.5455 21.6429 10.4625C21.3677 10.3794 21.2398 9.99634 21.3613 9.60686C21.4829 9.21737 21.8029 8.96835 22.0844 9.05136C22.3596 9.13437 22.4876 9.51747 22.366 9.90695Z" fill="black"/>
                  <path d="M22.3277 9.8941C22.2317 10.2644 21.9373 10.5071 21.6814 10.4432C21.419 10.3794 21.2846 10.0218 21.3806 9.65786C21.4766 9.28752 21.7709 9.04489 22.0333 9.11513C22.2957 9.17898 22.4301 9.53015 22.3277 9.90049V9.8941Z" fill="white"/>
                  <path d="M22.142 10.1751C22.078 10.3858 21.8733 10.5135 21.6877 10.456C21.5021 10.3985 21.4061 10.1815 21.4701 9.97075C21.5341 9.76005 21.7389 9.63234 21.9245 9.68981C22.11 9.74727 22.206 9.96437 22.142 10.1751Z" fill="black"/>
                  <g style={{mixBlendMode: 'multiply'}} opacity="0.69">
                  <path d="M23.9018 10.3919C23.7162 12.1031 22.2572 13.3354 20.6446 13.1502C19.0321 12.9651 17.8674 11.4263 18.053 9.72149C18.2386 8.01669 19.8576 6.77799 21.4765 6.96316C23.0955 7.14832 24.0874 8.68711 23.9082 10.3919H23.9018Z" fill="url(#paint19_radial_2337_42)"/>
                  </g>
                  <g style={{mixBlendMode: 'multiply'}}>
                  <path d="M21.5533 11.1008C21.4701 11.4265 21.0413 11.5988 20.5934 11.4839C20.1455 11.369 19.8447 11.0178 19.9279 10.6922C20.0111 10.3665 20.4398 10.1941 20.8878 10.3091C21.3357 10.424 21.6365 10.7752 21.5533 11.1008Z" fill="#58595B"/>
                  </g>
                  <path d="M21.5085 10.9795C21.4317 11.2987 21.0158 11.4711 20.5806 11.3562C20.1455 11.2476 19.8575 10.8965 19.9407 10.5772C20.0175 10.258 20.4334 10.0856 20.8686 10.2005C21.3037 10.309 21.5917 10.6602 21.5085 10.9795Z" fill="url(#paint20_radial_2337_42)"/>
                  <path d="M20.5678 10.4623C20.5678 10.5262 20.4974 10.5773 20.4078 10.5773C20.3182 10.5773 20.2478 10.5262 20.2478 10.4623C20.2478 10.3985 20.3182 10.3474 20.4078 10.3474C20.4974 10.3474 20.5678 10.3985 20.5678 10.4623Z" fill="white"/>
                  <path d="M24.6697 8.5405C24.5929 8.45749 24.4777 8.40003 24.3689 8.36172C24.3241 8.34895 24.2793 8.33618 24.2281 8.32341C24.1705 8.29787 24.1066 8.2851 24.049 8.24679C24.0042 8.22125 23.985 8.17655 23.9722 8.12547C23.9722 8.09993 23.9722 8.07439 23.9722 8.04885C23.9658 7.91476 23.9594 7.78068 23.9466 7.65298C23.9338 7.52528 23.921 7.39119 23.9018 7.26349C23.8826 7.13579 23.8506 7.00809 23.8186 6.88678C23.7866 6.76546 23.7418 6.64414 23.6906 6.52283C23.6394 6.4079 23.5818 6.29297 23.5114 6.18442C23.441 6.07588 23.3643 5.97372 23.2811 5.87794C23.1915 5.78217 23.0955 5.68639 22.9931 5.60339C22.8907 5.52038 22.7755 5.44376 22.6668 5.37352C22.5516 5.30329 22.43 5.24582 22.302 5.19474C22.174 5.14366 22.046 5.09897 21.9181 5.07343C21.7901 5.0415 21.6557 5.02235 21.5213 5.00958C21.3933 4.99681 21.2589 4.99681 21.131 5.00958C21.003 5.02235 20.875 5.0415 20.7534 5.07343C20.6318 5.10535 20.5167 5.15005 20.4079 5.20113C20.2991 5.25221 20.1903 5.31606 20.0943 5.38629C19.9983 5.45653 19.9023 5.53953 19.8191 5.62893C19.7296 5.71832 19.6528 5.82048 19.576 5.92264C19.4992 6.03118 19.4288 6.13973 19.3648 6.24827C19.2944 6.3632 19.2368 6.48452 19.1728 6.59945C19.1152 6.72076 19.0513 6.84208 18.9937 6.96978L18.9489 7.08471C18.9489 7.08471 18.9297 7.12302 18.9233 7.13579C18.9041 7.16133 18.8977 7.16133 18.8721 7.16772C18.8017 7.19326 18.7569 7.19326 18.6801 7.19964C18.6033 7.19964 18.5329 7.19964 18.4561 7.19964C18.4561 7.20603 18.2386 7.18687 18.1426 7.19964C18.0786 7.19964 18.0018 7.22518 18.0146 7.3018C18.0722 7.53805 18.4497 7.73598 18.6417 7.84453C18.9169 8.00416 19.2112 8.13186 19.4992 8.25956C20.2607 8.59796 21.099 8.76397 21.9309 8.82144C22.0844 8.83421 22.2444 8.83421 22.398 8.83421C22.5324 8.83421 22.6604 8.83421 22.7947 8.82144C23.0443 8.82144 23.2939 8.82144 23.5434 8.80228C23.6394 8.80228 23.7354 8.78951 23.825 8.78313C23.9402 8.77674 24.2153 8.77036 24.2473 8.76397C24.3753 8.76397 24.5161 8.76397 24.6377 8.71289C24.7401 8.67458 24.7465 8.59796 24.6761 8.52134L24.6697 8.5405Z" fill="black"/>
                  <mask id="mask1_2337_42" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="18" y="5" width="7" height="4">
                  <path d="M24.6697 8.5405C24.5929 8.45749 24.4777 8.40003 24.3689 8.36172C24.3241 8.34895 24.2793 8.33618 24.2281 8.32341C24.1705 8.29787 24.1066 8.2851 24.049 8.24679C24.0042 8.22125 23.985 8.17655 23.9722 8.12547C23.9722 8.09993 23.9722 8.07439 23.9722 8.04885C23.9658 7.91476 23.9594 7.78068 23.9466 7.65298C23.9338 7.52528 23.921 7.39119 23.9018 7.26349C23.8826 7.13579 23.8506 7.00809 23.8186 6.88678C23.7866 6.76546 23.7418 6.64414 23.6906 6.52283C23.6394 6.4079 23.5818 6.29297 23.5114 6.18442C23.441 6.07588 23.3643 5.97372 23.2811 5.87794C23.1915 5.78217 23.0955 5.68639 22.9931 5.60339C22.8907 5.52038 22.7755 5.44376 22.6668 5.37352C22.5516 5.30329 22.43 5.24582 22.302 5.19474C22.174 5.14366 22.046 5.09897 21.9181 5.07343C21.7901 5.0415 21.6557 5.02235 21.5213 5.00958C21.3933 4.99681 21.2589 4.99681 21.131 5.00958C21.003 5.02235 20.875 5.0415 20.7534 5.07343C20.6318 5.10535 20.5167 5.15005 20.4079 5.20113C20.2991 5.25221 20.1903 5.31606 20.0943 5.38629C19.9983 5.45653 19.9023 5.53953 19.8191 5.62893C19.7296 5.71832 19.6528 5.82048 19.576 5.92264C19.4992 6.03118 19.4288 6.13973 19.3648 6.24827C19.2944 6.3632 19.2368 6.48452 19.1728 6.59945C19.1152 6.72076 19.0513 6.84208 18.9937 6.96978L18.9489 7.08471C18.9489 7.08471 18.9297 7.12302 18.9233 7.13579C18.9041 7.16133 18.8977 7.16133 18.8721 7.16772C18.8017 7.19326 18.7569 7.19326 18.6801 7.19964C18.6033 7.19964 18.5329 7.19964 18.4561 7.19964C18.4561 7.20603 18.2386 7.18687 18.1426 7.19964C18.0786 7.19964 18.0018 7.22518 18.0146 7.3018C18.0722 7.53805 18.4497 7.73598 18.6417 7.84453C18.9169 8.00416 19.2112 8.13186 19.4992 8.25956C20.2607 8.59796 21.099 8.76397 21.9309 8.82144C22.0844 8.83421 22.2444 8.83421 22.398 8.83421C22.5324 8.83421 22.6604 8.83421 22.7947 8.82144C23.0443 8.82144 23.2939 8.82144 23.5434 8.80228C23.6394 8.80228 23.7354 8.78951 23.825 8.78313C23.9402 8.77674 24.2153 8.77036 24.2473 8.76397C24.3753 8.76397 24.5161 8.76397 24.6377 8.71289C24.7401 8.67458 24.7465 8.59796 24.6761 8.52134L24.6697 8.5405Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_2337_42)">
                  <g opacity="0.3">
                  <path d="M17.9826 6.88685C18.4369 6.85493 18.8657 7.02094 18.8977 7.0784C18.9297 7.13587 19.064 7.56367 19.9471 7.87015C20.8302 8.17663 21.4381 8.24686 22.0588 8.27879C22.6795 8.31071 23.3898 8.48311 23.0315 8.55973C22.6731 8.63635 21.4125 8.79598 20.5102 8.66189C20.1071 8.59804 18.3537 7.79353 18.085 7.49982C17.8162 7.2061 17.989 6.88685 17.989 6.88685H17.9826Z" fill="white"/>
                  </g>
                  <path opacity="0.5" d="M20.7854 6.69513C21.4463 6.69513 21.982 6.16056 21.982 5.50113C21.982 4.8417 21.4463 4.30713 20.7854 4.30713C20.1245 4.30713 19.5887 4.8417 19.5887 5.50113C19.5887 6.16056 20.1245 6.69513 20.7854 6.69513Z" fill="url(#paint21_radial_2337_42)"/>
                  </g>
                  <path d="M20.011 9.58771C20.0046 9.64517 19.9598 9.68987 19.9087 9.68348C19.8575 9.68348 19.8255 9.62602 19.8319 9.56855C19.8319 9.51109 19.8831 9.46639 19.9343 9.47278C19.9854 9.47278 20.0174 9.53024 20.011 9.58771Z" fill="white"/>
                  <path d="M21.822 9.95154C21.8028 10.009 21.7516 10.0409 21.7068 10.0282C21.662 10.0154 21.6364 9.95793 21.6556 9.90046C21.6748 9.84299 21.726 9.81107 21.7708 9.82384C21.8156 9.83661 21.8412 9.89408 21.822 9.95154Z" fill="white"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_2337_42" x1="15.9988" y1="16.6558" x2="11.32" y2="11.2822" gradientUnits="userSpaceOnUse">
                  <stop offset="0.07" stopColor="#E53528"/>
                  <stop offset="0.19" stopColor="#E8412F"/>
                  <stop offset="0.4" stopColor="#EC5039"/>
                  <stop offset="0.64" stopColor="#EF593F"/>
                  <stop offset="1" stopColor="#F05C41"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_2337_42" x1="25.6231" y1="21.1699" x2="18.1216" y2="24.2143" gradientUnits="userSpaceOnUse">
                  <stop offset="0.12" stopColor="#E53528"/>
                  <stop offset="0.14" stopColor="#E53628"/>
                  <stop offset="0.43" stopColor="#EB4B36"/>
                  <stop offset="0.72" stopColor="#EE573E"/>
                  <stop offset="1" stopColor="#F05C41"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_2337_42" x1="18.5265" y1="24.6437" x2="12.6959" y2="21.6259" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#95171A"/>
                  <stop offset="1" stopColor="#AE1F23"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_2337_42" x1="12.9913" y1="15.9344" x2="20.166" y2="19.0682" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#676767"/>
                  <stop offset="0.06" stopColor="#595959"/>
                  <stop offset="0.23" stopColor="#393939"/>
                  <stop offset="0.41" stopColor="#202020"/>
                  <stop offset="0.59" stopColor="#0E0E0E"/>
                  <stop offset="0.78" stopColor="#030303"/>
                  <stop offset="1"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_2337_42" x1="18.3921" y1="21.0105" x2="11.476" y2="19.5614" gradientUnits="userSpaceOnUse">
                  <stop offset="0.04" stopColor="#8B999B"/>
                  <stop offset="1" stopColor="#D2D9DA"/>
                  </linearGradient>
                  <linearGradient id="paint5_linear_2337_42" x1="24.3369" y1="20.1869" x2="17.904" y2="23.0259" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E1E5E5"/>
                  <stop offset="0.06" stopColor="#E6E9E9"/>
                  <stop offset="0.28" stopColor="#F4F5F5"/>
                  <stop offset="0.54" stopColor="#FCFCFC"/>
                  <stop offset="1" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint6_linear_2337_42" x1="17.6946" y1="13.4504" x2="16.3085" y2="12.3045" gradientUnits="userSpaceOnUse">
                  <stop/>
                  <stop offset="0.22" stopColor="#030303"/>
                  <stop offset="0.41" stopColor="#0E0E0E"/>
                  <stop offset="0.59" stopColor="#202020"/>
                  <stop offset="0.77" stopColor="#393939"/>
                  <stop offset="0.94" stopColor="#595959"/>
                  <stop offset="1" stopColor="#676767"/>
                  </linearGradient>
                  <linearGradient id="paint7_linear_2337_42" x1="23.5498" y1="14.2615" x2="25.0521" y2="13.4415" gradientUnits="userSpaceOnUse">
                  <stop/>
                  <stop offset="0.22" stopColor="#030303"/>
                  <stop offset="0.41" stopColor="#0E0E0E"/>
                  <stop offset="0.59" stopColor="#202020"/>
                  <stop offset="0.77" stopColor="#393939"/>
                  <stop offset="0.94" stopColor="#595959"/>
                  <stop offset="1" stopColor="#676767"/>
                  </linearGradient>
                  <linearGradient id="paint8_linear_2337_42" x1="19.6272" y1="20.9977" x2="19.0856" y2="14.7785" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EE442F"/>
                  <stop offset="0.33" stopColor="#DC392B"/>
                  <stop offset="1" stopColor="#AE1F23"/>
                  </linearGradient>
                  <linearGradient id="paint9_linear_2337_42" x1="19.7359" y1="15.9727" x2="19.5766" y2="16.905" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BFBFBF"/>
                  <stop offset="0.08" stopColor="#CCCCCC"/>
                  <stop offset="0.24" stopColor="#E3E3E3"/>
                  <stop offset="0.41" stopColor="#F2F2F2"/>
                  <stop offset="0.61" stopColor="#FCFCFC"/>
                  <stop offset="0.89" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint10_linear_2337_42" x1="19.3839" y1="17.5497" x2="19.2119" y2="18.5331" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BFBFBF"/>
                  <stop offset="0.08" stopColor="#CCCCCC"/>
                  <stop offset="0.24" stopColor="#E3E3E3"/>
                  <stop offset="0.42" stopColor="#F2F2F2"/>
                  <stop offset="0.62" stopColor="#FCFCFC"/>
                  <stop offset="0.9" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint11_linear_2337_42" x1="18.9361" y1="18.9735" x2="18.764" y2="19.9441" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#BFBFBF"/>
                  <stop offset="0.08" stopColor="#CCCCCC"/>
                  <stop offset="0.23" stopColor="#E3E3E3"/>
                  <stop offset="0.4" stopColor="#F2F2F2"/>
                  <stop offset="0.6" stopColor="#FCFCFC"/>
                  <stop offset="0.86" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint12_linear_2337_42" x1="25.7537" y1="18.6924" x2="26.5895" y2="15.195" gradientUnits="userSpaceOnUse">
                  <stop offset="0.05" stopColor="#AAACAF"/>
                  <stop offset="0.07" stopColor="#B5B7B9"/>
                  <stop offset="0.15" stopColor="#D0D1D2"/>
                  <stop offset="0.22" stopColor="#E4E5E6"/>
                  <stop offset="0.31" stopColor="#F3F3F4"/>
                  <stop offset="0.41" stopColor="#FCFCFC"/>
                  <stop offset="0.58" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint13_linear_2337_42" x1="19.9791" y1="14.3827" x2="19.8134" y2="15.3278" gradientUnits="userSpaceOnUse">
                  <stop offset="0.04" stopColor="#A4A7A9"/>
                  <stop offset="0.12" stopColor="#B1B4B5"/>
                  <stop offset="0.43" stopColor="#DBDCDD"/>
                  <stop offset="0.66" stopColor="#F5F5F5"/>
                  <stop offset="0.8" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint14_linear_2337_42" x1="14.2839" y1="16.3876" x2="14.2138" y2="12.7929" gradientUnits="userSpaceOnUse">
                  <stop offset="0.14" stopColor="#A9ACAE"/>
                  <stop offset="0.19" stopColor="#C3C5C7"/>
                  <stop offset="0.24" stopColor="#D9DADB"/>
                  <stop offset="0.3" stopColor="#EAEBEB"/>
                  <stop offset="0.38" stopColor="#F6F6F6"/>
                  <stop offset="0.48" stopColor="#FDFDFD"/>
                  <stop offset="0.78" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint15_linear_2337_42" x1="19.2048" y1="20.7041" x2="19.0137" y2="19.1652" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4D4E4E"/>
                  <stop offset="1" stopColor="#676767" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint16_linear_2337_42" x1="15.9541" y1="11.6244" x2="25.6935" y2="11.6244" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C9DBDB"/>
                  <stop offset="0.08" stopColor="#CFDFDF"/>
                  <stop offset="0.43" stopColor="#E9F0F0"/>
                  <stop offset="0.75" stopColor="#F9FBFB"/>
                  <stop offset="1" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint17_linear_2337_42" x1="25.0345" y1="8.92362" x2="16.9145" y2="12.89" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F05E4E"/>
                  <stop offset="0.26" stopColor="#E8423A"/>
                  <stop offset="0.52" stopColor="#E32E2B"/>
                  <stop offset="0.7" stopColor="#E12726"/>
                  <stop offset="0.82" stopColor="#DE2625"/>
                  <stop offset="0.9" stopColor="#D52425"/>
                  <stop offset="0.97" stopColor="#C62023"/>
                  <stop offset="1" stopColor="#BC1E23"/>
                  </linearGradient>
                  <radialGradient id="paint18_radial_2337_42" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.9582 9.97405) scale(2.918 2.62042)">
                  <stop offset="0.31" stopColor="white" stopOpacity="0"/>
                  <stop offset="0.61" stopColor="#FEFEFE" stopOpacity="0"/>
                  <stop offset="0.74" stopColor="#FDFDFD" stopOpacity="0.04"/>
                  <stop offset="0.82" stopColor="#FCFCFC" stopOpacity="0.08"/>
                  <stop offset="0.87" stopColor="#F3F3F3" stopOpacity="0.11"/>
                  <stop offset="0.92" stopColor="#D9DADA" stopOpacity="0.21"/>
                  <stop offset="0.97" stopColor="#AEB0B1" stopOpacity="0.37"/>
                  <stop offset="1" stopColor="#8D8F91" stopOpacity="0.5"/>
                  </radialGradient>
                  <radialGradient id="paint19_radial_2337_42" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-2.6635 9.40495) rotate(11.1161) scale(5.27039 2.42753)">
                  <stop offset="0.14" stopColor="#231F20"/>
                  <stop offset="0.45" stopColor="#8D8F91"/>
                  <stop offset="0.49" stopColor="#909294" stopOpacity="0.97"/>
                  <stop offset="0.53" stopColor="#9A9B9D" stopOpacity="0.88"/>
                  <stop offset="0.57" stopColor="#AAACAD" stopOpacity="0.74"/>
                  <stop offset="0.61" stopColor="#C1C2C3" stopOpacity="0.54"/>
                  <stop offset="0.65" stopColor="#DFDFE0" stopOpacity="0.28"/>
                  <stop offset="0.69" stopColor="white" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="paint20_radial_2337_42" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.8914 9.83311) rotate(12.4534) scale(0.959386 0.704022)">
                  <stop offset="0.58" stopColor="#EE442F"/>
                  <stop offset="1" stopColor="#AE1F23"/>
                  </radialGradient>
                  <radialGradient id="paint21_radial_2337_42" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(29.2108 2.53184) rotate(20.3288) scale(1.18762 1.18563)">
                  <stop offset="0.12" stopColor="white"/>
                  <stop offset="0.24" stopColor="white" stopOpacity="0.89"/>
                  <stop offset="0.49" stopColor="white" stopOpacity="0.62"/>
                  <stop offset="0.85" stopColor="white" stopOpacity="0.18"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </radialGradient>
                  <clipPath id="clip0_2337_42">
                  <rect width="20" height="15" fill="white" transform="translate(9 5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="p-2 px-4 text-gray-100 font-semibold flex-grow">
                <div>#0000000000</div>
                <div>Balance | &pound;0.00</div>
              </div>
            </div>
          </div>
          <button className="bg-gray-400 bg-opacity-70 rounded-xl flex items-center justify-center p-3 w-[55px] flex-shrink-0 text-gray-100 text-xl">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default BankAccountSection