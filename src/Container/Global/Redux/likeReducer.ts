import { createSlice } from "@reduxjs/toolkit";


interface likeProductsI {
    [id: number]: boolean
}

export const initialState: likeProductsI = {
    1: true,
    2: true
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true
        }),

        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    }
})

export default likeSlice.reducer

export const { addLike, removeLike } = likeSlice.actions;