import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'
import CartProductListItem from './CartProductListItem'

interface Props {
    productsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: ProductI
    }

    CartItem?: any
}

const CartProductList = ({
    CartItem = CartProductListItem,
    productsObject = getProductsObject(PRODUCT),
    productsInCart,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId, index) => {
                return (
                    <>
                        <CartItem
                            key={index}
                            product={productsObject[parseInt(productId)]}
                            productCount={productsInCart[parseInt(productId)]}
                        />
                    </>
                )
            })}
        </>
    )
}
export default CartProductList
