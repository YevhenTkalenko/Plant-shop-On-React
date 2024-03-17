import { createSlice } from "@reduxjs/toolkit";

interface UserDataI {
    status: boolean
    email: string
    password: string | number
}

export const initialState: UserDataI = {
    status: false,
    email: '',
    password: '',
}

interface ErorrAuthI {
    emailStatus: boolean
    passwordStatus: boolean
    email: string
    password: string
}

export const errorAuth: ErorrAuthI = {
    emailStatus: false,
    passwordStatus: false,
    email: 'Email error',
    password: 'Password error'

}



export const userDataReducer = createSlice({
    name: 'userDataReducer',
    initialState,
    reducers: {
        changeUserData: (state, actions) => {
            return {
                ...state,
                [actions.payload.name]: actions.payload.value
            }
        }, // user data into the input fields
        userDataValidation: (state, actions) => {

            if (state.email === '' || state.password === '') {
                return alert('Error')
            }

            actions.payload.navigation('/')

            return {
                ...state,
                email: '',
                password: '',
                status: true
            }
        }, // user data is non empty
        userLogOut: (state) => {
            if (state.status) {

                localStorage.removeItem('email')

                return {
                    ...state,
                    status: false,
                    name: '',
                    password: ''

                }
            }
        }, // log out
        isUserHaveLocalData: (state) => {
            if (localStorage.getItem('email')) {
                return {
                    ...state,
                    status: true
                }
            }
        } // is user have email in local storage
    }
})

export const { changeUserData, userDataValidation, userLogOut, isUserHaveLocalData } = userDataReducer.actions;
export default userDataReducer.reducer;