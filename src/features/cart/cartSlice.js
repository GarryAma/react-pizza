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

//calculating cart
export const getTotalCart = (state) =>
  state.cart.cart.reduce((previous, current) => previous + current.quantity, 0);

//calculating total amount of the cart
export const getTotalAmount = (state) =>
  state.cart.cart.reduce((prev, current) => prev + current.totalPrice, 0);

//obtain cart array
export const getCart = (state) => state.cart.cart;

//get current item quantity( the one that user click)
export const getCurrentQuantityUserClicked = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

//getCart,getTotalCart,getTotalAmount, and if we create some more, will create performance issue in large application, we need to use reselect(take a look!!)

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

      //we can use cartSlice.casereducers
      // if (selectedItem.quantity === 0) {
      //   state.cart = state.cart.filter(
      //     (item) => item.pizzaId !== action.payload
      //   );
      // }

      if (selectedItem.quantity === 0)
        cartSlice.caseReducers.removeItem(state, action);
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
