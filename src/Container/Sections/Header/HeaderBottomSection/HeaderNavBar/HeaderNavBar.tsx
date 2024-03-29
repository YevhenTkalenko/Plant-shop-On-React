import { useEffect, useState } from 'react'
import HeaderPhoneNavBar from './HeaderPhoneNavBar/HeaderPhoneNavBar'
import HeaderLaptopNavBar from './HeaderLaptopNavBar/HeaderLaptopNavBar'

interface Props {}

const HeaderNavBar = (props: Props) => {
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
                <HeaderLaptopNavBar />
            ) : (
                <HeaderPhoneNavBar />
            )}
        </>
    )
}
export default HeaderNavBar
