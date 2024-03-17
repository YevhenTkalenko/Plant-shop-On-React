import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './Sections/Footer/Footer'
import Header from './Sections/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import ServisesPage from './Pages/ServisesPage/ServisesPage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactsPage from './Pages/ContactsPage/ContactsPage'
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import CartPage from './Pages/CartPage/CartPage'
import { useAppSelector } from './Global/Redux/hooks'
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import PageNoFoundFooter from './Pages/PageNotFound/PageNoFoundFooter/PageNoFoundFooter'
import { Container } from '@mui/material'
import AuthPage from './Pages/AuthPage/AuthPage'
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { isUserHaveLocalData } from './Global/Redux/userDataReducer'
import EmptyCart from './Components/EmptyCart/EmptyCart'

interface Props {}

const App = (props: Props) => {
    const productInCart = useAppSelector((state) => state.productsInCart)
    const dispatch = useDispatch()

    const userLocalData = () => {
        dispatch(isUserHaveLocalData())
    }

    useEffect(() => {
        userLocalData()
    })

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/progects" element={<ProjectsPage />}></Route>
                <Route
                    path="/servises"
                    element={
                        <PrivateRoutes>
                            <ServisesPage />
                        </PrivateRoutes>
                    }
                ></Route>
                <Route
                    path="/cart"
                    element={
                        <PrivateRoutes>
                            {!Object.keys(productInCart).length ? (
                                <EmptyCart />
                            ) : (
                                <CartPage />
                            )}
                        </PrivateRoutes>
                    }
                ></Route>
                <Route path="/blog" element={<BlogPage />}></Route>
                <Route path="/contacts" element={<ContactsPage />}></Route>
                <Route
                    path="/checkout"
                    element={
                        <PrivateRoutes>
                            <CheckOutPage />
                        </PrivateRoutes>
                    }
                ></Route>
                <Route path="/auth" element={<AuthPage />}></Route>
                <Route
                    path="/product/:id"
                    element={
                        <PrivateRoutes>
                            <ProductPage />
                        </PrivateRoutes>
                    }
                ></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            <Container>
                <PageNoFoundFooter />
            </Container>
            <Footer />
        </>
    )
}
export default App
