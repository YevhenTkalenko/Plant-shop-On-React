import './HeaderBottomSection.scss'
import HeaderNavBar from './HeaderNavBar/HeaderNavBar'

interface Props {
    isAuthorized:boolean
}

const HeaderBottomSection = ({isAuthorized}: Props) => {
    return (
        <div
            className="header-bottom-section"
            style={{
                position: 'relative',
            }}
        >
            <HeaderNavBar isAuthorized={isAuthorized}/>
        </div>
    )
}
export default HeaderBottomSection
