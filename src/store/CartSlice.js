import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempItems = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItems);
        toast.success(`successfully added to cart`,  {position: "bottom-left"})
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCart(state, action){
      const nextCartItems = state.cartItems.filter((cartItem) => (cartItem.id !== action.payload.id))
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      toast.error(`remove from  cart`,  {position: "bottom-left"})
    },
    decreaseCart(state, action){

      const existingItem = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (state.cartItems[existingItem].cartQuantity > 1) {
        state.cartItems[existingItem].cartQuantity -=1
      }
      else if(state.cartItems[existingItem].cartQuantity === 1){
          const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !==  action.payload.id)
          state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }
  },
});

export const { addToCart ,  removeCart , decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
  