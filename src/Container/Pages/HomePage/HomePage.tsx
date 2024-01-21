import { Container } from '@mui/material'
import HomeProductList from 'Container/Components/HomePrductList/HomeProductList'
import './HomePage.scss'

interface Props {}
const HomePage = (props: Props) => {
    return (
        <section>
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
            </Container>
        </section>
    )
}
export default HomePage
