import { Container } from '@mui/material'
import ServisesSection from 'Container/Sections/Servises/ServisesSection'

interface Props {
    addProductToCart: (count: number, price: number) => void
}

const ServisesPage = ({ addProductToCart }: Props) => {
    return (
        <Container>
            <ServisesSection addProductToCart={addProductToCart} />
        </Container>
    )
}
export default ServisesPage
