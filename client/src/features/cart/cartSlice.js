import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

    },
  },
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;