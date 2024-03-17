import { Button } from '@mui/material'
import { useAppSelector } from 'Container/Global/Redux/hooks'

import { Link } from 'react-router-dom'

interface Props {
    to: string
    children: React.ReactNode
}

const UniversalButtonLink = ({ to, children }: Props) => {
    const { status } = useAppSelector((state) => state.userDataState)

    return (
        <Button color="success" variant="contained">
            <Link to={status ? to : '/auth'}>{children}</Link>
        </Button>
    )
}
export default UniversalButtonLink
