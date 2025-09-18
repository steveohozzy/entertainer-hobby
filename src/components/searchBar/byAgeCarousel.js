import { useNavigate } from 'react-router-dom';

const ByAgeCarousel = ({setShowSearchBox}) => {
  const navigate = useNavigate();

  return (
    <div className="md:mt-2">
      <div className="text-lg text-textBlue font-bold mb-2">
        By Age
      </div>
        <div id="age" className="grid grid-cols-6 lg:grid-cols-7 gap-2 mb-2">
      <button onClick={() => {
        navigate("/category?age=0-3");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
        setShowSearchBox(false);
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-yellow-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-2xl text-white !leading-[1.2] md:!leading-[1]">0-3</span>
        <span className="text-xs md:text-lg lg:text-xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=3-5");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
        setShowSearchBox(false);
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-red-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-2xl text-white !leading-[1.2] md:!leading-[1]">3-5</span>
        <span className="text-xs md:text-lg lg:text-xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=5-8");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
        setShowSearchBox(false);
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-purple-600 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-2xl text-white !leading-[1.2] md:!leading-[1]">5-8</span>
        <span className="text-xs md:text-lg lg:text-xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=8-11");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
        setShowSearchBox(false);
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-cyan-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-2xl text-white !leading-[1.2] md:!leading-[1]">8-11</span>
        <span className="text-xs md:text-lg lg:text-xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=11-plus");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
        setShowSearchBox(false);
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-green-400 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-2xl text-white !leading-[1.2] md:!leading-[1]">11+</span>
        <span className="text-xs md:text-lg lg:text-xl text-white leading-[1]">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=big-kids");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
        setShowSearchBox(false);
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-green-700 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-2xl text-white !leading-[1.2] md:!leading-[1]">Big</span>
        <span className="text-xs md:text-lg lg:text-xl text-white leading-[1]">Kids</span>
      </button>
    </div>
    </div>
  )
}

export default ByAgeCarousel