import Category from "./Category/Category"
import Color from "./Color/Color"
import Price from "./Price/Price"
import "./Sidebar.css"

const Sidebar = ({handleChange}) => {
  return (
    <>
      <aside className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Color handleChange={handleChange} />
      </aside>
    </>
  )
}
export default Sidebar