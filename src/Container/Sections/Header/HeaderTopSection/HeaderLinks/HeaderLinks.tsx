import { Link } from 'react-router-dom'
import './HeaderLinks.scss'
import HeaderTopImg from '../../../../../assets/images/HeaderImage/HeaderTopImg/HeaderTopImg'

interface Props {}
const HeaderLinks = (props: Props) => {
    return (
        <div className="header-links">
            {HeaderTopImg.map((image, ind) => {
                return (
                    <button key={ind}>
                        <Link to="/">
                            <img src={image} alt="img" />
                        </Link>
                    </button>
                )
            })}
        </div>
    )
}
export default HeaderLinks
