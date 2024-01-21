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
                <Link to="/company">Company</Link>
            </li>
            <li>
                <Link to="/servises">Servises</Link>
            </li>
            <li>
                <Link to="/progects">Projects</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    )
}
export default HeaderDropDownMenu
