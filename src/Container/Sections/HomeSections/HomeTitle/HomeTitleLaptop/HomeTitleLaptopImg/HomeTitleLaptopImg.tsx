import flower from 'assets/images/HomeTitleImage/yobanyi_fikus.png'
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
