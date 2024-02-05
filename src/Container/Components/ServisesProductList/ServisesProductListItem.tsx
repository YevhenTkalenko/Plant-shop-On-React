import { Button, TextField } from '@mui/material'
import './ServisesProductListItem.scss'
import { useState } from 'react'
// import CheckIcon from '@mui/icons-material/Check'

interface Props {
    id: number
    image: string
    title: string
    fullDesctiption: string
    price: number
    duration: number
    countOfSpecialists: number
    addProductToCart: (id: number, count: number) => void
}

const ServisesProductListItem = ({
    id,
    image,
    title,
    fullDesctiption,
    price,
    countOfSpecialists,
    duration,
    addProductToCart,
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

    return (
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
            <div className="servises-item-input">
                <Button
                    color="success"
                    variant="outlined"
                    onClick={onDecrement}
                    disabled={count <= 1}
                >
                    -
                </Button>
                <TextField
                    value={count}
                    margin="none"
                    variant="outlined"
                    color="success"
                    size="small"
                />
                <Button
                    color="success"
                    variant="outlined"
                    onClick={onIncrement}
                    disabled={count >= 10}
                >
                    +
                </Button>
            </div>
            <div className="servises-item-button">
                <Button
                    color="success"
                    variant="contained"
                    onClick={() => addProductToCart(id, count)}
                >
                    ADD TO CART
                </Button>
                {/* <span>{disabled ? <CheckIcon /> : ''}</span> */}
            </div>
        </div>
    )
}
export default ServisesProductListItem
