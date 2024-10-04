import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="border-b-2 border-slate-800 flex justify-between px-5 py-3">
        <div className="font-extrabold text-2xl text-slate-100 text-start" >EduXplore</div>
        <div className="gap-10 flex justify-center text-slate-100">
            <p>Home</p>
            <p>Catalog</p>
            <p>About us</p>
            <p>Contact us</p>
        </div>
        <div className="text-white flex row gap-3 justify-center items-center">
            <CiSearch className="text-2xl font-extrabold"></CiSearch>
            <CiShoppingCart className="text-2xl font-extrabold"></CiShoppingCart>
            <FaUserCircle className="mx-2 text-3xl font-extrabold"></FaUserCircle>
        </div>
    </nav>
  )
}

export default Nav