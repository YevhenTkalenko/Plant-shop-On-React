import { Card, CardContent } from '@mui/material'
import { useFetch } from 'Container/Global/Hooks/useFetch'
import ReviewsForm from '../ReviewsForm/ReviewsForm'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewError from '../ReviewError/ReviewError'
import axios from 'axios'

interface Props {}

interface ReviewsI {
    postId: number
    id?: number
    name: string
    email: string
    body: string
}

const ReviewsItem = (props: Props) => {
    const { id } = useParams()
    //get
    const { reviews, isError } = useFetch(
        `https://jsonplaceholder.typicode.com/comments`
    )
    //post
    const [userData, setUserData] = useState<ReviewsI>({
        postId: parseInt(id!),
        name: '',
        email: '',
        body: '',
    })
    const [newReview, setNewReview] = useState<any>([])
    const [isPostLoading, setIsPostLoading] = useState<boolean>(false)
    const [isInputValid, setIsInputValid] = useState<boolean>(true)

    //form
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                name: e.target.value,
            }
        })
    }

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                body: e.target.value,
            }
        })
    }

    useEffect(() => {
        setNewReview(reviews)
    }, [reviews])

    const addNewReview = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsPostLoading(true)
        e.preventDefault()

        //value
        if (userData.body === '' || userData.name === '') {
            setIsPostLoading(false)
            return setIsInputValid(false)
        }

        //length
        if (userData.name.length < 2) {
            setIsPostLoading(false)
            return setIsInputValid(false)
        }

        const responce = await axios.post(
            `https://jsonplaceholder.typicode.com/comments`,
            userData
        )

        setNewReview((prevState: any) => {
            return [...prevState, responce.data]
        })
        setUserData((prevState) => ({
            ...prevState,
            name: '',
            email: '',
            body: '',
        }))
        setIsInputValid(true)
        setIsPostLoading(false)
    }

    if (isError) {
        return <ReviewError />
    }

    return (
        <>
            <div className="reviews-title">
                <h4>Reviews</h4>
            </div>
            {newReview.map(({ name, body, email }: any, i: any) => {
                return (
                    <Card
                        key={i}
                        variant="outlined"
                        sx={{
                            marginBottom: '15px',
                        }}
                    >
                        <CardContent>
                            <div className="reviews-item">
                                <h4>
                                    Name: <span>{name}</span>
                                </h4>
                                <span>{body}</span>
                                <p>{email}</p>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
            <ReviewsForm
                handleName={handleName}
                userData={userData}
                handleComment={handleComment}
                addNewReview={addNewReview}
                isPostLoading={isPostLoading}
                isInputValid={isInputValid}
            />
        </>
    )
}
export default ReviewsItem
