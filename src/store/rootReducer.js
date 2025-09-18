import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cartReducer';
import { wishlistReducer } from './wishlist/wishlistReducer';
import { accountReducer } from './account/accountReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  account: accountReducer
});