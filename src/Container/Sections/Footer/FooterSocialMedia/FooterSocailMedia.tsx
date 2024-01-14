import { Link } from 'react-router-dom'
import { FooterImage } from 'assets/images/FooterImage/FooterImage'
import './FooterSocailMedia.scss'

interface Props {}
const FooterSocailMedia = (props: Props) => {
    return (
        <div className="footer-social-link-container">
            {FooterImage.map((image, ind) => {
                return (
                    <Link to="/" className="footer-social-link" key={ind}>
                        <img src={image} alt="img" />
                    </Link>
                )
            })}
        </div>
    )
}
export default FooterSocailMedia
