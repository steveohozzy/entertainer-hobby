import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
  setIsCartOpen
} from '../../store/cart/cartReducer';

const CartProductTile = ({product, nocontrols, isMiniCart}) => {
    const { name, price, image, originalPrice, quantity, sku } = product;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const goToLinkHandler = () => {
        navigate('/product-details/' + product.id);
        dispatch(setIsCartOpen(false));
        document.body.classList.remove('body-noscroll');
    };
    
    const clearItemHandler = () =>
    dispatch(clearItemFromCart(product));
  const addItemHandler = () => dispatch(addItemToCart(product));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(product));
  return (
    <div className={`flex items-start flex-wrap w-100 ${isMiniCart ? 'py-4' : 'py-6'} relative after:w-full after:absolute after:bottom-0 after:left-0 after:border-b-[3px] after:md:w-[50%] last:after:hidden`}>
        <div className={`w-[30%] border-[2px] border-purple-500 rounded-lg ${isMiniCart ? 'md:w-[40%]' : 'md:w-[20%]'}`}>
            <button className='block' onClick={goToLinkHandler}>
                <img
                    src={image || "/placeholder.svg"}
                    alt={name}
                    className="w-full block rounded-lg"
                />
            </button>
        </div>
        <div className={`w-[70%] ${isMiniCart ? 'md:w-[60%]' : 'md:w-[80%]'}`}>
            <div className="flex flex-wrap py-1">
                <div className={`w-full ${nocontrols ? 'md:w-[70%]' : 'md:w-[50%]'} ${isMiniCart && 'md:w-full'} text-gray-100 font-semibold ${isMiniCart ? 'text-sm px-2 mb-1' : 'px-4'}`}>
                    <button className={`flex flex-wrap text-left`} onClick={goToLinkHandler}>
                        <div className="flex flex-wrap justify-center w-full">
                            <div className="inline-flex items-center text-xs text-gray-400 w-full">{product.brand}</div>
                        </div>
                        <span className='line-clamp-2'>{name}</span>
                        <span className={`text-gray-100 w-full ${isMiniCart ? 'text-[10px]' : 'text-xs mt-3'}`}>Product #{sku}</span>
                    </button>
                </div>
                <div className={`w-full ${nocontrols ? 'md:w-[30%]' : 'md:w-[50%]'} px-4 md:px-0 ${isMiniCart && 'md:w-full md:px-2'}`}>
                    <div className="flex flex-wrap justify-between items-start">
                        <div className={`flex justify-start my-2 ${!isMiniCart && 'md:my-0'} w-full md:w-[30%] ${nocontrols && 'md:w-full text-right'} ${isMiniCart ? 'md:w-full text-sm md:flex-row' : 'md:flex-col'}`}>
                            <span className="text-brandRed font-bold">£{price}</span>
                            {originalPrice &&
                                <span className={`line-through text-gray-400 ml-1 ${isMiniCart ? 'ml-1 mb-2' : 'md:ml-0'}`}>£{originalPrice}</span>
                            }
                        </div>
                        {!nocontrols &&
                            <div className={`flex justify-between items-center w-full md:w-[70%] text-gray-100 font-semibold ${isMiniCart && 'text-sm'}`}>
                                <div className="flex items-center">
                                    <div className={`flex items-center border border-gray-200 ${isMiniCart ? 'rounded-full mt2' : 'rounded-lg'}`}>
                                        <button onClick={removeItemHandler} className={`${isMiniCart ? 'px-4' : 'px-2'}`}>-</button>
                                        <span className="px-2 b-l-1 border-gray-200 border-x mt-1 mb-1">{quantity}</span>
                                        <button onClick={addItemHandler} className={`${isMiniCart ? 'px-4' : 'px-2'}`}>+</button>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={clearItemHandler} className={`text-brandRed underline text-right ${isMiniCart ? 'text-xs ml-2' : 'text-sm' }`}>remove</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProductTile
