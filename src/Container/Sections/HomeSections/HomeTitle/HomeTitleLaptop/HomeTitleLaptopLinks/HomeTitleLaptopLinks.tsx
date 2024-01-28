import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './HomeTitleLaptopLinks.scss'

interface Props {}
const HomeTitleLaptopLinks = (props: Props) => {
    return (
        <div className="laptop-solution-links">
            <Button color="success" variant="contained">
                <Link to="">Get A Quate </Link>
            </Button>
            <Link to=""> See how it works&rarr;</Link>
        </div>
    )
}
export default HomeTitleLaptopLinks
