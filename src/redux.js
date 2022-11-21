import { createSlice, configureStore } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: { show: false, notification: null },
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
let cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      //!!!!!!yessss

      state.items = action.payload.items || [];
    },
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
        /*if (!state.items) {
          state.items = [];
        }*/
      }
      indexItem.quantity--;
      indexItem.total -= indexItem.price;
      state.totalQuantity--;
    },
  },
});
export let uiAction = uiSlice.actions;
export let cartAction = cartSlice.actions;
//thunk-action creator
export let sendCartData = (cart) => {
  return (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Data is sending",
      })
    );
    fetch(
      "https://react-projects-160bb-default-rtdb.firebaseio.com/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        } else {
          dispatch(
            uiAction.showNotification({
              status: "success",
              title: "success",
              message: "Data was sent successfully ",
            })
          );
        }
      })
      .catch(() => {
        dispatch(
          uiAction.showNotification({
            status: "error",
            title: "error",
            message: "Something went wrong!",
          })
        );
      });
  };
};
export let receivedCartData = () => {
  return (dispatch) => {
    fetch("https://react-projects-160bb-default-rtdb.firebaseio.com/cart.json")
      .then((response) => response.json())
      .then((data) => dispatch(cartAction.replaceCart(data)));
  };
};
export let store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});
