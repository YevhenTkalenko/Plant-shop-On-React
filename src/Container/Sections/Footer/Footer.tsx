import { Container } from '@mui/material'
import './Footer.scss'
import FooterExtendInfo from './FooterExtendInfo/FooterExtendInfo'
import FooterForm from './FooterForm/FooterForm'
import FooterRoadMap from './FooterRoadMap/FooterRoadMap'
import FooterTitle from './FooterTitle/FooterTitle'
import UpFooter from './UpFooter/UpFooter'

interface Props {}

const Footer = (props: Props) => {
    return (
        <footer className="footer-section">
            <UpFooter />
            <Container className="footer-container">
                <FooterTitle />
                <FooterForm />
                <FooterExtendInfo />
                <div className="footer-down-links">
                    <FooterRoadMap to="/">Privace Police</FooterRoadMap>
                    <FooterRoadMap to="/">Site map</FooterRoadMap>
                    <FooterRoadMap to="/">Terms of Use</FooterRoadMap>
                </div>
            </Container>
        </footer>
    )
}
export default Footer
