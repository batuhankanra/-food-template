import { routeModal } from "../routes/modal"
import { useAppSelector } from "../stores/hook"


const Modal = () => {
    const {modal}=useAppSelector(state=>state.modal)
    const currentModal=routeModal.find(item=>item.path===modal)
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-20">
        <div className="bg-zinc-200 text-black relative rounded-md w-2/3 max-h-screen">
            {currentModal && <currentModal.element  />}
        </div>
    </div>
  )
}

export default Modal
