import { Button, TextField } from '@mui/material'
import './Quantity.scss'

interface Props {
    onDecrement?: () => void
    onIncrement?: () => void
    count: number
    minCount?: number
}

const Quantity = ({ onDecrement, onIncrement, count, minCount = 1 }: Props) => {
    return (
        <div className="servises-item-input">
            <Button
                color="success"
                variant="outlined"
                onClick={onDecrement}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField
                value={count}
                margin="none"
                variant="outlined"
                color="success"
                size="small"
                style={{
                    width: '150px',
                    margin: '0px 5px',
                }}
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
    )
}
export default Quantity
