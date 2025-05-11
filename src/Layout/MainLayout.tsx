import { Outlet } from "react-router"
import Header from "./header"
import Footer from "./footer"
import Banner from "../components/banner"



const MainLayout = () => {
  return (
    <div className="w-full h-full flex flex-col  justify-between">
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
