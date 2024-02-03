import './HomeExpierenceLogo.scss'
import bigPhoneImg from 'assets/images/HomeExpierenceImage/Phone/medium-shot-man-looking-plant.png'
import bigLaptopImg from 'assets/images/HomeExpierenceImage/Laptop/HomeExpierLP.png'
import { useEffect, useState } from 'react'

interface Props {}
const HomeExpierenceLogo = (props: Props) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    const handleResize = () => {
        setWindowWidth((prevState) => (prevState = window.innerWidth))
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div className="home-expierence-logo">
            {windowWidth >= 1024 ? (
                <img src={bigLaptopImg} alt="bigLaptopImg" />
            ) : (
                <img src={bigPhoneImg} alt="bigPhoneImg" />
            )}
        </div>
    )
}
export default HomeExpierenceLogo
