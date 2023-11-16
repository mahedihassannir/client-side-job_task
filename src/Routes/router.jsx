import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Login></Login>

            }, {
                path: "/login"
                ,
                element: <Register></Register>
            }
        ]
    }
])


export default router;