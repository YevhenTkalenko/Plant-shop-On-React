import { Button } from '@mui/material'
import './PageNoFoundContent.scss'
import { Link } from 'react-router-dom'

interface Props {}
const PageNoFoundContent = (props: Props) => {
    return (
        <>
            <div className="page-found-content-container">
                <h2>404</h2>
                <h3>Opps! That page can`t be found</h3>
                <p>
                    You may have entered the wrong address or tried to find
                    information that has already been deleted
                </p>
                <Button color="success" variant="contained">
                    <Link to="/">Go to Home Page</Link>
                </Button>
            </div>
        </>
    )
}
export default PageNoFoundContent
