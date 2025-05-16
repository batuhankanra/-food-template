import { routeModal } from "../routes/modal"
import { useAppSelector } from "../stores/hook"
import ModalHeader from "./components/modalHeader"


const Modal = () => {
    const {modal}=useAppSelector(state=>state.modal)
    const currentModal=routeModal.find(item=>item.path===modal)
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-20">
        <div className="bg-zinc-300 text-black relative rounded-md w-2/3 max-h-screen">
            <div className="p-3 md:mx-8 mx-3 ">
              <ModalHeader />
              {currentModal && <currentModal.element  />}
            </div>
        </div>
    </div>
  )
}

export default Modal
