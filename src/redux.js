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
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      let item = action.payload;
      let indexItem = state.items.find((el) => el.id === item.id);
      if (indexItem) {
        indexItem.quantity++;
        indexItem.total += indexItem.price;
      } else {
        state.items.push({
          id: item.id,
          price: item.price,
          total: item.price,
          quantity: 1,
          title: item.title,
        });
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      let id = action.payload;
      let indexItem = state.items.find((el) => el.id === id);

      if (indexItem.quantity === 1) {
        state.items = state.items.filter((el) => el.id !== id);
      }
      indexItem.quantity--;
      indexItem.total -= indexItem.price;
      state.totalQuantity--;
    },
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
