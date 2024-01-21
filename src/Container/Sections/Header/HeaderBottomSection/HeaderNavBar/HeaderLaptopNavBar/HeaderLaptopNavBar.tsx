import { Link } from 'react-router-dom'
import HeaderLogo from '../../HeaderLogo/HeaderLogo'
import { Button } from '@mui/material'
import './HeaderLaptopNavBar.scss'
import HeaderLaptopLinks from './HeaderLaptopLinks/HeaderLaptopLinks'

interface Props {}
const HeaderLaptopNavBar = (props: Props) => {
    return (
        <div className="header-laptop-section">
            <div className="header-laptop-container">
                <HeaderLogo />
                <HeaderLaptopLinks />
                <Button color="success" variant="contained">
                    <Link to="">Call Us</Link>
                </Button>
            </div>
        </div>
    )
}
export default HeaderLaptopNavBar
