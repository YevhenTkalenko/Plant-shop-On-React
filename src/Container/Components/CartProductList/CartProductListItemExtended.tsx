import { CardContent, Grid, Card, CardActions } from '@mui/material'
import { ProductI } from 'utils/Servises'
import cancel from 'assets/images/HeaderImage/HeaderBottomImg/cancel.svg'
import Quantity from '../Quantity/Quantity'
import { useAppDispatch } from 'Container/Global/Redux/hooks'
import {
    changeProductQuantity,
    removeProductFromCart,
} from 'Container/Global/Redux/cartReducer'

interface Props {
    product: ProductI
    productCount: number
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispatch()

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
                    <Quantity
                        count={productCount}
                        onIncrement={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        onDecrement={() =>
                            productCount <= 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        minCount={0}
                    />
                    <CardActions>
                        <button
                            onClick={() =>
                                dispatch(removeProductFromCart(product.id))
                            }
                        >
                            <img src={cancel} alt="" />
                        </button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
