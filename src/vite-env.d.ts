/// <reference types="vite/client" />


interface categoryProps{
    id:number,
    title:string,
    link:string
}
interface cartProps{
    id:number
    title:string
    imgLink:string
    description:string
    rating:number
}

interface juxtapose{
    title:string,
    number:number
}
interface FoodProps{
    title:string
    description:string
    ingredients:string[]
    steps:string[]
    image:string
    category:string
}