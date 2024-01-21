import { Route, Routes } from 'react-router-dom'
import Footer from './Sections/Footer/Footer'
import Header from './Sections/Header/Header'
import HomePage from './Pages/HomePage'
import ServisesPage from './Pages/ServisesPage'
import ProjectsPage from './Pages/ProjectsPage'
import CompanyPage from './Pages/CompanyPage'
import BlogPage from './Pages/BlogPage'
import ContactsPage from './Pages/ContactsPage'

interface Props {}
const App = (props: Props) => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/servises" element={<ServisesPage />}></Route>
                <Route path="/progects" element={<ProjectsPage />}></Route>
                <Route path="/company" element={<CompanyPage />}></Route>
                <Route path="/blog" element={<BlogPage />}></Route>
                <Route path="/contacts" element={<ContactsPage />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
export default App
