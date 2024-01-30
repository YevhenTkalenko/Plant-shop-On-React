import { Button } from '@mui/material'
import './HomeStaffTitle.scss'
import { Link } from 'react-router-dom'

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
                <Button color="success" variant="contained">
                    <Link to="">Discover More</Link>
                </Button>
            </div>
        </div>
    )
}
export default HomeStaffTitle
