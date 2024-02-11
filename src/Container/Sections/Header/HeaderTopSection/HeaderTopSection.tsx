import { useEffect, useState } from 'react'
import HeaderLang from './HeaderLang/HeaderLang'
import HeaderTopPhoneLinks from './HeaderTopPhoneLinks/HeaderTopPhoneLinks'
import './HeaderTopSection.scss'
import HeaderTopLaptopLinks from './HeaderTopLaptopLinks/HeaderTopLaptopLinks'
import { Container } from '@mui/material'
import CartHeader from 'Container/Components/CartHeader/CartHeader'

const HeaderTopSection = () => {
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
                {windowWidth >= 1024 ? (
                    <HeaderTopLaptopLinks />
                ) : (
                    <HeaderTopPhoneLinks />
                )}
                <HeaderLang />
                <CartHeader />
            </Container>
        </div>
    )
}
export default HeaderTopSection
