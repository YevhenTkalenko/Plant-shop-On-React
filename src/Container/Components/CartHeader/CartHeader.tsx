import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }

    productsObject?: {
        [id: number]: ProductI
    }
}

const CartHeader = ({
    ProductsInCart,
    productsObject = getProductsObject(PRODUCT),
}: Props) => {
    return (
        <>
            <div style={{ color: 'white' }}>
                {Object.keys(ProductsInCart).map((productId, index) => {
                    return (
                        <>
                            <div style={{ marginRight: '10px' }} key={index}>
                                {productsObject[parseInt(productId)].title}:
                                {ProductsInCart[parseInt(productId)]}
                            </div>
                        </>
                    )
                })}
                <div>
                    Total:
                    {Object.keys(ProductsInCart).reduce((total, productId) => {
                        return (
                            total +
                            productsObject[parseInt(productId)].price *
                                ProductsInCart[parseInt(productId)]
                        )
                    }, 0)}
                </div>
            </div>
        </>
    )
}
export default CartHeader
