import { category } from "../../routes/category";
import clsx from "clsx";
import { Link, useParams } from "react-router";


const Menu = () => {
    const params=useParams()
    console.log(params)
  return (
    <div className="flex items-center gap-x-4 font-semibold text-xl ">
    {category.map(item=>(
        <Link to={item.link} key={item.id} className={clsx(
            'hover:bg-zinc-900 p-2 rounded-md hover:scale-110 hover:text-zinc-200 transition-all duration-200 '
        )} >
            {item.title}
        </Link>
    ))}
    </div>
  )
}

export default Menu
