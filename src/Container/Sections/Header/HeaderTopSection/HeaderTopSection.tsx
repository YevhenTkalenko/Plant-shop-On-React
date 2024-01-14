import HeaderLang from './HeaderLang/HeaderLang'
import HeaderLinks from './HeaderLinks/HeaderLinks'
import './HeaderTopSection.scss'

interface Props {}
const HeaderTopSection = (props: Props) => {
    return (
        <div className="header-top-section">
            <HeaderLinks />
            <HeaderLang />
        </div>
    )
}
export default HeaderTopSection
