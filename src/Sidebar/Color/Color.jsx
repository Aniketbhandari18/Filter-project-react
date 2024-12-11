import Input from "../../components/input"
import React from "react"

const Color = ({handleChange, setSelectedCategory}) => {
  return (
    <>
      <div className="category-container">
        <p className="category-title">Color</p>

        <div className="category-list">
          <Input setSelectedCategory={setSelectedCategory} value={""} name={"color"} title={"All"} />
          <Input setSelectedCategory={setSelectedCategory} value={"black"} name={"color"} title={"Black"} />
          <Input setSelectedCategory={setSelectedCategory} value={"blue"} name={"color"} title={"Blue"} />
          <Input setSelectedCategory={setSelectedCategory} value={"red"} name={"color"} title={"Red"} />
          <Input setSelectedCategory={setSelectedCategory} value={"green"} name={"color"} title={"Green"} />
          <Input setSelectedCategory={setSelectedCategory} value={"white"} name={"color"} title={"White"} />
        </div>
      </div>
    </>
  )
}
export default Color