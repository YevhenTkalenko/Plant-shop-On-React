import { TextField, Button } from '@mui/material'
import './ReviewsForm.scss'

interface Props {
    handleName: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleComment: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    addNewReview: (e: React.FormEvent<HTMLFormElement>) => void
    userData: {
        name: string
        body: string
    }
    isPostLoading: boolean
    isInputValid: boolean
}

const ReviewsForm = ({
    handleName,
    userData,
    handleComment,
    addNewReview,
    isPostLoading,
    isInputValid,
}: Props) => {
    return (
        <>
            <form className="reviews-form" onSubmit={addNewReview}>
                <h4>
                    Please, leave your <span>comments</span>
                </h4>
                <div className="reviews-item">
                    {isInputValid ? (
                        <TextField
                            type="text"
                            label="Your name"
                            color="success"
                            fullWidth={true}
                            sx={{
                                marginBottom: '15px',
                            }}
                            onChange={handleName}
                            value={userData.name}
                        />
                    ) : (
                        <TextField
                            error
                            type="text"
                            label="Your name"
                            helperText="Incorrect entry."
                            fullWidth={true}
                            sx={{
                                marginBottom: '15px',
                            }}
                            onChange={handleName}
                            value={userData.name}
                        />
                    )}

                    <textarea
                        maxLength={350}
                        placeholder="Your comment"
                        className="order-form-area"
                        onChange={handleComment}
                        value={userData.body}
                    />
                </div>
                <div>
                    <Button
                        color="success"
                        variant="contained"
                        type="submit"
                        disabled={isPostLoading}
                    >
                        {isPostLoading ? 'Loading' : 'Add review'}
                    </Button>
                </div>
            </form>
        </>
    )
}
export default ReviewsForm
