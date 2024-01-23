import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './HomeTitleLinks.scss'

interface Props {}
const HomeTitleLinks = (props: Props) => {
    return (
        <>
            <Button color="success" variant="contained">
                <Link to="/">Get A Quate</Link>
            </Button>
            <div className="home-solution-link">
                <Link to="">See how it works &rarr;</Link>
            </div>
        </>
    )
}
export default HomeTitleLinks
