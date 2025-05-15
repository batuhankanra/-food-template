import { Outlet } from "react-router"
import Header from "./header"
import Footer from "./footer"
import Banner from "../components/banner"
import { useAppSelector } from "../stores/hook"
import Modal from "../modal/modal"



const MainLayout = () => {
  const {modal}=useAppSelector(state=>state.modal)

  return (
    <div className="w-full h-full flex flex-col  justify-between">
      {modal && <Modal />}
      <Header />
      
        <Banner />
      <div className="my-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
