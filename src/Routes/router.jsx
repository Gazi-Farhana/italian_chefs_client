import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NoData from "../components/NoData/NoData";
import Register from "../components/Register/Register";
import Main from "../layouts/Main/Main";
import PrivateRouter from "./PrivateRouter";
import Recipe from "../components/Recipe/Recipe";
import Blogs from "../components/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('https://y-gazi-farhana.vercel.app/chefs')
            },
            {
                path: '/chef/:id',
                element: <PrivateRouter><Recipe></Recipe></PrivateRouter>,
                loader: async ({ params }) => fetch(`https://y-gazi-farhana.vercel.app/chefs/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <NoData></NoData>
            }
        ]
    }
])