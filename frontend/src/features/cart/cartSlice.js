import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("orderDetails")
  ? JSON.parse(localStorage.getItem("orderDetails"))
  : {
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "Razorpay",
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
        localStorage.setItem("orderDetails", JSON.stringify(state));
      } else {
        // add item to cart
        state.cartItems = [...state.cartItems, itemAddedToCart];
        localStorage.setItem("orderDetails", JSON.stringify(state));
      }
    },
    removeItemsFromCart: (state, action) => {
      // payload=id
      const itemToBeRemovedId = action.payload;

      state.cartItems = state.cartItems.filter(
        (currentItem) => currentItem._id !== itemToBeRemovedId
      );
      localStorage.setItem("orderDetails", JSON.stringify(state));
    },
    saveShippingAddress: (state, action) => {
      // payload = object
      const address = action.payload;
      if (address) {
        state.shippingAddress = address;
        localStorage.setItem("orderDetails", JSON.stringify(state));
      }
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addToCart, removeItemsFromCart, saveShippingAddress } = actions;
// Export the reducer, either as a default or named export
export default reducer;

// to get total cart length
export const numberOfItemsInCart = (store) => store.cart.cartItems.length;
// calculate price
export const totalPrice = (store) =>
  store?.cart?.cartItems?.reduce((acc, item) => acc + item.qty * item.price, 0);
