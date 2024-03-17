import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./likeReducer";
import cartReducer from "./cartReducer";
import userDataReducer from "./userDataReducer";
import checkOutDataReducer from "./checkOutDataReducer";

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: cartReducer,
        userDataState: userDataReducer,
        checkOutData: checkOutDataReducer

    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch