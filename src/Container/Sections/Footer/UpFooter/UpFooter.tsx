import './UpFooter.scss'
import UniversalButtonLink from 'Container/Components/UniversalComponents/Buttons/UniversalButtonLink'

interface Props {}
const UpFooter = (props: Props) => {
    return (
        <div className="up-footer">
            <div>
                <h2>
                    We Have <span>Solutions</span> For Your <span>Garden</span>
                </h2>
                <UniversalButtonLink to=""> GET A QUATE</UniversalButtonLink>
            </div>
        </div>
    )
}
export default UpFooter
