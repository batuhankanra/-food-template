import { Outlet } from "react-router"
import Header from "./header"
import Banner from "./components/banner"


const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <Header />
      
      
      <div className="mt-20">
        <Banner />
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
