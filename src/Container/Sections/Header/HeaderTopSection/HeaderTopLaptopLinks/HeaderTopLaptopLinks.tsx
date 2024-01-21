import location from 'assets/images/HeaderImage/HeaderTopImg/Location.svg'
import mail from 'assets/images/HeaderImage/HeaderTopImg/Mail.svg'
import phone from 'assets/images/HeaderImage/HeaderTopImg/Phone.svg'
import './HeaderTopLaptopLinks.scss'

interface Props {}
const HeaderTopLaptopLinks = (props: Props) => {
    return (
        <div className="header-top-laptop-links">
            <div>
                {' '}
                <img src={location} alt="location" />
                <span>27 Division St.New-York, NY 10002, USA</span>
            </div>
            <div>
                {' '}
                <img src={mail} alt="location" />
                <span>Solarpenal@gmail.com</span>
            </div>
            <div>
                {' '}
                <img src={phone} alt="location" />
                <span>+10284545518</span>
            </div>
        </div>
    )
}
export default HeaderTopLaptopLinks
