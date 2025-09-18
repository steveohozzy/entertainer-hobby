import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const HomeBlogs = () => {
  const navigate = useNavigate();

  return (
    <div id="blogs" className='w-full text-center mt-10 mb-14'>
            <div className='flex justify-center'>
                <h3 id="offers" className="text-3xl md:text-4xl lg:text-5xl font-bold md:!leading-[1.2] text-transparent text-center mt-5 mb-3 md:mt-12 md:mb-5 drop-shadow-md"><span className='bg-gradient-to-r from-brandBlue via-textBlue to-brandBlue bg-clip-text md:!leading-[1.2] text-transparent textStroke'>Latest Blogs</span></h3>
            </div>
            <div className='pt-5 rounded-xl'>
                <div className='flex gap-4 justify-center mx-auto max-w-7xl:!-bottom-[0] [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination]:!bottom-1 [&_.swiper-pagination-bullet-active]:scale-[1.2] hover:[&_.swiper-pagination-bullet]:scale-[1.2] fade-out-right'>
                <Swiper
                    className="!pb-10"
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    autoplay={false}
                    pagination={{ clickable: true }}
                    breakpoints={{
                      768: {
                        slidesPerView: 2.5,
                      },
                    }}
                    loop
                    >
                    <SwiperSlide>
                        <div className="cursor-pointer flex flex-col flex-wrap bg-white shadow-lg mb-4 rounded-xl h-full hover:scale-[0.98] hover:shadow-xl  transition-all" onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                            <div className="rounded-xl w-full">
                                <img
                                    src="https://www.thetoyshop.com/medias/BLOG-TEACHWORLD-STORY-560x318.jpg?context=bWFzdGVyfHJvb3R8NDQ2NDF8aW1hZ2UvanBlZ3xhRE5oTDJnNU15OHhNalUxT1RZNU1ERXdORGcyTWk5Q1RFOUhYMVJGUVVOSVYwOVNURVJmVTFSUFVsbGZOVFl3ZURNeE9DNXFjR2N8N2E4YTkyZjZmMGNlM2M1ZTlhMDgwYTdlMGU2YWU3M2NjODQ1OTU4YjMyYjMyOTcyYjVmNGQ3NjI5NTllMjU2Ng"
                                    alt="Teach Children about the World"
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                                />
                            </div>
                            <div className="w-full grow flex flex-col justify-between items-center py-1 md:py-3 px-2 pb-4">
                                <div className="text-lg xl:text-xl text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-5 mt-3">Teach Children about the World</div>
                                <Button
                                    className='shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                                    onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                                        Read the post
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="cursor-pointer flex flex-col flex-wrap bg-white shadow-lg mb-5 rounded-xl h-full hover:scale-[0.98] hover:shadow-xl  transition-all" onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                            <div className="rounded-xl w-full">
                                <img
                                    src="https://www.thetoyshop.com/medias/BLOG-PEPPAPIG-STORY-560x318.jpg?context=bWFzdGVyfHJvb3R8Mzk3NjZ8aW1hZ2UvanBlZ3xhR1ppTDJnNU15OHhNalUxT1RZNU1ERTNNRE01T0M5Q1RFOUhYMUJGVUZCQlVFbEhYMU5VVDFKWlh6VTJNSGd6TVRndWFuQm58ODVmNjhlYzM5N2JmNjAzYmFhMGQ2MmVlOGM2ZDE2ZjA0NzcwZDk2YTUyYjM4YjkwZDVhNDgyOGQwYWM0NTlhZQ"
                                    alt="20 Fun Facts you might not know about Peppa Pig"
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                                />
                            </div>
                            <div className="w-full flex grow flex-col justify-between items-center py-1 md:py-3 px-2 pb-4">
                                <div className="text-lg xl:text-xl text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-5 mt-3">20 Fun Facts you might not know about Peppa Pig</div>
                                <Button
                                    className='shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                                    onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                                        Read the post
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cursor-pointer flex flex-col flex-wrap bg-white shadow-lg mb-5 rounded-xl h-full hover:scale-[0.98] hover:shadow-xl  transition-all" onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                            <div className="rounded-xl w-full">
                                <img
                                    src="https://www.thetoyshop.com/medias/BLOG-SCIENCE-STORY-560x318.jpg?context=bWFzdGVyfHJvb3R8MzE2NDh8aW1hZ2UvanBlZ3xhR1k1TDJnNU5pOHhNalUxT1RZNU1ESXpOVGt6TkM5Q1RFOUhYMU5EU1VWT1EwVmZVMVJQVWxsZk5UWXdlRE14T0M1cWNHY3xiZGVhZTEzYzdiNDQ5MjRlN2M4OTMzYWE3OTYzMTA3NDlhYTY1Y2Q3NjRkN2E0MzYzNzk0MTJlZDgyNTMxMTUy"
                                    alt="Kids Curious Science Activities"
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                                />
                            </div>
                            <div className="w-full flex flex-col grow justify-between items-center py-1 md:py-3 px-2 pb-4">
                                <div className="text-lg xl:text-xl text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-5 mt-3">Kids Curious Science Activities</div>
                                <Button
                                    className='shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 px-2 lg:px-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                                    onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                                        Read the post
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cursor-pointer flex flex-col flex-wrap bg-white shadow-lg mb-5 rounded-xl h-full hover:scale-[0.98] hover:shadow-xl  transition-all" onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                            <div className="rounded-xl w-full">
                                <img
                                    src="https://www.thetoyshop.com/medias/1-4.jpg?context=bWFzdGVyfHJvb3R8ODE0MDd8aW1hZ2UvanBlZ3xhRGczTDJnMVlpOHhNalUyTmpFNE56VTBNRFV4TUM4eElEUXVhbkJufDZjZjE0ZDU2OWQ4NjNkYTE4Njk4MjkxZmUyYzEwMmEwYTRkODUwZjA4MWVjYzk4ZjViNzk2NDAyMzFlOWJjNDE"
                                    alt="The Must-Have Toys for Road Trips"
                                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                                />
                            </div>
                            <div className="w-full flex flex-col grow justify-between items-center py-1 md:py-3 px-2 pb-4">
                                <div className="grow text-lg xl:text-xl text-brandBlue font-bold leading-[1.2] xl:leading-[1.1] mb-5 mt-3">The Must-Have Toys for Road Trips</div>
                                <Button
                                    className='shadow-md hover:shadow-lg group inline-flex items-center justify-center font-bold rounded-[30px] bg-brandGreen text-white py-2 pr-2 lg:pr-4 lg:pl-0 pl-0 transition-all hover:bg-brandLightGreen hover:scale-105 mt-2'
                                    onClick={() => { navigate(`/`); window.scrollTo({top: 0,left: 0,behavior: "smooth",});}}>
                                        Read the post
                                </Button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
  );
};

export default HomeBlogs;
