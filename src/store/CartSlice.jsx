import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push({
        ...action.payload,
        count: 1,
      });
    },

    incrementItem: (state, action) => {
      const obj = state.items.find((item) => item.id === action.payload.id);

      if (obj) {
        obj.count += 1;
      }
    },

    decrementItem: (state, action) => {
      const obj = state.items.find((item) => item.id === action.payload.id);

      if (obj) {
        obj.count -= 1;

        if (obj.count === 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id,
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, incrementItem, decrementItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
