import flower from 'assets/images/HomeTitleImage/yobanuyFikus.svg'
import './HomeTitleLaptopImg.scss'

interface Props {}
const HomeTitleLaptopImg = (props: Props) => {
    return (
        <div className="out-of-container">
            <img src={flower} alt="image" />
        </div>
    )
}
export default HomeTitleLaptopImg
