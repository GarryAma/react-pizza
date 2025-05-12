import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //payload = objectItem
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      //payload = id from where it is clicked to be removed(pizzaId)
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const selectedItem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );

      selectedItem.quantity++;

      selectedItem.totalPrice = selectedItem.quantity * selectedItem.unitPrice;
    },
    decreaseQuantity: (state, action) => {
      const selectedItem = state.cart.find(
        (item) => item.pizzaId === action.payload
      );

      selectedItem.quantity--;

      selectedItem.totalPrice = selectedItem.quantity * selectedItem.unitPrice;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
