import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'
import './ProductPageDetails.scss'

interface Props {
    productsObject?: {
        [id: number]: ProductI
    }

    id: string
}
const ProductPageDetails = ({
    productsObject = getProductsObject(PRODUCT),
    id,
}: Props) => {
    return (
        <>
            <div className="product-card-details">
                <h4>Details</h4>
                <ul className="product-card-list">
                    <li>
                        <span>Price:</span>
                        {productsObject[parseInt(id!)].price} $
                    </li>
                    <li>
                        <span>Specialists:</span>
                        {productsObject[parseInt(id!)].countOfSpecialists}{' '}
                        person(s)
                    </li>
                    <li>
                        <span>How much it`s doing:</span>{' '}
                        {productsObject[parseInt(id!)].duration} hour(s)
                    </li>
                    <li>
                        <span>Difficult:</span>
                        {productsObject[parseInt(id!)].difficult}
                    </li>
                </ul>
            </div>
        </>
    )
}
export default ProductPageDetails
