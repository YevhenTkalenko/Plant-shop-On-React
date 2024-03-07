import { Container } from '@mui/material'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import AuthForm from './AuthForm/AuthForm'
import './AuthPage.scss'
import RegistrForm from './RegistrForm/RegistrForm'

const AuthPage = () => {
    return (
        <>
            <UniversalTitle>
                <h4>Authentication</h4>
            </UniversalTitle>

            <Container className="auth-container">
                <div className="auth-sub-container">
                    <h4>
                        Please, log in to <span>your account</span>
                    </h4>
                    <AuthForm />
                    <RegistrForm />
                </div>
            </Container>
        </>
    )
}
export default AuthPage
