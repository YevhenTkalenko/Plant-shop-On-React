import titleImg from 'assets/images/HomeTitleImage/Laptop/Img.svg'
import './HomeTitleLaptopLogo.scss'

interface Props {}
const HomeTitleLaptopLogo = (props: Props) => {
    return (
        <div className="laptop-solution-logo">
            <img src={titleImg} alt="image" />
        </div>
    )
}
export default HomeTitleLaptopLogo
