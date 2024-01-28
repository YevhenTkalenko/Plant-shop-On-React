import { Container } from '@mui/material'
import './HomeTitleLaptop.scss'
import HomeTitleLaptopImg from './HomeTitleLaptopImg/HomeTitleLaptopImg'
import HomeTitleLaptopResults from './HomeTitleLaptopResults/HomeTitleLaptopResults'
import HomeTitleLaptopLogo from './HomeTitleLaptopLogo/HomeTitleLaptopLogo'
import HomeTitleComTitle from './HomeTitleComTitle/HomeTitleComTitle'
import HomeTitleLaptopLinks from './HomeTitleLaptopLinks/HomeTitleLaptopLinks'

interface Props {}
const HomeTitleLaptop = (props: Props) => {
    return (
        <section className="laptop-solution-section">
            <Container className="laptop-solution-container">
                <HomeTitleLaptopImg />
                <div className="laptop-solution-content">
                    <HomeTitleComTitle />
                    <HomeTitleLaptopLinks />
                    <HomeTitleLaptopResults />
                </div>
                <HomeTitleLaptopLogo />
            </Container>
        </section>
    )
}
export default HomeTitleLaptop
