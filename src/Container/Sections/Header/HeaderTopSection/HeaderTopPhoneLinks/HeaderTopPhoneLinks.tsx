import { Link } from 'react-router-dom'
import HeaderTopImg from '../../../../../assets/images/HeaderImage/HeaderTopImg/HeaderTopImg'

interface Props {}
const HeaderTopPhoneLinks = (props: Props) => {
    return (
        <div className="header-links">
            {HeaderTopImg.map((image, ind) => {
                return (
                    <button key={ind}>
                        <Link
                            to="/"
                            style={{
                                display: 'block',
                            }}
                        >
                            <img src={image} alt="img" />
                        </Link>
                    </button>
                )
            })}
        </div>
    )
}
export default HeaderTopPhoneLinks
