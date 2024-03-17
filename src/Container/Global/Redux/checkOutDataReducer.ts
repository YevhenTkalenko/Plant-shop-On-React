import { createSlice } from "@reduxjs/toolkit";

interface Order {
    [name: string]: string | boolean
    surname: string
    email: string
    phone: string
    city: string
    adress: string
    status: boolean
    isOrderSend: boolean
}



export const initialState: Order = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    adress: '',
    status: false,
    isOrderSend: false
}



export const checkOutDataReducer = createSlice({
    name: 'checkOutData',
    initialState,
    reducers: {
        changeCheckOutData: (state, actions) => ({
            ...state,
            [actions.payload.name]: actions.payload.value
        }),
        verifyCheckOutData: (state) => {
            if (Object.keys(state).some((el) => state[el] === '')) {
                return {
                    ...state,
                    status: false
                }
            }
            return {
                ...state,
                status: true
            }
        },
        onSendCheckOutData: (state) => ({
            ...state,
            isOrderSend: true,
        }),
        onSendNewCheckOutData: (state) => ({
            ...state,
            name: '',
            surname: '',
            email: '',
            phone: '',
            city: '',
            adress: '',
            status: false,
            isOrderSend: false
        })
    },
})


export const { changeCheckOutData, verifyCheckOutData, onSendCheckOutData, onSendNewCheckOutData } = checkOutDataReducer.actions
export default checkOutDataReducer.reducer