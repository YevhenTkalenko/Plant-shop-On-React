import { Container, TextField, Button, Card } from '@mui/material'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import { Link } from 'react-router-dom'
import './CheckOutPage.scss'
import { useAppDispatch, useAppSelector } from 'Container/Global/Redux/hooks'
import {
    changeCheckOutData,
    onSendCheckOutData,
    verifyCheckOutData,
} from 'Container/Global/Redux/checkOutDataReducer'
import { useEffect } from 'react'

interface Props {}

const CheckOutPage = (props: Props) => {
    const { name, surname, email, phone, city, adress, status, isOrderSend } =
        useAppSelector((state) => state.checkOutData)

    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        dispatch(changeCheckOutData({ name, value }))
    }

    const onSendOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(onSendCheckOutData())
    }

    useEffect(() => {
        dispatch(verifyCheckOutData())
    }, [name, surname, email, phone, city, adress])

    const renderForm = () => {
        return (
            <Container>
                <Card variant="elevation">
                    <form className="order-form" onSubmit={onSendOrder}>
                        <h4>
                            Please, complete <span>the Form</span>
                        </h4>
                        <div>
                            <TextField
                                name="name"
                                type="text"
                                label="Your name"
                                value={name}
                                onChange={handleChange}
                                color="success"
                            />
                            <TextField
                                name="surname"
                                type="text"
                                label="Your surname"
                                value={surname}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                        </div>
                        <div>
                            <TextField
                                name="email"
                                type="email"
                                label="Your email"
                                value={email}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                            <TextField
                                name="phone"
                                type="tel"
                                label="Your phone"
                                value={phone}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                        </div>
                        <div>
                            <TextField
                                name="city"
                                type="text"
                                label="Your city"
                                value={city}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                            <TextField
                                name="adress"
                                type="text"
                                label="Your adress"
                                value={adress}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                        </div>
                        <div>
                            <textarea
                                name="commnets"
                                maxLength={350}
                                placeholder="Your comment"
                                className="order-form-area"
                            />
                        </div>
                        <div className="order-form-button">
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                disabled={!status}
                            >
                                Approve your Order
                            </Button>
                        </div>
                    </form>
                </Card>
            </Container>
        )
    }

    const renderMessage = () => {
        return (
            <>
                <div>Dear, {name} thanks for your order</div>
                <div>Your adress is {adress}</div>
                <Button type="button" variant="contained" color="success">
                    <Link to="/">Back to Home</Link>
                </Button>
            </>
        )
    }

    return (
        <>
            <UniversalTitle>
                <h4>Order</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis deserunt iure veritatis error repellendus,
                    eveniet eligendi blanditiis est, reprehenderit natus eaque
                    amet aspernatur beatae aliquid veniam repudiandae quia
                    similique sequi?
                </p>
            </UniversalTitle>
            <Container>
                {isOrderSend ? renderMessage() : renderForm()}
            </Container>
        </>
    )
}
export default CheckOutPage
