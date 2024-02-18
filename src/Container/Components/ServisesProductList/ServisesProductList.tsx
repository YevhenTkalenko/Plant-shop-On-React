import { Card } from '@mui/material'
import PRODUCT from 'utils/Servises'
import ServisesProductListItem from './ServisesProductListItem'
import { Fragment } from 'react'

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
                        <Fragment key={id}>
                            <Card
                                sx={{
                                    marginBottom: '15px',
                                }}
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
                        </Fragment>
                    )
                }
            )}
        </>
    )
}
export default ServisesProductList
