import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/Error/NotFound'
import HomeLayout from './components/Layouts/HomeLayout'
import PageLayout from './components/Layouts/PageLayout'
import Home from "./pages/Home/index";

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeLayout />} >
                <Route path="/" element={<Home />} />
            </Route>

            <Route path='/' element={<PageLayout />} >
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default routes;