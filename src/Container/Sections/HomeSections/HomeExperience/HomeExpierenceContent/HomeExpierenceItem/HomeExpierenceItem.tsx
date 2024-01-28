import { Card, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeExpierence from 'utils/HomeExpierence'
import './HomeExpierenceItem.scss'

interface HomeExpierenceI {
    id: number
    image: string
    content: string
    link: string
}

const HomeExpierenceItem = () => {
    return (
        <Grid container spacing={2}>
            {HomeExpierence.map(
                ({ id, image, content, link }: HomeExpierenceI) => {
                    return (
                        <Grid item xs={6} sm={6} md={6} key={id}>
                            <Card className="home-expierence-card">
                                <div className="card-item-logo">
                                    <img src={image} alt="image" />
                                </div>
                                <Link to={link}>{content}</Link>
                            </Card>
                        </Grid>
                    )
                }
            )}
        </Grid>
    )
}
export default HomeExpierenceItem
