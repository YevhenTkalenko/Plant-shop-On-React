import PRODUCT, { getProductsObject, ProductI } from 'utils/Servises'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: ProductI
    }
}

const CartTotal = ({
    ProductsInCart,
    productsObject = getProductsObject(PRODUCT),
}: Props) => {
    return (
        <>
            {Object.keys(ProductsInCart).reduce((total, productId) => {
                return (
                    total +
                    productsObject[parseInt(productId)].price *
                        ProductsInCart[parseInt(productId)]
                )
            }, 0)}
        </>
    )
}
export default CartTotal
