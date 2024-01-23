import { Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import './HomeTitleLaptop.scss'
import flower from 'assets/images/HomeTitleImage/yobanuyFikus.svg'
import titleImg from 'assets/images/HomeTitleImage/Laptop/Img.svg'

interface Props {}
const HomeTitleLaptop = (props: Props) => {
    return (
        <section className="laptop-solution-section">
            <Container className="laptop-solution-container">
                <div className="out-of-container">
                    <img src={flower} alt="image" />
                </div>
                <div className="laptop-solution-content">
                    <div className="laptop-solution-title">
                        <p>Landscape Planting Servises</p>
                        <h2>
                            Perfect Landing <span>Solution.</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Totam distinctio quod aut nisi expedita quasi
                            ex.Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Totam distinctio quod aut nisi
                            expedita quasi ex.
                        </p>
                    </div>
                    <div className="laptop-solution-links">
                        <Button color="success" variant="contained">
                            <Link to="">Get A Quate </Link>
                        </Button>
                        <Link to=""> See how it works&rarr;</Link>
                    </div>
                    <div className="laptop-solution-results">
                        <div className="solution-results-item">
                            <div>
                                <span>500+</span>
                            </div>
                            <div>
                                <span>Happy Customers</span>
                            </div>
                        </div>
                        <div className="solution-results-item">
                            <div>
                                <span>800+</span>
                            </div>
                            <div>
                                <span>Gardens Created</span>
                            </div>
                        </div>
                        <div className="solution-results-item">
                            <div>
                                <span>100+</span>
                            </div>
                            <div>
                                <span>Team Members</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="laptop-solution-logo">
                    <img src={titleImg} alt="image" />
                </div>
            </Container>
        </section>
    )
}
export default HomeTitleLaptop
