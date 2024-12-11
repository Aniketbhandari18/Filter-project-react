import Category from "./Category/Category"
import Color from "./Color/Color"
import Price from "./Price/Price"
import "./Sidebar.css"
import React from "react"

const Sidebar = ({handleChange, setSelectedCategory}) => {
  return (
    <>
      <aside className="sidebar">
        <Category handleChange={handleChange} setSelectedCategory={setSelectedCategory} />
        <Price handleChange={handleChange} setSelectedCategory={setSelectedCategory} />
        <Color handleChange={handleChange} setSelectedCategory={setSelectedCategory} />
      </aside>
    </>
  )
}
export default Sidebar