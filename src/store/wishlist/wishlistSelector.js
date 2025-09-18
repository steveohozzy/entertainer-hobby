import { createSelector } from 'reselect';

const selectWishlistReducer = (state) => state.wishlist;

export const selectIsCartOpen = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.isCartOpen
);

export const selectWishlistItems = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.wishlistItems
);

export const selectWishlistTotal = createSelector([selectWishlistItems], (wishlistItems) =>
  wishlistItems.reduce(
    (total, wishlistItem) => total + wishlistItem.quantity * wishlistItem.price,
    0
  )
);

export const selectWishlistCount = createSelector([selectWishlistItems], (wishlistItems) =>
  wishlistItems.reduce((total, wishlistItem) => total + wishlistItem.quantity, 0)
);