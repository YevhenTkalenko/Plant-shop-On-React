import { TextField, Button } from '@mui/material'
import './AuthForm.scss'
import { useContext } from 'react'
import { AuthContext } from 'Container/context/AuthContext'

interface Props {}

const AuthForm = (props: Props) => {
    const context = useContext(AuthContext)
    if (context !== null) {
        const { userData, isUserAuthorizes, validUserData } = context
        return (
            <form className="auth-form" onSubmit={validUserData}>
                <TextField
                    type="email"
                    name="email"
                    variant="outlined"
                    color="success"
                    label="Email"
                    margin="normal"
                    value={userData.email}
                    onChange={isUserAuthorizes}
                />
                <TextField
                    type="password"
                    name="password"
                    variant="outlined"
                    color="success"
                    label="Password"
                    margin="normal"
                    value={userData.password}
                    onChange={isUserAuthorizes}
                />
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

    return <span>Something went wrong</span>
}
export default AuthForm
