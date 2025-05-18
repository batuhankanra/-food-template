import { useState } from "react"
import { setModal } from "../../stores/features/modal"
import { useAppDispatch } from "../../stores/hook"

const buttonData=[
  {
    id:0,
    name:'Tarif Üret',
    slug:'create-food'
  },
  {
    id:1,
    name:'Tarif Guncelle',
    slug:'update-food'
  },
  {
    id:2,
    name:'Tarif Sil',
    slug:'delete-food'
  }
]

const Support = () => {
  const [active,setActive]=useState<boolean>(false)
  const dispatch=useAppDispatch()

  return (
    <div onClick={()=>setActive(!active)} className='mr-14  hover:text-zinc-300 transition-all duration-200 cursor-pointer relative px-4 py-2 rounded-md text-xl   '>
        <span className="absolute w-3 h-3 bg-blue-500 top-1 right-2 animate-ping rounded-full "></span>
        Tarif

        {active && (
           <div className="absolute -left-10 mt-2 w-40 bg-white border rounded-md shadow-lg z-10 cursor-pointer">
          <ul className="py-1">
            {buttonData.map(item=>(
               <li key={item.id}>
                <button onClick={()=> dispatch(setModal(item.slug))} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 w-full cursor-pointer"  >
                  <div>
                    {item.name}
                  </div>
                </button>
            </li>
            ))}
          </ul>
        </div>
        )}
    </div>
  )
}

export default Support
