import { Grid } from '@mui/material'
import PRODUCT from 'utils/Servises'
import HomeProductListItem from './HomeProductListItem'

interface Props {}

const HomeProductList = (props: Props) => {
    return (
        <>
            <Grid container spacing={2}>
                {PRODUCT.map(({ id, image, title, description, link }) => {
                    return (
                        <Grid item key={id} xs={12} sm={6} md={4}>
                            <HomeProductListItem
                                image={image}
                                title={title}
                                description={description}
                                link={link}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
export default HomeProductList
