import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {

    addItems: (state, action) => {
        //directly modifing the state or mutatung the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});


export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
