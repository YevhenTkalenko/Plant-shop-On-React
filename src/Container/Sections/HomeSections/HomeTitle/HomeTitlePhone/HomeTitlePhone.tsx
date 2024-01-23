import { Container } from '@mui/material'
import HomeTitleImg from './HomeTitleImg/HomeTitleImg'
import HomeTitleContent from './HomeTitleContent/HomeTitleContent'
import HomeTitleLinks from './HomeTitleLinks/HomeTitleLinks'
import HomeTitleCustomers from './HomeTitleCustomers/HomeTitleCustomers'
import './HomeTitlePhone.scss'

interface Props {}
const HomeTitlePhone = (props: Props) => {
    return (
        <section className="home-solution">
            <HomeTitleImg />
            <Container className="home-solution-item">
                <HomeTitleContent />
                <HomeTitleLinks />
                <HomeTitleCustomers />
            </Container>
        </section>
    )
}
export default HomeTitlePhone
