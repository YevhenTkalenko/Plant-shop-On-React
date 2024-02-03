import flower from 'assets/images/HomeTitleImage/yobanyi_fikus.png'
import './HomeTitleCustomers.scss'

const HomeTitleCustomers = () => {
    return (
        <div className="home-solution-customers">
            <div className="home-solution-customers-img">
                <img src={flower} alt="flower" />
            </div>
            <div className="home-solution-achivment">
                <div className="solution-achivment-item">
                    <span>500+</span>
                    <span>Happy Cusmomers</span>
                </div>
                <div className="solution-achivment-item">
                    <span>800+</span>
                    <span>Gardens Created</span>
                </div>
            </div>
        </div>
    )
}
export default HomeTitleCustomers
