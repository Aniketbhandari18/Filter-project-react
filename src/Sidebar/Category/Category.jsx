import Input from "../../components/input"
import "./Category.css"

const Category = ({handleChange, setSelectedCategory}) => {
  return (
    <>
      <div className="category-container">
        <p className="category-title">Category</p>

        <div className="category-list">
          <Input handleChange={handleChange} value="" name="category" title="All" />
          <Input handleChange={handleChange} value="sneakers" name="category" title="Sneakers" />
          <Input handleChange={handleChange} value="flats" name="category" title="Flats" />
          <Input handleChange={handleChange} value="sandals" name="category" title="Sandals" />
          <Input handleChange={handleChange} value="heels" name="category" title="Heels" />
        </div>
      </div>
    </>
  )
}
export default Category