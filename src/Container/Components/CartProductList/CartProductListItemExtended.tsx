import { CardContent, Grid, Card } from '@mui/material'
import { ProductI } from 'utils/Servises'
import cancel from 'assets/images/HeaderImage/HeaderBottomImg/cancel.svg'

interface Props {
    product: ProductI
    productCount: number
    deleteProductFromCart: (id: number) => void
}
const CartProductListItemExtended = ({
    product,
    productCount,
    deleteProductFromCart,
}: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <div>
                        <button
                            onClick={() => deleteProductFromCart(product.id)}
                        >
                            <img src={cancel} alt="" />
                        </button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
