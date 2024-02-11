import { Card } from '@mui/material'
import PRODUCT from 'utils/Servises'
import ServisesProductListItem from './ServisesProductListItem'

const ServisesProductList = () => {
    return (
        <>
            {PRODUCT.map(
                ({
                    id,
                    image,
                    title,
                    fullDesctiption,
                    price,
                    countOfSpecialists,
                    duration,
                }) => {
                    return (
                        <>
                            <Card
                                sx={{
                                    marginBottom: '15px',
                                }}
                                key={id}
                            >
                                <ServisesProductListItem
                                    id={id}
                                    image={image}
                                    title={title}
                                    fullDesctiption={fullDesctiption}
                                    price={price}
                                    countOfSpecialists={countOfSpecialists}
                                    duration={duration}
                                />
                            </Card>
                        </>
                    )
                }
            )}
        </>
    )
}
export default ServisesProductList
