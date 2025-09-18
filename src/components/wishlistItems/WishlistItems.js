import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

import { selectWishlistItems } from "../../store/wishlist/wishlistSelector";
import WishlistAccountProductCard from "../wishlistAccountProductTile/WishlistAccountProductCard";


const WishlistItemsList = () => {
  const wishlistItems = useSelector(selectWishlistItems);

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-6 mt-6">
      {wishlistItems.length > 0 && (
        <>
          {wishlistItems.map((product) => (
            <WishlistAccountProductCard product={product} key={product.id} />
          ))}
        </>
      )}

      {[...Array(8 - wishlistItems.length)].map((e, i) => 
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
  )
}

export default WishlistItemsList