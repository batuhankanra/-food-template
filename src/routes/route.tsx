import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Recipe from "../pages/recipe";
import RecipeId from "../pages/recipe/recipeId";



export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/recipe',
                element:<Recipe />
            },
            {
                path:'/recipe/:category',
                element:<RecipeId />
            },

            {
                path:'/*',
                element:<NotFound />
            }
        ]
    }
])