import HeaderLogo from '../../HeaderLogo/HeaderLogo'
import { Container } from '@mui/material'
import './HeaderLaptopNavBar.scss'
import HeaderLaptopLinks from './HeaderLaptopLinks/HeaderLaptopLinks'
import UniversalButtonLink from 'Container/Components/UniversalComponents/Buttons/UniversalButtonLink'

interface Props {
    isAuthorized: boolean
}

const HeaderLaptopNavBar = ({ isAuthorized }: Props) => {
    return (
        <div className="header-laptop-section">
            <Container className="header-laptop-container">
                <HeaderLogo />
                <HeaderLaptopLinks isAuthorized={isAuthorized} />
                <UniversalButtonLink to="">Call Us</UniversalButtonLink>
            </Container>
        </div>
    )
}
export default HeaderLaptopNavBar
