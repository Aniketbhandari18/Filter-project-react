import Input from "../../components/Input"
import "./Category.css"
import React from "react"

const Category = ({handleChange, setSelectedCategory}) => {
  return (
    <>
      <div className="category-container">
        <p className="category-title">Category</p>

        <div className="category-list">
          <Input setSelectedCategory={setSelectedCategory} value="" name="category" title="All" />
          <Input setSelectedCategory={setSelectedCategory} value="sneakers" name="category" title="Sneakers" />
          <Input setSelectedCategory={setSelectedCategory} value="flats" name="category" title="Flats" />
          <Input setSelectedCategory={setSelectedCategory} value="sandals" name="category" title="Sandals" />
          <Input setSelectedCategory={setSelectedCategory} value="heels" name="category" title="Heels" />
        </div>
      </div>
    </>
  )
}
export default Category