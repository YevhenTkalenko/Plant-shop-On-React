import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'

const Header = () => {
    return (
        <header
            className="header-section"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 3,
            }}
        >
            <HeaderTopSection />
            <HeaderBottomSection />
        </header>
    )
}
export default Header
