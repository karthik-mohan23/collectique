import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // payload = object
      const itemAddedToCart = action.payload;

      // check if item exists in cart
      const itemExistsInCart = state.cartItems.find(
        (currentItem) => currentItem._id === itemAddedToCart._id
      );

      // if item exists increase quantity
      if (itemExistsInCart) {
        itemAddedToCart.qty = action.payload.qty;
      } else {
        // add item to cart
        state.cartItems = [...state.cartItems, itemAddedToCart];
      }
    },
    removeItemsFromCart: (state, action) => {
      // payload=id
      const itemToBeRemovedId = action.payload;

      state.cartItems = state.cartItems.filter(
        (currentItem) => currentItem._id !== itemToBeRemovedId
      );
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addToCart, removeItemsFromCart } = actions;
// Export the reducer, either as a default or named export
export default reducer;

// to get total cart length
export const numberOfItemsInCart = (store) => store.cart.cartItems.length;
// calculate price
export const totalPrice = (store) =>
  store?.cart?.cartItems?.reduce((acc, item) => acc + item.qty * item.price, 0);
