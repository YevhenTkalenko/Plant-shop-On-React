import { Container, Card, Grid } from '@mui/material'
import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: ProductI
    }
}

const CartPage = ({
    ProductsInCart,
    productsObject = getProductsObject(PRODUCT),
}: Props) => {
    //prettier-ignore
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    {Object.keys(ProductsInCart).map((productId, index) => {
                        return (
                            <>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card>
                                            <div key={index}>
                                                <div>
                                                    <img src={productsObject[parseInt(productId)].image} alt="" />
                                                </div>
                                                <div>{productsObject[parseInt(productId)].title}:{ProductsInCart[parseInt(productId)]}</div>
                                                <div>{productsObject[parseInt(productId)].price}</div>
                                                <div>{productsObject[parseInt(productId)].price * ProductsInCart[parseInt(productId)]}</div>
                                            </div>
                                        </Card>
                                    </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}
export default CartPage
