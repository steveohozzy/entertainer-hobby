import { useState } from "react";

const Hotspot = () => {
  const [hotSpotOpen1, sethotSpotOpen1] = useState(false);
  const [hotSpotOpen2, sethotSpotOpen2] = useState(false);
  const [hotSpotOpen3, sethotSpotOpen3] = useState(false);

  return (
    <div className="relative">
      <img src='/gaming-room.jpg' alt='gaming room' className="w-full" />
        <div className="absolute" style={{top: '20%', left: '20%'}}>
          <button onClick={() => {sethotSpotOpen1(!hotSpotOpen1)}} className="rounded-full w-5 h-5 bg-purple-500 z-10 shadow-text-blue border-[2px] border-white"></button>
          <div className={`overflow-hidden ${hotSpotOpen1 ? 'max-h-[300px]' : 'max-h-0'}`}>
            <div className="p-2 text-gray-100">
              <div className="shadow-text-blue bg-gradient-to-br from-black via-gray-900 to-black p-4 rounded-lg">
                hotspot 1 content here
              </div>
            </div>
          </div>
        </div>

        <div className="absolute" style={{top: '30%', left: '60%'}}>
          <button onClick={() => {sethotSpotOpen2(!hotSpotOpen2)}} className="rounded-full w-5 h-5 bg-purple-500 z-10 shadow-text-blue border-[2px] border-white"></button>
          <div className={`overflow-hidden ${hotSpotOpen2 ? 'max-h-[300px]' : 'max-h-0'}`}>
            <div className="p-2 text-gray-100">
              <div className="shadow-text-blue bg-gradient-to-br from-black via-gray-900 to-black p-4 rounded-lg">
                hotspot 2 content here
              </div>
            </div>
          </div>
        </div>

        <div className="absolute" style={{top: '60%', left: '70%'}}>
          <button onClick={() => {sethotSpotOpen3(!hotSpotOpen3)}} className="rounded-full w-5 h-5 bg-purple-500 z-10 shadow-text-blue border-[2px] border-white"></button>
          <div className={`overflow-hidden rounded-lg ${hotSpotOpen3 ? 'max-h-[300px]' : 'max-h-0'}`}>
            <div className="p-2 text-gray-100">
              <div className="shadow-text-blue bg-gradient-to-br from-black via-gray-900 to-black p-4 rounded-lg">
                hotspot 2 content here
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hotspot