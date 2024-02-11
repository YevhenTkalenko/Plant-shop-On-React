import PRODUCT, { getProductsObject, ProductI } from 'utils/Servises'

interface Props {
    productsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: ProductI
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(PRODUCT),
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).reduce((total, productId) => {
                return (
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)]
                )
            }, 0)}
        </>
    )
}
export default CartTotal
