import { ProductI } from 'utils/Servises'
import './CartProductListItem.scss'

interface Props {
    productCount: number
    product: ProductI
}

const CartProductListItem = ({ productCount, product }: Props) => {
    return (
        <>
            <div className="product-list-item">
                <span>{product.title}:</span>
                <span>{productCount}</span>
                <img src={product.image} alt="" />
            </div>
        </>
    )
}
export default CartProductListItem
