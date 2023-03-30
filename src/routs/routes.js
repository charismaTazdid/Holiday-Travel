import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import Allservices from '../pages/services/Allservices';
import ServiceDetails from '../pages/serviceDetails/ServiceDetails';
import LogIn from '../pages/login/LogIn';
import Register from '../pages/register/Register';
import Err404 from '../pages/error/Err404';
import MyReviews from '../pages/myReviews/MyReviews';
import AddService from '../pages/addService/AddService';
import PrivateRoute from '../shared/PrivateRoute';
import EditReview from '../pages/editReview/EditReview';
import BlogDetails from '../pages/blog/BlogDetails';
import Hotels from '../pages/hotels/Hotels';
import Contact from '../pages/home/Contact';
import HotelDetails from '../pages/hotels/HotelDetails';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch(`${process.env.REACT_APP_URL}/shortServices`),
                element: <Home />
            },
            {
                path: '/services',
                loader: () => fetch(`${process.env.REACT_APP_URL}/services`),
                element: <Allservices />
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_URL}/service/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/blog/:id',
                loader: () => fetch('/blogDetails.json'),
                element: <BlogDetails />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: '/hotels',
                element: <Hotels />
            },
            {
                path: '/hotels/:id',
                element: <HotelDetails />
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/editreview/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_URL}/editreview/${params.id}`),
                element: <EditReview />
            }
        ]
    },
    {
        path: '/*',
        element: <Err404 />
    }
])