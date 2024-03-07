import './HeaderBottomSection.scss'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'

interface Props {}

const HeaderBottomSection = (props: Props) => {
    return (
        <div
            className="header-bottom-section"
            style={{
                position: 'relative',
            }}
        >
            <HeaderNavBar />
        </div>
    )
}
export default HeaderBottomSection
