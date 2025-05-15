import { setModal } from "../../stores/features/modal"
import { useAppDispatch } from "../../stores/hook"



const Support = () => {
  const dispatch=useAppDispatch()
  return (
    <button onClick={()=>dispatch(setModal('create-food'))} className='mr-14 hover:text-zinc-300 transition-all duration-200 cursor-pointer relative px-4 py-2 rounded-md text-xl  '>
        <span className="absolute w-3 h-3 bg-blue-500 top-1 right-2 animate-ping rounded-full "></span>
      Tarif Yap
    </button>
  )
}

export default Support
