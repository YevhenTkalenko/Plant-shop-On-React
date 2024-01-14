import FooterSocailMedia from '../FooterSocialMedia/FooterSocailMedia'
import './FooterForm.scss'

interface Props {}
const FooterForm = (props: Props) => {
    return (
        <form className="footer-form">
            <div className="form-container">
                <input type="text" placeholder="Email..." />
                <button>Subcribe</button>
            </div>
            <div className="footer-social">
                <FooterSocailMedia />
            </div>
        </form>
    )
}
export default FooterForm
