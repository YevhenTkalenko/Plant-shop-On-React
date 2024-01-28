import './HomeTitleLaptopResults.scss'

interface Props {}
const HomeTitleLaptopResults = (props: Props) => {
    return (
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
    )
}
export default HomeTitleLaptopResults
