import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main"
import Blog from "../../Pages/Blog/Blog"
import Courses from "../../Pages/Courses/Courses"
import Faq from "../../Pages/Faq/Faq"
import Home from "../../Pages/Home/Home/Home"

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
                loader: () => fetch(`http://localhost:5000/courses`),
                element: <Courses></Courses>,
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])