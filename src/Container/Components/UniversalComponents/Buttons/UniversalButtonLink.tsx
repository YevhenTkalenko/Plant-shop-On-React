import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
    to: string
    children: React.ReactNode
}

const UniversalButtonLink = ({ to, children }: Props) => {
    return (
        <Button color="success" variant="contained">
            <Link to={to}>{children}</Link>
        </Button>
    )
}
export default UniversalButtonLink
