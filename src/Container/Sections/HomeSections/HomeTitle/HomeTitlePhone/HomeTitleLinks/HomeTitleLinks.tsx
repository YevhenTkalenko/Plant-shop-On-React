import { Link } from 'react-router-dom'
import './HomeTitleLinks.scss'
import UniversalButtonLink from 'Container/Components/UniversalComponents/Buttons/UniversalButtonLink'

interface Props {}
const HomeTitleLinks = (props: Props) => {
    return (
        <>
            <UniversalButtonLink to="">GET A QUATE</UniversalButtonLink>
            <div className="home-solution-link">
                <Link to="">See how it works &rarr;</Link>
            </div>
        </>
    )
}
export default HomeTitleLinks
