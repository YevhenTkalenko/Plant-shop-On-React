import { Link } from 'react-router-dom'
import HeaderLogo from '../../HeaderLogo/HeaderLogo'
import { Button, Container } from '@mui/material'
import './HeaderLaptopNavBar.scss'
import HeaderLaptopLinks from './HeaderLaptopLinks/HeaderLaptopLinks'

interface Props {}
const HeaderLaptopNavBar = (props: Props) => {
    return (
        <div className="header-laptop-section">
            <Container className="header-laptop-container">
                <HeaderLogo />
                <HeaderLaptopLinks />
                <Button color="success" variant="contained">
                    <Link to="/">Call Us</Link>
                </Button>
            </Container>
        </div>
    )
}
export default HeaderLaptopNavBar
