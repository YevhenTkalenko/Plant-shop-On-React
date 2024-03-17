import { TextField, Button } from '@mui/material'
import './AuthForm.scss'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'Container/Global/Redux/hooks'
import {
    changeUserData,
    userDataValidation,
} from 'Container/Global/Redux/userDataReducer'
import { useNavigate } from 'react-router-dom'

interface Props {}

const AuthForm = (props: Props) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigate()
    const { email, password } = useAppSelector((state) => state.userDataState)

    const userFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        dispatch(changeUserData({ name, value }))
    }

    const validUserData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(userDataValidation({ navigation }))
        localStorage.setItem('email', email)
    }

    return (
        <form className="auth-form" onSubmit={validUserData}>
            <TextField
                type="email"
                name="email"
                variant="outlined"
                color="success"
                label="Email"
                margin="normal"
                value={email}
                onChange={userFormData}
            />
            {/* {context!.erorrAuth.emailStatus ? (
                <div>{context!.erorrAuth.email}</div>
            ) : (
                ''
            )} */}
            <TextField
                type="password"
                name="password"
                variant="outlined"
                color="success"
                label="Password"
                margin="normal"
                value={password}
                onChange={userFormData}
            />
            {/* {context!.erorrAuth.passwordStatus ? (
                <div>{context!.erorrAuth.password}</div>
            ) : (
                ''
            )} */}
            <div className="auth-btns">
                <Button variant="contained" color="success" type="submit">
                    Log In
                </Button>
                <Button variant="contained" color="success">
                    Forget your password?
                </Button>
            </div>
        </form>
    )
}
export default AuthForm
