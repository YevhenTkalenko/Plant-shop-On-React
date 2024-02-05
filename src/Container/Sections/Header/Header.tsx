import HeaderBottomSection from './HeaderBottomSection/HeaderBottomSection'
import HeaderTopSection from './HeaderTopSection/HeaderTopSection'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }
}
const Header = ({ ProductsInCart }: Props) => {
    return (
        <header className="header-section">
            <HeaderTopSection ProductsInCart={ProductsInCart} />
            <HeaderBottomSection />
        </header>
    )
}
export default Header
