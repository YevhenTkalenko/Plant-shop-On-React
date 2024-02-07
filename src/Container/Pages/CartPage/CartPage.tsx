import { Container, Typography, Grid } from '@mui/material'
import CartProductList from 'Container/Components/CartProductList/CartProductList'
import CartProductListItemExtended from 'Container/Components/CartProductList/CartProductListItemExtended'
import CartTotal from 'Container/Components/CartTotal/CartTotal'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }
    deleteProductFromCart: (id: number) => void
}

const CartPage = ({ ProductsInCart, deleteProductFromCart }: Props) => {
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
                        deleteProductFromCart={deleteProductFromCart}
                        ProductsInCart={ProductsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </Grid>
                <div>
                    Total price for pay:{' '}
                    <CartTotal ProductsInCart={ProductsInCart} />
                </div>
            </Container>
        </>
    )
}
export default CartPage
