import CreateModal from "../modal/components/createModal";
import DeleteModal from "../modal/components/deleteModal";
import RecipesModal from "../modal/components/repicesModal";
import UpdateModal from "../modal/components/updateModal";


export const routeModal=[
    {
        path:'create-food',
        element:CreateModal
    },
    {
        path:'update-food',
        element:UpdateModal
    },
    {
        path:'delete-food',
        element:DeleteModal
    },
    {
        path:'recipes-food',
        element:RecipesModal
    }
]