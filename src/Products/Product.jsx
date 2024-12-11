import "./Product.css"
import Card from "../components/Card"

const Product = ({filteredProducts}) => {
  return (
    <>
      <section className="card-container">
        {filteredProducts.map((product) =>(
          product
        ))}
      </section>
    </>
  )
}
export default Product