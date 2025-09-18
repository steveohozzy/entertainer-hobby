import { useState } from "react";

import Button from "../../components/button/Button";
import { Star } from "lucide-react";

const stores = [
  {
    id: "All Stores",
  },
  {
    id: "Chester Broughton Park",
  },
  {
    id: "Barnsley",
  },
  {
    id: "Birmingham Bullring",
  },
  {
    id: "Bluewater",
  },
  {
    id: "Braehead",
  },
  {
    id: "Brighton",
  },
  {
    id: "Bromley",
  },
  {
    id: "Bromley Upper Mall",
  },
  {
    id: "Chelmsford",
  },
  {
    id: "Chester",
  },
  {
    id: "Coventry",
  },
  {
    id: "Cwmbran",
  },
  {
    id: "Glasgow Silverburn",
  },
  {
    id: "Hereford",
  },
  {
    id: "Kings Lynn Vancouver Quarter",
  },
  {
    id: "Kingston  Bentalls",
  },
  {
    id: "Lakeside",
  },
  {
    id: "Lancaster",
  },
  {
    id: "Leeds Spring",
  },
  {
    id: "Leeds Springs",
  },
  {
    id: "Leeds White Rose",
  },
  {
    id: "Liverpool",
  },
  {
    id: "Liverpool One",
  },
  {
    id: "Manchester  Arndale",
  },
  {
    id: "Merryhill",
  },
  {
    id: "Milton Keynes",
  },
  {
    id: "Norwich",
  },
  {
    id: "Plymouth",
  },
  {
    id: "Reading",
  },
  {
    id: "Staines",
  },
  {
    id: "Stratford  Westfield",
  },
  {
    id: "Taunton",
  },
  {
    id: "Warrington",
  },
  {
    id: "West Bromwich",
  },
  {
    id: "Westfield London",
  },
  {
    id: "Woking",
  },
];

const events = [
  {
    id: "All Events",
  },
  {
    id: "Paw Patrol On The Road",
  },
  {
    id: "Chase From Paw Patrol",
  },
  {
    id: "Skye From Paw Patrol",
  },
  {
    id: "Marshall From Paw Patrol",
  },
  {
    id: "Rubble From Paw Patrol",
  },
  {
    id: "Cody From Cocomelon",
  },
  {
    id: "JJ From Cocomelon",
  },
  {
    id: "Teenage Mutant Ninja Turtles",
  },
];

const Events = () => {
  const [type, setType] = useState("store");
  const [event, setEvent] = useState("All Events");
  const [store, setStore] = useState("All Stores");

  const handleRadioChange = (e) => {
    setType(e.target.id);
    setStore('All Stores');
    setEvent('All Events');
  };

  const handleSelectEvent = (e) => {
    setEvent(e.target.value);
    setStore('All Stores');
  };

  const handleSelectStore = (e) => {
    setStore(e.target.value);
    setEvent('All Events');
  };

  return (
    <>
      <div className="bg-white pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex justify-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-cente drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Store Events</span></h1>
          </div>
          <p className="text-textBlue py-6">
            Can’t decide what to do today? Here at The Entertainer, we have lots
            of free events and kids' activities for children of all ages. Scroll
            through our events below to find out when this is happening in your
            local store. We look forward to seeing you at one of our free family
            fun events with visits from your favourite characters, giveaways and
            more!
          </p>

          <div className="flex flex-wrap">
            <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/3">
              <div className="text-xl font-bold text-textBlue">
                I want to search store events by...
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <form id="delivery-form" className="flex items-center">
                <label className="relative cursor-pointer flex items-center">
                  <input
                    type="radio"
                    name="option"
                    id="store"
                    onClick={handleRadioChange}
                    className="appearance-none shrink-0 w-4 h-4 border-2 border-brandBlue rounded-full peer checked:border-brandGreen"
                    defaultChecked
                  />
                  <span className="absolute top-[6px] left-[4px] z-20 w-2 h-2 bg-brandGreen rounded-full hidden peer-checked:block">
                    &nbsp;
                  </span>
                  <span className="ml-3 text-sm text-textBlue font-bold">
                    Store
                  </span>
                </label>
                <label className="relative cursor-pointer flex items-center ml-6">
                  <input
                    type="radio"
                    name="option"
                    id="event"
                    onClick={handleRadioChange}
                    className="appearance-none shrink-0 w-4 h-4 border-2 border-brandBlue rounded-full peer checked:border-brandGreen"
                  />
                  <span className="absolute top-[6px] left-[4px] z-20 w-2 h-2 bg-brandGreen rounded-full hidden peer-checked:block">
                    &nbsp;
                  </span>
                  <span className="ml-3 text-sm text-textBlue font-bold">
                    Event
                  </span>
                </label>
                {type === "store" && (
                  <div className="flex ml-6 h-[44px] flex-grow px-3 rounded-lg border border-[3px] border-brandBlue relative">
                    <span className="absolute right-[15px] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                    <select
                      onChange={handleSelectStore}
                      className="relative w-full appearance-none border-gray-400 bg-white pr-4 mr-2 text-textBlue font-bold outline-none"
                    >
                      {stores.map((store) => (
                        <option value={store.id}>{store.id}</option>
                      ))}
                    </select>
                  </div>
                )}
                {type === "event" && (
                  <div className="flex ml-6 h-[44px] flex-grow px-3 rounded-lg border border-[3px] border-brandBlue relative">
                    <span className="absolute right-[15px] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                    <select
                      onChange={handleSelectEvent}
                      className="relative w-full appearance-none border-gray-400 bg-white pr-4 mr-2 text-textBlue font-bold outline-none"
                    >
                      {events.map((event) => (
                        <option value={event.id}>{event.id}</option>
                      ))}
                    </select>
                  </div>
                )}
              </form>
            </div>

              {((event === "Paw Patrol On The Road" &&
                store === "All Stores") ||
                (event === "All Events" && store === "All Stores") ||
                store === "Chester Broughton Park" ||
                store === "Chelmsford" ||
                store === "Woking" ||
                store === "Leeds Springs") && (
                <div>
                  <div
                    className="border-[3px] mt-6 border-brandLightBlue rounded-xl"
                    id="Patroller"
                    data-hidden="false"
                  >
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/3 p-4 md:border-r-[3px] md-border-brandLightBlue flex flex-col justify-start items-center">
                        <p className="text-textBlue text-lg mb-4 text-center font-bold">
                          Meet Paw Patroller
                        </p>
                        <img
                          src="https://www.thetoyshop.com//medias/PAW-OTR-UK-TheEntertainer-D6-042501.jpg?context=bWFzdGVyfHJvb3R8NDgxMzR8aW1hZ2UvanBlZ3xhRFJtTDJobFl5OHhNalUxTmpJMk16VTFOVEV3TWk5UVFWZGZUMVJTWDFWTFgxUm9aVVZ1ZEdWeWRHRnBibVZ5WDBRMlh6QTBNalV3TVM1cWNHY3w3YjQ2NjZiNGFiZDIxZWYyODk0OWVkNDI4NWNkZjRiZTU3MTYzMDMzODBkNTVhMzdjNTY5MGViOTNiYzg5NTY1"
                          alt="Meet Paw Patroller"
                          title="Meet Paw Patroller"
                        />
                        <Button
                          className="h-[44px] mt-5 shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-sm rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                          iconpath={
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                              <path d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          }
                          link="/category"
                        >
                          Our Paw Patrol Range
                        </Button>
                      </div>
                      <div className="w-full md:w-2/3 text-textBlue">
                        <div className="p-4 text-textBlue flex flex-col space-y-4">
                          <p>
                            PAW Patrol On The Road,
                            <strong>Join the Adventure!</strong>.
                          </p>
                          <p>
                            The PAW Patroller is rolling into town for a pawsome
                            day of family fun at your local Entertainer store!
                            Come along and meet your favourite heroic pups with
                            this exciting free event.
                          </p>
                          <p>
                            Step inside a life-size PAW Patroller and take part in
                            an interactive mission filled with fun activities,
                            stickers, and surprises.
                          </p>
                          <p>
                            Snap a photo with the vehicle or meet a PAW Patrol
                            character (times vary – check in-store).
                          </p>
                          <p>
                            All little adventurers will receive a free PAW Patrol
                            activity pack, including a mask to take home!
                          </p>
                          <p>
                            This is the perfect day out for little fans aged 2–6.
                            No booking required, just turn up and join the fun.
                          </p>
                        </div>

                        <div className="border-t-[3px] border-brandLightBlue grid grid-cols-3 gap-2 text-center items-stretch [&_div]:flex [&_div]:items-center [&_div]:justify-center">
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            02/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/chester-broughton" target="_blank" title="The Entertainer in Chester Broughton Park">	Chester Broughton Park</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            16/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Chelmsford" target="_blank" title="The Entertainer in Chelmsford">Chelmsford</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            23/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Woking" target="_blank" title="The Entertainer in Woking">Woking</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            30/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Leeds-Spring" target="_blank" title="The Entertainer in Leeds Spring">Leeds Springs</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {((event === "Chase From Paw Patrol" &&
                store === "All Stores") ||
                (event === "All Events" && store === "All Stores") ||
                store === "Braehead" ||
                store === "Staines" ||
                store === "Chelmsford" ||
                store === "Leeds Springs" ||
                store === "Hereford" ||
                store === "Norwich" ||
                store === "Merryhill" ||
                store === "Manchester Arndale" ||
                store === "Leeds White Rose" ||
                store === "Kingston Bentalls" ||
                store === "Birmingham Bullring") && (
                <div>
                  <div
                    className="border-[3px] mt-6 border-brandLightBlue rounded-xl"
                    id="Patroller"
                    data-hidden="false"
                  >
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/3 p-4 md:border-r-[3px] md-border-brandLightBlue flex flex-col justify-start items-center">
                        <p className="text-textBlue text-lg mb-4 text-center font-bold">
                          Meet Chase
                        </p>
                        <img
                          src="https://www.thetoyshop.com/medias/Meet-Chase-From-Paw-Patrol.jpg?context=bWFzdGVyfHJvb3R8MTY0MjkyfGltYWdlL2pwZWd8YUdSakwyZ3dZUzh4TWpBek56WTFNVEV6TmpVME1pNXFjR2N8ODNmZTE1YjA0MWVlZjEwN2M3NTc0Y2E1ZWZlODdlNTQ1MzMyMTdhYzE5MWUyNjk5Y2M5YjQzZmFkY2QwMWRlMQ"
                          alt="Meet Chase"
                          title="Meet Chase"
                        />
                        <Button
                          className="h-[44px] mt-5 shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-sm rounded-[30px] bg-brandGreen text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105"
                          iconpath={
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                              <path d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          }
                          link="/category"
                        >
                          Our Paw Patrol Range
                        </Button>
                      </div>
                      <div className="w-full md:w-2/3 text-textBlue">
                        <div className="p-4 text-textBlue flex flex-col space-y-4">
                          <p>Ready for action, Ryder, Sir!</p>

                          <p>Come and meet the bravest police pup, Chase, at your local The Entertainer store! Even the mightiest of pups need a little rest so Chase will be appearing at intervals between 10am-4pm. Its free to meet Chase but we would recommend arriving early to avoid disappointment.</p>

                          <p>Chase is going to be a super busy pup this year and will also be visiting all of the stores below throughout the year. So if you can't make this visit, maybe catch him at the next!</p>

                          <p>Bring along your camera, your biggest smile and get practicing your best Chase catchphrases.</p>

                          <p>We would love to see your photos with Chase so don’t forget to share your photos with us on social media.</p>
                        </div>

                        <div className="border-t-[3px] border-brandLightBlue grid grid-cols-3 gap-2 text-center items-stretch [&_div]:flex [&_div]:items-center [&_div]:justify-center">
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            02/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/braehead" target="_blank" title="The Entertainer in Braehead">Braehead</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            16/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Stainesd" target="_blank" title="The Entertainer in Staines">Staines</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            23/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Chelmsford" target="_blank" title="The Entertainer in Woking">Chelmsford</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            30/08/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Leeds-Spring" target="_blank" title="The Entertainer in Leeds Spring">Leeds Springs</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            06/09/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Hereford" target="_blank" title="The Entertainer in Hereford">Hereford</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            13/09/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Norwich" target="_blank" title="The Entertainer in Norwich">Norwich</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            20/09/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Merryhill" target="_blank" title="The Entertainer in Merryhill">Merryhill</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            04/10/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Manchester Arndale" target="_blank" title="The Entertainer in Manchester Arndale">Manchester Arndale</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            25/10/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Leeds White Rose" target="_blank" title="The Entertainer in Leeds White Rose">Leeds White Rose</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            01/11/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Kingston Bentalls" target="_blank" title="The Entertainer in Kingston Bentalls">Kingston Bentalls</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                          <hr className="col-span-full border-0 border-b-[3px] text-brandLightBlue" />
                          <div className="border-r-[3px] border-brandLightBlue my-1 font-bold">
                            08/11/2025
                          </div>
                          <div className="border-r-[3px] border-brandLightBlue my-1 underline">
                            <a href="/store/Birmingham Bullring" target="_blank" title="The Entertainer in Birmingham Bullring">Birmingham Bullring</a>
                          </div>
                          <div className="my-1 text-brandRed font-bold">
                            Free
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="bg-brandLightBlue mt-6 rounded-xl p-6">
            <div className="text-center font-bold text-lg md:text-xl text-brandBlue flex items-center justify-center">
              <span className="opacity-50 rotate-[20deg] mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" id="Capa_1" width="24" height="24" viewBox="0 0 610.398 610.398">
                  <g>
                    <g>
                      <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052    c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553    V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"/>
                      <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992    h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"/>
                      <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117    V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818    c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764    V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"/>
                      <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"/>
                      <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017    c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"/>
                      <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"/>
                      <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017    c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"/>
                      <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"/>
                      <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032    c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"/>
                      <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"/>
                      <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032    c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"/>
                    </g>
                  </g>
                  </svg>
                  <Star className="w-3 ml-4" fill="currentColor" />
                </span>
                Want to be informed about our in-store events?
              </div>
              <div className="mt-4">
                <form className="flex flex-wrap justify-between">
                  <div className="w-full md:w-1/3 pr-2">
                    <div className={`flex h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group bg-white`}>
                      <input id="firstName" type="text" placeholder="First Name*" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-transparent focus:outline-none bg-white" />
                      <label for="firstName" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-brandBlue motion-reduce:transition-none">First Name*</label>
                      <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                          <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                          </svg>
                        </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mt-4 md:mt-0 px-2">
                    <div className={`flex h-[44px] px-3 rounded-lg w-full border border-[3px] border-brandBlue relative group bg-white`}>
                      <input id="emailAddress" type="email" placeholder="Email Address*" className="peer text-base m-0 block h-[38px] w-full bg-transparent text-textBlue transition duration-200 ease-linear placeholder:text-transparent focus:outline-none bg-white" />
                      <label for="emailAddress" className="font-semibold px-3 pointer-events-none absolute left-0 top-[4px] origin-[0_0] border border-solid border-transparent text-base text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-7 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-brandBlue peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:text-brandBlue motion-reduce:transition-none">Email Address*</label>
                      <span className="absolute h-full w-[20px] flex items-center justify-center top-0 right-2 text-gray-300 peer-[:not(:placeholder-shown)]:text-brandGreen">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none" className="w-full h-auto">
                          <path d="M4.49273 9.76762L0.180742 5.48145C0.0602474 5.36095 0 5.20603 0 5.01668C0 4.82733 0.0602474 4.67241 0.180742 4.55191L1.13609 3.62238C1.25659 3.48467 1.4029 3.41582 1.57504 3.41582C1.76439 3.41582 1.92792 3.48467 2.06563 3.62238L4.9575 6.51426L11.1544 0.317383C11.2921 0.179674 11.447 0.11082 11.6191 0.11082C11.8085 0.11082 11.9634 0.179674 12.0839 0.317383L13.0393 1.24691C13.1598 1.36741 13.22 1.52233 13.22 1.71168C13.22 1.90103 13.1598 2.05595 13.0393 2.17645L5.42227 9.76762C5.30177 9.90533 5.14685 9.97418 4.9575 9.97418C4.76815 9.97418 4.61323 9.90533 4.49273 9.76762Z" fill="currentColor" />
                          </svg>
                        </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 mt-4 md:mt-0 pl-2">
                    <div className="flex h-[44px] font-semibold flex-grow px-3 rounded-lg border border-[3px] border-brandBlue bg-white relative">
                      <span className="absolute right-[15px] z-[2] top-[14px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-gray-400 transition-all"></span>
                      <select
                        className="relative w-full appearance-none border-gray-400 bg-white pr-4 mr-2 text-gray-400 outline-none"
                      >
                        <option value="Select your favourite store..." className="text-gray-400 ">Select your favourite store...</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mt-5">
                    <label className="relative mb-4 flex items-start text-xs font-semibold text-brandBlue">
                      <input
                        type="checkbox"
                        className="relative mt-1 block size-[20px] appearance-none rounded-md border-[3px] border-textBlue bg-white outline-none transition-all checked:bg-textBlue"
                        name="signup"
                        value="signup"
                      />
                      <span className="absolute top-[3px]">
                        <svg viewBox="0 0 24 24" width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                              d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                              stroke="#ffffff"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{' '}
                          </g>
                        </svg>
                      </span>
                      <span className="ml-2 mt-1 w-[calc(100%-30px)]">
                        I would like to receive emails about special offers, new toys and voucher codes from The Entertainer
                      </span>
                    </label>
                  </div>
                  <div className="w-full md:w-1/3 mt-5">
                    <Button
                      className="shadow-md hover:shadow-lg w-full group inline-flex items-center justify-center font-bold text-lg rounded-[30px] bg-brandRed text-white py-2 px-4 pl-0 transition-all hover:bg-brandLightRed hover:scale-105"
                      iconpath={
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                          <path
                            d="M18.9028 4.35492C19.4873 4.15932 20.0692 4.72983 19.8174 5.31534L14.818 18.0558C14.6532 18.532 14.0752 18.697 13.686 18.4229L10.2385 15.9994L7.77668 17.9694C7.23857 18.3984 6.44087 17.9419 6.59633 17.2082L7.121 14.7319L16.356 7.32912C16.5477 7.17808 16.3485 6.91226 16.1633 7.03273L5.7505 12.9082L2.77086 10.8394C2.26592 10.5088 2.37319 9.70103 2.98825 9.51191L18.9028 4.35492Z"
                            fill="currentColor"
                          />
                        </svg>
                      }
                      link="#"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
