import { useContext, useEffect, useState } from 'react'
import HeaderTopPhoneLinks from './HeaderTopPhoneLinks/HeaderTopPhoneLinks'
import './HeaderTopSection.scss'
import HeaderTopLaptopLinks from './HeaderTopLaptopLinks/HeaderTopLaptopLinks'
import { Button, Container } from '@mui/material'
import CartHeader from 'Container/Components/CartHeader/CartHeader'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { AuthContext } from 'Container/context/AuthContext'

interface Props {}

const HeaderTopSection = (props: Props) => {
    const context = useContext(AuthContext)

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    const handleResize = () => {
        setWindowWidth((prevState) => {
            return (prevState = window.innerWidth)
        })
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className="header-top-section">
            <Container className="header-top-container">
                <div>
                    {windowWidth >= 1024 ? (
                        <HeaderTopLaptopLinks />
                    ) : (
                        <HeaderTopPhoneLinks />
                    )}
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <CartHeader />
                    <Button onClick={context!.userLogOut}>
                        <Link
                            to="/auth"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {context?.isAuthorized ? (
                                <>
                                    {windowWidth >= 1024 ? 'Log Out' : ''}
                                    <LogoutIcon
                                        sx={{
                                            color: 'white',
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    {windowWidth >= 1024 ? 'Log In' : ''}
                                    <LoginIcon
                                        sx={{
                                            color: 'white',
                                        }}
                                    />
                                </>
                            )}
                        </Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}
export default HeaderTopSection
