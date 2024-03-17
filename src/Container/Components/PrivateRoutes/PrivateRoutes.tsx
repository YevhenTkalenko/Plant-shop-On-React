import { useAppSelector } from 'Container/Global/Redux/hooks'
import { Navigate } from 'react-router-dom'

interface Props {
    children: React.ReactNode
}
const PrivateRoutes = ({ children }: Props) => {
    const { status } = useAppSelector((state) => state.userDataState)

    if (!status) {
        return <Navigate to="/auth" replace={true} />
    }

    return <>{children}</>
}
export default PrivateRoutes
