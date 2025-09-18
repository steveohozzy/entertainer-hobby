import { useDispatch } from 'react-redux';

import { setIsCartOpen, addItemToCart } from '../../store/cart/cartReducer';

const BundlesProductCard = ({ product, changeBundleHandlerClick, }) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(product));
    dispatch(setIsCartOpen(true));
    document.body.classList.add('body-noscroll');
    window.scrollBy(0 , -2)
  }

  return (
    <>
      <div key={product.id} className="cursor-pointer flex flex-col">
        <div className="flex flex-col rounded-lg border-[3px] border-gray-200 bg-white shadow-sm hover:border-brandBlue transition-all duration-300 overflow-hidden">
        <div className="relative group" onClick={changeBundleHandlerClick}>
          <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-l"
          />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="price" onClick={changeBundleHandlerClick}>
            <div className="cursor-pointer flex items-end justify-center absolute top-1 right-2">
                <span className="text-brandRed font-bold text-sm textStroke--thin">£<span className="pricevalue">{product.price}</span></span>
            </div>
          </div>
          <button
            className='sr-only add-to-basket'
            onClick={() => {addProductToCart(product)}}>
              Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default BundlesProductCard;
