import { useRoutes } from "react-router-dom"
import Layout from "../widgets/Layout"
import Portfolio from "../Components/Portfolio"
import Home from "../Home"
import About from "../Components/About"

export const Router = () => {
    return useRoutes([
        {
            path: "",
            element: <Layout/>,
            children: [
                {path:"/", element: <Home/>},
                {path:"/portfolio", element: <Portfolio/>},
                {path:"/about", element: <About/>},
            ]
        }
    ])
}