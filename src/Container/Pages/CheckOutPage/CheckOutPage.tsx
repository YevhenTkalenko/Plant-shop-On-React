import { Container, TextField, Button, Card } from '@mui/material'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CheckOutPage.scss'

interface Props {}

interface Order {
    [name: string]: string
    surname: string
    email: string
    phone: string
    city: string
    adress: string
    commnets: string
}

const CheckOutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        adress: '',
        commnets: '',
    })

    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setOrderData({
            ...orderData,
            [name]: value,
        })
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsOrderSend((prevState) => !prevState)
    }

    useEffect(() => {
        if (!Object.keys(orderData).some((el) => orderData[el] === '')) {
            setIsSubmitDisabled(false)
        } else {
            setIsSubmitDisabled(true)
        }
    }, [orderData])

    const renderForm = () => {
        return (
            <Container>
                <Card variant="elevation">
                    <form onSubmit={onSend} className="order-form">
                        <h4>
                            Please, complete <span>the Form</span>
                        </h4>
                        <div>
                            <TextField
                                name="name"
                                type="text"
                                label="Your name"
                                value={orderData.name}
                                onChange={handleChange}
                                color="success"
                            />
                            <TextField
                                name="surname"
                                type="text"
                                label="Your surname"
                                value={orderData.surname}
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
                                value={orderData.email}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                            <TextField
                                name="phone"
                                type="tel"
                                label="Your phone"
                                value={orderData.phone}
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
                                value={orderData.city}
                                onChange={handleChange}
                                variant="outlined"
                                color="success"
                            />
                            <TextField
                                name="adress"
                                type="text"
                                label="Your adress"
                                value={orderData.adress}
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="order-form-button">
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
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
                <div>Dear, {orderData.name} thanks for your order</div>
                <div>Your adress is {orderData.adress}</div>
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
