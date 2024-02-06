import Foods from './components/Foods'
import Footer from './components/Footer'
import Header from './components/Header'
import {
  ScrollRestoration,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import FoodData from './data/FoodData'

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/foods',
        element: <Foods />,
        loader: FoodData,
      },
    ],
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
