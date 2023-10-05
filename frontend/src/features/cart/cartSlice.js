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

      if (itemAddedToCart) {
        console.log("itemAddedToCart", itemAddedToCart);
      }
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addToCart } = actions;
// Export the reducer, either as a default or named export
export default reducer;
