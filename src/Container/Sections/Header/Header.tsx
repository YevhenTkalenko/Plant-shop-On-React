import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'

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
