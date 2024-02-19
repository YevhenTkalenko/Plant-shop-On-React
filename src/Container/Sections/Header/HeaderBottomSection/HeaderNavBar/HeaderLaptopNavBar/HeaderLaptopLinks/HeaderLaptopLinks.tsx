import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface Props {}
const HeaderLaptopLinks = (props: Props) => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <ul className="header-laptop-list">
            <li>
                <NavLink to="/">Home</NavLink>
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
            <li>
                <NavLink to="/cart">Cart</NavLink>
            </li>
        </ul>
    )
}
export default HeaderLaptopLinks
