import { Link } from 'react-router-dom'
import cancel from 'assets/images/HeaderImage/HeaderBottomImg/cancel.svg'
import callButton from 'assets/images/HeaderImage/HeaderBottomImg/сallButton.svg'
import menu from 'assets/images/HeaderImage/HeaderBottomImg/menu.svg'

interface Props {
    openNavBar: () => void
    isOpenNavBar: boolean
}

const HeaderLinksBtns = ({ openNavBar, isOpenNavBar }: Props) => {
    return (
        <>
            <button>
                <Link to="/">
                    <img src={callButton} alt="callButton" />
                </Link>
            </button>
            <button onClick={openNavBar}>
                <img src={isOpenNavBar ? cancel : menu} alt="menu" />
            </button>
        </>
    )
}
export default HeaderLinksBtns
