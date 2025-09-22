import Button from "../button/Button"


const PeeksAccountSection = () => {
  return (
    <>
      <div className="text-xl font-semibold text-gray-100 mb-4">
        Early Look
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <div className="flex gap-6 w-full md:w-1/2 items-start">
          <div className="border-[3px] border-brandLightblue rounded-lg relative w-1/2 md:w-1/3">
            <img
                src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                alt="Product Name"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="w-1/2 md:w-2/3">
            <div className="text-brandRed font-semibold mb-3">
              3 weeks til launch
            </div>
            <div className="font-semibold text-gray-100 text-sm md:text-base">
              Product Name Here
            </div>
            <div className="text-gray-100 text-xs md:text-base">
              Text blurb as a brief overview of features
            </div>
              <Button
                className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-3 md:max-w-[90%]"
                iconpath={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="rotate-[20deg] ml-1" width="24" height="24" viewBox="0 -32 576 576"><path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"/></svg>
              }>
                View
              </Button>
          </div>
        </div>
        <div className="flex gap-6 w-full md:w-1/2 items-start">
          <div className="border-[3px] border-brandLightblue rounded-lg relative w-1/2 md:w-1/3">
            <img
                src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                alt="Product Name"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="w-1/2 md:w-2/3">
            <div className="text-brandRed font-semibold mb-3">
              5 weeks til launch
            </div>
            <div className="font-semibold text-gray-100 text-sm md:text-base">
              Product Name Here
            </div>
            <div className="text-gray-100 text-xs md:text-base">
              Text blurb as a brief overview of features
            </div>
              <Button
                className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-3 md:max-w-[90%]"
                iconpath={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="rotate-[20deg] ml-1" width="24" height="24" viewBox="0 -32 576 576"><path d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"/></svg>
              }>
                View
              </Button>
          </div>
        </div>
      </div>
      <div className="text-xl font-semibold text-gray-100 mb-4 mt-12">
        First Access Pre-Orders
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="flex gap-3 md:gap-6 w-full items-start">
          <div className="border-[3px] border-brandLightblue rounded-lg relative w-[58px] md:w-[100px] flex-shrink-0">
            <img
                src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                alt="Product Name"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <div className="font-semibold text-gray-100 text-sm md:text-base">
              Product Name Here
            </div>
            <div className="text-gray-100 text-xs md:text-sm">
              Text blurb as a brief overview of features
            </div>
          </div>
          <div className="w-1/3">
            <Button
              className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-3 "
              iconpath={
                <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                  </svg>
            }>
              Add
            </Button>
          </div>
        </div>
        <div className="flex gap-3 md:gap-6 w-full items-start">
          <div className="border-[3px] border-brandLightblue rounded-lg relative w-[58px] md:w-[100px] flex-shrink-0">
            <img
                src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                alt="Product Name"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <div className="font-semibold text-gray-100 text-sm md:text-base">
              Product Name Here
            </div>
            <div className="text-gray-100 text-xs md:text-sm">
              Text blurb as a brief overview of features
            </div>
          </div>
          <div className="w-1/3">
            <Button
              className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-3 "
              iconpath={
                <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                  </svg>
            }>
              Add
            </Button>
          </div>
        </div>
        <div className="flex gap-3 md:gap-6 w-full items-start">
          <div className="border-[3px] border-brandLightblue rounded-lg relative w-[58px] md:w-[100px] flex-shrink-0">
            <img
                src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                alt="Product Name"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <div className="font-semibold text-gray-100 text-sm md:text-base">
              Product Name Here
            </div>
            <div className="text-gray-100 text-xs md:text-sm">
              Text blurb as a brief overview of features
            </div>
          </div>
          <div className="w-1/3">
            <Button
              className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-3 "
              iconpath={
                <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                  </svg>
            }>
              Add
            </Button>
          </div>
        </div>
        <div className="flex gap-3 md:gap-6 w-full items-start">
          <div className="border-[3px] border-brandLightblue rounded-lg relative w-[58px] md:w-[100px] flex-shrink-0">
            <img
                src="https://www.thetoyshop.com/medias/515Wx515H-573309-Primary?context=bWFzdGVyfGltYWdlc3wxNzE1MTV8aW1hZ2UvanBlZ3xhR1V5TDJobVpTOHhNalE0TVRBNE1ETTJNRGs1TUM4MU1UVlhlRFV4TlVoZk5UY3pNekE1WDFCeWFXMWhjbmt8YTIwNTdiMDM1ODcwNzgwNzcwNWE2MDYwYTEzOWI2ZGIzMjI4ZDRkNzY4ZDI3YWU4NWEyMDQ5ZDUwMjMwYzBkNg"
                alt="Product Name"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <div className="font-semibold text-gray-100 text-sm md:text-base">
              Product Name Here
            </div>
            <div className="text-gray-100 text-xs md:text-sm">
              Text blurb as a brief overview of features
            </div>
          </div>
          <div className="w-1/3">
            <Button
              className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-semibold text-sm md:text-lg rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-3 "
              iconpath={
                <svg width="22" height="18" viewBox="0 0 22 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2401 7.57V8.14C21.2401 8.38 21.1601 8.58 20.9901 8.75C20.8201 8.92 20.6201 9 20.3801 9H20.0901L19.1601 15.57C19.0901 16 18.8901 16.35 18.5701 16.63C18.2501 16.9 17.8701 17.04 17.4401 17.04H4.36006C3.93006 17.04 3.55006 16.9 3.23006 16.63C2.91006 16.35 2.71006 16 2.64006 15.57L1.71006 9H1.42006C1.18006 9 0.980059 8.92 0.810059 8.75C0.640059 8.58 0.560059 8.38 0.560059 8.14V7.57C0.560059 7.33 0.640059 7.13 0.810059 6.96C0.980059 6.79 1.18006 6.71 1.42006 6.71H3.83006L7.67006 1.43C7.86006 1.17 8.11006 1.01 8.42006 0.960001C8.73006 0.910001 9.02006 0.980002 9.28006 1.18C9.54006 1.37 9.70006 1.62 9.75006 1.93C9.80006 2.24 9.73006 2.53 9.53006 2.79L6.66006 6.71H15.1401L12.2701 2.79C12.0801 2.53 12.0101 2.24 12.0501 1.93C12.1001 1.62 12.2501 1.37 12.5201 1.18C12.7801 0.990002 13.0701 0.920001 13.3801 0.960001C13.6901 1.01 13.9401 1.16 14.1301 1.43L17.9701 6.71H20.3801C20.6201 6.71 20.8201 6.79 20.9901 6.96C21.1601 7.13 21.2401 7.33 21.2401 7.57ZM7.73006 13.89V9.87C7.73006 9.63 7.65006 9.43 7.48006 9.26C7.31006 9.09 7.11006 9.01 6.87006 9.01C6.63006 9.01 6.43006 9.09 6.26006 9.26C6.09006 9.43 6.01006 9.63 6.01006 9.87V13.89C6.01006 14.13 6.09006 14.33 6.26006 14.5C6.43006 14.67 6.63006 14.75 6.87006 14.75C7.11006 14.75 7.31006 14.67 7.48006 14.5C7.65006 14.33 7.73006 14.13 7.73006 13.89ZM11.7501 13.89V9.87C11.7501 9.63 11.6701 9.43 11.5001 9.26C11.3301 9.09 11.1301 9.01 10.8901 9.01C10.6501 9.01 10.4501 9.09 10.2801 9.26C10.1101 9.43 10.0301 9.63 10.0301 9.87V13.89C10.0301 14.13 10.1101 14.33 10.2801 14.5C10.4501 14.67 10.6501 14.75 10.8901 14.75C11.1301 14.75 11.3301 14.67 11.5001 14.5C11.6701 14.33 11.7501 14.13 11.7501 13.89ZM15.7701 13.89V9.87C15.7701 9.63 15.6901 9.43 15.5201 9.26C15.3501 9.09 15.1501 9.01 14.9101 9.01C14.6701 9.01 14.4701 9.09 14.3001 9.26C14.1301 9.43 14.0501 9.63 14.0501 9.87V13.89C14.0501 14.13 14.1301 14.33 14.3001 14.5C14.4701 14.67 14.6701 14.75 14.9101 14.75C15.1501 14.75 15.3501 14.67 15.5201 14.5C15.6901 14.33 15.7701 14.13 15.7701 13.89Z"/>
                  </svg>
            }>
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PeeksAccountSection