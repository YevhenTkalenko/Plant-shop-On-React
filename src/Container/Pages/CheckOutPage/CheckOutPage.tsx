import { Container, TextField, Button, Card } from '@mui/material'
import UniversalTitle from 'Container/Components/UniversalComponents/Title/UniversalTitle'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CheckOutPage.scss'

interface Props {}

interface Order {
    name: string
    surname: string
    email: string
    phone: number | string
    city: string
    adress: string
    commnets: string
}

const CheckOutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        adress: '',
        commnets: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            surname: e.target.value,
        }))
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            phone: e.target.value,
        }))
    }

    const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            city: e.target.value,
        }))
    }

    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            adress: e.target.value,
        }))
    }

    const handleComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            commnets: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            orderData.name === '' ||
            orderData.adress === '' ||
            orderData.city === '' ||
            orderData.email === '' ||
            orderData.phone === ''
        ) {
            return alert('WTF')
        } else {
            setIsOrderSend((prevState) => !prevState)
        }
    }

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
                                type="text"
                                label="Your name"
                                value={orderData.name}
                                onChange={handleName}
                                color="success"
                            />
                            <TextField
                                type="text"
                                label="Your surname"
                                value={orderData.surname}
                                onChange={handleSurname}
                                variant="outlined"
                                color="success"
                            />
                        </div>
                        <div>
                            <TextField
                                type="email"
                                label="Your email"
                                value={orderData.email}
                                onChange={handleEmail}
                                variant="outlined"
                                color="success"
                            />
                            <TextField
                                type="tel"
                                label="Your phone"
                                value={orderData.phone}
                                onChange={handlePhone}
                                variant="outlined"
                                color="success"
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                label="Your city"
                                value={orderData.city}
                                onChange={handleCity}
                                variant="outlined"
                                color="success"
                            />
                            <TextField
                                type="text"
                                label="Your adress"
                                value={orderData.adress}
                                onChange={handleAdress}
                                variant="outlined"
                                color="success"
                            />
                        </div>
                        <div>
                            <textarea
                                maxLength={350}
                                placeholder="Your comment"
                                className="order-form-area"
                                onChange={handleComments}
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
