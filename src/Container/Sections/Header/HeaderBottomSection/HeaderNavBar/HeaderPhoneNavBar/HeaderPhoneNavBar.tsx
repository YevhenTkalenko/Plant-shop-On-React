import { useState } from 'react'
import HeaderLinksBtns from './HeaderLinksBtns/HeaderLinksBtns'
import HeaderDropDownMenu from './HeaderDropDownMenu/HeaderDropDownMenu'
import HeaderLogo from '../../HeaderLogo/HeaderLogo'

interface Props {}
const HeaderPhoneNavBar = (props: Props) => {
    const [isOpenNavBar, setIsOpenNavbar] = useState<boolean>(false)

    const openNavBar = () => {
        setIsOpenNavbar((prevState) => {
            return !prevState
        })
    }

    return (
        <>
            <HeaderLogo />
            <div>
                <HeaderLinksBtns
                    openNavBar={openNavBar}
                    isOpenNavBar={isOpenNavBar}
                />
            </div>
            <HeaderDropDownMenu isOpenNavBar={isOpenNavBar} />
        </>
    )
}
export default HeaderPhoneNavBar
