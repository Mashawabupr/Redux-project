import { createSlice, configureStore } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: { show: false },
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});
let cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
  },
});
export let uiAction = uiSlice.actions;
export let cartAction = cartSlice.actions;
export let store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});
