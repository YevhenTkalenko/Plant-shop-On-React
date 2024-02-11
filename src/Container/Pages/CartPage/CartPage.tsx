import { Container, Typography, Grid } from '@mui/material'
import CartProductList from 'Container/Components/CartProductList/CartProductList'
import CartProductListItemExtended from 'Container/Components/CartProductList/CartProductListItemExtended'
import CartTotal from 'Container/Components/CartTotal/CartTotal'
import { useAppSelector } from 'Container/Global/Redux/hooks'

interface Props {}

const CartPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <Container>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        marginBottom: '30px',
                    }}
                >
                    Cart
                </Typography>
                <Grid container spacing={3}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <div>
                    Total price for pay:{' '}
                    <CartTotal productsInCart={productsInCart} />
                </div>
            </Container>
        </>
    )
}
export default CartPage
