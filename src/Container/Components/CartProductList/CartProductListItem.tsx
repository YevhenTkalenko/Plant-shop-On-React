import { ProductI } from 'utils/Servises'

interface Props {
    productCount: number
    product: ProductI
}

const CartProductListItem = ({ productCount, product }: Props) => {
    return (
        <>
            <div>
                {product.title}:{productCount}
            </div>
        </>
    )
}
export default CartProductListItem
