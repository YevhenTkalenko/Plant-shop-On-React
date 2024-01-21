import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'
import './Header.scss'

interface Props {}
const Header = (props: Props) => {
    return (
        <header className="header-section">
            <HeaderTopSection />
            <HeaderBottomSection />
        </header>
    )
}
export default Header
