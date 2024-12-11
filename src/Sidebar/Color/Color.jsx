import Input from "../../components/input"

const Color = ({handleChange}) => {
  return (
    <>
      <div className="category-container">
        <p className="category-title">Color</p>

        <div className="category-list">
          <Input handleChange={handleChange} value={""} name={"color"} title={"All"} />
          <Input handleChange={handleChange} value={"black"} name={"color"} title={"Black"} />
          <Input handleChange={handleChange} value={"blue"} name={"color"} title={"Blue"} />
          <Input handleChange={handleChange} value={"red"} name={"color"} title={"Red"} />
          <Input handleChange={handleChange} value={"green"} name={"color"} title={"Green"} />
          <Input handleChange={handleChange} value={"white"} name={"color"} title={"White"} />
        </div>
      </div>
    </>
  )
}
export default Color