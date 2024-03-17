import { createSlice } from "@reduxjs/toolkit";

interface UserDataI {
    status: boolean
    email: string
    password: string | number
    errors: {
        emailError: string
        emailErrorStatus: boolean
        passwordError: string
        passwordErrorStatus: boolean
    }
}

export const initialState: UserDataI = {
    status: false,
    email: '',
    password: '',
    errors: {
        emailError: 'Empty email',
        emailErrorStatus: false,
        passwordError: 'Empty passsword',
        passwordErrorStatus: false
    }
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

            if (state.email === '') {
                return {
                    ...state,
                    errors: {
                        ...state.errors,
                        emailErrorStatus: true
                    }
                }
            }

            if (state.password === '') {
                return {
                    ...state,
                    errors: {
                        ...state.errors,
                        passwordErrorStatus: true
                    }
                }
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