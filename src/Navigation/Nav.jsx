import { FiHeart } from "react-icons/fi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
import './Nav.css'

const Nav = ({handleInput}) => {
  return (
    <nav>
        <div className="nav-container">
            <input className="search-input" type="text" placeholder="Search your shoes" onChange={handleInput} />
        </div>


        <div className="profile-container">
            <FiHeart className="nav-icons" />
            <AiOutlineShoppingCart className="nav-icons" />
            <AiOutlineUserAdd className="nav-icons" />
        </div>
    </nav>
  )
}
export default Nav