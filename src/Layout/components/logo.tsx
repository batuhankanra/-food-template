import logo from '/logo.png'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <Link to={'/'} className="ml-15">
        <img src={logo} alt="logo" className="w-36  object-cover" />
    </Link>
  )
}

export default Logo
