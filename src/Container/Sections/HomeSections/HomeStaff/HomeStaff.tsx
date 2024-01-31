import { Container } from '@mui/material'
import HomeStaffTitle from './HomeStaffTitle/HomeStaffTitle'
import HomeStaffSwiper from './HomeStaffSwiper/HomeStaffSwiper'
import { useEffect, useState } from 'react'
import HomeStaffTeamCards from './HomeStaffTeamCards/HomeStaffTeamCards'

const HomeStaff = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    const resizeWindow = () => {
        setWindowWidth((prevState) => {
            return (prevState = window.innerWidth)
        })
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWindow)
    }, [])

    return (
        <Container>
            <HomeStaffTitle />
            {windowWidth >= 1024 ? <HomeStaffTeamCards /> : <HomeStaffSwiper />}
        </Container>
    )
}
export default HomeStaff
