import { useState } from "react"
import Nav from "./Navigation/Nav"
import Product from "./Products/Product"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import "./index.css"

// import products from "../src/db/data"
import prodcuts from "../src/db/data"
import Card from "./components/Card"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // -------input filter--------

  const handleInput = (event) => {
    setQuery(event.target.value);
  }

  const filterdItems = prodcuts.filter((product) => 
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  


  // -------radio filter---------
  const handleChange = (event) =>{
    setSelectedCategory(event.target.value);
  }

  // -------button filter---------
  const handleButtonClick = (event) =>{
    const btn = document.querySelectorAll('.btn');
    btn.forEach(button =>{
      button.classList.remove('selected-btn');
    })
    const selectedBtn = event.target;
    selectedBtn.classList.add('selected-btn');
    setSelectedCategory(event.target.value);  
  }

  function filteredData(products, selected, query){
    let filteredProduct = products;

    // Filtering input items
    if (query.trim()){
      filteredProduct = filterdItems;
    }

    // Selected Fitler
    if (selected){
      filteredProduct = filteredProduct.filter(({category, color, newPrice, company}) => 
        category === selected || color === selected || newPrice === selected || company === selected
      )
    }

    return filteredProduct.map(({img, title, start, reviews, prevPrice, newPrice}, idx) => (
      <Card 
        key={idx}
        img={img}
        title={title}
        star={start}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }

  const result = filteredData(prodcuts, selectedCategory, query);

  return (
    <>
      <Nav handleInput={handleInput} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Product filteredProducts={result} />
    </>
  )
}
export default App