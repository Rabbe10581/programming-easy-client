import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Blog from "../../Pages/Blog/Blog"
import CourseDetails from "../../Pages/Courses/CourseDetails"
import Courses from "../../Pages/Courses/Courses"
import Faq from "../../Pages/Faq/Faq"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login/Login"
import Register from "../../Pages/Login/Register/Register"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch(`http://localhost:5000/details`),
                element: <Courses></Courses>,
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])