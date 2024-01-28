import { Container } from '@mui/material'
import HomeProductList from 'Container/Components/HomeProductList/HomeProductList'
import './HomePage.scss'
import HomeTitle from 'Container/Sections/HomeSections/HomeTitle/HomeTitle'
import HomeExpierence from 'Container/Sections/HomeSections/HomeExperience/HomeExpierence'
import HomeChoseUs from 'Container/Sections/HomeSections/HomeChoseUs/HomeChoseUs'
import HomeQuestions from 'Container/Sections/HomeSections/HomeQuestions/HomeQuestions'

interface Props {}
const HomePage = (props: Props) => {
    return (
        <>
            <HomeTitle />
            <Container>
                <h2 className="home-page-title">
                    Servises We <span>Provided</span>
                </h2>
                <h5 className="home-page-sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo architecto molestias voluptate accusantium labore
                    tempora dolorum harum temporibus odit! Dolor doloremque
                    debitis corporis enim minus incidunt porro tempore labore
                    cum?
                </h5>
                <HomeProductList />
                <HomeExpierence />
            </Container>
            <HomeChoseUs />
            <Container>
                <HomeQuestions />
            </Container>
        </>
    )
}
export default HomePage
