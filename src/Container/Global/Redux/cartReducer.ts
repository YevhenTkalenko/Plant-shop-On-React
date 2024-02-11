import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";


interface cartProductsI {
    [id: number]: number
}

export const initialState: cartProductsI = {
    1: 3,
    2: 2
}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]: (state[action.payload.id] || 0) + action.payload.count
        }),

        removeProductFromCart: (state, action) => (omit(state, action.payload)),

        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.count
        })
    }
})

export default cartSlice.reducer

export const { addProductToCart, removeProductFromCart, changeProductQuantity } = cartSlice.actions;