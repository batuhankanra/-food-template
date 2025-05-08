

import Logo from "./components/logo";
import Menu from "./components/menu";
import Support from "./components/support";

const Header = () => {
  
  return (
    <header  className="fixed top-0 w-full bg-black/40 border-b border-zinc-200 shadow-md z-10 ">
      <div className="w-full flex items-center justify-between p-3 ">
            <Logo />
            <Menu />
            <Support/>
      </div>
    </header>
  )
}

export default Header
