import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { value: [] },
    reducers: {
        addToCart: (state, action) => {
            const findDuplicate = state.value.find(product => product.id === action.payload.id);
            if (!findDuplicate) {
                state.value = [...state.value, action.payload];
            }
        },
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;