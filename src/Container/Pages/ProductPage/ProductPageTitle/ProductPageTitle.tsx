import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'
import './ProductPageTitle.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

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
    const navigate = useNavigate()

    const handleNextProduct = () => {
        navigate(`/product/${+id! + 1}`)
    }

    const handlePrevProduct = () => {
        navigate(`/product/${+id! - 1}`)
    }
    return (
        <>
            <div className="product-card-title">
                <Button
                    color="success"
                    variant="contained"
                    onClick={handlePrevProduct}
                    disabled={+id! === 1}
                    className="product-cart-title-btn"
                >
                    <ArrowCircleLeftIcon />{' '}
                </Button>
                <img src={productsObject[parseInt(id!)].image} alt="" />
                <span>{productsObject[parseInt(id!)].title}</span>
                <Button
                    color="success"
                    variant="contained"
                    onClick={handleNextProduct}
                    disabled={+id! >= Object.keys(productsObject).length}
                    className="product-cart-title-btn"
                >
                    <ArrowCircleRightIcon />{' '}
                </Button>
            </div>
            <div>
                <p>{productsObject[parseInt(id!)].fullDesctiption}</p>
            </div>
        </>
    )
}
export default ProductPageTitle
