import { Card, CardContent, Container, Button } from '@mui/material'
import Reviews from 'Container/Components/Reviews/Reviews'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PRODUCT, { ProductI, getProductsObject } from 'utils/Servises'
import ProductPageTitle from './ProductPageTitle/ProductPageTitle'
import ProductPageDetails from './ProductPageDetails/ProductPageDetails'
import ProductPageContext from './ProductPageContext/ProductPageContext'

interface Props {
    productsObject?: {
        [id: number]: ProductI
    }
}

const ProductPage = ({
    productsObject = getProductsObject(PRODUCT),
}: Props) => {
    const { id } = useParams()

    return (
        //prettier-ignore
        <>
            <UniversalTitle>
                <h4>{productsObject[parseInt(id!)].title}</h4>
                <p>{productsObject[parseInt(id!)].shortDescription}</p>
            </UniversalTitle>
            <Container>
                <Card>
                    <CardContent>
                        <Button color="success" variant="contained">
                            <Link to="/servises">
                                &#8592; Back to Servises{' '}
                            </Link>
                        </Button>
                        <ProductPageTitle id={id!}/> 
                        <ProductPageDetails id={id!}/> 
                        <ProductPageContext/>
                    </CardContent>
                </Card>
                <Reviews></Reviews>
            </Container>
        </>
    )
}
export default ProductPage
