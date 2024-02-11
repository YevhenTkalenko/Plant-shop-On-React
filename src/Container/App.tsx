import { Route, Routes } from 'react-router-dom'
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

interface Props {}

const App = (props: Props) => {
    const productInCart = useAppSelector((state) => state.productsInCart)
    return (
        <>
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
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
export default App
