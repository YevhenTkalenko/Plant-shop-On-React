import { useEffect, useState } from 'react'
import whyChooseUsImage from 'assets/images/HomeChooseUs/Phone/young-woman-taking-care-her-plants.png'
import './HomeChooseUsLogo.scss'

import whyChooseUsImageLapTop from 'assets/images/HomeChooseUs/Laptop/HomeChooseUsLP.png'

interface Props {}
const HomeChooseUsLogo = (props: Props) => {
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
        <div className="choose-us-logo">
            {windowWidth >= 1024 ? (
                <img
                    src={whyChooseUsImageLapTop}
                    alt="whyChooseUsImageLapTop"
                />
            ) : (
                <img src={whyChooseUsImage} alt="whyChooseUsImage" />
            )}
        </div>
    )
}
export default HomeChooseUsLogo
