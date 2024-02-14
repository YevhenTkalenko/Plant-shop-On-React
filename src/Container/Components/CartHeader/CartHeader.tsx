import CartTotal from '../CartTotal/CartTotal'
import CartProductList from '../CartProductList/CartProductList'
import { useAppSelector } from 'Container/Global/Redux/hooks'
import { useState } from 'react'
import { Button, Card } from '@mui/material'
import './CartHeader.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpenPopup((prevState) => !prevState)
    }

    const productLength = Object.keys(productsInCart).length

    return (
        <>
            <div className="cart-header">
                <Button
                    type="button"
                    onClick={handleClick}
                    className="cart-header-button"
                >
                    <ShoppingCartIcon />
                    <div className="product-count">{productLength}</div>
                </Button>
                <div className={isOpenPopup ? 'opened-popup' : 'hidden-pop-up'}>
                    <Card>
                        {productLength === 0 ? (
                            'Cart is Empty'
                        ) : (
                            <>
                                <CartProductList
                                    productsInCart={productsInCart}
                                />
                                <div>
                                    Total:
                                    <CartTotal
                                        productsInCart={productsInCart}
                                    />
                                </div>
                            </>
                        )}
                        <div className="cart-header-link-cart">
                            <Link to="/cart" onClick={handleClick}>
                                View to Cart &rarr;
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default CartHeader
