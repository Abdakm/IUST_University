import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find(
        item => item.id_available_material === action.payload.id_available_material
      );
      if (exists) {
        toast.error('Course already in cart');
        return;
      }
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id_available_material !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;