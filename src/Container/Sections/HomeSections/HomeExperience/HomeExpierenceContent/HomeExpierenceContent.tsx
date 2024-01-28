import './HomeExpierenceContent.scss'
import HomeExpierenceItem from './HomeExpierenceItem/HomeExpierenceItem'
import HomeExpierenceTitle from './HomeExpierenceTitle/HomeExpierenceTitle'

interface Props {}
const HomeExpierenceContent = (props: Props) => {
    return (
        <div className="home-expierence-content">
            <HomeExpierenceTitle />
            <HomeExpierenceItem />
        </div>
    )
}
export default HomeExpierenceContent
