import "./Recommended.css"
import React from "react"

const Recommended = ({handleButtonClick, setSelectedCategory}) => {
  const handleChange = (event) =>{
    handleButtonClick(event);
    setSelectedCategory((prevItems) => (
      {...prevItems, "company": event.target.value}
    ))
  }

  return (
    <>
      <div className="recommended-container">
        <h3 className="title">Recommended</h3>

        <div className="recommended-btns">
            <button onClick={handleChange} className="btn">All Products</button>
            <button value="Nike" onClick={handleChange} className="btn">Nike</button>
            <button value="Adidas" onClick={handleChange} className="btn">Adidas</button>
            <button value="Puma" onClick={handleChange} className="btn">Puma</button>
            <button value="Vans" onClick={handleChange} className="btn">Vans</button>
        </div>
      </div>
    </>
  )
}
export default Recommended