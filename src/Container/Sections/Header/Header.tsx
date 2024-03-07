import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'

interface Props {}

const Header = (props: Props) => {
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
