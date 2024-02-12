import { Button } from '@mui/material'
import './ServisesProductListItem.scss'
import { useState } from 'react'
import Quantity from '../Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'Container/Global/Redux/hooks'
import { addLike, removeLike } from 'Container/Global/Redux/likeReducer'
import { addProductToCart } from 'Container/Global/Redux/cartReducer'

// import CheckIcon from '@mui/icons-material/Check'

interface Props {
    id: number
    image: string
    title: string
    fullDesctiption: string
    price: number
    duration: number
    countOfSpecialists: number
}

const ServisesProductListItem = ({
    id,
    image,
    title,
    fullDesctiption,
    price,
    countOfSpecialists,
    duration,
}: Props) => {
    // const [disabled, isDisabled] = useState<boolean>(false)

    // const isAddedToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     if (!e.currentTarget.disabled) {
    //         return isDisabled(true)
    //     }
    // }

    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked: boolean = useAppSelector(
        (state) => state.productsLikeState[id]
    )

    const dispatch = useAppDispatch()

    return (
        <>
            <div className="servises-item-container">
                <div className="servises-item-title">
                    <img src={image} alt="" />
                    <span>{title}</span>
                </div>
                <div className="servises-item-subtitle">
                    <div>
                        <span>Description:</span>
                        {fullDesctiption}
                    </div>
                    <div>
                        <span>Price:</span>
                        {price}$
                    </div>
                    <div>
                        <span>Specialists:</span>
                        {countOfSpecialists}
                    </div>
                    <div>
                        <span>Timing:</span>
                        {duration} hours
                    </div>
                </div>
                <Quantity
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    count={count}
                />
                <div className="servises-item-button">
                    <div>
                        <Button
                            color="success"
                            variant="contained"
                            onClick={() =>
                                dispatch(
                                    addProductToCart({
                                        id,
                                        count,
                                    })
                                )
                            }
                        >
                            ADD TO CART
                        </Button>
                    </div>
                    <div>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={() =>
                                isLiked
                                    ? dispatch(removeLike(id))
                                    : dispatch(addLike(id))
                            }
                        >
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServisesProductListItem
