import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface ReviewsI {
    postId: number
    id?: number
    name: string
    email: string
    body: string
}

export const useFetch = (url: string) => {
    const { id } = useParams()
    const [reviews, setReviews] = useState<ReviewsI[]>([])
    const [isError, setIsError] = useState<boolean>(false)


    const getAllReviews = async () => {
        try {
            const responce = await axios.get(url);
            setReviews((prevState) => {
                prevState = responce.data;
                return prevState.filter(review => review.postId === parseInt(id!))
            })
        } catch (error) {
            setIsError(true)
        }

    }

    useEffect(() => {
        getAllReviews()
    }, [])


    return { reviews, isError }

}




