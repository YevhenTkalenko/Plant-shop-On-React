import { TextField, Button } from '@mui/material'
import './AuthForm.scss'

interface Props {}
const AuthForm = (props: Props) => {
    return (
        <form className="auth-form">
            <TextField
                type="email"
                name="email"
                variant="outlined"
                color="success"
                label="Email"
                margin="normal"
            />
            <TextField
                type="password"
                name="password"
                variant="outlined"
                color="success"
                label="Password"
                margin="normal"
            />
            <div className="auth-btns">
                <Button variant="contained" color="success">
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
