import './Footer.scss'

import FooterSocailMedia from './FooterSocialMedia/FooterSocailMedia'
import FooterRoadMap from './FooterRoadMap/FooterRoadMap'
import UpFooter from './UpFooter/UpFooter'

interface Props {}

const Footer = (props: Props) => {
    return (
        <footer className="footer-section">
            <UpFooter />
            <div className="footer-container">
                <div className="footer-title">
                    <h4>Subscribe To Newsletters</h4>
                </div>
                <div className="footer-sub-title">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum cupiditate voluptas doloribus reiciendis
                        repellat? Voluptatem unde quo repellendus ab hic,
                        architecto delectus atque distinctio explicabo culpa
                        autem temporibus vitae quibusdam.
                    </p>
                </div>
                <form className="footer-form">
                    <div className="form-container">
                        <input type="text" placeholder="Email..." />
                        <button>Subcribe</button>
                    </div>
                </form>
                <div className="footer-social">
                    <FooterSocailMedia />
                </div>
                <div className="footer-contacts">
                    <h4>Contacts</h4>
                    <p>27 Division St.New-York, NY 10002, USA</p>
                    <p>Solarpenal@gmail.com</p>
                </div>
                <hr />
                <div className="footer-protect-info">
                    <p>© Copyright Plant Store 2021-22.</p>
                    <p> All right reserved.</p>
                    <p> Design by Themadbrains</p>
                </div>
                <div className="footer-down-links">
                    <FooterRoadMap to="/">Privace Police</FooterRoadMap>
                    <FooterRoadMap to="/">Site map</FooterRoadMap>
                    <FooterRoadMap to="/">Terms of Use</FooterRoadMap>
                </div>
            </div>
        </footer>
    )
}
export default Footer
