import { createSlice } from "@reduxjs/toolkit";

const WISHLIST_INITIAL_STATE = {
  wishlistItems: JSON.parse(localStorage.getItem('wishlistItems')) || [],
};

const addWishlistItem = (wishlistItems, productToAdd) => {
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === productToAdd.id
  );

  if (existingWishlistItem) {
    return wishlistItems.map((wishlistItem) =>
      wishlistItem.id === productToAdd.id
        ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
        : wishlistItem
    );
  }

  return [...wishlistItems, { ...productToAdd, quantity: 1 }];
};

const removeWishlistItem = (wishlistItems, wishlistItemToRemove) => {
  // find the wishlist item to remove
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the wishlist
  if (existingWishlistItem.quantity === 1) {
    return wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistItemToRemove.id);
  }

  // return back wishlist items with matching wishlist item with reduced quantity
  return wishlistItems.map((wishlistItem) =>
    wishlistItem.id === wishlistItemToRemove.id
      ? { ...wishlistItem, quantity: wishlistItem.quantity - 1 }
      : wishlistItem
  );
};

const clearWishlistItem = (wishlistItems, wishlistItemToClear) =>
  wishlistItems.filter((wishlistItem) => wishlistItem.id !== wishlistItemToClear.id);


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: WISHLIST_INITIAL_STATE,
  reducers: {
    addItemToWishlist(state, action) {
      state.wishlistItems = addWishlistItem(state.wishlistItems, action.payload)
    },
    removeItemFromWishlist(state, action) {
      state.wishlistItems = removeWishlistItem(state.wishlistItems, action.payload)
    },
    clearItemFromWishlist(state, action) {
      state.wishlistItems = clearWishlistItem(state.wishlistItems, action.payload)
    },
  }
})

//replaces the action
export const { addItemToWishlist, removeItemFromWishlist, clearItemFromWishlist } = wishlistSlice.actions;

//generates the reducer
export const wishlistReducer = wishlistSlice.reducer;
