import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './HomeChooseUsContent.scss'
import CheckIcon from '@mui/icons-material/Check'
import UniversalButtonLink from 'Container/Components/UniversalComponents/Buttons/UniversalButtonLink'

interface Props {}
const HomeChooseUsContent = (props: Props) => {
    return (
        <div className="choose-us-content">
            <h3>Why choose us</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been text the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="choose-us-tags">
                <div>
                    <CheckIcon /> Proper Take Care
                </div>
                <div>
                    <CheckIcon /> Proper Take Care
                </div>
                <div>
                    <CheckIcon /> Proper Take Care
                </div>
                <div>
                    <CheckIcon /> Proper Take Care
                </div>
            </div>
            <div className="choose-us-button">
                <UniversalButtonLink to=""> DISCOVER MORE</UniversalButtonLink>
            </div>
        </div>
    )
}
export default HomeChooseUsContent
