import { Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import './EmptyCart.scss'

interface Props {}
const EmptyCart = (props: Props) => {
    return (
        <Container>
            <h4
                style={{
                    marginBottom: '50px',
                }}
            >
                Your cart is <span>empty</span>
            </h4>
            <h4
                style={{
                    marginBottom: '50px',
                }}
            >
                Please, select the{' '}
                <Button
                    color="success"
                    variant="contained"
                    sx={{
                        padding: '0px 11px',
                    }}
                >
                    <Link to="/servises" className="empty_cart_link">
                        services
                    </Link>
                </Button>{' '}
                that <span>interest you</span>
            </h4>
        </Container>
    )
}
export default EmptyCart
