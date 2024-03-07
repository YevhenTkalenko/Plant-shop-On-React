import { Button } from '@mui/material'
import { AuthContext } from 'Container/context/AuthContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    to: string
    children: React.ReactNode
    isAuthorized?: boolean
}

const UniversalButtonLink = ({ to, children }: Props) => {
    const context = useContext(AuthContext)

    return (
        <Button color="success" variant="contained">
            <Link to={context!.isAuthorized ? to : '/auth'}>{children}</Link>
        </Button>
    )
}
export default UniversalButtonLink
