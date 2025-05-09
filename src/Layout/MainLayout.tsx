import { Outlet } from "react-router"
import Header from "./header"
import Banner from "./components/banner"
import Footer from "./footer"


const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <Header />
      
      
      <div className="my-20">
        <Banner />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
