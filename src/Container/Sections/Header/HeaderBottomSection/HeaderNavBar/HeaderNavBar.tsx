import { Link } from 'react-router-dom'
import './HeaderNavBar.scss'
import cancel from 'assets/images/HeaderImage/HeaderBottomImg/cancel.svg'
import callButton from 'assets/images/HeaderImage/HeaderBottomImg/сallButton.svg'
import menu from 'assets/images/HeaderImage/HeaderBottomImg/menu.svg'
import { useState } from 'react'
import HeaderDropDownMenu from './HeaderDropDownMenu/HeaderDropDownMenu'

interface Props {}
const HeaderNavBar = (props: Props) => {
    const [isOpenNavBar, setIsOpenNavbar] = useState<boolean>(false)

    const openNavBar = () => {
        setIsOpenNavbar((prevState) => {
            return !prevState
        })
    }

    return (
        <>
            <div className="navbar">
                <button>
                    <Link to="/">
                        <img src={callButton} alt="callButton" />
                    </Link>
                </button>
                <button onClick={openNavBar}>
                    <img src={isOpenNavBar ? cancel : menu} alt="menu" />
                </button>
            </div>
            <HeaderDropDownMenu isOpenNavBar={isOpenNavBar} />
        </>
    )
}
export default HeaderNavBar
