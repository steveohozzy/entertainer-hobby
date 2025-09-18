import { useNavigate } from "react-router-dom";

const HomeAgeRange = () => {
  const navigate = useNavigate();

  return (
    <div id="age" className="flex gap-2 lg:gap-7 mb-6">
      <button onClick={() => {
        navigate("/category?age=0-3");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-yellow-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1] drop-shadow-lg">0-3</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1] drop-shadow-lg">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=3-5");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-red-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1] drop-shadow-lg">3-5</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1] drop-shadow-lg">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=5-8");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-purple-600 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1] drop-shadow-lg">5-8</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1] drop-shadow-lg">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=8-11");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-cyan-500 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1] drop-shadow-lg">8-11</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1] drop-shadow-lg">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=11-plus");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-green-400 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1] drop-shadow-lg">11+</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1] drop-shadow-lg">Years</span>
      </button>
      <button onClick={() => {
        navigate("/category?age=big-kids");
        window.scrollTo({top: 0,left: 0,behavior: "smooth",});
      }} className="transition-all lg:scale-95 rounded-full w-full aspect-square flex flex-col justify-center items-center bg-green-700 shadow-lg font-bold group hover:shadow-xl hover:scale-100 hover:rotate-[20deg] text-shadow-lg">
        <span className="text-sm md:text-2xl lg:text-5xl text-white !leading-[1.2] md:!leading-[1] drop-shadow-lg">Big</span>
        <span className="text-xs md:text-lg lg:text-3xl text-white leading-[1] drop-shadow-lg">Kids</span>
      </button>
    </div>
  )
}

export default HomeAgeRange