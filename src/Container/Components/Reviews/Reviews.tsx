import {
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
    Button,
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Reviews.scss'

interface Props {}

interface Reviews {
    postId: number
    id?: number
    name: string
    email: string
    body: string
}

const Reviews = (props: Props) => {
    const { id } = useParams()
    const [reviews, setReviews] = useState<Reviews[]>([])

    const getReviews = () => {
        const url = `https://jsonplaceholder.typicode.com/comments`
        const getData = axios.get(url)
        return getData.then((responce) => {
            setReviews((prevState) => {
                return (prevState = responce.data.filter(
                    (el: Reviews) => el.postId === parseInt(id!)
                ))
            })
        })
    }

    useEffect(() => {
        getReviews()
    }, [setReviews])

    // const [newReview, setNewReview] = useState<Reviews>({
    //     postId: parseInt(id!),
    //     name: '',
    //     email: '',
    //     body: '',
    // })

    // const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNewReview((prevState) => ({
    //         ...prevState,
    //         name: e.target.value,
    //     }))
    // }

    // const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    //     if (newReview.name === '') {
    //         alert('All fields are required!!')
    //     } else {
    //         setNewReview({
    //             postId: parseInt(id!),
    //             name: '',
    //             email: '',
    //             body: '',
    //         })

    //         setReviews((prevState) => {
    //             return [...prevState, newReview]
    //         })
    //     }
    // }

    return (
        //prettier-ignore
        <>
            <div className='reviews-title'>
                <h4>Reviews</h4>
            </div>
            <div>
                {reviews.map((review, i) => {
                    return (
                        <Card key={i} variant="outlined" sx={{
                            marginBottom: '15px'
                        }}>                     
                            <CardContent>
                                <div className='reviews-item'>
                                    <h4>Name: <span>{review.name}</span></h4>
                                    <span>{review.body}</span>
                                    <p>{review.email}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* <form onSubmit={onSend}>
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
                    <Button variant="contained" color="success" type="submit">
                        Send
                    </Button>
                </div>
            </form> */}
        </>
    )
}
export default Reviews
