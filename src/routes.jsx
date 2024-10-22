import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/usuarios',
        element: <Users />
    }
])

export default router