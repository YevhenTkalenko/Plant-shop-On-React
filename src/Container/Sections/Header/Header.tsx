import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'

interface Props {
    isAuthorized: boolean
}

const Header = ({isAuthorized}: Props) => {
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
            <HeaderBottomSection isAuthorized={isAuthorized}/>
        </header>
    )
}
export default Header
