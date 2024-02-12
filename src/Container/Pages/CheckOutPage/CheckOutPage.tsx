import { Typography, Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {}

interface Order {
    name: string
    adress: string
}

const CheckOutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        adress: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            adress: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (orderData.name === '' || orderData.adress === '') {
            return alert('WTF')
        } else {
            setIsOrderSend((prevState) => !prevState)
        }
    }

    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your adress"
                        value={orderData.adress}
                        onChange={handleAdress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <>
                <div>Dear, {orderData.name} thanks for your order</div>
                <div>Your adress is {orderData.adress}</div>
                <Link to="/">Back to Home</Link>
            </>
        )
    }

    return (
        <>
            <Container>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{ margin: '40px 0' }}
                >
                    {isOrderSend ? renderMessage() : renderForm()}
                </Typography>
            </Container>
        </>
    )
}
export default CheckOutPage
