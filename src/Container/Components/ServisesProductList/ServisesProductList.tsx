import { Card } from '@mui/material'
import PRODUCT from 'utils/Servises'
import ServisesProductListItem from './ServisesProductListItem'

interface Props {
    addProductToCart: (id: number, count: number) => void
}

const ServisesProductList = ({ addProductToCart }: Props) => {
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
                        <Card
                            sx={{
                                marginBottom: '15px',
                            }}
                            key={id}
                        >
                            <ServisesProductListItem
                                id={id}
                                addProductToCart={addProductToCart}
                                image={image}
                                title={title}
                                fullDesctiption={fullDesctiption}
                                price={price}
                                countOfSpecialists={countOfSpecialists}
                                duration={duration}
                            />
                        </Card>
                    )
                }
            )}
        </>
    )
}
export default ServisesProductList
