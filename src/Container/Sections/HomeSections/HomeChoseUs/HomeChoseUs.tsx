import { Container } from '@mui/material'

import './HomeChoseUs.scss'
import HomeChooseUsLogo from './HomeChooseUsLogo/HomeChooseUsLogo'
import HomeChooseUsContent from './HomeChooseUsContent/HomeChooseUsContent'

interface Props {}
const HomeChoseUs = (props: Props) => {
    return (
        <section className="choose-us-section">
            <Container className="choose-us-container">
                <HomeChooseUsLogo />
                <HomeChooseUsContent />
            </Container>
        </section>
    )
}
export default HomeChoseUs
