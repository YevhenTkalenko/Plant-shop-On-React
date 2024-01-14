import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'
import './Header.scss'

interface Props {}
const Header = (props: Props) => {
    return (
        <header className="header-section">
            <div className="header-container">
                <HeaderTopSection />
                <HeaderBottomSection />
            </div>
        </header>
    )
}
export default Header
