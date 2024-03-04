import { Grid } from '@mui/material'
import PRODUCT from 'utils/Servises'
import HomeProductListItem from './HomeProductListItem'

interface Props {
    isAuthorized: boolean
}

const HomeProductList = ({ isAuthorized }: Props) => {
    return (
        <>
            <Grid container spacing={2}>
                {PRODUCT.map(
                    ({ id, image, title, shortDescription, link, addId }) => {
                        return (
                            <Grid item key={id} xs={12} sm={6} md={4}>
                                <HomeProductListItem
                                    isAuthorized={isAuthorized}
                                    image={image}
                                    title={title}
                                    shortDescription={shortDescription}
                                    link={link}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>
        </>
    )
}
export default HomeProductList
