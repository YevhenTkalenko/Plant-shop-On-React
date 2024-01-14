import './FooterExtendInfo.scss'

interface Props {}
const FooterExtendInfo = (props: Props) => {
    return (
        <>
            <div className="footer-contacts">
                <h4>Contacts</h4>
                <span>27 Division St.New-York, NY 10002, USA</span>
                <span>Solarpenal@gmail.com</span>
                <span>+10284545518</span>
                <span>+10284545788</span>
            </div>
            <hr />
            <div className="footer-protect-info">
                <span>© Copyright Plant Store 2021-22.</span>
                <span>All right reserved.</span>
                <span>Design by Themadbrains</span>
            </div>
        </>
    )
}
export default FooterExtendInfo
