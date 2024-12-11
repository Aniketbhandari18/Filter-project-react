import Input from "../../components/input"
import React from "react"

const Price = ({handleChange, setSelectedCategory}) => {
  return (
    <>
      <div className="category-container">
        <p className="category-title">Price</p>

        <div className="category-list">
          <Input setSelectedCategory={setSelectedCategory} value={""} name={"price"} title={"All"} />
          <Input setSelectedCategory={setSelectedCategory} value={"$0-50"} name={"price"} title={"$0-50"} />
          <Input setSelectedCategory={setSelectedCategory} value={"$50-100"} name={"price"} title={"$50-100"} />
          <Input setSelectedCategory={setSelectedCategory} value={"$100-150"} name={"price"} title={"$100-150"} />
          <Input setSelectedCategory={setSelectedCategory} value={"over $150"} name={"price"} title={"Over $150"} />
        </div>
      </div>
    </>
  )
}
export default Price