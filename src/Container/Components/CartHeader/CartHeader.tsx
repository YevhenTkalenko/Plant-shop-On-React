import CartTotal from '../CartTotal/CartTotal'
import CartProductList from '../CartProductList/CartProductList'

interface Props {
    ProductsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ ProductsInCart }: Props) => {
    return (
        <>
            <div style={{ color: 'white' }}>
                <CartProductList ProductsInCart={ProductsInCart} />
                <div>
                    Total:
                    <CartTotal ProductsInCart={ProductsInCart} />
                </div>
            </div>
        </>
    )
}
export default CartHeader
