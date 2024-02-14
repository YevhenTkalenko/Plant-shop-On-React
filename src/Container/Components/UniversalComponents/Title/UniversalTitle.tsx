import { Container } from '@mui/material'
import './UniversalTitle.scss'

interface Props {
    children: React.ReactNode
}

const UniversalTitle = ({ children }: Props) => {
    return (
        <>
            <div className="universal-title">
                <Container className="universal-container">
                    {children}
                </Container>
            </div>
        </>
    )
}
export default UniversalTitle
