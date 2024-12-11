import "../Sidebar/Category/Category.css"
import React from "react"

const Input = ({setSelectedCategory, value, name, title}) => {

  const handleChange = (event) =>{
    setSelectedCategory((prevState) =>(
      {...prevState, [name]: event.target.value}
    ))
  }

  return (
    <div className="option">
        <label>
          <input onChange={handleChange} type="radio" value={value} name={name}/> {title}
        </label>
    </div>
  )
}
export default Input