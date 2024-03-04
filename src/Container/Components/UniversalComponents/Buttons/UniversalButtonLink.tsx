import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
    to: string
    children: React.ReactNode
    isAuthorized?: boolean
}

const UniversalButtonLink = ({ to, children, isAuthorized }: Props) => {
    return (
        <Button color="success" variant="contained">
            <Link to={isAuthorized ? to : '/auth'}>{children}</Link>
        </Button>
    )
}
export default UniversalButtonLink
