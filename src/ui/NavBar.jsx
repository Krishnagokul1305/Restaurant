import { Link } from "react-router-dom"
import SearchOrder from "../Features/Order/SearchOrder"

function NavBar() {
  return (
    <nav className="px-3 py-5 flex justify-between items-center md:px-10 bg-black fixed z-10 w-full navbar">
      <Link className="font-extrabold font-alt text-lg text-golden " to="/home">React Fast Pizza co.</Link>
      <SearchOrder />
    </nav>
  )
}

export default NavBar
