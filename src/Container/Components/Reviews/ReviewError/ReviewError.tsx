interface Props {}
const ReviewError = (props: Props) => {
    return (
        <>
            <div className="reviews-title">
                <h4>
                    <span>Sorry</span>
                </h4>
                <h4>
                    Something went wrong, we can`t download <span>reviews</span>
                </h4>
                <h4>
                    <span>Please</span> , check your connection to Internet
                </h4>
            </div>
        </>
    )
}
export default ReviewError
