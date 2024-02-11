import {
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
    Button,
} from '@mui/material'
import React, { useState } from 'react'

interface Props {}

interface Reviews {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Reviews[] = [
        {
            name: 'Divad',
            text: 'Tenetur at placeat, culpa quam rerum earum vero blanditiis porro commodi sapiente, magnam sint fugiat dolor vel iusto a?',
        },
        {
            name: 'Kevin',
            text: 'Tenetur at placeat, culpa quam rerum earum vero blanditiis porro commodi sapiente, magnam sint fugiat dolor vel iusto a?',
        },
        {
            name: 'Lisa',
            text: 'Tenetur at placeat, culpa quam rerum earum vero blanditiis porro commodi sapiente, magnam sint fugiat dolor vel iusto a?',
        },
    ]

    const [reviews, setReviews] = useState<Reviews[]>(arrReviews)
    const [newReview, setNewReview] = useState<Reviews>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!!')
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <>
            <Typography variant="h4" component="h2">
                Reviews
            </Typography>
            <div>
                {reviews.map((review, i) => {
                    return (
                        <Card
                            key={i}
                            variant="outlined"
                            sx={{
                                marginTop: '5px',
                            }}
                        >
                            <CardContent>
                                <p>Name: {review.name}</p>
                                <p> {review.text}</p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            <form onSubmit={onSend}>
                <h3>Please leave review</h3>
                <div>
                    <TextField
                        minRows={5}
                        label="name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextareaAutosize
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <div>
                    <Button variant="contained" color="success" type="submit">
                        Send
                    </Button>
                </div>
            </form>
        </>
    )
}
export default Reviews
