import { Container } from '@mui/material'
import HomeStaffTitle from './HomeStaffTitle/HomeStaffTitle'
import HomeStaffSwiper from './HomeStaffSwiper/HomeStaffSwiper'

interface Props {}
const HomeStaff = (props: Props) => {
    return (
        <Container>
            <HomeStaffTitle />
            <HomeStaffSwiper />
        </Container>
    )
}
export default HomeStaff
