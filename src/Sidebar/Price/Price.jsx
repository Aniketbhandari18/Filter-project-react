import Input from "../../components/input"

const Price = ({handleChange}) => {
  return (
    <>
      <div className="category-container">
        <p className="category-title">Price</p>

        <div className="category-list">
          <Input handleChange={handleChange} value={""} name={"Price"} title={"All"} />
          <Input handleChange={handleChange} value={"$0-50"} name={"Price"} title={"$0-50"} />
          <Input handleChange={handleChange} value={"$50-100"} name={"Price"} title={"$50-100"} />
          <Input handleChange={handleChange} value={"$100-150"} name={"Price"} title={"$100-150"} />
          <Input handleChange={handleChange} value={"over $150"} name={"Price"} title={"Over $150"} />
        </div>
      </div>
    </>
  )
}
export default Price