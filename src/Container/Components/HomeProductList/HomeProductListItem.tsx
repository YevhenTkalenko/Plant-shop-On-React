import { Button, Card, CardActions, CardContent } from '@mui/material'
import './HomeProductListItem.scss'
import { Link } from 'react-router-dom'
import UniversalButtonLink from 'Container/Components/UniversalComponents/Buttons/UniversalButtonLink'

interface Props {
    image: string
    title: string
    shortDescription: string
    link: string
    isAuthorized: boolean
}

const HomeProductListItem = ({
    image,
    title,
    shortDescription,
    link,
    isAuthorized,
}: Props) => {
    return (
        <>
            <Card className="card-item">
                <div>
                    <img src={image} alt="image" />
                </div>
                <CardContent className="card-content">
                    <h2>{title}</h2>
                    <p>{shortDescription}</p>
                </CardContent>
                <CardActions
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <UniversalButtonLink to={link} isAuthorized={isAuthorized}>
                        View More
                    </UniversalButtonLink>
                </CardActions>
            </Card>
        </>
    )
}
export default HomeProductListItem
