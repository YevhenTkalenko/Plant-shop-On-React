import CartTotal from '../CartTotal/CartTotal'
import CartProductList from '../CartProductList/CartProductList'
import { useAppSelector } from 'Container/Global/Redux/hooks'

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <div style={{ color: 'white' }}>
                <CartProductList productsInCart={productsInCart} />
                <div>
                    Total:
                    <CartTotal productsInCart={productsInCart} />
                </div>
            </div>
        </>
    )
}
export default CartHeader
