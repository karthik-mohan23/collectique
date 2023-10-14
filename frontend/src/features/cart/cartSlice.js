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

      const { user, rating, numReviews, reviews, assured, ...item } =
        action.payload;

      // check if item exists in cart
      const itemExistsInCartIndex = state.cartItems.findIndex(
        (currentItem) => currentItem._id === item._id
      );

      // If item exists in the cart, update the quantity
      if (itemExistsInCartIndex !== -1) {
        state.cartItems[itemExistsInCartIndex].qty = action.payload.qty;
      } else {
        // add item to cart
        state.cartItems = [...state.cartItems, item];
      }
      localStorage.setItem("orderDetails", JSON.stringify(state));
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
// shipping address
export const placeToDeliver = (store) => store.cart.shippingAddress;
