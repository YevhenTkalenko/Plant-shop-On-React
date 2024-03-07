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
import { useState } from 'react'
import { AuthContext } from './context/AuthContext'

interface Props {}

interface userDataI {
    email: string
    password: string | number
}

const App = (props: Props) => {
    const productInCart = useAppSelector((state) => state.productsInCart)
    const navigate = useNavigate()

    const [isAuthorized, setIsAuthorized] = useState<boolean>(false)
    const [userData, setUserData] = useState<userDataI>({
        email: '',
        password: '',
    })

    const isUserAuthorizes = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const validUserData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (userData.email === '' || userData.password === '') {
            return alert('WTF')
        }

        navigate('/', { replace: true })
        setUserData({
            email: '',
            password: '',
        })
        return setIsAuthorized(true)
    }

    const userLogOut = () => {
        if (isAuthorized) {
            return setIsAuthorized(false)
        }
    }

    return (
        <>
            <AuthContext.Provider
                value={{
                    isAuthorized,
                    isUserAuthorizes,
                    userData,
                    validUserData,
                    userLogOut,
                }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/servises" element={<ServisesPage />}></Route>
                    <Route path="/progects" element={<ProjectsPage />}></Route>
                    <Route
                        path="/cart"
                        element={
                            !Object.keys(productInCart).length ? (
                                'Cart is Empty'
                            ) : (
                                <CartPage />
                            )
                        }
                    ></Route>
                    <Route path="/blog" element={<BlogPage />}></Route>
                    <Route path="/contacts" element={<ContactsPage />}></Route>
                    <Route path="/checkout" element={<CheckOutPage />}></Route>
                    <Route path="/auth" element={<AuthPage />}></Route>
                    <Route
                        path="/product/:id"
                        element={<ProductPage />}
                    ></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
                <Container>
                    <PageNoFoundFooter />
                </Container>
                <Footer />
            </AuthContext.Provider>
        </>
    )
}
export default App
