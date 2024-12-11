import "./Recommended.css"

const Recommended = ({handleButtonClick}) => {
  return (
    <>
      <div className="recommended-container">
        <h3 className="title">Recommended</h3>

        <div className="recommended-btns">
            <button onClick={handleButtonClick} className="btn">All Products</button>
            <button value="Nike" onClick={handleButtonClick} className="btn">Nike</button>
            <button value="Adidas" onClick={handleButtonClick} className="btn">Adidas</button>
            <button value="Puma" onClick={handleButtonClick} className="btn">Puma</button>
            <button value="Vans" onClick={handleButtonClick} className="btn">Vans</button>
        </div>
      </div>
    </>
  )
}
export default Recommended