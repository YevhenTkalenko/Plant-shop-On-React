import { useEffect, useState } from 'react'
import HeaderPhoneNavBar from './HeaderPhoneNavBar/HeaderPhoneNavBar'
import HeaderLaptopNavBar from './HeaderLaptopNavBar/HeaderLaptopNavBar'

interface Props {
    isAuthorized: boolean
}

const HeaderNavBar = ({ isAuthorized }: Props) => {
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
        <>
            {windowWidth >= 1024 ? (
                <HeaderLaptopNavBar isAuthorized={isAuthorized} />
            ) : (
                <HeaderPhoneNavBar />
            )}
        </>
    )
}
export default HeaderNavBar
