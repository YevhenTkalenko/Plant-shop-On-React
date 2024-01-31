import { Card, Grid } from '@mui/material'
import HomeStaff from 'utils/HomeStaff'
import './HomeStaffTeamCards.scss'

interface HomeStaffI {
    id: number
    image: string
    title: string
    sub_title: string
}

const HomeStaffTeamCards = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                marginTop: '30px',
            }}
        >
            {HomeStaff.map(({ id, image, title, sub_title }: HomeStaffI) => {
                return (
                    <Grid md={3} lg={3} item>
                        <Card className="home-team-card" key={id}>
                            <div className="home-team-card-item">
                                <img src={image} alt="image" />
                                <div className="home-team-card-description">
                                    <p>{title}</p>
                                    <p>{sub_title}</p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Harum et est unde iure
                                        quae? Molestias sed eligendi distinctio
                                        voluptatem. Vero quidem similique veniam
                                        suscipit et, quibusdam maxime veritatis
                                        earum eveniet.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}
export default HomeStaffTeamCards
