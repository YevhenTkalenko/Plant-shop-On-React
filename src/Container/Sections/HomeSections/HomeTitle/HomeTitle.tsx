import { useEffect, useState } from 'react'
import HomeTitlePhone from './HomeTitlePhone/HomeTitlePhone'
import HomeTitleLaptop from './HomeTitleLaptop/HomeTitleLaptop'

interface Props {}
const HomeTitle = (props: Props) => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    const handleResize = () => {
        setWindowWidth((prevState) => (prevState = window.innerWidth))
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return <>{windowWidth < 1024 ? <HomeTitlePhone /> : <HomeTitleLaptop />}</>
}
export default HomeTitle
