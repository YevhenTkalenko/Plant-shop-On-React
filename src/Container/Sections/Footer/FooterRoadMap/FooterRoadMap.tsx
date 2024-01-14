import { NavLink } from 'react-router-dom'
import './FooterRoadMap.scss'

interface Props {
    to: string
    children: React.ReactNode
}

const FooterRoadMap = ({ to, children }: Props) => {
    return (
        <>
            <button>
                <NavLink to={to}>{children}</NavLink>
            </button>
        </>
    )
}
export default FooterRoadMap
