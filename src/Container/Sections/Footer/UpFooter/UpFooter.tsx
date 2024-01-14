import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './UpFooter.scss'

interface Props {}
const UpFooter = (props: Props) => {
    return (
        <div className="up-footer">
            <div>
                <h2>
                    We Have <span>Solutions</span> For Your <span>Garden</span>
                </h2>
                <Button color="success" variant="contained">
                    <NavLink to="/">Get A Quate</NavLink>
                </Button>
            </div>
        </div>
    )
}
export default UpFooter
