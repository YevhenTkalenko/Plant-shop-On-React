import { Button } from '@mui/material'
import './HomeStaffTitle.scss'
import { Link } from 'react-router-dom'
import UniversalButtonLink from 'Container/Components/UniversalComponents/Buttons/UniversalButtonLink'

interface Props {}
const HomeStaffTitle = (props: Props) => {
    return (
        <div className="home-staff-title">
            <h3>
                Our <span>Trained Staff</span>
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                esse placeat dignissimos dicta perferendis, aspernatur
                accusantium culpa similique ducimus recusandae labore
                consequatur eligendi delectus! Maxime dignissimos eos dicta
                nostrum odio.
            </p>
            <div>
                <UniversalButtonLink to="">DISCOVER MORE</UniversalButtonLink>
            </div>
        </div>
    )
}
export default HomeStaffTitle
