import { NavLink } from 'react-router-dom'

interface Props {}
const HeaderLaptopLinks = (props: Props) => {
    return (
        <ul className="header-laptop-list">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/company">Company</NavLink>
            </li>
            <li>
                <NavLink to="/servises">Servises</NavLink>
            </li>
            <li>
                <NavLink to="/progects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Contacts</NavLink>
            </li>
        </ul>
    )
}
export default HeaderLaptopLinks
