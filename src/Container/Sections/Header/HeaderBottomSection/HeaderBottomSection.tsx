import './HeaderBottomSection.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'

interface Props {}

const HeaderBottomSection = (props: Props) => {
    return (
        <div className="header-bottom-section">
            <HeaderLogo />
            <HeaderNavBar />
        </div>
    )
}
export default HeaderBottomSection
