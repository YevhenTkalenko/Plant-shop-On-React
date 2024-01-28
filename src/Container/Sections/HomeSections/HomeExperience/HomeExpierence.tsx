import { Container } from '@mui/material'

import HomeExpierenceLogo from './HomeExpierenceLogo/HomeExpierenceLogo'
import './HomeExperience.scss'
import HomeExpierenceContent from './HomeExpierenceContent/HomeExpierenceContent'

interface Props {}
const HomeExpierence = (props: Props) => {
    return (
        <Container className="home-expierence-container">
            <HomeExpierenceLogo />
            <HomeExpierenceContent />
        </Container>
    )
}
export default HomeExpierence
