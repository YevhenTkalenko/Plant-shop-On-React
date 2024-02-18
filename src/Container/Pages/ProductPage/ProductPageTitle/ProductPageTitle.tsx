import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'
import './ProductPageTitle.scss'

interface Props {
    productsObject?: {
        [id: number]: ProductI
    }

    id: string
}

const ProductPageTitle = ({
    productsObject = getProductsObject(PRODUCT),
    id,
}: Props) => {
    return (
        <>
            <div className="product-card-title">
                <img src={productsObject[parseInt(id!)].image} alt="" />
                <span>{productsObject[parseInt(id!)].title}</span>
            </div>
            <div>
                <p>{productsObject[parseInt(id!)].fullDesctiption}</p>
            </div>
        </>
    )
}
export default ProductPageTitle
