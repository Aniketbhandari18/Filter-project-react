import "./Product.css"
import Card from "../components/Card"
import React from "react"

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