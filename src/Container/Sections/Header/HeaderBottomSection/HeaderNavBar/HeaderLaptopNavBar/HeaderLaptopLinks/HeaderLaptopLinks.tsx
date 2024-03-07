import { AuthContext } from 'Container/context/AuthContext'
import { useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface Props {}

const HeaderLaptopLinks = (props: Props) => {
    const { pathname } = useLocation()
    const context = useContext(AuthContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <ul className="header-laptop-list">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {context!.isAuthorized ? (
                <li>
                    <NavLink to="/servises">Servises</NavLink>
                </li>
            ) : (
                ''
            )}

            <li>
                <NavLink to="/progects">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/contacts">Contacts</NavLink>
            </li>
            {context!.isAuthorized ? (
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
            ) : (
                ''
            )}
        </ul>
    )
}
export default HeaderLaptopLinks
