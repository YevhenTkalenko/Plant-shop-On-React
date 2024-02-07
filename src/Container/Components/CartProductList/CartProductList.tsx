import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'
import CartProductListItem from './CartProductListItem'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: ProductI
    }

    CartItem?: any

    deleteProductFromCart?: (id: number) => void
}

const CartProductList = ({
    CartItem = CartProductListItem,
    productsObject = getProductsObject(PRODUCT),
    ProductsInCart,
    deleteProductFromCart,
}: Props) => {
    return (
        <>
            {Object.keys(ProductsInCart).map((productId, index) => {
                return (
                    <>
                        <CartItem
                            key={index}
                            product={productsObject[parseInt(productId)]}
                            productCount={ProductsInCart[parseInt(productId)]}
                            deleteProductFromCart={deleteProductFromCart}
                        />
                    </>
                )
            })}
        </>
    )
}
export default CartProductList
