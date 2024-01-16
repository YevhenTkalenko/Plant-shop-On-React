import { Link } from 'react-router-dom'
import './HeaderDropDownMenu.scss'

interface Props {
    isOpenNavBar: boolean
}

const HeaderDropDownMenu = ({ isOpenNavBar }: Props) => {
    return (
        <ul className={`dropdown-menu ${isOpenNavBar ? 'active' : ''} `}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Company</Link>
            </li>
            <li>
                <Link to="/">Servises</Link>
            </li>
            <li>
                <Link to="/">Projects</Link>
            </li>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/">Contacts</Link>
            </li>
        </ul>
    )
}
export default HeaderDropDownMenu
