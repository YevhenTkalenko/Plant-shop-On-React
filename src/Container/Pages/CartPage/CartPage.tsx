import { Container, Grid, Button } from '@mui/material'
import CartProductList from 'Container/Components/CartProductList/CartProductList'
import CartProductListItemExtended from 'Container/Components/CartProductList/CartProductListItemExtended'
import CartTotal from 'Container/Components/CartTotal/CartTotal'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import { useAppSelector } from 'Container/Global/Redux/hooks'
import { Link } from 'react-router-dom'
import './CartPage.scss'

interface Props {}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <UniversalTitle>
                <h4>Cart</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Velit accusantium consequatur officiis repellendus iste,
                    quia sequi voluptas suscipit cum praesentium asperiores
                    nemo. Molestiae id deserunt, exercitationem nisi minima
                    architecto est.
                </p>
            </UniversalTitle>
            <Container>
                <Grid container spacing={3}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <div className="cart-total-price">
                    <h2>
                        Total price for pay:{' '}
                        <CartTotal productsInCart={productsInCart} />$
                    </h2>
                </div>
                <Button color="success" variant="contained">
                    <Link to="/checkout">Proceed to checkout </Link>
                </Button>
            </Container>
        </>
    )
}
export default CartPage
