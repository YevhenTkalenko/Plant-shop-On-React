import { Button, Card, CardActions, CardContent } from '@mui/material'
import './HomeProductListItem.scss'
import { Link } from 'react-router-dom'

interface Props {
    image: string
    title: string
    description: string
    link: string
}

const HomeProductListItem = ({ image, title, description, link }: Props) => {
    return (
        <>
            <Card className="card-item">
                <div>
                    <img src={image} alt="image" />
                </div>
                <CardContent className="card-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </CardContent>
                <CardActions
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Button variant="contained" color="success">
                        <Link to={link}>View more</Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
export default HomeProductListItem
