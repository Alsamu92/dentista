import{createBrowserRouter}from "react-router-dom"
import { App } from "../App"
import { Home } from "../pages/Home/Home"
import { Tratamientos } from "../pages/Tratamientos/Tratamientos"
export const router = createBrowserRouter([
    
{
    path:"/",
    element:<App/>,
    children:[
        {path:"/",
    element:<Home/>},
        {path:"/tratamientos",
    element:<Tratamientos/>}
    ]
}
])
  

