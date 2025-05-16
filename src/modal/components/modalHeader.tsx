import { removeModal } from "../../stores/features/modal"
import { useAppDispatch } from "../../stores/hook"

const ModalHeader = () => {
    const dispatch=useAppDispatch()

  return (
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-xl md:text-3xl font-semibold  ">
            Tarif Oluştur
        </h2>
        <button onClick={()=>dispatch(removeModal())} className="cursor-pointer hover:bg-zinc-400 px-3 py-1 rounded-md text-xl font-semibold">X</button>
      </div>
  )
}

export default ModalHeader
